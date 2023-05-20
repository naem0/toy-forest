

const Banner = () => {
    return (
        <div className="-mt-60 pt-64 pb-16 shadow-xl -m-4" style={{
            backgroundImage: `url('https://c0.wallpaperflare.com/preview/265/849/245/toys.jpg')`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }}>
            <div className="text-center text-white">
                <h1 className="font-bold text-7xl ">Toy Forest</h1>
                <h3 className="text-3xl font-medium text-white py-4">Like a Superstar</h3>
                <div className=" flex gap-12 justify-center md:w-2/3 lg:w-1/2 mx-auto text-slate-800 font-semibold">
                    <p>
                    Toy Forest: Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun. From interactive puzzles and building blocks to science kits and coding games, we offer a wide range of educational toys for children of all ages. Discover the power of play and watch as your child's curiosity and knowledge grow with Toy forest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;