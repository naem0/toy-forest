import bg from '../../../assets/8682612.jpg'

const Banner = () => {
    return (
        <div className="-mt-60 pt-64 pb-16 shadow-xl -m-4" style={{
            backgroundImage: `url(${bg})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'full'
        }}>
            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="text-center text-white">

                <h1 className="font-bold text-7xl ">Toy Forest</h1>
                <h3 className="text-3xl font-medium  py-4">Like a Superstar</h3>
                <div className="flex gap-12 justify-center md:w-2/3 lg:w-1/2 mx-auto  font-semibold">
                    <p>
                        Toy Forest: Unlock the Joy of Learning! Explore our vast collection of educational toys designed to engage young minds and make learning fun. From interactive puzzles and building blocks to science kits and coding games, we offer a wide range of educational toys for children of all ages. Discover the power of play and watch as your child's curiosity and knowledge grow with Toy forest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;