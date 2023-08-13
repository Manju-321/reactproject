import React from "react";


const ParentComponent=(props)=>{
    let raj = "naveen";
    return(
        <div className="container-fluid">
            <h1>{props.value}</h1>
            <button onClick={()=>props.click(raj)}>submit</button>
        </div>
    )
}
export default ParentComponent;