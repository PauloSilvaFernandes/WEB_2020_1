import React from 'react'
import {useFormik} from  'formik'


export default ()=>{
    const formik = useFormik(
        {
            initialValues:{
                email:''
            },
            onSubmit:values =>{
                console.log(values.email)
            }
        }

    )

    return(
        <div>
              <h1>Formulario 05 --Formik</h1>
              <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                            
                            <input 
                                id = 'email'
                                name='email'
                                type='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
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