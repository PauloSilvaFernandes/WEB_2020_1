import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
export default class List extends Component{


    constructor(props){

        super(props)
        this.state = {disciplinas:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }
   
    componentDidMount(){
        //axios.get('http://localhost:3000/disciplina')

        axios.get("http://localhost:3002/disciplina/list")

        .then(
            (res)=>{
              //  console.log(res.data)
               this.setState({disciplinas: res.data})
              // console.log(this.state.disciplinas)
            }
        )
        .catch((error)=>{
            console.log(error)
        })
    }
    montarTabela (){
        if(!this.state.disciplinas)return
        return this.state.disciplinas.map(
            (disc,i)=>{
               return   <TableRow disciplina={disc} key={i} apagarElementoPorId={this.apagarElementoPorId}/> 
            }
        )
    }
    apagarElementoPorId(id){

        let disciplinaTemp = this.state.disciplinas

        for(let i= 0 ;i<disciplinaTemp.length;i++){
            if(disciplinaTemp[i]._id===id){
                disciplinaTemp.splice(i,1)
            }
        }
        this.setState({disciplinas: disciplinaTemp})

    }
    render(){
        return(

            <div style={{marginTop: 10}}>

                <h3>Listar Disciplinas</h3>
                <table className='table table-striped' style={{marginTop: 20}}>
                    <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Capacidade</th>
                                <th colSpan='2'></th>
                            </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )

    }
}