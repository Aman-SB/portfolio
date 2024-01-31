import React from "react";
import { NavLink } from "react-router-dom";

const Navlink = ({path,title}) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "" : ""
                } border-b border-gray-100 inline-block 
    lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
            }
        >
            <span className="flex gap-2 ">
                {title }
            </span>
        </NavLink>
    );
};

export default Navlink;
