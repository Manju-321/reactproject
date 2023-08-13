// import React from "react";
// import "./project.css";

// const Project=()=>
// {
//     return(
//         <div className="container-fluid">
//             <div className="md-3" style={{width:"100%"}}>
//                 <div className="d-flex justify-content-between">
//                     <div className="m-3">
//                         <img src="./pro.jpg" height="100px" width="100px" alt="pro" />
//                     </div>
//                     <div className="p-5">
//                         <span className="me-3">Home</span>
//                         <span className="me-3">About</span>
//                         <span>Contact</span>
//                     </div>
//                 </div>
//                 <div className="row border border-2"style={{width:"100%",height:"60vh"}}>
//                     <div className="col-6 border border-2 border-danger ">
//                         <div className="d-flex justify-content-center" style={{width:"100%"}}>
//                             <div className="" style={{marginTop:"20%"}} >
//                             <div style={{fontSize:"80px"}}>GRIFFIN</div>
//                             <div style={{fontSize:"60px"}}>Professional</div>
//                             <div style={{fontSize:"60px"}}>Services</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-6 d-flex justify-content-end">
//                         <div className="mt-5 " style={{width:"80%",height:"90%"}}>
//                             <img src="./pro1.jpg" style={{width:"100%",height:"100%"}}  alt="pro1" />
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{width:"100%"}}>
//                     <div className="justify-content-center p-5">
//                         <p>since starting griffin in 2023 i've been serving the all over india with professional 
//                             service.always bringing a creative and professional approach to the table.my goal
//                             is to help you look andfeel your absolute best. but there's one thing that has stayed
//                             constant throughout,and that's a commitment to the complete satisfaction of my 
//                             client's, i'd have to start working with you today .
//                         </p>
//                     </div>
//                 </div>
//                 <div className="row" style={{width:"100%"}}>
//                     <div className="col-4">
//                         <div>
//                             <div>Contact</div>
//                         </div>
//                         <div>
//                             <div>GRIFFIN</div>
//                             <div>500 Terry Francisco Street</div>
//                             <div>San Francsico, CA 94158</div>
//                         </div>
//                         <div>
//                             <div>Tel 123-456-7890</div>
//                             <div>Email info@mysitee.com</div>
//                         </div>
//                     </div>
//                     <div className="col-3">
//                         <div>Stay Connected</div>
//                         <div>
//                             <div className="bi bi-facebook">Facebook</div>
//                             <div className="bi bi-instagram">Instagram</div>
//                             <div className="bi bi-youtube">Youtube</div>
//                         </div>
//                     </div>
//                     <div className="col-5">
//                         <div>Or Leave a Message Here</div>
//                         <div></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Project;
import React,{useState}from 'react';

const Project=()=>
{
    const [count,setCount] = useState(1);
    
    const increment=()=>{
    setCount(count * 2)
    }
    console.log(count);
    return(
        <div className='container-fluid'>
            <p>starting number:{count}</p>
            <button onClick={increment}>Increase</button>
        </div>
    )
}
export default Project;









