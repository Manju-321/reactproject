import React from 'react';
import { useFormik } from 'formik';

const FormikVal=()=>
{
    function UserValidation(formBody)
    {
        var errors = {};

        if(formBody.UserName==""){
            errors.UserName="User Name Required";
        }else if(formBody.UserName.length<4){
            errors.UserName="User Name too short min 4 chars required";
        }else{
            errors.UserName="";
        }

        if(formBody.Password==""){
            errors.Password="Password is Required";
        }else if(formBody.Password.length<4){
            errors.Password="Weak Password";
        }else if(formBody.Password.lastIndexOf){
            errors.Password="At the last place must have @321";
        }else{
            errors.Password="";
        }

        if(formBody.Mobile.Match==/\+91\d{10}/){
            errors.Mobile="Mobile number detected";
        }else{
            errors.Mobile="Invalid Mobile";
        }
        return errors;
    }
    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Password":"",
            "Mobile":""
        },
        validate:UserValidation,
        onSubmit:(values) =>{ 
            alert(JSON.stringify(values));
        } 
    })
    return(
        <div className='container-fluid'>
            <div className='border border-dark p-3 m-3 col-4'>
                <h2>Form Validations</h2>
                <hr/>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onBlur={formik.handleBlur} name="UserName" className='form-control w-100' onChange={formik.handleChange}/></dd>
                        <dd className='text-danger'>{formik.errors.UserName}</dd>
                        <dt>Password</dt>
                        <dd><input type="text" name="Password" className='form-control w-100' onChange={formik.handleChange}/></dd>
                        <dd className='text-primary'>{formik.errors.Password}</dd>
                        <dt>Mobile</dt>
                        <dd><input type="number" name="Mobile" className='form-control w-100' onChange={formik.handleChange}/></dd>
                        <dd className='text-dark'>{formik.errors.Mobile}</dd>
                    </dl>
                    <button className='btn btn-primary w-100'>Register</button>
                </form>
            </div>
        </div>
    )
}
export default FormikVal;