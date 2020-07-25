import React from 'react'

//let nome='gui'
//let curso='ES'
//let cidade='fortaleza'

function questao01(props){

    return(
        <div>
        <ul>
                <li>nome:{props.nome}</li>    
                
                <li>curso:{props.curso}</li>    

                <li>cidade:{props.cidade}</li>

        </ul>
        </div>)
}

export default questao01;