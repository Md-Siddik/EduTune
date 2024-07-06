import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import useUserInfo from "../userInfo/useUserInfo";

const Navbar = () => {

    const navigate = useNavigate();

    const userData = useUserInfo();
    const [id, setId] = useState();

    useEffect(() => {
        userData?.map(user => setId(user._id));
    }, [userData])

    const [user, setUser] = useState();

    useEffect(() => {
        userData?.map(user => setUser(user));
    }, [userData])


    // console.log(user?.user);

    // const handleUpdate = () => {
    //     const userLogin = user?.user === 'true' ? 'false' : 'true';

    //     fetch(`http://localhost:5000/user/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(userLogin),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {

    //         });
    // }

    const handleUpdate = () => {
        const userLogin = { user: 'false' };

        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userLogin),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/login');
                    setTimeout(() => {
                        window.location.reload();
                    }, 400);
                }
            });
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/pre_schooling'>Pre-Schooling</NavLink></li>
        <li><NavLink to='/kid_courses'>Kid`s Courses</NavLink></li>
        <li><NavLink to='/admission'>Admission</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {
            user?.user == 'true' && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        {/* <li>
            {
                user?.user == 'true' ? <button onClick={ handleUpdate }>Logout</button> : <NavLink to='/login'>Login</NavLink>
            }
        </li> */}
        <li>
            {
                user?.user == 'true' ? <button onClick={handleUpdate}>Logout</button> : <NavLink to='/login'>Login</NavLink>
            }
        </li>
    </>

    return (
        <div className="lg:container">
            <div className="navbar justify-between">
                <div className="navbar-start max-sm:w-full md:w-full">
                    <div className="dropdown max-lg:w-full">
                        <div className="max-lg:flex max-lg:justify-between">
                            <a className="btn btn-ghost text-3xl"><span className="text-violet-600">edu</span><span className="text-orange-500 ml-[-8px]">tune</span></a>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                        </div>
                        <div className="max-lg:flex max-lg:justify-end">
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-fit p-2 shadow">
                                {navLinks}
                                <div className="pl-3">
                                    <MdCall className="text-orange-400 text-xl mb-2" />
                                    <button><IoSearch /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex gap-4">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                    <div className="flex items-center gap-4">
                        <MdCall className="text-orange-400 text-xl" />
                        <button><IoSearch /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;