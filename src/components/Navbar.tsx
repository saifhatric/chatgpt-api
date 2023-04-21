import React, { useState } from 'react'
import { navLinks } from './utils';
import { Link } from 'react-router-dom'
import Sidebar from './SideBar';
const Navbar = () => {
    const [click, setClick] = useState<boolean>(false)
    return (
        <div className="bg-primary ">
            <nav className="relative px-8 py-5 md:py-4 flex justify-between items-center border-y border-gray-500 ">
                <div
                    className="text-3xl font-bold leading-none flex items-center space-x-4"

                >

                    <span className="text-gray-300 text-xl">
                        <Link to={"/"} >
                            ChatyUI
                        </Link>
                    </span>
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setClick(!click)}
                        className="navbar-burger flex items-center fixed 
                        right-[1%] top-[1%]
                        text-gray-300 py-5 mr-2 sm:hidden">
                        <svg
                            className="block h-6 w-8 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                {click ? (
                    <div className='sm:hidden absloute'>
                        <Sidebar />
                    </div>
                )
                    : click}
                <ul className="hidden sm:flex sm:items-center grow mx-10 space-x-6">
                    {navLinks.map((link, index) => (

                        <li key={index} className='className="text-sm text-gray-400 
                        hover:text-gray-600 "' >
                            <Link to={link.adrress}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:block">
                    <div className="flex items-center space-x-2">
                        <img
                            className="inline-block w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="John Doe"
                        />
                        <span className="flex flex-col">
                            <span className="text-sm font-poppins  text-gray-200">
                                John Doe
                            </span>
                            <span className="text-sm font-poppins text-gray-500 dark:text-gray-400 cursor-pointer">
                                View Profile
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </div >
    );
};


export default Navbar