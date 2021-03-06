import React from 'react'
import {useFormik} from  'formik'
import * as Yup from 'yup'



export default ()=>{
    const formik = useFormik(
        {
            initialValues:{
                firstName:'',
                lastName:'',
                email:''
            },
            validationSchema: Yup.object(
                {
                    firstName:Yup.string()
                        .max(15,'Nome não deve ter mais de de 15 letras')
                        .required('Obrigatório'),

                    lastName:Yup.string()
                    .max(20,'Nome não deve ter mais de de 15 letras')
                    .required('Obrigatório'),
                    
                    email:Yup.string()
                    .email('E-mail inválido')

                }
            ),  
            onSubmit:values =>{
                console.log(values.firstName)
                console.log(values.lastName)
                console.log(values.email)
            }
        }

    )

    return(
        <div>
              <h1>Formulario 09 --Formik</h1>
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
                            {formik.touched.email && formik.errors.email ? 
                            <div className='invalid-feedback'>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <button type='submit' className ='btn btn-primary'>Submeter</button>
                </div>
              </form>
            
        </div>
    )
}