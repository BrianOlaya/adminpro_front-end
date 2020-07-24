import React from 'react';
import NewProject from '../projects/NewProject'
import ListProjects from '../projects/ListProjects'
const Sidebar =()=> {
    return (
        <aside className="shadow">
            <h1>ADMIN<span>Pro</span></h1>
             
               <NewProject/>

            <div className="projects ">
                <h2>Tus proyectos</h2>
                
                <ListProjects/>
            </div>

        </aside>

    );
}

export default Sidebar;
