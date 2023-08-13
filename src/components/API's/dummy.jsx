import React,{useState,useEffect}from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import axios from 'axios';
import Home from './home';
import Dummy_Product from './dummy_product';
import Category from './category';


const Dummy=()=>
{
    const[categories,setCategories] = useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then(res=>{setCategories(res.data)})
    },[]);
    return(
        <div className='container-fluid md-3'>
            <BrowserRouter>
            <div className='d-flex justify-content-between bg-dark text-white mt-2 rounded-3'>
                <div className='ms-2'><h2><i>DUMMY JSON</i></h2></div>
                <div className='mt-2'>
                    {/* <span className='me-3'><Link to="dummy_product">HOME</Link></span>
                    <span className='me-3'><Link to="dummy_product">PRODUCTS</Link></span> */}
                    <span className='me-3'>DETAILS</span>
                </div>
                <div><input type="text" className='form-control mt-1'/></div>
                <div className='mt-2'>
                    <span className='bi bi-globe me-3'></span>
                    <span className='bi bi-instagram me-3'></span>
                    <span className='bi bi-whatsapp me-3'></span>
                    <span className='bi bi-facebook me-3'></span>
                </div>
            </div>
            <div className='mt-2'>
                <div className='row' style={{width:"100%",height:"80vh"}}>
                    <div className='col-2 border border-2 rounded-2'>
                       <h2>Categories list</h2>
                       <hr/>
                       <ol>
                        {
                         categories.map((cateList)=><li key={cateList} ><Link to={`/category/${cateList}`} className="text-decoration-none text-dark">{cateList}</Link></li>)   
                        }
                       </ol>
                       {/* <ol>
                        {
                            categories.map((cateList)=><li key={cateList}><Link to={`/category/${cateList}`}>{cateList}</Link></li>)
                        }
                       </ol> */}
                    </div>
                    <div className='col-10 border border-2 rounded-2'>
                        <Routes>
                            <Route path="/" element={<h2>Welcome</h2>}/>
                            <Route path="/category/:categSelect" element={<Category/>}/>
                            {/* <Route path='/category/:categSelect' element={<Category/>}/> */}
                            <Route path="dummy_product" element={<Dummy_Product/>}/>
                            <Route path="*" element={<h3>Requested Path Not found</h3>}/>
                        </Routes>
                    </div>
                </div>
            </div>
            <div className='border border-3 mt-2 rounded-2' style={{height:"8vh",width:"100%"}}></div>
            </BrowserRouter>
        </div>
    )
}
export default Dummy;