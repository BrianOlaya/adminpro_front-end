import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {FORM_PROJECT, 
        GET_PROJECTS,  
        ADD_PROJECT,  
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT,
        PROJECT_ERROR
    } from '../../types/index';  //como es index.js se puede quitar tambien y la importacion se hará correctamente, pero acá lo dejare asi
import clientAxios from '../../config/axios'

const ProjectState = props=> {

    
    const initialState={
         projects:[],
         formProject:false,
         errorForm:false,
         project:null,
         msg: null

    }
    // Dispatch para ejecutar acciones

    const [state, dispatch]= useReducer(projectReducer, initialState)

    //serie de funciones para el CRUD
    const showForm=()=> {
        dispatch ({
            type:FORM_PROJECT
        })
    }

    // obtener los proyectos
    const getProjects=async()=>{
        try {
            const result =await clientAxios.get('/api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
             })
        } catch (error) {
            const alert ={
                msg:'Hubo un error',
                category:'alert-error'
            }
            dispatch({
                type:PROJECT_ERROR,
                payload:alert
            })
        }
    }

    //agregar proyecto
    const addProject = async project=>{
      try {
          const result=await clientAxios.post('/api/projects', project);
          console.log(result);
          
        //insertar un proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload:result.data
        })
      } catch (error) {
        const alert ={
            msg:'Hubo un error',
            category:'alert-error'
        }
        dispatch({
            type:PROJECT_ERROR,
            payload:alert
        })
    }

    }

    //valida el formuario por errores
    const showError = ()=>{
        dispatch({
            type: VALIDATE_FORM
        })
    }
    //selecciona el proyecto en el  que el usuario dio click
    const currentProject=projectId=>{
        dispatch({
            type:CURRENT_PROJECT,
            payload: projectId
        })
    }

    //elimina proyecto
    const deleteProject = async projectId => {
        try {
            await clientAxios.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload:projectId
            })
        } catch (error) {
            const alert ={
                msg:'Hubo un error',
                category:'alert-error'
            }
            dispatch({
                type:PROJECT_ERROR,
                payload:alert
            })
        }
    }

    return (
        <projectContext.Provider
            value={{
                projects:state.projects,
                formProject: state.formProject,
                project:state.project,
                errorForm: state.errorForm,
                msg:state.msg,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}
export default ProjectState;