import { useEffect, useState } from "react";
import Product from "./Product/Product";
import usetitle from "../../component/useTitle";


const AllProducts = () => {
    const [products, setProducts]=useState([])
    const [serchText, setSerchText]=useState('')
    usetitle('All Products')
    useEffect(() => {
        fetch(`http://localhost:5000/toy-products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const hendeleSerch=()=>{
        fetch(`http://localhost:5000/toy-serch/${serchText}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    return (
        <div>
            <div className="text-center my-8 flex justify-center align-middle">
                <input onChange={(e)=>setSerchText(e.target.value)} type="text" placeholder="Search" className=" input input-bordered w-full max-w-xs" />
                <button onClick={hendeleSerch} className="btn -ms-20 bg-cyan-500 border-0 hover:bg-cyan-600">Search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-5/6 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;