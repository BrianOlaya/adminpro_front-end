import React,{useReducer} from 'react';
import authContext from './authContext'
import authReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth'

import {REGISTRY_SUCCESFULL,
    REGISTRY_ERROR,
    GET_USER,
    LOGIN_SUCCESFULL,
    LOGIN_ERROR,
    LOGOUT
   }from '../../types';


   const AuthState = props =>{
        const initialState={
            token:localStorage.getItem('token'),
            authenticated:null,
            user:null,
            msg:null,
            loading:true
        }
        const [state, dispatch]= useReducer(authReducer, initialState);

        //las funciones
        const registryUser = async dat=>{
            try {
                const res=await clientAxios.post('/api/users', dat);
                console.log(res.data);

                dispatch({
                    type:REGISTRY_SUCCESFULL,
                    payload:res.data
                });

                //obtener el usuario
                userAuthenticated();

            } catch (error) {
                console.log(error.response);

                const alert={
                //    msg:error.response.data.msg,
                //    category:'alert-error'
                }
                dispatch ({
                    type:REGISTRY_ERROR,
                    payload:alert
                } )
            }
        }
        //retorna el usuario autenticado
        const userAuthenticated=async()=>{
            const token=localStorage.getItem('token');
            if(token){
                    tokenAuth(token)       
            }
            try {
                const res=await clientAxios.get('/api/auth');
                //console.log(res);
                dispatch({
                    type:GET_USER,
                    payload:res.data.user
                });
            } catch (error) {
                console.log(error.response);
                dispatch({
                    type:LOGIN_ERROR
                })
            }
        }

        //cuando el usuario inicia sesion
        const login =async dat =>{
            try {
                const res=await clientAxios.post('/api/auth', dat);
                dispatch({
                    type:LOGIN_SUCCESFULL,
                    payload:res.data
                });

                //obtener el usuario
                userAuthenticated();
                //console.log(res);
            } catch (error) {
                console.log(error.response.data.msg);

                const alert={
                    msg:error.response.data.msg,
                    category:'alert-error'
                }
                dispatch ({
                    type:LOGIN_ERROR,
                    payload:alert
                } )
            }
        }
        //cerrar sesion
        const logout=()=>{
            dispatch({
                type:LOGOUT
            })

        }


    return (
        <authContext.Provider
        value={{
            token:state.token,
            authenticated:state.authenticated,
            user:state.user,
            msg:state.msg ,
            loading:state.loading,
            registryUser,
            login,
            userAuthenticated,
            logout  
        }}
        >{props.children}

        </authContext.Provider>
    )
   }
   export default AuthState;