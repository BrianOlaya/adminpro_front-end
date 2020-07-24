import {BUDGETS_PROJECT,
    ADD_BUDGET,
    VALIDATE_BUDGET,
    FORM_BUDGET
    } from '../../types';



export default (state, action)=> {
switch (action.type){

    case FORM_BUDGET: 
        return {
             ...state,
             budgets: action.payload

    }
    case BUDGETS_PROJECT: 
        return {
            ...state,
            budgets: action.payload//state.budgets.filter(budget=> budget.projectId===action.payload)

        }
    case ADD_BUDGET:
        return {
            ...state,
            budgets:[action.payload, ...state.budgets ],
            errorBudget:false
        }
    case VALIDATE_BUDGET:
        return {
            ...state,
            errorBudget:true
        }
    default :
        return state;
}
}