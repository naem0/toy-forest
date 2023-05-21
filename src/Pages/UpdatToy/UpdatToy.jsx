import { useContext,} from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authprovider";
import { useLoaderData } from "react-router-dom";
import usetitle from "../../component/useTitle";
import bg from '../../assets/3d-cartoon-background-children3.jpg'


const UpdatToy = () => {
    const data = useLoaderData();
    
    const { _id, price, name, subcategory, photo, quantity, details, rating } = data;
    usetitle(`Updat Toy - ${name}`)
    const {loading}= useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    const handleUpdatToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name?.value;
        const quantity = form.quantity?.value;
        const subcategory = form.category?.value;
        const details = form.details?.value;
        const photo = form.photo?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;

        const updatToys = { name, quantity, subcategory, rating, price, details, photo }

        // send data to the server
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy Updat Successfully ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <div
        style={{
            backgroundImage: `url(${bg})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }} className="-mx-4">
            <div className=" lg:p-24 p-12">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-slate-600">Updat Toy: {name}</h2>
                <form onSubmit={handleUpdatToy} className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="">
                                <input type="text" defaultValue={name} name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="">
                                <input type="text" defaultValue={quantity} name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="">
                                <input type="number" defaultValue={price} name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="">
                                <input type="number" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="">
                                <select name="category" defaultValue={subcategory} id="color" className="input input-bordered w-full">
                                    <option value="science">Science</option>
                                    <option value="language">Language</option>
                                    <option value="maths">Maths</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="">
                                <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">

                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <button className="btn bg-cyan-600 hover:bg-cyan-700 btn-block border-0 mt-12" >Updat Toy</button>
                    {/* <input type="submit" value="Add Toy" className="btn btn-block" /> */}
                </form>
            </div>
        </div>
    );
};

export default UpdatToy;