import React,{useState} from "react";

const Oneway=()=>{

    const [stock,setStock] = useState({});
    
    function handleNameChange(e){
        setStock({
            Name:e.target.value,
            Price:stock.Price,
            Rating:stock.Rating,
            user:stock.user,
            password:stock.password
        })
    }

    function handlePriceChange(e){
        setStock({
            Name:stock.Name,
            Price:e.target.value,
            Rating:stock.Rating,
            user:stock.user,
            password:stock.password
        })
    }

    function handleRatingChange(e){
        setStock({
            Name:stock.Name,
            Price:stock.Price,
            Rating:e.target.value,
            user:stock.user,
            password:stock.password
        })
    }

    function handkeUserChange(e){
        setStock({
            Name:stock.Name,
            Price:stock.Price,
            Rating:stock.Rating,
            user:e.target.value,
            password:stock.password
        })
    }

    function handlePasswordChange(e){
        setStock({
            Name:stock.Name,
            Price:stock.Price,
            Rating:stock.Rating,
            user:stock.user,
            password:e.target.value
        })
    }
    return(
        <div className="container-fluid">           
            <div className="row">
            <h2>Product Details</h2>
                <div className="border border-warning col-4">
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input type="text" className="form-control" onChange={handleNameChange}/></dd>
                        <dt>Product Price</dt>
                        <dd><input type="number" className="form-control" onChange={handlePriceChange} /></dd>
                        <dt>Product Rating</dt>
                        <dd><input type="text" className="form-control" onChange={handleRatingChange}/></dd>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" onChange={handkeUserChange}/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" onChange={handlePasswordChange}/></dd>
                    </dl>
                </div>
                    <div className="border border-primary col-8">
                        <dl>
                            <dt>Product Name</dt>
                            <dd  style={{color:'red',fontFamily:'fantasy'}}>{stock.Name}</dd>
                            <dt>Product Price</dt>
                            <dd style={{color:'violet',fontFamily:'cursive'}}>{stock.Price}</dd>
                            <dt>Product Rating</dt>
                            <dd style={{color:'orange',fontFamily:'monospace'}}>{stock.Rating}</dd>
                            <dt>User Name</dt>
                            <dd style={{color:'black',fontFamily:'serif',fontSize:"40px"}}>{stock.user}</dd>
                            <dt>Password</dt>
                            <dd style={{color:'brown',fontFamily:'sans-serif'}}>{stock.password}</dd>
                        </dl>
                    </div>             
            </div>
        </div>
    )
}
export default Oneway;