import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

const FormikForm=()=>
{
    return(
        <div className='container-fluid'>
            <h2>Formik-Form-Validations</h2> 
            <Formik
               initialValues={{
                  "UserName":"",
                  "Password":"",
                  "Mobile":""
               }}

               onSubmit={
                (values)=>{
                    alert(JSON.stringify(values));
                }
               }

               validationSchema={
                  yup.object({
                    "UserName":yup.string()
                                  .required("Name is Required")
                                  .min(4,"Name is too short")
                                  .max(10, "Name is too long"),
                  "Password":yup.string()
                                .required("Password Required")
                                .min(4,"Password is too short")
                                .max(10,"Password is too long"),
                    "Mobile":yup.string()
                                .required("Mobile number Required")
                                .matches(/\+91\d{10}/,"Follow the path +91 and 10 digits of Mobile Number"),
                  })
               }
            >
                {
                    props=>
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" className="form-control w-25" name="UserName"/></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                            <dt>Password</dt>
                            <dd><Field type="text" className="form-control w-25" name="Password"/></dd>
                            <dd className="text-warning"><ErrorMessage name="Password"/></dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" className="form-control w-25" name="Mobile"/></dd>
                            <dd className="text-info"><ErrorMessage name="Mobile"/></dd>
                        </dl>
                        <button disabled={!props.isValid} className="btn btn-primary w-25">Register</button>
                        <button disabled={!props.isValid}>Save</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}
export default FormikForm;