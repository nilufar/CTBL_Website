// importing components
import NavbarSocials from "./navbar-socials/NavbarSocials";
import NavbarMenus from "./navbar-menus/NavbarMenus";

const Navbar = () => {
    return (
        <div className=" flex flex-col">
            {/* social links section */}
            <NavbarSocials></NavbarSocials>

            {/* logo and menu section */}
            <NavbarMenus></NavbarMenus>
        </div>
    );
}

export default Navbar;