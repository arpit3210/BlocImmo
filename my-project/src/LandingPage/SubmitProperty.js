import React from 'react'
import { SubmitPropertyPic } from '../Assets/PartnersLogos'

const SubmitProperty = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">

    <div className="flex max-lg:flex-col  px-10 max-md:px-2  bg-white">


            {/* Left Side (Picture) */}
    <div className="lg:w-1/2 lg:px-28">
                <h1 className="lg:text-5xl text-3xl max-lg:my-7 text-gray-500 mb-4">Submit Your Commercial Real Estate Property</h1>
                <hr className="border-b-2 border-red-500 mb-4" />
                <p className="my-9 text-xl text-gray-400">
                We accept Commercial Real Estate (CRE) from across the globe and we are always looking to help real estate developers/owners leverage RedSwan CRE community to raise capital.
                </p>
           
           <ul className='mb-9 text-xl text-gray-400'>
        
<div className='flex justify-start leading-9 items-start gap-10 '>
    <div>
    <li>Multifamily</li>
    <li>Office</li>
    <li>Industrial</li>
    <li>Mixed Use</li>
    </div>
    <div>
    <li>Retail</li>
    <li>Hospitality</li>
    <li>Condominium</li>
    <li>Student Housing</li>
    </div>

</div>

           </ul>
              
                <button className="bg-red-600 my-5 text-white py-3 text-xl px-6 rounded-lg  hover:bg-red-700">
                   Submit Your Property
                </button>
            </div>


            <div className="lg:w-1/2">
                <img
                    src={SubmitPropertyPic}
                    alt="Tokenized Real Estate"
                    className="w-full h-full object-cover"
                />
            </div>
    
            {/* Right Side (Content) */}
     
        </div>
    
       </div>
  )
}

export default SubmitProperty