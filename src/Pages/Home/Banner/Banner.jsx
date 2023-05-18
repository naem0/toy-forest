

const Banner = () => {
    return (
        <div className="-mt-24 pt-36 pb-16 shadow-xl" style={{
            backgroundImage: `url('https://c0.wallpaperflare.com/preview/265/849/245/toys.jpg')`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }}>
            <div className="text-center text-white">
                <h1 className="font-bold text-7xl ">Shine Bright</h1>
                <h3 className="text-4xl font-medium py-8">Like a Superstar</h3>
                <div className=" flex gap-12 justify-center">
                    <button className="btn btn-outline btn-secondary">Button</button>
                    <button className="btn btn-outline btn-secondary">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;