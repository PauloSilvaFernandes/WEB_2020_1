import {SIGNUP_SUCESS,SIGNUP_ERROR,SIGNIN_SUCESS,SIGNIN_ERROR,SIGNOUT_SUCESS,SIGNOUT_ERROR} from './actionTypes'


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
                            if(user){
                                dispatch(
                                    {
                                        type:SIGNUP_SUCESS,
                                        payload: {                                           
                                            authMessage: `Usuario cadastrado com sucesso!`,
                                            userMail: user.email
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
                    dispatch({
                        type: SIGNIN_SUCESS,
                        payload: {authMessage:`Login efetuado com sucesso`,
                        userMail:data.user.email  }
                        })

                    callback()
                       
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
                        payload: {authMessage:`Signout efetuado com sucesso`}
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