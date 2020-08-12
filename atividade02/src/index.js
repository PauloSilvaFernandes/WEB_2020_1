import React from 'react';
import ReactDOM from 'react-dom';
import  {Arena,Hero,Enemy }from './components/Questao1'
import  enel from'./imagens/enel.jpg'
import luffy from './imagens/luffy.jpeg'

let root= document.getElementById('root')

ReactDOM.render(
  <div>
    <Arena>
            <Hero name='luffy'/>
            <Enemy name='enel' />
    </Arena>
     
   

  </div>,root
);

