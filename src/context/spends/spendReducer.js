import {SPENDS_PROJECT,
    ADD_SPEND,
    VALIDATE_SPEND,
    DELETE_SPEND,
    CURRENT_SPEND,
    UPDATE_SPEND,
    CLEAN_SPEND
    } from '../../types';



export default (state, action)=> {
switch (action.type){
    case SPENDS_PROJECT: 
        return {
            ...state,
            spendsProject: action.payload

        }
    case ADD_SPEND:
        return {
            ...state,
           spendsProject:[action.payload, ...state.spendsProject],
            errorSpend:false
        }
    case VALIDATE_SPEND:
        return {
            ...state,
            errorTask:true
        }
    case DELETE_SPEND:
        return {
            ...state,
            spendsProject:state.spendsProject.filter(spend=> spend._id !== action.payload)
        }
    case UPDATE_SPEND:
        return {
            ...state,
            spendsProject: state.spendsProject.map(spend=> spend._id===action.payload._id ? action.payload : spend )
        }
    case CURRENT_SPEND:
        return {
            ...state,
            spendSelected:action.payload
        }
    case CLEAN_SPEND:
        return {
            ...state,
            spendSelected:null
        }
    default :
        return state;
}
}