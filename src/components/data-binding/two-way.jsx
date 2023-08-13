import React,{useState} from "react";

const Twoway=()=>{

    const [product,setProducts] = useState({});
    
    function handleNameChange(e){
        setProducts({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
           
        })
    }

    function handlePriceChange(e){
        setProducts({
            Name:product.Name,
            Price:e.target.value,
            City:product.City,
            
        })
    }

    function handleCityChange(e){
        setProducts({
            Name:product.Name,
            Price:product.Price,
            City:e.target.value,
            
        })
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2>Products</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control"/></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePriceChange} className="form-control"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={handleCityChange}>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                            </select>
                        </dd>
                    </dl>
                </div>
                <div className="col-3">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                    </dl>
                </div>
                <div className="col-3">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                    </dl>
                </div>
                <div className="col-3">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                    </dl>
                </div>
                <div className="col-3">
                    <h2>Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
export default Twoway;