import React,{useEffect,useState}from 'react';
import axios from 'axios';

const Dummy_Product=()=>
{
    const[product,setProduct] = useState({"products":[]});

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>{setProduct(res.data)})
    },[]);
    return(
        <div className='container-fluid' >
            <h1 style={{textAlign:"center"}}>Dummy Products</h1>
           <div className='col d-flex flex-wrap overflow-auto' style={{width:"100%",height:"70vh"}}>
                {
                    // product.products.map((product)=><ul key={product}>
                    // <li>{product.title}</li>
                    // </ul>)
                    product.products.map(product=>
                    <div className='card m-2 p-2' key={product.id} style={{height:"50vh"}}>
                        <img src={product.images[0]} style={{width:"100%",height:"150px"}} className='card-img-top p-2'/>
                        <div className='card-body overflow-auto' style={{height:'20vh'}}>
                            <dl>
                                <dt>TITLE</dt>
                                <dd>{product.title}</dd>
                                <dt>BRAND</dt>
                                <dd>{product.brand}</dd>
                                <dt>DESCRIOTION</dt>
                                <dd>{product.description}</dd>
                            </dl>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-primary w-100'>Details</button>
                        </div>
                    </div>)
                }
           </div>
        </div>
    )
}
export default Dummy_Product;