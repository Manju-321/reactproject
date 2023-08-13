import React ,{ useState } from "react";

export function FunctionState()
{
    const [categories] = useState(["Electronics","Footwear","Fashions"]);
    const [products] = useState([{Name:"oneplus",Price:41000},{Name:"Nike",Price:5200},{Jeans:"Shirt",Price:2000}]);
    return(
        <div className="container-fluid">
            <h2>Categories</h2>
            {
                categories.map((category)=>
                <li key={category}>{category}</li>
                )
            }
            <h2>Products</h2>
            {
                products.map((product)=>
                <li key={product}>{product.Name}:{product.Price}</li>
                )
            }
        </div>
    )
}