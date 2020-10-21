import React,{Component} from 'react'
import Card from './Card'

import {connect} from 'react-redux'

import {signout} from '../store/actions/authActionCreator' 


class RestrictedCard extends Component{
    
    logout(){
        this.props.mySignout(
            ()=>{
                this.props.history.push('/signin')
            }
        )
    }
    
    componentDidMount(){
        if(this.props.firebaseAuth.isLoaded && this.props.firebaseAuth.isEmpty){
            this.props.history.push('/signin')
        }
        if(!this.props.verified){
            this.props.history.push('/signin')
        }
    }

    render(){
        return(
        <Card title={this.props.title}>
            {this.props.children}
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
      firebaseAuth: state.firebaseReducer.auth,
      verified:state.authReducer.verified
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

export default connect(mapStateToProps,mapDispatchToProps)(RestrictedCard)




