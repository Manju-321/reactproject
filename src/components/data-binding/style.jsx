import React,{useState}from "react";

const Style=()=>{
    const [state,setState] = useState([]);

    const handleNameChange=(event)=>{
        setState({
            Subject: event.target.value
        })
    }
    return(
        <div className="container-fluid">
            <h2 style={{color:'red',backgroundColor:'blue',fontFamily:'serif',fontStyle:'italic',fontSize:'20'}} className="mt-4 p-3">Style Binding</h2>
            <input type="text" placeholder="Enter your name" onChange={handleNameChange} className="form-control w-50" style={{textAlign:'center'}}/>
            <h2><b>{state.Subject}</b> React Js</h2>
       </div>
    )
}
export default Style;