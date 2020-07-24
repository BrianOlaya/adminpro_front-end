import React, {useContext,useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext'


const Bar= () => {   
    //extraer la informacion de autenticacion
    const authContext=useContext(AuthContext);
    const {user, userAuthenticated, logout}=authContext;

    useEffect(()=>{
        userAuthenticated();
      //eslint-disable-next-line

    },[]);

    return (
        <header className= "app-header shadow">
            {user ? <p className="user-name">Hola <span>{user.name}</span></p> : null}
            <nav className= "nav-principal">
                <button 
                className="btn btn-blank log-out "
                onClick={()=> logout()}

                >Cerrar sesión</button>            
            </nav>
        </header>

    );
}
export default Bar;