import React, {useContext, useEffect}from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';



const ListProjects = () => {

    //extraer proyectos de initialState
    const projectsContext = useContext(projectContext);
    const {msg, projects, getProjects}=projectsContext;

    // const alertContext =useContext(AlertContext);
    // const {alert, showAlert}= alertContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {

        //si hay un error
        if (msg){
          //  showAlert(msg.msg, msg.category);
        }
        getProjects();
        //eslint-disable-next-line
    }, [msg])

    //valida si hay proyectos
    if (projects.length===0) return <p>No hay proyectos creados aún</p>;

    return (
        <ul className="list-projects">
            {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>): null}
            {projects.map(project => (
               <Project
                 key={project._id}
                 project= {project}
               /> 
            ))}

        </ul>
    );
}

export default ListProjects; 