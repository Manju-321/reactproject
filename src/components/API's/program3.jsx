import React,{useEffect,useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Program3=()=>
{
    const param = useParams();
    const [details,setDetails] = useState()

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${param.prodId}`)
        .then(res=>{setDetails(res.data);})
    },[param.prodId]);
    return(
        <div className="container-fluid">
            <h3>Details</h3>
            <dl>
                <dt>Id</dt>
                <dd>{details.id}</dd>
                <dt>Title</dt>
                <dd>{details.title}</dd>
                <dt>Brand</dt>
                <dd>{details.brand}</dd>
                <dt>Price</dt>
                <dd>{details.price}</dd>
            </dl>
        </div>
    )
}
export default Program3;