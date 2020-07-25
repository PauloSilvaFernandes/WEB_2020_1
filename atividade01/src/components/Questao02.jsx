import React from 'react'

 class Questao02 extends React.Component{

    
    render(){
        return(
             <div>
                   <ul>

                        <li>Nome: {this.props.nome}</li>    
                
                        <li>Curso: {this.props.curso}</li>    

                        <li>Cidade: {this.props.cidade}</li>

                     </ul>

             </div>
        )
    }
}
export default Questao02;