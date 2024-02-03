import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({  }) => {


    const [OpenNav, setOpenNav] = useState(false)


    const handleOpenNav = () => {

        if (OpenNav) {
            setOpenNav(false);
        } else
            setOpenNav(true);

    }



    return (
        <nav className=" bg-black/40  absolute top-0 z-30 w-[100vw] shadow ">
            <div className="container   mx-auto">
                <div className="flex  py-4 justify-between  items-center">
                    <div className="flex px-3 items-center justify-between">
                        <div className='text-red-600  rounded-3xl font-bold  text-3xl'>  BlocImmo </div>

                    </div>








                    <div className="lg:flex text-xl max-lg:hidden lg:items-center">
                        <a href="#" class=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Properties</a>
                        <a href="#" class=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">The Exchange</a>
                        <a href="#" class=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">About Us</a>
                        <a href="#" class=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Learn</a>
                        <a href="#" class=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Contact Us</a>
                    </div>


                    <div className='flex max-lg:flex-col max-lg:hidden justify-center items-center   gap-7'>
                        <a className=' text-red-700 w-28  border font-bold   border-red-800 py-3 rounded-xl px-9  '>Login</a>
                        <a className=' text-white py-3 bg-red-600 font-bold w-36   border border-red-800  rounded-xl px-9'>  Register</a>
                    </div>



                    <div className="flex  px-2 justify-end text-white text-2xl lg:hidden">
                        {OpenNav ? (
                            <IoMdClose onClick={handleOpenNav} />
                        ) : (
                            <GiHamburgerMenu onClick={handleOpenNav} />
                        )}
                    </div>





                    {OpenNav &&
                        <div className=' bg-white opacity-100 px-4 absolute top-[70px] z-30 w-[100vw] h-[100vh] flex flex-col gap-4 py-7'>
                            {/* Your content goes here */}
                            <div className='text-xl hover:text-red-700 text-gray-600'>Properties</div>
                            <div className='text-xl hover:text-red-700 text-gray-600'>The Exchange</div>
                            <div className='text-xl hover:text-red-700 text-gray-600'>About Us</div>
                            <div className='text-xl hover:text-red-700 text-gray-600'>Learn</div>
                            <div className='text-xl hover:text-red-700 text-gray-600'>Contact Us</div>

                        </div>
                    }




                </div>
            </div>
        </nav>
    );
};

export default Navbar;
