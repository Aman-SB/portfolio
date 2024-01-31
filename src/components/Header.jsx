import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "lucide-react";

// const pages = [
//     { path: "/about", title: "About" },
//     { path: "/skill", title: "Skill" },
//     { path: "/project", title: "Project" },
//     { path: "/contact", title: "Contact" },
// ];

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "" : ""
                        } border-b border-gray-100 inline-block 
                lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                    }
                >
                    <span className="flex gap-2 ">
                        <HomeIcon /> Home
                    </span>
                </NavLink>
                <div className="nav-right flex justify-center max-w-3xl items-center gap-5">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                                isActive ? "" : ""
                            } border-b border-gray-100 inline-block 
                lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                        }
                    >
                        <span className="flex gap-1 ">About</span>
                    </NavLink>
                    <NavLink
                        to="/skill"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                                isActive ? "" : ""
                            } border-b border-gray-100 inline-block 
                lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                        }
                    >
                        <span>Skill</span>
                    </NavLink>
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                                isActive ? "" : ""
                            } border-b border-gray-100 inline-block 
                lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                        }
                    >
                        <span>Project</span>
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                                isActive ? "" : ""
                            } border-b border-gray-100 inline-block 
                lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                        }
                    >
                        <span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
