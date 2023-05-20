import usetitle from "../../component/useTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopCards from "./ShopCards/ShopCards";

const Home = () => {
    usetitle('Home')
    return (
        <div className="">
            <Banner></Banner>
            <ShopCards></ShopCards>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;