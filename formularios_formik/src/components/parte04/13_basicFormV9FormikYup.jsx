import React, { Children } from 'react'
import {Formik,Form, useField} from  'formik'
import * as Yup from 'yup'

const MyTextInput = ({label,...props})=>{

    const [field,meta] = useField(props)
 
    return(
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <input
                {...props}
                {...field}//onChange e onBLur
                className={meta.touched ?
                                (meta.error)?'form-control is-invalid':'form-control is-valid'
                                :
                                'form-control'   }
            />
            {meta.touched && meta.error? 
                                      <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )
}
const MySelect = ({label, ...props})=>{
    const [field,meta] = useField(props)
    return(
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <select
                  {...props}
                  {...field}//onChange e onBLur
                  className={meta.touched ?
                                  (meta.error)?'custom-select is-invalid':'custom-select is-valid'
                                  :
                                  'custom-select'   }
            />
               {meta.touched && meta.error? 
                                      <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )
}
const MyRadio=({children, ...props})=>{
    const [field,] = useField({...props,type:'radio'})
    return(
        <div className='form-check'>
            <input type='radio'
            {...props}
            {...field}
            className='form-check-input'
            />
            <label className='form-check' htmlFor={props.id}>
                {children}
            </label>
        </div>
    )

}
const MyTextArea = ({label,...props})=>{

    const [field,meta] = useField(props)
 
    return(
        <div className='form-group'>
            <label htmlFor={props.id}>{label}</label>
            <textarea
                {...props}
                {...field}//onChange e onBLur
                className={meta.touched ?
                                (meta.error)?'form-control is-invalid':'form-control is-valid'
                                :
                                'form-control'   }
            />
            {meta.touched && meta.error? 
                                      <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )
}
const MyCheckBox = ({children, ...props}) => {
    const [field,meta] = useField({...props,type:'checkbox'})

    return(
        <div    className='form-group'>
            <div className='custom-control'>
                <input type='checkbox'
                     {...props}
                     {...field}//onChange e onBLur
                     className={meta.touched ?
                                     (meta.error)?'custom-control-input is-invalid':'custom-control-input is-valid'
                                     :
                                     'custom-control-input'   }
 
                />
                <label className='custom-control-label' htmlFor={props.id}>
                   {children}
                </label>
                {meta.touched && meta.error? 
                 <div className='invalid-feedback'>{meta.error}</div> : null}
            </div>
        </div>
    )
}
export default ()=>{

    return (
        <Formik

        initialValues = {
            {
            firstName:'',
            lastName:'',
            email:'',
            job:'',
            lang:'java',
            comment:'',
            agree:false
          
            
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
                .email('E-mail inválido')
                .required('Obrigatorio'),

                job:Yup.string()
                .oneOf(
                    ['designer','developer','architect','other'],
                    'Tipo de emprego invalido'
                )
                .required('orbrigatório'),

                
                comment:Yup.string()
                .max(100,'Maximo de letras alcançado')
                .required('Obrigatório'),
            
                agree:Yup.boolean()
                .required('Obrigatório')
                .oneOf([true],'Voce deve aceitar os termos e condições.'),

                lang:Yup.string().required('Obrigatório')
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
                        console.log(values.job)
                        console.log(values.comment)
                        console.log(values.agree)
                        console.log(values.lang)
                         setSubmitting(false)
                    },
                    1000
                )
      
            }
         }
        >
                {
                    formik=>(
                        <div>
                        <h1>Formulario 13 --Formik</h1>
                        <Form>                             
                            <div>
                                <MyTextInput
                                    label='Nome: '
                                    name='firstName'
                                    id='firstName'
                                    type='text'
                                    placeholder='Seu primeiro nome aqui'

                                  
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label='Sobrenome: '
                                    name='lastName'
                                    id='lastName'
                                    type= 'text'
                                    placeholder='Seu sobrenome aqui'

                                  
                                />
                            </div>
                            <div>
                                <MyTextInput
                                    label='E-mail: '
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder='Digite seu email'

                                  
                                />
                            </div>
                            <div>
                                <MySelect label='Tipo de emprego' name='job'id='job'>
                                    <option value=''>Selecione um tipo de emprego</option>
                                    <option value='designer'>Designer</option>
                                    <option value='developer'>Developer</option>
                                    <option value='architect'>Architect</option>
                                    <option value='other'>Other</option>
                                </MySelect>                         
                            </div>
                            <div>
                                Selecion sua linguagem predileta
                                <MyRadio name='lang' id='java' value='java'>
                                    Java
                                </MyRadio >
                                <MyRadio name='lang' id='cplusplus' value='cplusplus'>
                                    C++
                                </MyRadio>
                                <MyRadio name='lang' id='python' value='python'>
                                    Python
                                </MyRadio>
                            </div>
                            <div>
                                <MyTextArea
                                    label='Comentarios'
                                    name='comment'
                                    id='comment'
                                    placeholder='Comente aqui.'

                                />
                            </div>
                           
                            <div>
                                <MyCheckBox name='agree' id='agree'>
                                    Eu aceito os termos e condiçoes.
                                </MyCheckBox>
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