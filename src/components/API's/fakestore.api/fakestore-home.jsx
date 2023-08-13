import React,{useEffect,useState}from "react";
import axios from "axios";
import { BrowserRouter,Routes,Route,Link,useParam } from "react-router-dom";

const FakekstoreHome=()=>
{
    const [products,setProducts] = useState([{}])
    const param = useParam();

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{setProducts(res.data);})
        .catch((err)=>{console.log(err);})
    },[]);
    return(
        <div className="container-fluid">
            <ul>
                {
                    products.map(k )
                }
            </ul>
        </div>
    )
}
export default FakekstoreHome;