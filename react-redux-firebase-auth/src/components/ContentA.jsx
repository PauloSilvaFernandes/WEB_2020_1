import React, { Component } from 'react'
import Card from './Card'


import {connect} from 'react-redux'
import {signout} from '../store/actions/authActionCreator' 


class Content extends Component {

    componentDidMount(){
        if(this.props.firebaseAuth.isLoaded && this.props.firebaseAuth.isEmpty){
            this.props.history.push('/signin')
        }
    }


    logout(){
        this.props.mySignout(
            ()=>{
                this.props.history.push('/signin')
            }
        )
    }
    render() {
        return (
        <Card title='ContentA'>
                Conteudo apenas para usuarios
                <br/>      <br/>
                <button className='btn btn-danger' 
                onClick={
                    ()=>this.logout()
                    }>
                        Logout
                </button>
        </Card>
            )
    }
}
function mapStateToProps(state) {

    return{
      userMsg: state.authReducer.authMsg,
      firebaseAuth: state.firebaseReducer.auth
    }
    
  }

  function mapDispatchToProps(dispatch){
      return{
          mySignout(callback){
                const action = signout(callback)
                dispatch(action)
          }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Content)


