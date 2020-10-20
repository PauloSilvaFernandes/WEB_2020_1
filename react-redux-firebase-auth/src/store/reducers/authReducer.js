const INTIAL_STATE = {

    auth_msg: null,
    user:null
}

export default function(state = INTIAL_STATE,action){

    return {
        ...state,
        auth_msg:'logado com sucesso',
        user:'pgsf@hotmail.com'
    }
}