import { useLoaderData } from "react-router-dom";
import usetitle from "../../component/useTitle";
import { Rating } from "@smastrom/react-rating";


const ToyDetails = () => {

    const data = useLoaderData();
    console.log(data)
    const { price, name, subcategory, photo, quantity, details, sellerName, sellerEmail, rating } = data;
    usetitle(`Toy Details - ${name}`)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-12">
            <div className=" m-auto">
                <img src={photo} alt="" />
            </div>
            <div>
                <div className="flex gap-2">
                    <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                    <p className="text-slate-600 text-xs">{rating}</p>
                </div>
                <h2 className="font-bold text-4xl text-slate-600 my-4">{name}</h2>
                <span className="bg-slate-100 text-sm text-slate-500 px-3 py-1 rounded-lg">Category: {subcategory}</span>
                <p className=" text-slate-500 my-5">{details}</p>
                <h3 className="text-3xl text-cyan-500 font-bold">${price}</h3>
                <p className="mt-3 text-slate-500">Available Quantity: {quantity}</p>
                <div className="flex justify-between">
                    <h5 className="mt-4 text-slate-600 font-semibold">Seller Name: {sellerName}</h5>
                    <p className="mt-4 text-slate-500">Email: {sellerEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;