import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const MyToyTR = ({ myToy, setMyToys, myToys}) => {
    // eslint-disable-next-line react/prop-types
    const { _id, price, name, subcategory, photo, quantity} = myToy;
   
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm bg-cyan-500 border-0 hover:bg-cyan-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h4 className="font-semibold py-0">{name}</h4>
                <br />
                <span className="badge badge-ghost badge-sm">Category : { subcategory}</span>
            </td>
            <td>$ {price}</td>
            <td> {quantity}</td>
            <th>
                <button className="btn  btn-sm bg-cyan-500 border-0 hover:bg-cyan-600">Edit</button>
            </th>
        </tr>
    );
};

export default MyToyTR;