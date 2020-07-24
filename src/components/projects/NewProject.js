import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';


const NewProject = () => {
    //obtener el state del foemulario
    const projectsContext = useContext(projectContext);
    const {formProject, errorForm, showForm, addProject, showError }=projectsContext;

    //state para proyecto
    const [project, saveProject]= useState({
        name:''       
    });
     
  

    //extraer nombre de proyecto
    const {name}= project;

    //lee los contenidos del input
    const onChangeProject= e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario envía un proyecto
    const onSubmitProject  = (e) => {
        e.preventDefault();
         
        //validar el proyecto
        
        if (name === ''){
            showError();
            return;
        }

        //agregar el state

        addProject(project)

        //reiniciar el form
        saveProject({
            name:''
        })
    }
    //mostrar el formulario
    const onClickForm = ()=>{
        showForm();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick ={onClickForm}
            >
                Nuevo Proyecto</button>

           {  formProject ?
            (
               <form 
                    className="form-new-project"
                    onSubmit= {onSubmitProject}    
                    >

                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="name"
                        value= {name}
                        onChange= {onChangeProject}
                    />
                            
                          <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Agregar proyecto"
                    />
              </form>

            ) : null
           }

           {errorForm ? <p className="message error">El nombe del proyecto es obligatorio</p> : null}
        </Fragment>

    )
}
export default NewProject;