import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext'
 
const NewAccount = (props)=>{

    //extraer los valores
    //const alertContext = useContext(AlertContext);
    //const {alert, showAlert}=alertContext;


    const authContext=useContext(AuthContext);
    const {msg, authenticated, registryUser}=authContext;

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
        name:'',
        email : '',
        password:'',
        confirm:''

    });

    //extraer usuario
    const {name, email, password, confirm} = user;


    const onChange = (e) =>{
        saveUser ({
            ...user, 
            [e.target.name]: e.target.value
        })

    }
    // cuando el usuario quiera iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //validar que no hayan campos vacios
       // if(name.trim()===''|| email.trim()===''||password.trim()===''|| confirm.trim()===''){
        // showAlert('Todos los campos son obligatorios', 'alert-error');
         //return;
        //}

        //password minmo de 6 caracteres
        //if (password.length < 6){
          //  showAlert('El password deber ser mínimo de 6 caracteres', 'alert-error');
           // return;
        //}

        //revisar que los dos password coincidan
        //if(password!==confirm){
          //  showAlert('Los passwords no son iguales', 'alert-error');
           // return;
       // }


       //pasando al action
       registryUser({
            name,
            email,
            password
        });

    }


    return (
       <div className="user-form">
           {/* {alert ? (<div className={`alert ${alert.category}`}>{alert.msg}</div>): null} */}
           <div className="form-container dark">
               <h1>Crear Cuenta</h1>

               <form 
                    onSubmit={onSubmit}
               >
                    <div className="input-form">
                       <label htmlFor ="name">Nombre</label>
                       <input 
                         type="text"
                         id="name"
                         name="name"
                         placeholder="Tu Nombre"
                         value= {name}
                         onChange={onChange}
                       />
                   </div>
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
                       <label htmlFor ="password">Password</label>
                       <input 
                         type="password"
                         id="password"
                         name="password"
                         placeholder="Tu Password"
                         value={password}
                         onChange={onChange}
                    />
                   </div>
                   <div className="input-form">
                       <label htmlFor ="confirm">Confirmar Password</label>
                       <input 
                         type="password"
                         id="confim"
                         name="confirm"
                         placeholder="Confirma Tu Password"
                         value={confirm}
                         onChange={onChange}
                    />
                   </div>

                   <div className= "input-form">
                       <input
                         type="submit"
                         className="btn btn-primary btn-block"
                         value="Registrarme"
                        />
                   </div>
               </form>

               <Link to = {"/login"} className ="link-account">
                   Iniciar Sesión
               </Link>

           </div>

       </div>

    );
}

export default NewAccount;