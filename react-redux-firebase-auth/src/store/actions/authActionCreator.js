import {SIGNUP_SUCESS,SIGNUP_ERROR} from './actionTypes'


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