import React, { Fragment, useContext } from 'react'
import Task from './Task';
//import Budget from '../projects/Budget';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import Budget from '../projects/Budget'


const ListTasks = () => {



    //extraer proyectos de initialState
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //obtener las tareas del ptoyecto
    const tasksContext = useContext(TaskContext);
    const { tasksProject } = tasksContext;

    //si no hay proyecto selecionado
    if (!project) return <h2>Selecciona un proyecto</h2>;

    //array destructuring para extarer el proyecto actual
    const [currentProject] = project;


    //elimina proyecto
    const onClickDelete = () => {
        deleteProject(currentProject._id)
    }

    return (
        <Fragment>

            <h1 className="project-title"> {currentProject.name}</h1>

            <div className="container-task-budget shadow">
                <ul className="tasks-list">
                    {tasksProject.length === 0
                        ? (<li className="task"><p>No hay tareas aún</p></li>)
                        :
                        <TransitionGroup>
                            {tasksProject.map(task => (
                                <CSSTransition
                                    key={task._id}
                                    timeout={300}
                                    classNames="task"
                                >
                                    <Task
                                        task={task}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>

                    }
                </ul>

                {/* <Budget /> */}
            </div>

            <button
                type="button"
                className="btn btn-delete"
                onClick={onClickDelete}
            >Eliminar Proyecto
            </button>
        </Fragment>
    );
}

export default ListTasks;