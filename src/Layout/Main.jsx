import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";
import bgoutlet from "../assets/1075604_181.jpg";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet
            style={{
                backgroundImage: `url(${bgoutlet})`,
                // backgroundImage: `url(${externalImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 'full'
            }}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;