import React,{useState} from "react";

const Project1=()=>{
    const [first,setFirst] = useState(1);
    const [second,setSecond] = useState(0);
    
    const increaseClick=()=>{
         let a=first + second;
         setFirst(a);
         setSecond(first);
    }
    const decreaseClick=()=>{
        setSecond(first-second);
        setFirst(second);
    }
    return(
        <div className="container-fluid">
            <div className="text-center mt-5">
            <p>first number is: {second}</p>
            <button className="btn btn-warning" onClick={increaseClick}>Incriment +</button><br/>
            <button className="btn btn-primary"onClick={decreaseClick}>Decrement -</button>
            </div>
        </div>
    )
}
export default Project1;