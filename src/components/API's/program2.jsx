import React,{useEffect,useState} from "react";
import axios from "axios";
import {Routes,Route,Link,useParams } from "react-router-dom";
import Program3 from "./program3";


const Program2=()=>
{
    const [products,setProducts] = useState({"products":[]});
    const param=useParams();
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${param.categSelect}`)
        .then((res)=>{setProducts(res.data);})
        // .then((err)=>{console.log(err);})
    },[param.categSelect]);
    return(
        <div className="container-fluid">
            <table className="table table-hover overflow-auto m-2">
                <thead>
                    <tr>
                        <th className="bg-primary text-white">TITLE</th>
                        <th className="bg-primary text-white">BRAND</th>
                        <th className="bg-primary text-white">PRICE</th>
                        <th className="bg-primary text-white">IMAGES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.products.map((cat)=>
                        <tr key={cat}>
                            <td>{cat.title}</td>
                            <td>{cat.brand}</td>
                            <td>{cat.price}</td>
                            <td><img src={cat.images[0]} height="50vh" width="50px"/></td>
                        </tr>)
                    }
                </tbody>
            </table>
             {/* {
                products.map(product=> 
                    <li key={product.id}>
                        <Link to={`program3/${product.id}`}>{product.title}</Link>
                    </li>
                    )
            }
            <div>
                <Routes>
                    <Route path="program3/:prodId" element={<Program3/>} />
                </Routes>
            </div> */}
        </div>
    )
}
export default Program2;