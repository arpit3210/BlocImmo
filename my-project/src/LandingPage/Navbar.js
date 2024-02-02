import React from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                        </a>

                        <div className="flex-col justify-center items-center text-3xl lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">



                            <GiHamburgerMenu />



                            <IoMdClose />


                            </button>



                        </div>
                    </div>

                    <div className="lg:flex max-md:hidden lg:items-center">
                    <a href="#" class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">features</a>
                    <a href="#" class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">downloads</a>
                    <a href="#" class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">docs</a>
                    <a href="#" class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">support</a>
                    <a href="#" class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">blog</a>
    

                        <div className="relative mt-4 lg:mt-0 lg:mx-4">
               
              
                        </div>

                       
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
