import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SignInButton, SignedOut, SignedIn, UserButton, UserProfile, SignOutButton, SignUpButton } from '@clerk/clerk-react';


const Navbar = ({ }) => {


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
                        <Link to="/">
                            <div className='text-red-600  rounded-3xl font-bold  text-3xl'>  BlocImmo </div>

                        </Link>
                    </div>





                    <div className="lg:flex text-xl max-lg:hidden lg:items-center">
                        <a href="#" className=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Marketplace</a>
                        {/* <a href="#" className=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">The Exchange</a> */}
                        <a href="#" className=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">About Us</a>
                        <a href="#" className=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Learn</a>
                        <Link to="/contact" className=" text-white hover:underline hover:underline-offset-4 hover:text-red-600 transition-colors duration-300 transform lg:mt-0 lg:mx-4 ">Contact Us</Link>
                    </div>


                    <div className='flex max-lg:flex-col max-lg:hidden justify-center items-center   gap-7'>



                        {/* <SignedIn> */}


                        <SignedOut  >
                            <a className=' text-red-700 w-28 hover:bg-white border font-bold   border-red-800 py-3 rounded-xl px-9  '>
                                <div className=''>
                                    <SignInButton > Login </SignInButton>
                                </div>

                            </a>

                            <a className=' text-white py-3 bg-red-600 font-bold w-36 hover:bg-red-800  border border-red-800  rounded-xl px-9'>
                                <SignUpButton > Register </SignUpButton></a>

                            {/* </SignedIn> */}
                        </SignedOut>

                        <UserButton afterSignOutUrl="/"   ></UserButton>

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
                            <div className='text-xl hover:text-red-700 text-gray-600'>Marketplace</div>
                            {/* <div className='text-xl hover:text-red-700 text-gray-600'>The Exchange</div> */}
                            <div className='text-xl hover:text-red-700 text-gray-600'>About Us</div>
                            <div className='text-xl hover:text-red-700 text-gray-600'>Learn</div>
                           
                           <Link to="/contact">
                           <div className='text-xl hover:text-red-700 text-gray-600'>Contact Us</div>
                           </Link>

                            {/* <div className='text-xl hover:text-red-700 text-gray-600'>SignUp</div> */}

                          <Link to="/userprofile">
                          <div className='text-xl hover:text-red-700 text-gray-600'>
                                Profile
                            </div>

                          </Link>


                            <SignedOut afterSignInUrl="/" >
                                <div className='text-xl hover:text-red-700 text-gray-600'>
                                    <SignInButton />
                                </div>
                            </SignedOut>


                            <SignedIn>
                                <div className='text-xl hover:text-red-700 text-gray-600'>

                                    <SignOutButton aftersignouturl="/" />

                                </div>
                            </SignedIn>




                        </div>
                    }




                </div>
            </div>
        </nav>
    );
};

export default Navbar;
