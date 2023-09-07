import React,{useEffect,useState} from 'react';
import "./project.css";

const Project=()=>
{
    const [product,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState([]);

    function GetCartCount(){
        setCartCount(cartItems.length);
    }

    function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories")
        .then((response)=>response.json())
        .then((data)=>{
            data.unshift("all");
            setCategories(data);
        })
    }
    function LoadProducts(url){
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data);
        });
    }

    useEffect(()=>
    {
        LoadCategories();
        LoadProducts("http://fakestoreapi.com/products");
    },[]);

    function handleCategoryChange(event){
        if(event.target.value=="all"){
            LoadProducts("https://fakestoreapi.com/products");
        }else{
            LoadProducts(`http://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    function handleAddToCartClick(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response=> response.json())
        .then(data=>{
            cartItems.push(data);
            GetCartCount();
            alert(`${data.title}\nAdded to Cart`);
        })
    }

    function handleDeleteToCartClick(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response=> response.json())
        .then(data=>{
            cartItems.shift(data);
            GetCartCount();
            alert(`${data.title}\nDelete Cart Item`);
        })
    }

    function handleHomeClick(){
        LoadProducts("http://fakestoreapi.com/products");
    } 
    function handleElectronicsClick(){
        LoadProducts("http://fakestoreapi.com/products/category/electronics");
    }
    function handleJeweleryClick(){
        LoadProducts("http://fakestoreapi.com/products/category/jewelery");
    }
    function handleMensclothingClick(){
        LoadProducts("http://fakestoreapi.com/products/category/men's clothing");
    }
    function handleWomensclothingClick(){
        LoadProducts("http://fakestoreapi.com/products/category/women's clothing");
    }
    

    return(
        <div className='container-fluid'>
            <header>
                <div className='justify-content-between d-flex bg-dark text-white p-2 rounded-3'>
                    <div className='ms-2'><h2>FAKESTORE PRODUCTS</h2></div>
                    <div className='p-2'>
                        <span className='me-4'><button onClick={handleHomeClick} className="btn text-white">HOME</button></span>
                        <span className='me-4'><button onClick={handleElectronicsClick} className="btn text-white">ELECTRONICS</button></span>
                        <span className='me-4'><button onClick={handleJeweleryClick} className="btn text-white">JEWELERY</button></span>
                        <span className='me-4'><button onClick={handleMensclothingClick} className="btn text-white">MEN'S CLOTHING</button></span>
                        <span className='me-4'><button onClick={handleWomensclothingClick} className="btn text-white">WOMEN'S CLOTHING</button></span>
                    </div>
                    <div className='p-2'>
                        <span className='bi bi-person-fill me-4'></span>
                        <span className='bi bi-globe me-4'></span>
                        <span className='bi bi-whatsapp me-4'></span>
                        <button data-bs-target="#cart" data-bs-toggle="modal" className='btn btn-light position-ralative'>
                            <span className='bi bi-cart4 me-4'></span>
                            <span className='badge rounded-circle bg-danger position-absolute'>{cartCount}</span>
                        </button>
                        <div className='modal fade' id="cart">
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h2 className='text-info'>Your Cart Items</h2>
                                        <button data-bs-dismiss="modal" className='btn-close'></button>
                                    </div>
                                    <div className='modal-body'>
                                        <table className='table table-hover'>
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Preview</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartItems.map(item=>
                                                        <tr>
                                                            <td>{item.title}</td>
                                                            <td><img src={item.image} width="50" height="50"/></td>
                                                            <td>{item.price}</td>
                                                            <td>
                                                                <button id={product.id} onClick={handleDeleteToCartClick} className='btn btn-danger'>
                                                                    <span className='bi bi-trash-fill'></span>
                                                                </button>
                                                            </td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 row">
                <nav className='col-2'>
                    <div>
                        <label className='form-label'><b>Select Category</b></label>
                        <div><select onChange={handleCategoryChange} className='form-select'>
                        {
                            categories.map(category=>
                                <option key={category} value={category}>{category.toUpperCase()}</option>)
                        }   
                             </select>
                        </div>
                    </div>
                </nav>
                <main className='col-10 d-flex flex-wrap'>
                    {
                        product.map(product=>
                            <div key={product.id} className='card m-2 p-2'>
                                <img src={product.image} height="150" className='card-img-top' style={{height:"200px",width:"180px"}} />
                                <div className='card-header'>
                                    <p className='card-title'>{product.title}</p>
                                </div>
                                <div className='card-body'>
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd><span className='bi bi-star-fill text-danger'></span>{product.rating.rate}[{product.rating.count}]</dd>
                                    </dl>
                                </div>
                                <div className='card-footer'>
                                    <button id={product.id} onClick={handleAddToCartClick} className='btn btn-primary w-100'>
                                        <span className='bi bi-cart'></span>Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}
export default Project;
