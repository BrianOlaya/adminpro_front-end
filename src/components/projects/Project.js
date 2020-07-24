import React, {useContext}from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';
import BudgetContext from '../../context/budget/budgetContext'



const Project = ({project}) => {
//obtener el state de proyectos
const projectsContext = useContext(projectContext);
const {currentProject }=projectsContext;

//obtener la funcion del context de tarea
const tasksContext=useContext(TaskContext);
const {getTasks}= tasksContext;

//obtener la funcion del context de prepuspuesto
const budgetsContext=useContext(BudgetContext);
const {getBudget}= budgetsContext;

//funcion para agregar el proyecto actual 

const selectProject=id=>{
    currentProject(id); // fijar un proyecto actual
    getTasks(id); //filrar las tareas al hacer click
    getBudget(id); //filtrar presupuestos
}
    return (
        <li>
            <button
              type= "button"
              className = "btn btn-blank"
              onClick={()=> selectProject(project._id)}
            >{project.name}

            </button>
        </li>

        
    );
}
export default Project;