import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {TASKS_PROJECT,
        ADD_TASK,
        VALIDATE_TASK,
        DELETE_TASK,
        CURRENT_TASK,
        UPDATE_TASK,
        CLEAN_TASK
       } from '../../types';

import clientAxios from '../../config/axios';

const TaskState = props => {
    const initialState={
    tasksProject:[],
    errorTask: false,
    taskSelected:null

    }
    //crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //crear funciones


    //obtener las tareas de un proyecto especifico
    const getTasks = async project => {
        console.log(project)
        const result = await clientAxios.get('/api/tasks', {params:{project}});
        console.log(result);
        try {
            dispatch ({
                type:TASKS_PROJECT,
                payload: result.data.tasks
                
            })
          
        } catch (error) {
            console.log(error)
        }
    }

    //agregar tarea al proyecto seleccionado 
    const addTask = async task=>{
        try {
            const result = await clientAxios.post('/api/tasks', task);
            console.log(result);
            dispatch({
                type:ADD_TASK,
                payload:task
    
            })
        } catch (error) {
            console.log(error);
        }
    }

     //valida y muestra un error en caso de que sea necesario
     const validateTask =()=>{
         dispatch({
             type:VALIDATE_TASK
         })
     }

     //eliminar tareas por su ID 
     const deleteTask = async (id, project)=>{
            try {
                await clientAxios.delete(`/api/tasks/${id}`, {params: {project}});
                dispatch ({
                    type:DELETE_TASK,
                    payload:id
                })
            } catch (error) {
                console.log(error);
            }
     }

     //edita una tarea
     const updateTask =async  task =>{

        const result=await clientAxios.put(`/api/tasks/${task._id}`, task);
        console.log(result);
        try {
            dispatch ({
                type:UPDATE_TASK,
                payload:result.data.task
            })
            
        } catch (error) {
            console.log(error);
        }
    }

     // extrae una tarea para edicion
     const saveCurrentTask = task => {
         dispatch({
             type:CURRENT_TASK,
             payload:task
         })
     }


     //elimina la tarea seleccionada
     const cleanTask = task =>{
         dispatch ({
             type:CLEAN_TASK,
         })
     }

    return (
        <TaskContext.Provider
           value= {{
            tasksProject : state.tasksProject,
            errorTask:state.errorTask,
            taskSelected: state.taskSelected,
            getTasks,
            addTask,
            validateTask,
            deleteTask,
            saveCurrentTask,
            updateTask,
            cleanTask
           }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}
export default TaskState;