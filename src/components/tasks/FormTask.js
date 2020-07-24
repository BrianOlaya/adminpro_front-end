import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import Calendar from 'react-calendar';





const FormTask = () => {

    //extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //obtener la funcion del context de tarea
    const tasksContext = useContext(TaskContext);
    const { taskSelected, errorTask, addTask, validateTask, getTasks, updateTask, cleanTask } = tasksContext;

    //detecta si hay un atarea seleccionada
    useEffect(() => {
        if (taskSelected !== null) {
            saveTask(taskSelected)
        } else {
            saveTask({
                name: ''
            })
        }
    }, [taskSelected])

    //state del formulario
    const [task, saveTask] = useState({
        name: '',
    });

    console.log(task);

    const [date, setDate] = useState(new Date());

    const onChange = () => {
        setDate(date)
    }



    //extraer el nombre del proyecto 
    const { name } = task;

    //si no hay proyecto selecionado
    if (!project) return null;

    //array destructuring para extarer el proyecto actual
    const [currentProject] = project;

    //leer los valores del formulario
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }



    const onSubmit = e => {
        e.preventDefault();

        //validar 
        if (name.trim() === '') {
            validateTask();
            return;
        }

        // revisa si es edicion o nueva tarea
        if (taskSelected === null) {//esto seria una tarea nueva porque no hay una seleccionada
            //agregar la nueva tarea al state de tareas
            task.project = currentProject._id;
            addTask(task);
        } else {
            //actualiza tarea existente
            updateTask(task)

            //elimina tarea selleccionada del state
            cleanTask();
        }

        //obtener y filtrar lss tareas del proyecto actual
        getTasks(currentProject.id);


        //reiniciar el form 
        saveTask({
            name: ''
        })


    }

    return (
        <div className="form form-task shadow">

            <form
                onSubmit={onSubmit}
            >
                <div className="container-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>


                <div className="container-input">
                    <input
                        type="submit"
                        className="btn btn-primary  btn-block"
                        value={taskSelected ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

       
                <Calendar
                    className="react-calendar"
                    onChange={onChange}
                    value={date}
                />



            {errorTask ? <p className="message error">El nombre de la tarea es obligatorio</p> : null}


        </div>

    );
};
export default FormTask;