

// eslint-disable-next-line react/prop-types
const Card = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {_id, photo, name, price, rating}=product
    return (
        <div>
            <div className="card card-compact p-8 bg-base-100 shadow-lg hover:border-2 hover:shadow-none">
                <figure className="w-3/4 mx-auto"><img src={photo} alt="toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-slate-600">{name}</h2>
                    <h3 className='font-bold text-3xl text-cyan-400'>${price}</h3>
                    <div className="card-actions justify-end">
                        <button className="btn rounded-full bg-cyan-400 hover:bg-cyan-500 border-0 font-bold">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;