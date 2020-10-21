import {SIGNUP_SUCESS,SIGNUP_ERROR,SIGNIN_SUCESS,SIGNIN_ERROR,SIGNOUT_SUCESS,SIGNOUT_ERROR,EMAIL_NOT_VERIFIED,RESET_AUTH_MSG} from '../actions/actionTypes'


const INTIAL_STATE = {

    authMsg: null,
    user:null,
    verified:false
}

export default function(state = INTIAL_STATE,action){

    switch(action.type){
        case SIGNUP_SUCESS:
            return{
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
                verified: action.payload.verified
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                authMsg: action.payload.authMessage
            }
        case SIGNIN_SUCESS:
                return{
                    ...state,
                    authMsg: action.payload.authMessage,
                    user: action.payload.userMail,
                    verified: action.payload.verified
                }
        case SIGNIN_ERROR:
                return{
                    ...state,
                    authMsg: action.payload.authMessage
                }
        case EMAIL_NOT_VERIFIED:
                return{
                    ...state,
                    authMsg: action.payload.authMessage,
                    verified:action.payload.verified
                }
        case SIGNOUT_SUCESS:
                    return{
                        user:null,
                        authMsg: action.payload.authMessage,
                        verified: action.payload.verified//false
                        }
        case SIGNOUT_ERROR:
                        return{
                        user:null,
                        authMsg: action.payload.authMessage,
                        
                     }
        case SIGNUP_ERROR:
                    return{
                        ...state,
                        authMsg: action.payload.authMessage
                    }
        case RESET_AUTH_MSG:
                    return{
                            ...state,
                            authMsg: null
                        }
         default:
                return state
    }

}