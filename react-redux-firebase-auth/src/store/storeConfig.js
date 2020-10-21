
import {createStore, applyMiddleware} from 'redux'

import reduxThunk from 'redux-thunk'

import reducer from '../store/reducers' 
import firebase from '../ultils/firebase'

function saveToLocalStorage(state){
    try{

        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)

    }catch(error){
        console.log(error)
    }
}
function loadFromLocalStorage(){
    try{

        const serializedState = localStorage.getItem('state')
        if(serializedState===null)return undefined
        return JSON.parse(serializedState)

    }
    catch(error){
        console.log(error)
    }
}
const persistentState = loadFromLocalStorage()

const store= createStore(
  reducer,
  persistentState,
  applyMiddleware(reduxThunk)
)
store.subscribe(
    ()=>{
        console.log('estado foi modificado')
        saveToLocalStorage(store.getState())
    }
)

const rrfProps = {
  firebase,
  config:{},
  dispatch: store.dispatch

}

export {store,rrfProps}