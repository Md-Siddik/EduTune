import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/pre_schooling'>Pre-Schooling</NavLink></li>
        <li><NavLink to='/kid_courses'>Kid`s Courses</NavLink></li>
        <li><NavLink to='/admission'>Admission</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">edu<span className="text-orange-400 ml-[-7px]">tune</span></a>
                </div>
                <div className="flex-none gap-5">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    <MdCall className="text-orange-400"/>
                    <IoSearch />
                </div>
            </div>
        </div>
    );
};

export default Navbar;