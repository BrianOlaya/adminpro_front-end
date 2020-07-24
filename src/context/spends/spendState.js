import React, { useReducer } from 'react';
import SpendContext from './spendContext';
import SpendReducer from './spendReducer';
import {SPENDS_PROJECT,
    ADD_SPEND,
    VALIDATE_SPEND,
    DELETE_SPEND,
    CURRENT_SPEND,
    UPDATE_SPEND,
    CLEAN_SPEND
    } from '../../types';

import clientAxios from '../../config/axios';

const SpendState = props => {
    const initialState={
    spendsProject:[],
    errorSpend: false,
    spendSelected:null

    }
    //crear dispatch y state
    const [state, dispatch] = useReducer(SpendReducer, initialState);

    //crear funciones


    //obtener los gastos de un proyecto especifico
    const getSpends = async project => {
        console.log(project)
        const result = await clientAxios.get('/api/spends', {params:{project}});
        console.log(result);
        try {
            dispatch ({
                type:SPENDS_PROJECT,
                payload: result.data.spends
            })
        } catch (error) {
            console.log(error)
        }
    }

    //agregar gasto al proyecto seleccionado 
    const addSpend = async spend=>{
        try {
            const result = await clientAxios.post('/api/spends', spend);
            console.log(result);
            dispatch({
                type:ADD_SPEND,
                payload:spend
    
            })
        } catch (error) {
            console.log(error);
        }
    }

     //valida y muestra un error en caso de que sea necesario
     const validateSpend =()=>{
         dispatch({
             type:VALIDATE_SPEND
         })
     }

     //eliminar gastos por su ID 
     const deleteSpend = async (id, project)=>{
            try {
                await clientAxios.delete(`/api/spends/${id}`, {params: {project}});
                dispatch ({
                    type:DELETE_SPEND,
                    payload:id
                })
            } catch (error) {
                console.log(error);
            }
     }

     //edita un gasto
     const updateSpend =async  spend =>{

        const result=await clientAxios.put(`/api/spends/${spend._id}`, spend);
        console.log(result);
        try {
            dispatch ({
                type:UPDATE_SPEND,
                payload:result.data.spend
            })
            
        } catch (error) {
            console.log(error);
        }
    }

     // extrae un gasto para edicion
     const saveCurrentSpend = spend => {
         dispatch({
             type:CURRENT_SPEND,
             payload:spend
         })
     }


     //elimina el gasto seleccionado
     const cleanSpend = spend =>{
         dispatch ({
             type:CLEAN_SPEND,
         })
     }

    return (
        <SpendContext.Provider
           value= {{
            spendsProject : state.spendsProject,
            errorSpend:state.errorSpend,
            spendSelected: state.spendSelected,
            getSpends,
            addSpend,
            validateSpend,
            deleteSpend,
            saveCurrentSpend,
            updateSpend,
            cleanSpend
           }}
        >
            {props.children}
        </SpendContext.Provider>
    )

}
export default SpendState;