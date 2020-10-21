import React,{ useState } from 'react'

// estudar oque é two way data binding

export default  () => {

  
    const [values,setValues] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const handleChange = (event)=>{

       setValues(
           {
               ...values,
               [event.target.name]: event.target.value
           }
       )
         
       }
    
    const handleSubimit = (event)=>{
        event.preventDefault()
        console.log(values.firstName)
        console.log(values.lastName)
        console.log(values.email)

    }

   
        return(
            <div >
                <h1>Formulario 04</h1>
                <form onSubmit={handleSubimit}>
                    <div className='form-group'>
                        <label htmlFor='firstName'>Nome:</label>
                            
                            <input 
                                id = 'firstName'
                                name = 'firstName'
                                type='text'
                                value={values.firstName}
                                onChange={handleChange}
                                className='form-control'
                            />
                        
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Sobrenome: </label>
                            
                            <input 
                                id = 'lastName'
                                name='lastName'
                                type='text'
                                value={values.lastName}
                                onChange={handleChange}
                                className='form-control'
                            />
                       
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                            
                            <input 
                                id = 'email'
                                name='email'
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                className='form-control'
                            />
                            <small id='email' className='form-text texte-muted'> Seu e-mail não será compartilhado a terceiros. </small>
                    </div>
                    <div>
                        <button type='submit' className ='btn btn-primary'>Submeter</button>
                    </div>
                </form>
            </div>
        )
    
}