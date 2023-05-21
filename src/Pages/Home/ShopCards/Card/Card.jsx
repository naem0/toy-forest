import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, photo, name, price, rating } = product
    return (
        <div>
            <div
                className="card card-compact bg-base-100 shadow-lg hover:border-2 hover:shadow-none"
            >
                <figure className="w-3/4 mx-auto p-4"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"><img src={photo} alt="toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-slate-600">{name}</h2>
                    <h3 className='font-bold text-2xl text-cyan-400'>${price}</h3>
                    <div className="card-actions flex justify-between items-center">
                        <div className="flex gap-2">
                            <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
                            <p className="text-slate-600 text-xs">{rating}</p>
                        </div>
                        <Link to={`/toy-details/${_id}`}
                            data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">

                            <button
                                className="btn rounded-full text-sm bg-cyan-400 hover:bg-cyan-500 border-0 font-bold">
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;