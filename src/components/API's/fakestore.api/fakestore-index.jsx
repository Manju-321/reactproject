import React,{useEffect,useState}from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import axios from "axios";
import FakekstoreHome from "./fakestore-home";



const FakestoreIndex=()=>
{
    const[categories,setCategories] = useState([])
   
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then((res)=>{setCategories(res.data);})
        .catch((err)=>{console.log(err);})
    },[])
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <div>
                    <h2>Fakestore Api</h2>
                    <ol>
                        {
                            categories.map((cateName)=><li key={cateName}><Link to={`/fakekstore-home/${cateName}`}>{cateName}</Link></li>)
                        }
                    </ol>
                    <Routes>
                        <Route path="fakestore-home" element={<FakekstoreHome/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default FakestoreIndex;