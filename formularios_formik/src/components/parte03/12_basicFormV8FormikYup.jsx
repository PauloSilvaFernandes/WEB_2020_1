import React from 'react'
import {Formik,Field,Form,ErrorMessage} from  'formik'
import * as Yup from 'yup'



export default ()=>{

    return (
        <Formik

        initialValues = {
            {
            firstName:'',
            lastName:'',
            email:'',
            colors:'',
            bigText:''
        }
           
        }
        validationSchema={
            Yup.object(
            {
                firstName:Yup.string()
                    .max(15,'Nome não deve ter mais de 15 letras')
                    .required('Obrigatório'),

                lastName:Yup.string()
                .max(20,'Nome não deve ter mais de  15 letras')
                .required('Obrigatório'),
                
                email:Yup.string()
                .email('E-mail inválido'),
                
                bigText:Yup.string()
                .max(50,'Nome não deve ter mais de 50 letras')
                .required('Obrigatório'),
                

            }
            )
        }
        onSubmit= {
           (values, {setSubmitting})  =>{

                setTimeout(
                    ()=>{
                         console.log(values.firstName)
                         console.log(values.lastName)
                         console.log(values.email)
                         console.log(values.colors)
                         console.log(values.bigText)
                    },
                    1000
                )
      
            }
         }
        >
                {
                    formik=>(
                        <div>
                        <h1>Formulario 12 --Formik</h1>
                        <Form>
                              <div className='form-group'>
                                  <label htmlFor='firstName'>Nome:</label>
                                      
                                      <Field 
                                          id = 'firstName'
                                          name = 'firstName'
                                       
                                          className={formik.touched.firstName ?
                                          (formik.errors.firstName)?'form-control is-invalid':'form-control is-valid'
                                          :
                                          'form-control'   }
                                      />
                                      <div   className='invalid-feedback'>
                                         <ErrorMessage name='firstName'/>
                                     </div>
                   
                             </div>
          
                              <div className='form-group'>
                                  <label htmlFor='lastName'>Sobrenome: </label>
                                      
                                      <Field 
                                          id = 'lastName'
                                          name='lastName'
                                          text=''
                                          className={formik.touched.lastName ?
                                              (formik.errors.lastName)?'form-control is-invalid':'form-control is-valid'
                                              :
                                              'form-control'   }
                                      />
                                     <div   className='invalid-feedback'>
                                         <ErrorMessage name='lastName'/>
                                     </div>
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='email'>Email:</label>
                                      
                                      <Field 
                                          id = 'email'
                                          name='email'
                                          type='email'
                                          className={formik.touched.email ?
                                              (formik.errors.email)?'form-control is-invalid':'form-control is-valid'
                                              :
                                              'form-control'   }
                                      />
                                   
                                      <small id='email' className='form-text texte-muted'> Seu e-mail não será compartilhado a terceiros. </small>
                                     <div   className='invalid-feedback'>
                                         <ErrorMessage name='email'/>
                                     </div>
                          </div>
                          <div className='form-group'>
                                <label htmlFor='colors'>Colors: </label>
                                <Field name= 'colors' id='colors' as='select' className='custom-select'>

                                    <option value='red '>Red</option>
                                    <option value='blue '>Blue</option>
                                    <option value='Green '>Green</option>

                                </Field>

                          </div>

                          <div className='form-group'>
                                <label htmlFor='bigText'>Comments: </label>
                                <Field
                                    name='bigText' id='bigText' as='textarea'
                                    className={formik.touched.bigText ?
                                        (formik.errors.bigText)?'form-control is-invalid':'form-control is-valid'
                                        :
                                        'form-control'   }
                                    
                                />
                                 <div   className='invalid-feedback'>
                                         <ErrorMessage name='bigTextcd'/>
                                </div>
                          </div>
                          <div>
                              <button type='submit' className ='btn btn-primary'>Submeter</button>
                          </div>
                        </Form>
                      
                  </div>
                    )
                }
        </Formik>
    )
 
}