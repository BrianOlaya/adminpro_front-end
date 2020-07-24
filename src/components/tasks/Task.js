import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';



const Task= ({task}) => {

     //extraer si un proyecto esta activo
     const projectsContext = useContext(projectContext);
     const {project}=projectsContext;

     //obtener la funcion del context de tarea
     const tasksContext=useContext(TaskContext);
     const {deleteTask, getTasks, updateTask, saveCurrentTask}= tasksContext;

     //extrater el proyecto
     const [currentProject]=project
 
     //funcion que se ejecuta cuando el usuario presiona el boton eliminar tarea
     const  taskDelete=id=>{
            deleteTask(id, currentProject._id);
            getTasks(currentProject.id);
     }
     
     // funcion que cambia el  estdo de la tarea
     const changeState  = task =>{
           if (task.state) {
               task.state=false;
           }else {
               task.state=true;
           }
           updateTask(task);
     }

     // agrega una tarea actual cuando el usuario desea agregarla
      const selectTask = task => {
          saveCurrentTask(task);

      }
    return (

        <li className= "task shadow"> 
           <p>{task.name}</p>
            <div className="state">
                {task.state
                ? 
                    (
                        <button 
                            type="button"
                            className= "complete"
                            onClick={()=>changeState(task)}
                        >Completo</button>
                    )
                :
                    (
                        <button 
                            type="button"
                            className= "uncomplete"
                            onClick={()=>changeState(task)}
                         >Incompleto</button>
                    )
                }
            </div>
            <div className="actions">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick= {()=>selectTask(task)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundary"
                    onClick={()=> taskDelete(task._id)}
                >Eliminar</button>


            </div>


        </li> 
    );
}

export default Task;