import React, { Component } from 'react'
import Card from './Card'

import {connect} from 'react-redux'
import {signup} from '../store/actions/authActionCreator' 

 class Signup extends Component {
    
    constructor(props){
        super(props)
        this.state= {login:'',password:''}
        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }
    setLogin(e){

        this.setState({login:e.target.value})

    }
    setPassword(e){

        this.setState({password:e.target.value})

    }
    onSubmit(e){
        e.preventDefault()
       /* console.log(this.state.login)
        console.log(this.state.password)
       */
      
        this.props.mySignup(this.state.login,this.state.password)

        this.setState({login:'',password:''})
    }

    render() {
        return (
            <Card title='Cadastrar'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Login:</label>
                        <input type='text' className='form-control' value={this.state.login}
                        onChange={this.setLogin}></input>
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input type='password' className='form-control' value={this.state.password}
                        onChange={this.setPassword}></input>
                    </div>
                    <input type='submit' value= 'Cadastar' className='btn btn-primary'></input>
                </form>
                <div className='alert alert-info' style={{marginTop:'10px'}}>

                            {this.props.userMsg}

                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {

    return{
      userMsg: state.authReducer.authMsg
    }
    
  }

  function mapDispatchToProps(dispatch){
      return{
          mySignup(login,password){
                const action = signup(login,password)
                dispatch(action)
          }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Signup)