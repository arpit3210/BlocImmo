import React from 'react'
import { Connect } from '../Assets/PartnersLogos'

const CTA = () => {
  return (

<div className='flex flex-col justify-center items-center'> 
<div className='lg:max-w-screen-xl w-[100vw]'>

<div className="bg-white dark:bg-gray-800 overflow-hidden relative">
    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl  text-gray-500 dark:text-white sm:text-5xl">
            <span className="block">
                Want to be  a part of our journey?
            </span>
            <span className="block text-sky-900">
         
            </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-red-700 hover:bg-red-800 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Connect With Us
                </button>
            </div>
        </div>
    </div>
    <img src={Connect} alt='metamask' className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block"/>
</div>

</div>

</div>
  )
}

export default CTA