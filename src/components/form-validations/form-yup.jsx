import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormikYup=()=>
{
    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Password":"",
            "Mobile":0
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        },
        validationSchema:yup.object({
            "UserName":yup.string()
                          .required("User Name Required")
                          .min(4, "Name is too short..")
                          .max(10, "Name is too long.."),
            "Password":yup.string()
                          .required("User Name Required")
                          .min(4, "Password is too short..")
                          .max(10, "Name is too long.."),
            "Mobile":yup.string()
                        .required("Mobile Number Required")
                        .matches(/\+91\d{10}/,"Invalid Mobile +91 with 10 digits")
        })
    })
    return(
        <div className='container-fluid'>
            <div className='border border-dark p-3 m-3 col-4'>
                <h2>Form Validations</h2>
                <hr/>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" className='form-control w-100'/></dd>
                        <dd className='text-danger'>{formik.errors.UserName}</dd>
                        <dt>Password</dt>
                        <dd><input type="text" name="Password" className='form-control w-100' onChange={formik.handleChange}/></dd>   
                        <dd className='text-danger'>{formik.errors.Password}</dd>                     
                        <dt>Mobile</dt>
                        <dd><input type="text" name="Mobile" className='form-control w-100' onChange={formik.handleChange}/></dd>  
                        <dd className='text-danger'>{formik.errors.Mobile}</dd>                   
                    </dl>
                    <button className='btn btn-primary w-100'>Register</button>
                </form>
            </div>
        </div>
    )
}
export default FormikYup;