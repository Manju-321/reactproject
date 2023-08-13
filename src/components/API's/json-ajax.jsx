import React,{useEffect, useState} from "react";
import $ from "jquery";
import "./json-ajax.css";

const Jsonajax=()=>
{  
    const [data,setData] = useState([]);
    
    useEffect(()=>
    {
        $.ajax({
            method:"get",
            url:"https://jsonplaceholder.typicode.com/photos",
            success:(response) => {
                setData(response);
            },
            error:(response)=>{
                console.log(response);
            }
        })
    });
    return(
        <div className="container-fluid">
            <h1 style={{color:'red',backgroundColor:'yellow'}}>JSON PLACE HOLDER</h1>
            <div className="row">
            <div className=" col md-3 d-flex flex-wrap">
                {
                    data.map((item)=>
                    <div key={item.id} className="card m-2 p-2">
                        <img src={item.url} height="200" className="card-img-top"/>
                        <div className="card-body">
                            <dl>
                                <dt>THUMBNAILURL</dt>
                                <dd><img src={item.thumbnailUrl} height="50"/></dd>
                                <dt>ID</dt>
                                <dd>{item.id}</dd>
                                <dt>TITLE</dt>
                                <dd>{item.title}</dd>       
                            </dl>
                            <button className="btn w-100">Buy</button>
                        </div>
                    </div>
                    )
                }
            </div>
            </div>
        </div>
    )
}
export default Jsonajax;