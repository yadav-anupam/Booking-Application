import { Outlet } from "react-router-dom";
import Header from "../Header/IndexHeader";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            
        </div>
    );
}   
export default Layout;