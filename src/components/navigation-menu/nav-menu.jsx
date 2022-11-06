import { Link } from "react-router-dom";

const NavMenu = () => {

    return (
        <div className="flex gap-10">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/shop">Shop</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );

}

export default NavMenu;