import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class TableRow extends Component {

    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this) 
    }

    apagar(id,nome){
      let res = window.confirm('Deseja apagar ${nome}'+{nome}+'?')

      if(res){
          console.log('Ok')
      }
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.estudante._id}
                </td>
                <td>
                    {this.props.estudante.nome}
                </td>
                <td>
                    {this.props.estudante.curso}
                </td>
                <td>
                    {this.props.estudante.IRA}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/"+this.props.estudante._id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={
                        ()=>this.apagar(this.props.estudante._id,
                                        this.props.estudante.nome)
                    }
                     className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}