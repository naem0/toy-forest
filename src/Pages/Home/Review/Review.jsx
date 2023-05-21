

const Review = () => {
    return (
        <div className="">
            <h1 className="font-bold text-center text-5xl text-slate-700 mb-14">Happy Claint</h1>
            <div className="bg-cyan-600 py-12 -mx-4">
                <div className="carousel w-full  text-white">
                    <div id="item1" className="carousel-item w-full my-6">
                        <div className="grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-3 mt-4 mx-auto ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxWiWuYzoIqqjw7foEMr3lHnkBvMwm-c-Zg&usqp=CAU" className="w-1/3 rounded-3xl m-auto" />
                            <div className="col-span-2 ms-4 md:w-4/5">
                                <h4 className="font-bold text-2xl mb-6">
                                    Fusce ut ullamcorper lacus. Morbi non tempus nisl, sit amet maximus sapien. Maecenas accumsan tincidunt libero, in pretium elit imperdiet ac.
                                </h4>
                                <p className="font-semibold">Mare Qui</p>
                                <p>exmpol@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-3 mt-4 mx-auto ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxWiWuYzoIqqjw7foEMr3lHnkBvMwm-c-Zg&usqp=CAU" className="w-1/3 rounded-3xl m-auto" />
                            <div className="col-span-2 ms-4 md:w-4/5">
                                <h4 className="font-bold text-2xl mb-6">
                                    Fusce ut ullamcorper lacus. Morbi non tempus nisl, sit amet maximus sapien. Maecenas accumsan tincidunt libero, in pretium elit imperdiet ac.
                                </h4>
                                <p className="font-semibold">Mare Qui</p>
                                <p>exmpol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-3 mt-4 mx-auto ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxWiWuYzoIqqjw7foEMr3lHnkBvMwm-c-Zg&usqp=CAU" className="w-1/3 rounded-3xl m-auto" />
                            <div className="col-span-2 ms-4 md:w-4/5">
                                <h4 className="font-bold text-2xl mb-6">
                                    Fusce ut ullamcorper lacus. Morbi non tempus nisl, sit amet maximus sapien. Maecenas accumsan tincidunt libero, in pretium elit imperdiet ac.
                                </h4>
                                <p className="font-semibold">Mare Qui</p>
                                <p>exmpol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-3 mt-4 mx-auto ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxWiWuYzoIqqjw7foEMr3lHnkBvMwm-c-Zg&usqp=CAU" className="w-1/3 rounded-3xl m-auto" />
                            <div className="col-span-2 ms-4 md:w-4/5">
                                <h4 className="font-bold text-2xl mb-6">
                                    Fusce ut ullamcorper lacus. Morbi non tempus nisl, sit amet maximus sapien. Maecenas accumsan tincidunt libero, in pretium elit imperdiet ac.
                                </h4>
                                <p className="font-semibold">Mare Qui</p>
                                <p>exmpol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>

    );
};

export default Review;