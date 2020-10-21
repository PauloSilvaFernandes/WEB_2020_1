import {SIGNUP_SUCESS,SIGNUP_ERROR,SIGNIN_SUCESS,SIGNIN_ERROR,SIGNOUT_SUCESS,SIGNOUT_ERROR,EMAIL_NOT_VERIFIED,RESET_AUTH_MSG} from './actionTypes'


import firebase from '../../ultils/firebase'

export const signup = (email,password) => {

    return dispatch =>{
        try{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(
                ()=>{
                    firebase.auth().onAuthStateChanged(
                        (user)=>{
                            user.sendEmailVerification()
                        }
                    )
                }

            )
            .then(
                ()=>{
                    firebase.auth().onAuthStateChanged(
                        (user)=>{
                            if(user){
                                dispatch(
                                    {
                                        type:SIGNUP_SUCESS,
                                        payload: {                                           
                                            authMessage: `Usuario cadastrado com sucesso! Verifique seu e-mail.`,
                                            userMail: user.email,
                                            verified: false
                                        }                                      
                                  })
                         
                                }else{
                                    dispatch(
                                        {
                                            type:SIGNUP_ERROR,
                                            payload: {         
                                                authMessage: `Não foi possivel conectar`,      
                                            }                                     
                                      })
                               
                                }
                            }
                    )//firebase.auth().onAuthStateChanged
                }
            )
                        
            .catch(

                (error)=>{

                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: {authMessage: `Erro na conexão com o firebase ${error}`}
                    })

                }
            )

        }
        catch(error){
            dispatch(
                {

                    type: SIGNUP_ERROR,
                    payload: { authMessage: `Erro na conexão com o firebase: ${error}`}
                
                }
            )
              
        }
    }
}

export const signin = (email,password,callback)=>{

    return dispatch => {
        try{
            firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(
                (data)=>{
                   if(!data.user.emailVerified){
                    dispatch({
                        type: EMAIL_NOT_VERIFIED,
                        payload: {authMessage:`E-mail não verificado`,
                         verified:false  },
                      
                        })

                   }
                   else{
                    dispatch({
                        type: SIGNIN_SUCESS,
                        payload: {authMessage:`Login efetuado com sucesso`,
                        userMail:data.user.email,
                        verified:true  },
                        
                        })

                 
                   }
                   callback(data.user)   
                }
            )
            .catch(
                (error)=>{
                    dispatch({
                        type: SIGNIN_ERROR,
                        payload: {authMessage:`Erro no Login com o firebase ${error}`}
                    })
                    callback()
                }
            )
                

        }catch(error){
            dispatch({
                type: SIGNIN_ERROR,
                payload: {authMessage:`Erro na conexão com o firebase ${error}`}
            })
            callback()
        }
    }

}

export const signout =(callback)=>{
    return dispatch=>{
        try{
            firebase
            .auth()
            .signOut()
            .then(
                ()=>{
                    dispatch({
                        type: SIGNOUT_SUCESS,
                        payload: {authMessage:`Signout efetuado com sucesso`, verified: false}
                    })
                    callback()
                }
            )
            .catch(
                (error)=>{
                    dispatch({
                        type: SIGNOUT_ERROR,
                        payload: {authMessage:`Erro no Log out ${error}`}
                    })
                    callback()
                }
            )

        }catch(error){
            dispatch({
                type: SIGNOUT_ERROR,
                payload: {authMessage:`Erro na conexão com o firebase ${error}`}
            })
            callback()

        }
    }
}

export const resetAuthMsg= () => {
    return{
        type: RESET_AUTH_MSG
    }
}