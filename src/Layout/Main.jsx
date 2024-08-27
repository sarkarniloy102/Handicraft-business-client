import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div data-theme="light" >
            <div className="mx-4 lg:mx-20">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Main;