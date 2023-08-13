import React,{useState} from "react";
import Grandchildren1 from "./grandchildren1";
import Grandchildren2 from "./grandchildren2";


const Grandchildren=(props)=>{
    const [name,setName] = useState("Grand Son");
    const updatename=(e)=>{
        return setName(e)
    }
    return(
        <div className="container-fluid">
            <h2>Grand Children</h2>
            <h2>{props.xyz}</h2>
            <h2>{props.uio}</h2>
            <Grandchildren1/>
            <Grandchildren2  qwe={props.xyz}/>
        </div>
    )
}
export default Grandchildren;