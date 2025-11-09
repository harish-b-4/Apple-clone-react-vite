import React from "react";

import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa"


const Navbar = () => {
    return (
        <nav className="bg-black/95 text-gray-300 flex justify-between md:justify-center gap-10 items-center py-3 px-5 sticky top-0 z-20">
            <FaApple />
            <ul className="flex gap-10 text-xs hidden md:flex">
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">Tv & Home</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Support</a></li>
            </ul>

            <div className="flex items-center gap-10">
                <FaSearch />
                <FaShoppingBag />
                <div className="md:hidden">
                    <FaBars />
                </div>
            </div>

        </nav>
    )
}


export default Navbar;