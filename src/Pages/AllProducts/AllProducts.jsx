import { useEffect, useState } from "react";
import Product from "./Product/Product";
import usetitle from "../../component/useTitle";
import { useNavigation } from "react-router-dom";


const AllProducts = () => {
    const [products, setProducts]=useState([])
    const [serchText, setSerchText]=useState('')
    const navigation = useNavigation();
    console.log(navigation.state)
    if (navigation.state == 'loading') {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    usetitle('All Products')
    useEffect(() => {
        fetch(`https://toy-marketplace-server-pi.vercel.app/toy-products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const hendeleSerch=()=>{
        fetch(`https://toy-marketplace-server-pi.vercel.app/toy-serch/${serchText}`)
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