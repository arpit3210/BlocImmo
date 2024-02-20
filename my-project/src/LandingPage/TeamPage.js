import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ProfilePic } from '../Assets/Images'

const TeamPage = () => {
    return (

        <div className='bg-gradient-to-r text-gray-200 from-gray-800 via-gray-900 to-black'>

            <Navbar></Navbar>



            <div className='flex  flex-col justify-center items-center min-h-screen  '>


                <div className="relative p-4  ">
                    <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                        <a href="https://www.linkedin.com/in/arpitweb3/" className="relative block">
                            <img alt="profil" src={ProfilePic} className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800" />
                        </a>
                    </div>
                    <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="text-center">
                            <p className="text-2xl text-gray-800 dark:text-white">
                                Arpit
                            </p>
                            <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                                Singh
                            </p>
                            <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
                                <span className='font-bold'> CTO-(MyWeb3Gift) Blockchain Developer, Web3 Talents Fellow </span>
                                <br />
                                Ethereum Developer and Blockchain Enthusiast. I am a passionate individual who is always eager to learn new technologies and contribute to the growth
                            </p>
                        </div>
                        <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                            <a href="https://arpitweb3.netlify.app/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                    />
                                </svg>


                            </a>
                            <a href="https://twitter.com/arpitweb3">
                                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/arpitweb3/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/arpitweb3/">
                                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                    </path>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

            </div>



            <Footer></Footer>


        </div>

    )
}

export default TeamPage