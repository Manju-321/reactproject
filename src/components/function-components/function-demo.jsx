import React from "react"

const FunctionDemo=()=>{
    var id = 1;
    var name = "Samsung";
    var price = 451100;
    var stock = true;
    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <dl>
                <dt>Product Id</dt>
                <dd>{id}</dd>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Product Price</dt>
                <dd>{price}</dd>
                <dt>Product Stock</dt>
                <dd>{stock}</dd>
            </dl>
        </div>
    )
}
export default FunctionDemo;
