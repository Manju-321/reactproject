import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import {Routes,Route,Link,useParams} from 'react-router-dom';
import "./category.css";

const Category=()=>
{
    const[category,setCategory] = useState({"products":[]}); 
    const param=useParams();
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${param.categSelect}`)
        .then((res)=>{setCategory(res.data);})
        // .catch((err)=>{console.log(err);})
    },[param.categSelect])

    console.log(category);
    console.log(param);
    return(
        <div className="container-fluid">
            <div className='col d-flex felx-wrap overflow-auto' style={{width:"100%",height:"50vh"}}>
                {
                    category.products.map(smart=>
                                                <div className='card m-2 p-2' key={smart}>
                                                    <img src={smart.images[0]} height="150" width="200" className='card-img-top p-2'/>
                                                    <div className='card-body overflow-auto'>
                                                        <dl>
                                                            <dt>Title</dt>
                                                            <dd>{smart.title}</dd>
                                                            <dt>Stock</dt>
                                                            <dd>{smart.stock}</dd>
                                                            <dt>Price</dt>
                                                            <dd>{smart.price}</dd>
                                                            <dt>Description</dt>
                                                            <dd>{smart.description}</dd>
                                                        </dl>
                                                    </div>
                                                    <div className='card-footer'>
                                                        <button className='btn btn-danger w-100'>Details</button>
                                                    </div>
                                                </div>)
                }
            </div>
        </div>
    )
}
export default Category;  