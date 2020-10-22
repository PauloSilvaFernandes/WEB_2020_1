import React from 'react'
import {useFormik} from  'formik'

const validate = values =>{
    const errors = {}
    if(!values.firstName){
        errors.firstName= 'Obrigatório'
    }else if(values.firstName.length < 15){

        errors.firstName = 'Nome de ter mais de de 15 letras'

    }
    if(!values.lastName){
        errors.lastName= 'Obrigatório'
    }else if(values.lastName.length < 15){

        errors.lastName = 'Nome de ter mais de de 15 letras'

    }
    if(!values.email){
        errors.email= 'Obrigatório'
    }
    return errors
}

export default ()=>{
    const formik = useFormik(
        {
            initialValues:{
                firstName:'',
                lastName:'',
                email:''
            },
            validate,  
            onSubmit:values =>{
                console.log(values.firstName)
                console.log(values.lastName)
                console.log(values.email)
            }
        }

    )

    return(
        <div>
              <h1>Formulario 07 --Formik</h1>
              <form onSubmit={formik.handleSubmit}>
             
                    <div className='form-group'>
                        <label htmlFor='firstName'>Nome:</label>
                            
                            <input 
                                id = 'firstName'
                                name = 'firstName'
                                type='text'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                className={formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                            />
                            {formik.errors.firstName ? <div className='invalid-feedback'>{formik.errors.firstName}</div> : null}
         
                   </div>

                    <div className='form-group'>
                        <label htmlFor='lastName'>Sobrenome: </label>
                            
                            <input 
                                id = 'lastName'
                                name='lastName'
                                type='text'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                className={formik.errors.lastName ? 'form-control is-invalid' : 'form-control'}
                            />
                            {formik.errors.lastName ? <div className='invalid-feedback'>{formik.errors.lastName}</div> : null}
                        
                       
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                            
                            <input 
                                id = 'email'
                                name='email'
                                type='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                            />
                         
                            <small id='email' className='form-text texte-muted'> Seu e-mail não será compartilhado a terceiros. </small>
                            {formik.errors.email ? <div className='invalid-feedback'>{formik.errors.email}</div> : null}
                        
                </div>
                <div>
                    <button type='submit' className ='btn btn-primary'>Submeter</button>
                </div>
              </form>
            
        </div>
    )
}