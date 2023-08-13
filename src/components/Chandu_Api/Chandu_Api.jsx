import React,{useEffect,useState} from "react";
import axios from "axios";

const Chandu_Api=()=>{

    const[cards,setCards] = useState({"quotes":[]})

              
                //  useEffect(()=>{
                //                   axios.get("https://dummyjson.com/quotes")
                //                   .then(res=>{setCards(res.data)}) 
                //                },[]);
                // useEffect(()=>{
                //     axios.get("https://dummyjson.com/quotes")
                //     .then(res=>{setCards(res.data)})
                // },[]);

                useEffect(()=>{
                    axios({mathod:"get",url:"https://dummyjson.com/quotes"})
                    .then(res=>{setCards(res.data)})
                },[]);
        // useEffect(()=>{
                //     axios({"method":"get","url":"https://dummyjson.com/quotes"})
                //     .then(x=>setCards(x.data))                                  
                //               },[])

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/quotes")
    //     .then(r=>response.json())
    //     .then(data=>setCards(data))
    // },[]);

    return(
        <div className="container-fluid">
            <h2>Dummy Json Api</h2>
            {/* {
                cards.quotes.map((product)=><ul key={product.id}>
                    <li>{product.quote}</li>
                    <li>{product.author}</li>
                </ul>)
            } */}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>QUOTE</th>
                        <th>AUTHOR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cards.quotes.map((product)=><tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.quote}</td>
                            <td>{product.author}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Chandu_Api;