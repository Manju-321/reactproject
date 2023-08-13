import React,{useState}from "react";
import ParentComponent from "./parent-component";

 const ChildComponent=(props)=>{
    const [data,setData] = useState("Parent");
    const updatedata=(e)=>{
        console.log("abc",e)
        return setData(e)
    }
    console.log("xyz",data);
    return(
        <div className="container-fluid">
            <h1>Child Component</h1>
            <h1>{data}</h1>
            <h1>{props.grandparent}</h1>
            <ParentComponent value={data}click={updatedata}/>
        </div>
    )
}

export default ChildComponent;