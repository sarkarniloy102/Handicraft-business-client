import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div data-theme="light" >
            <div className="mx-4 lg:mx-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;