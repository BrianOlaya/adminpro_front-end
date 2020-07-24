import React from 'react';
import { Link } from 'react-router-dom';
import video from '../video/video.mp4'

const Home = () => (
    <div className="container-home">
        <video autoPlay loop muted
            style ={{
                position:"absolute",
                width:"100%",
                height:"100%",
                objectFit:"cover",
                zIndex:"-1"

            }}
        >
            <source src={video} type="video/mp4"/>
        </video>
        <div className="intro ">
        <h1>ADMIN<span>Pro</span></h1>
            <div  className="content-intro">
                <p className="shadow" >Te damos soluciones en la ejecución de tus proyectos para que puedas
                gestionar todas tus tareas diarias de manera efectiva. Tamabien puedes
                gestionar los gastos de tus proyecto de manera práctica.
                </p>
                <h2>Todo muy fácil y rápio!</h2>
            </div>

        </div>

        <div className="link-group shadow">       
         <Link to={"/login"} className="link-account-home">
            <h3>Iniciar Sesión</h3>
         </Link>

         <Link to={"/new-account"} className="link-account-home">
               <h3>Crear Cuenta</h3> 
         </Link>
        </div>


    </div>


);

export default Home