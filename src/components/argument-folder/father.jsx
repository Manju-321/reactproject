import React,{useState} from "react";
import Child from "./child";
import Grandchildren2 from "./grandchildren2";

const Father=(props)=>{
    const [user,setUser] = useState("Manju");
    const updateuser=(e)=>{
        return setUser(e)
    }
    return(
        <div className="container-fluid">
            <h2>Parent Component</h2>
            <h2>{user}</h2>
            <h2>{props.grandchild}</h2>
            <h2>{props.family}</h2>
            <h2>{props.qwe}</h2>
            <Child value={user} click={updateuser} abc={props.grandchild} rty={props.qwe}/>
            <Grandchildren2 poi={props.qwe}/>
        </div>
    )
}
export default Father;
// import React,{useState} from "react";
// import Child from "./child";

// const Father=(prpos)=>{
//     const [user,setUser] = useState("Manju");
//     const updateuser=(e)=>{
//         return setUser(e)
//     }
//     return(
//         <div className="container-fluid">
//             <h3>Parent Component</h3>
//             <h3>{user}</h3>
//             <Child value={user} abc={prpos.grandchild}/>
//         </div>
//     )
// }
// export default Father;