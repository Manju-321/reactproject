import React,{useEffect, useState} from "react";
// import $ from "jquery";
import axios from "axios";

const Jsonplaceholder=()=>
{  
    const [dummy,setDummy] = useState([]);
    
    useEffect(()=>
    {
        // fetch("https://jsonplaceholder.typicode.com/photos")
        // .then(response=>response.json())
        // .then(data=>{
        //     setData(data);
        // })

        // $.ajax({
        //     method:"get",
        //     url:"https://jsonplaceholder.typicode.com/photos",
        //     success:(response) => {
        //         setData(response);
        //     },
        //     error:(response)=>{
        //         console.log(response);
        //     }
        // })
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{
            setDummy(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    return(
        <div className="container-fluid">
            <h1>JSON PLACE HOLDER</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummy.map((item)=>
                        <tr key={item.id}>
                           <div className="row">
                               <div className="col-6">
                                    <td>{item.id}</td>   
                               </div>
                               <div className="col-4">
                                   <td><img src={item.url} width="300px" height="100px" /></td>
                               </div>
                               <div className="col-4">
                                   <td>{item.title}</td>
                               </div>
                           </div>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Jsonplaceholder;