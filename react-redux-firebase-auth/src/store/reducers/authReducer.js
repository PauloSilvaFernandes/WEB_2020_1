import {SIGNUP_SUCESS,SIGNUP_ERROR} from '../actions/actionTypes'


const INTIAL_STATE = {

    authMsg: null,
    user:null
}

export default function(state = INTIAL_STATE,action){

    switch(action.type){
        case SIGNUP_SUCESS:
            return{
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                authMsg: action.payload.authMessage,
            }
            default:
                return state
    }

}