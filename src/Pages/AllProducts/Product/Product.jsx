import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
    console.log(product)
    // eslint-disable-next-line react/prop-types
    const { _id, price, name, subcategory, photo, quantity, sellerName, sellerEmail, rating } = product;
    return (

        <tr
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Category : {subcategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">Email: {sellerEmail}</span>
            </td>
            <td>$ {price}</td>
            <td> {quantity}</td>
            <td> <div className="">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                
            </div></td>
            <th>
                <Link to={`/toy-details/${_id}`}><button className="btn  btn-sm bg-cyan-500 border-0 hover:bg-cyan-600">View Details</button></Link>
            </th>
        </tr>

    );
};

export default Product;