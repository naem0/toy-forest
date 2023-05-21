import usetitle from "../../component/useTitle";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopCards from "./ShopCards/ShopCards";
import Sponsored from "./Sponsored/Sponsored";

const Home = () => {
    usetitle('Home')
    return (
        <div className="">
            <Banner></Banner>
            <Sponsored></Sponsored>
            <ShopCards></ShopCards>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;