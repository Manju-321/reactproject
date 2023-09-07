// import React,{useState} from 'react';


// const FormDemo=()=>{
//     const [details,setDetails] = useState({"UserName":"","Age":0,"City":"","Mobile":""});
//     const [errors,setErrors] = useState({"UserName":"","Age":0,"City":"","Mobile":""});

//     function handleNameChange(e){
//         if(e.target.value==""){
//             setErrors({
//                 UserName:"User Name Required",
//                 Age:errors.Age,
//                 City:errors.City,
//                 Mobile:errors.Mobile
//             })
//         }else{
//             setErrors({
//                 UserName:""
//             })
//             setDetails({
//                 UserName:e.target.value,
//                 Age:details.Age,
//                 City:details.City,
//                 Mobile:details.Mobile
//             })
//         }
//     }
//     function handleAgeChange(e){
//         if(isNaN(e.target.value)){
//             setErrors({
//                 Age:"Age must be a number"
//             })
//         }else{
//            setErrors({
//             Age:""
//            })
//         setDetails({
//             UserName:details.UserName,
//             Age:e.target.value,
//             City:details.City,
//             Mobile:details.Mobile
//         })
//         }
//     }
//     function handleCityChange(e){
//         if(e.target.value=="-1"){
//             setErrors({
//                 City:"Please Select Your City"
//             })
//         }else{
//             setErrors({
//                 City:""
//             })
//         setDetails({
//             UserName:details.UserName,
//             Age:details.Age,
//             City:e.target.value,
//             Mobile:details.Mobile
//         })
//         }
//     }
//     function handleMobileChange(e){
//         if(e.target.value.match(/\+91\d{10}/)){
//             setDetails({
//                 UserName:details.UserName,
//                 Age:details.Age,
//                 City:details.City,
//                 Mobile:e.target.value
//             })
//             setErrors({
//                 Mobile:"Invalid Mobile"
//             })
//         }else{
//             setErrors({
//                 Mobile:""
//             })
//         }
//     }
//     function handleFormSubmit(e){
//         e.preventDefault();
//         alert(JSON.stringify(details));
//       }
//     return(
//         <div className='container-fluid'>
//             <h2>Form-Validations</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd><input type="text" name="UserName" onChange={handleNameChange}/></dd>
//                     <dd className='text-danger'>{errors.UserName}</dd>
//                     <dt>Age</dt>
//                     <dd><input type="number" name="Age"onChange={handleAgeChange}/></dd>
//                     <dd className='text-danger'>{errors.Age}</dd>
//                     <dt>City</dt>
//                     <dd>
//                         <select name="City" onChange={handleCityChange}>
//                             <option value="-1">Choose City</option>
//                             <option>Hyderabad</option>
//                             <option>Bangalore</option>
//                             <option>Delhi</option>
//                         </select>
//                     </dd>
//                     <dd className='text-danger'>{errors.City}</dd>
//                     <dt>Mobile</dt>
//                     <dd><input type="number" name="Mobile" onChange={handleMobileChange}/></dd>
//                     <dd className='text-danger'>{errors.Mobile}</dd>
//                 </dl>
//                 <button>Register</button>
//             </form>
//         </div>
//     )
// }
// export default FormDemo;

import React,{useState} from 'react';

const FormDemo=()=>{
    const [details,setDetails] = useState({"UserName":"","Password":"","Mobile":""});
    const [errors,setErrors] = useState({"UserName":"","Password":"","Mobile":""});

    function handleNameChange(e){
       if(e.target.value==""){
            setErrors({
                UserName:"User Name Required",
                Password:errors.Password,
                Mobile:errors.Mobile
        })
    }else{
        setErrors({
            UserName:""
        })
        setDetails({
            UserName:e.target.value,
            Password:details.Password,
            Mobile:details.Mobile
        })
    }
    }
    function handlePasswordChange(e){
        if(e.target.value==""){
            setErrors({
                UserName:errors.UserName,
                Password:"Password Required",
                Mobile:errors.Mobile
            })
        }else{
            setErrors({
                Password:""
            })
            setDetails({
                UserName:details.UserName,
                Password:e.target.value,
                Mobile:details.Mobile
            })
        }
    }
    // function handleMobileChange(e){
    //     if(e.target.value==""){
    //         setErrors({
    //             UserName:errors.UserName,
    //             Password:errors.Password,
    //             Mobile:"Mobile Number Required"
    //         })
    //     }else{
    //         setErrors({
    //             Mobile:""
    //         })
    //         setDetails({
    //             UserName:details.UserName,
    //             Password:details.Password,
    //             Mobile:e.target.value
    //         })
    //     }
    // }
    function handleMobileChange(e){
        if(e.target.value.match(/\+91\d{10}/)) {
           setErrors({
               UserName:details.UserName,
               Password:details.Password,
               Mobile: e.target.value
           })
           setErrors({
               Mobile: ""
           })
        } else {
           setDetails({
               UserName:details.UserName,
               Password:details.Password,
               Mobile: "Invalid Mobile"
           })
        }
   }
    function handleFormSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(details));
    }
    return(
        <div className='container-fluid'>
            <div>
                <h2>Form Validations</h2>
                <form onSubmit={handleFormSubmit}>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" name="username" className='form-control w-25' onChange={handleNameChange}/></dd>
                        <dd className='text-danger'>{errors.UserName}</dd>
                        <dt>Password</dt>         
                        <dd><input type="text" name="password" className='form-control w-25' onChange={handlePasswordChange}/></dd>
                        <dd className='text-info'>{errors.Password}</dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" name="mobile" className='form-control w-25' onChange={handleMobileChange}/></dd>
                        <dd className='text-secondary'>{errors.Mobile}</dd>
                    </dl>
                    <button className='btn btn-primary  w-25'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default FormDemo;