import { useEffect, useState } from "react";
import Product from "./Product/Product";


const AllProducts = () => {
    const [products, setProducts]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toy-products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
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