import React from "react";
import Grandchildren from "./grandchildren";

const Child=(props)=>{
    let ram = "suresh";
    return(
        <div className="container-fluid"> 
           <h2>Child Component</h2>
           <h2>{props.abc}</h2>
           <h2>{props.value}</h2>
           <h2>{props.rty}</h2>
           <button onClick={()=>props.click(ram)}>Submit</button>
           <Grandchildren xyz={props.abc} uio={props.rty}/>
        </div>
    )
}
export default Child;
// import React from "react";

// const Child=(props)=>{
//     let ram = "rajesh";
//     return(
//         <div className="container-fluid">
//             <h2>Child Component</h2>
//             <h3>{props.abc}</h3>
//         </div>
//     )
// }
// export default Child;