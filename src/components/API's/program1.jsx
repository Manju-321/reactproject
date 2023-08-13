import React,{useEffect,useState} from "react";
import axios from 'axios';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Program2 from "./program2";
import Home from "./home";
import Program3 from "./program3";


const Program1=()=>
{
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products/categories")
        .then((res)=>{setCategories(res.data);})
        // .catch((err)=>{console.log(err);})
    },[]);

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <div className="d-flex justify-content-between p-1 bg-dark text-white m-2">
                <div><h2>Dummy Json</h2></div>
                <div className="mt-2">
                    <span className="me-3">Home</span>
                    <span className="me-3">Products</span>
                    <span>Details</span>
                </div>
                <div><input type="text" className="form-control mt-1"/></div>
                <div className="mt-2">
                    <span className="bi bi-whatsapp me-4"></span>
                    <span className="bi bi-facebook me-4"></span>
                    <span className="bi bi-twitter me-4"></span>
                    <span className="bi bi-instagram me-4"></span>
                </div>
            </div>
            <div>
                <div className="row m-2">
                    <div className="col-3 border border-4 rounded-3 ms-5 me-3">
                        <h3 className="text-center">Categories</h3>
                        <hr />
                        <ol>
                            {
                                categories.map((cateList)=><li key={cateList}><Link to={`/program2/${cateList}`} className="text-decoration-none text-dark">{cateList}</Link></li>)
                            }
                        </ol>
                    </div>
                    <div className="col-8 border border-4 rounded-3">
                        <h2 className="text-center">Products</h2>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/program2/:categSelect" element={<Program2/>}>
                                 <Route path="program3/:prodId" element={<Program3/>}/>
                            </Route>
                            <Route path="*" element={<h2>Request path not found</h2>}/>
                        </Routes>
                        <hr />
                    </div>
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default Program1;