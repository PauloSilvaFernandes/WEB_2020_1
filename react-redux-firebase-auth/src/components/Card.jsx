import React,{Component} from 'react'
import {resetAuthMsg} from '../store/actions/authActionCreator'
import {connect} from 'react-redux'


class Card extends Component{


    componentDidMount(){
        this.props.resetAuthMsg()
    }
    render(){

        return(
            <div className='content'>
                <div className='card'>
                    <div className='card-header'>
                            {this.props.title}
                    </div>
                    <div className='card-body'>
                            {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
function mapDispatchProps(dispatch){
    return{
        resetAuthMsg(){
            const action = resetAuthMsg()
            dispatch(action)
        }
    }
}

export default connect(null,mapDispatchProps)(Card)