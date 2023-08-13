import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./home";
import Dummy_Product from "./dummy_product";

const Index=()=>
{
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <ol>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="js">JS</Link></li>
                <li><Link to="home">HOME</Link></li>
                <li><Link to="dimmy_product">Dummy Products</Link></li>
            </ol>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="html" element={<h1>HYPER TEXT MARKUP LANGUAGE</h1>}/>
                    <Route path="css" element={<h1>CASCADING STYLE SHEETS</h1>}/>
                    <Route path="js" element={<h1>JAVA SCRIPT</h1>}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="dimmy_product" element={<Dummy_Product/>}/>
                    <Route path="*" element={<h3>Requested Path Not found</h3>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default Index;