import React,{useState,useEffect} from "react";
import axios from "axios";

const Jsonaxios=()=>
{
    
    const [product,setProduct] = useState({"quotes":[]})

            useEffect(()=>
            {
                axios.get("https://dummyjson.com/quotes")
                .then((response)=>{
                    
                    setProduct(response.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
            },[]);
    return(
        <div className="container-fluid">
            {/* <div className="d-flex justify-content-between bg-dark text-white p-1">
                <div className="ms-4">
                    <h1 style={{"text-align":"center"}}><i>Dummy Data</i></h1>
                </div>
                <div className="p-3">
                    <span className="me-4">HOME</span>
                    <span className="me-4">PRODUCTS</span>
                    <span className="me-4">DETAILS</span>
                    <span className="me-4">CONTACT</span>
                </div>
                <div className="p-3">
                    <span className="bi bi-globe me-4"></span>
                    <span className="bi bi-person me-4"></span>
                    <span className="bi bi-cart me-4"></span>
                    <span className="bi bi-whatsapp me-4"></span>
                </div>
            </div>
            
        
                <div className="col md-3 d-flex flex-wrap">
                    {
                        dummy.products.map(item=>
                            <div key={item.id} className="card m-2 p-2">
                                <img src={item.images[0]} height="200" className="card-img-top" />
                                <div className="card-body">
                                    <dl>
                                        <dt>TITLE</dt>
                                        <dd>{item.title}</dd>
                                        <dt>PRICE</dt>
                                        <dd>{item.price}</dd>
                                        <dt>BRAND</dt>
                                        <dd>{item.brand}</dd>
                                        <dt>RATING</dt>
                                        <dd>{item.rating}</dd>
                                    </dl>
                                    <button className="btn w-100">Buy</button>
                                </div>
                            </div>

                        )
                    }
                </div> */}
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>QUOTE</th>
                        {/* <th>COMPLETED</th> */}
                        <th>AUTHOR</th>
                        {/* <th>TOTAL</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        product.quotes.map((products)=>
                        <tr key={products.id}>
                            <td>{products.id}</td>
                            <td>{products.quote}</td>
                            <td>{products.author}</td>
                            {/* <td>{products.products}</td> */}
                            {/* <td>{item.completed}</td> */}
                            {/* <td>{products.userId}</td> */}
                            {/* <td>{products.total}</td> */}
                        </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    )
}
export default Jsonaxios;

// import React,{useState,useEffect} from "react";
// import axios from "axios";

// const Jsonaxios=()=>{

//     const [rower,setRower] = useState({photos:[]});
    
//     useEffect(()=>{
//         axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY")
//         .then((response)=>{
//             setRower(response.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         },[]);
//     })
//     return(
//         <div className="container-fluid">
//             <h2>NASA ROWER IMAGES</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th>Id</th>
//                         <th>Sol</th>
//                         <th>Earth Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         rower.photos.map((item)=>
//                         <tr key={item.id}>
//                             <td><img src={item.img_src} width="300px" height="100px"/></td>
//                             <td>{item.id}</td>
//                             <td>{item.sol}</td>
//                             <td>{item.earth_date}</td>
//                         </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default Jsonaxios;
