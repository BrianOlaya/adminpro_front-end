 import {REGISTRY_SUCCESFULL,
         REGISTRY_ERROR,
         GET_USER,
         LOGIN_SUCCESFULL,
         LOGIN_ERROR,
         LOGOUT
        }from '../../types';


 export default (state, action)=>{
     switch(action.type){ 
         case REGISTRY_SUCCESFULL:
         case LOGIN_SUCCESFULL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated:true,
                msg:null,
                loading:false
            }
         
         case GET_USER:
             return {
                 ...state,
                 authenticated:true,
                 user:action.payload,
                 loading:false
             }
         case LOGOUT:
         case LOGIN_ERROR:
         case REGISTRY_ERROR:
             localStorage.removeItem('token');
             return {
                 ...state,
                 token:null,
                 user:null,
                 authenticated:null,
                 msg:action.payload,
                 loading:false
             }


         default:
             return state;
     }
 }