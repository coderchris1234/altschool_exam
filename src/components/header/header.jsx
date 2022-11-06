import Logo from "../images/logo";
import NavIconList from "../images/nav-icon-list";
import NavMenu from "../navigation-menu/nav-menu";

const Header = () => {
    return (
        <div className="header flex justify-between py-6">
            <Logo />
            <NavMenu />
            <NavIconList />
        </div>
    );
}

export default Header;