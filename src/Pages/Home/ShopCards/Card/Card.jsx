

const Card = () => {
    return (
        <div>
            <div className="card card-compact p-8 bg-base-100 shadow-md">
                <figure className="w-3/4 mx-auto"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzPUBw0PrVvmWqtEgU7MdqXj-Lb1RF_xt0g&usqp=CAU" alt="toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-slate-600">Shoes!</h2>
                    <h3 className='font-bold text-3xl text-cyan-400'>$</h3>
                    <div className="card-actions justify-end">
                        <button className="btn rounded-full bg-cyan-400 border-0 font-bold">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;