import React from 'react'
import {Card,Button} from 'react-bootstrap'
import logo from '../Images/logo512.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export default (props)=>{
    
    return(
    
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Estudante da UFC</Card.Title>
          <Card.Text>
                    {props.children}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        
    )   
}