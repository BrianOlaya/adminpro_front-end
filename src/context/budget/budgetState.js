import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import BudgetReducer from './budgetReducer';
import {BUDGETS_PROJECT,
        ADD_BUDGET,
        VALIDATE_BUDGET,
       } from '../../types';

import clientAxios from '../../config/axios';

const BudgetState = props => {
    const initialState={
    budgets:[],
    errorBudget: false,

    }
    //crear dispatch y state
    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    //crear funciones


    //obtener las tareas de un proyecto especifico
    const getBudget = async project => {
        console.log(project)
        const result = await clientAxios.get('/api/budget', {params:{project}});
        console.log(result);
        try {
            dispatch ({
                type:BUDGETS_PROJECT,
                payload: result.data.budgets
                
            })
          
        } catch (error) {
            console.log(error)
        }
    }

    //agregar tarea al proyecto seleccionado 
    const addBudget = async budget=>{
        try {
            const result = await clientAxios.post('/api/budget', budget);
            console.log(result);
            dispatch({
                type:ADD_BUDGET,
                payload:budget
    
            })
        } catch (error) {
            console.log(error);
        }
    }

     //valida y muestra un error en caso de que sea necesario
     const validateBudget =()=>{
         dispatch({
             type:VALIDATE_BUDGET
         })
     }

   


    return (
        <BudgetContext.Provider
           value= {{
            budgets : state.budgets,
            errorBudget:state.errorBudget,
            getBudget,
            addBudget,
            validateBudget,
            }}
        >
            {props.children}
        </BudgetContext.Provider>
    )

}
export default BudgetState;
































// import React, { useReducer } from 'react';
// import BudgetContext from './budgetContext';
// import BudgetReducer from './budgetReducer';
// import {BUDGETS_PROJECT,
//         ADD_BUDGET,
//         VALIDATE_BUDGET,
//         FORM_BUDGET,
      
//        } from '../../types';

// import clientAxios from '../../config/axios';

// const BudgetState = props => {
//     const initialState={
  
//    budgets:[],
//    errorBudget: false,
//    budgetSelected:null

//     }
//     //crear dispatch y state
//     const [state, dispatch] = useReducer(BudgetReducer, initialState);

//     //crear funciones

//     const showFormBudget=()=>{
//         dispatch({
//             type:FORM_BUDGET
//         })
//     }

//     //obtener  presupuesto de un proyecto especifico
//     const getBudgetTotal = async project => {        //OJO PUEDE SER TAMBIEN getBudgetTotal!!!!!
//         console.log(project)
//         const result = await clientAxios.get('/api/budget', {params:{project}});
//         console.log(result);
//         try {
//             dispatch ({
//                 type:BUDGETS_PROJECT,
//                 payload: result.data.budgets   // OJO PUEDE SER TAMBIEN result.paramas.budget    
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     //agregar tarea al proyecto seleccionado 
//     const addBudget = async budget=>{
//         try {
//             const result = await clientAxios.post('/api/budget', budget);
//             console.log(result);
//             dispatch({
//                 type:ADD_BUDGET,
//                 payload:result.data.budgets
    
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }

//      //valida y muestra un error en caso de que sea necesario
//      const validateBudget =()=>{
//          dispatch({
//              type:VALIDATE_BUDGET
//          })
//      }

  

//     return (
//         <BudgetContext.Provider
//            value= {{
//             errorBudget:state.errorBudget,
//             budgetSelected: state.budgetSelected,
//             showFormBudget,
//             getBudgetTotal,
//             addBudget,
//             validateBudget,
        
//            }}
//         >
//             {props.children}
//         </BudgetContext.Provider>
//     )

// }
// export default BudgetState;