import {FORM_PROJECT, 
        GET_PROJECTS, 
        ADD_PROJECT, 
        VALIDATE_FORM,
        CURRENT_PROJECT,
        DELETE_PROJECT,
        PROJECT_ERROR
       } from '../../types/index';

export default (state, action) => {
    switch (action.type){
        case  FORM_PROJECT:
            return {
                ...state,
                formProject:true
            }
        case GET_PROJECTS :
            return{
                ...state,
                projects:action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                formProject: false,
                errorForm: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true
            }
        case CURRENT_PROJECT :
            return {
                ...state,
                project:state.projects.filter(project =>project._id=== action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects:state.projects.filter(project =>project._id !== action.payload),
                project:null

            }
        case PROJECT_ERROR:
            return {
                ...state,
                msg:action.payload
            }
            
        default:
            return state;
    }
}