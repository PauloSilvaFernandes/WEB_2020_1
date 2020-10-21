import React, { Component } from 'react'
import Card from './RestrictedCard'



export default class ContentA extends Component {


    render() {
        return (
        <Card title='ContentA' history={this.props.history}>
                Conteudo apenas para usuarios
                <br/>      <br/>
              
        </Card>
            )
    }
}

