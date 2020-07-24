import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext'


const Login = (props)=>{

    
    //extraer los valores
    //const alertContext = useContext(AlertContext);
    //const {alert, showAlert}=alertContext;


    const authContext=useContext(AuthContext);
    const {msg, authenticated, login}=authContext;

    
    //si el usuario se haya autenticado , registrado o sea un registro duplicado 
    useEffect(()=>{
        if (authenticated){
            props.history.push('/projects');
        }
        if (msg){
         //   shwowAlert(msg.msg, msg.category)
        }
        //eslint-disable-next-line


    }, [msg, authenticated, props.history]);


    //state de inicio de sesión
    const [user, saveUser] = useState({
        email : '',
        password:''
    });

    //extraer usuario
    const {email, password} = user;


    const onChange = (e) =>{
        saveUser ({
            ...user, 
            [e.target.name]: e.target.value
        })

    }
    // cuando el usuario quiera iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //validar que  haya campos vacios
        if(email.trim()===''|| password.trim===''){
          //  showAlert('Todos los campos son obligatorios', 'alert-error')
        }

        login({email, password})
    }


    return (
       <div className="user-form">
        {/* {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>): null} */}

           <div className="form-container dark">
               <h1>Iniciar Sesión</h1>

               <form 
                    onSubmit={onSubmit}
               >
                   <div className="input-form">
                       <label htmlFor ="email">Email</label>
                       <input 
                         type="email"
                         id="email"
                         name="email"
                         placeholder="Tu Email"
                         value= {email}
                         onChange={onChange}
                       />
                   </div>

                   <div className="input-form">
                       <label htmlFor ="email">Password</label>
                       <input 
                         type="password"
                         id="password"
                         name="password"
                         placeholder="Tu Password"
                         value={password}
                         onChange={onChange}
                    />
                   </div>

                   <div className= "input-form">
                       <input
                         type="submit"
                         className="btn btn-primary btn-block"
                         value="Iniciar Sesión"
                        />
                   </div>
               </form>

               <Link to = {"/new-account"} className ="link-account">
                   Crear Cuenta
               </Link>

           </div>

       </div>

    );
}

export default Login;