import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authprovider";
import usetitle from "../../component/useTitle";
import bg from '../../assets/3d-cartoon-background-children.jpg'


const AddProducts = () => {
    const {user, loading}= useContext(AuthContext);
    usetitle('Add Products')
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name?.value;
        const quantity = form.quantity?.value;
        const sellerName = form.seller?.value;
        const sellerEmail = form.email?.value;
        const subcategory = form.category?.value;
        const details = form.details?.value;
        const photo = form.photo?.value;
        const price = form.price?.value;
        const rating = form.rating?.value;

        const newToys = { name, quantity, sellerName, sellerEmail, subcategory, rating, price, details, photo }
        console.log(newToys)

        // send data to the server
        fetch('http://localhost:5000/toy-products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }} className="-mx-4 md:mx-0">
            <div className=" lg:p-24 p-12">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-white">Add a toy</h2>
                <form onSubmit={handleAddToy} className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="">
                                <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="">
                                <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="">
                                <input type="text" name="email" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="">
                                <select name="category" id="color" className="input input-bordered w-full">
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
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">

                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <button className="btn bg-cyan-600 hover:bg-cyan-700 btn-block border-0 mt-12" >Add Toy</button>
                    {/* <input type="submit" value="Add Toy" className="btn btn-block" /> */}
                </form>
            </div>
        </div>
    );
};

export default AddProducts;