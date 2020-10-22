import React from 'react'
import {useFormik} from  'formik'

const validate = values =>{
    const errors = {}
    if(!values.firstName){
        errors.firstName= 'Obrigatório'
    }else if(values.firstName.length > 15){

        errors.firstName = 'Nome não deve ter mais de de 15 letras'

    }
    if(!values.lastName){
        errors.lastName= 'Obrigatório'
    }else if(values.lastName.length > 15){

        errors.lastName = 'sobrenome não deve ter mais de 15 letras'

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
              <h1>Formulario 08 --Formik</h1>
              <form onSubmit={formik.handleSubmit}>
             
                    <div className='form-group'>
                        <label htmlFor='firstName'>Nome:</label>
                            
                            <input 
                                id = 'firstName'
                                name = 'firstName'
                                type='text'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}// modifica o TOUCHED
                                className={formik.touched.firstName ?
                                (formik.errors.firstName)?'form-control is-invalid':'form-control is-valid'
                                :
                                'form-control'   }
                            />
                            {formik.touched.firstName && formik.errors.firstName ? 
                            <div className='invalid-feedback'>{formik.errors.firstName}</div> : null}
         
                   </div>

                    <div className='form-group'>
                        <label htmlFor='lastName'>Sobrenome: </label>
                            
                            <input 
                                id = 'lastName'
                                name='lastName'
                                type='text'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.touched.lastName ?
                                    (formik.errors.lastName)?'form-control is-invalid':'form-control is-valid'
                                    :
                                    'form-control'   }
                            />
                               {formik.touched.lastName && formik.errors.lastName ? 
                            <div className='invalid-feedback'>{formik.errors.lastName}</div> : null}
         
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                            
                            <input 
                                id = 'email'
                                name='email'
                                type='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={formik.touched.email ?
                                    (formik.errors.email)?'form-control is-invalid':'form-control is-valid'
                                    :
                                    'form-control'   }
                            />
                         
                            <small id='email' className='form-text texte-muted'> Seu e-mail não será compartilhado a terceiros. </small>
                            {formik.touched.lastName && formik.errors.lastName ? 
                            <div className='invalid-feedback'>{formik.errors.lastName}</div> : null}
                </div>
                <div>
                    <button type='submit' className ='btn btn-primary'>Submeter</button>
                </div>
              </form>
            
        </div>
    )
}