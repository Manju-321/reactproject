import React from 'react';
import { useFormik } from 'formik';

const FormHome=()=>{
    const formik = useFormik({
        initialValues:{
            "UserName":"",
            "Password":"",
            "Mobile":""
        },
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
                        <dd><input type="text" name="UserName" className='form-control w-100' onChange={formik.handleChange}/></dd>
                        <dt>Password</dt>
                        <dd><input type="text" name="Password" className='form-control w-100' onChange={formik.handleChange}/></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" name="Mobile" className='form-control w-100' onChange={formik.handleChange}/></dd>
                    </dl>
                    <button className='btn btn-primary w-100'>Register</button>
                </form>
            </div>
        </div>
    )
}
export default FormHome;