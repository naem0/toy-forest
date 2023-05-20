import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider";
import MyToyTR from "./MyToyTR/MyToyTR";
import usetitle from "../../component/useTitle";


const MyToy = () => {
    usetitle('My Toy')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/my-toy?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-5/6 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Photo</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToyTR
                                key={myToy._id}
                                myToy={myToy}
                                myToys={myToys}
                                setMyToys={setMyToys}
                            ></MyToyTR>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;