import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
import AuthContext from '../../context/authentication/authContext'


const Projects = () => {

    //extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;


    useEffect(() => {
        userAuthenticated()
    }, [])

    return (
        <div className="container-app">
            <Sidebar />



            <div className="principal-section">
                <Bar />
                <main>
                    <FormTask />
                    <div className="container-tasks shadow">
                 
                        <ListTasks />

                    </div>

                </main>


            </div>

        </div>
    );
}

export default Projects; 