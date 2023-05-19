

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, price, name, subcategory, photo, quantity, sellerName, sellerEmail, rating } = product;
    return (

        <tr>
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
            <td> {rating}</td>
            <th>
                <button className="btn  btn-sm bg-cyan-500 border-0 hover:bg-cyan-600">View Details</button>
            </th>
        </tr>

    );
};

export default Product;