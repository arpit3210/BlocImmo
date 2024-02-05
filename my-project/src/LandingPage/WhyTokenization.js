
// import React, { useState, useEffect } from 'react';
import { TokenizationPIC } from "../Assets/Images";


const WhyTokenization = () => { 
    
    
//     const [image, setImage] = useState('');

// useEffect(() => {
//     // Fetch an image from Unsplash API
//     const fetchImage = async () => {
//         try {
//             const response = await fetch('https://source.unsplash.com/1600x900/?real-estate');
//             const imageUrl = response.url;
//             setImage(imageUrl);
//         } catch (error) {
//             console.error('Error fetching image from Unsplash:', error);
//         }
//     };

//     fetchImage();
// }, []);

return (
   <div className="min-h-screen flex justify-center items-center ">

<div className="flex max-lg:flex-col lg:max-w-screen-xl w-[100vw]  px-5 max-md:px-2  bg-white">
        {/* Left Side (Picture) */}
        <div className="lg:w-1/2">
            <img
                src={TokenizationPIC}
                alt="Tokenized Real Estate"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Right Side (Content) */}
        <div className="lg:w-1/2 lg:px-20">
            <h1 className="lg:text-5xl text-3xl max-lg:my-7 text-gray-500 mb-4">Why Tokenized  <br /> Commercial Real Estate?</h1>
            <hr className="border-b-2 border-red-500 mb-4" />
            <p className="my-9 text-xl text-gray-400">
                Historically, commercial real estate investment has been stable, lucrative, and outperforms the stocks and bonds market in the long term. Real estate is also a perfect hedge against inflation.
            </p>
            <p className="mb-9 text-xl text-gray-400">
                RedSwan CRE is using blockchain technology to tokenize assets. We are disrupting the real estate landscape & making it easy for anyone to invest on a global level.
            </p>
            <p className="mb-9 text-xl text-gray-400">
                Whether you are a high net worth, institutional, or retail investor, RedSwan CRE’s crowdfunding-style investment platform makes it easy for you to start investing in minutes.
            </p>
            <button className="bg-red-600 my-5 text-white py-3 text-xl px-6 rounded-lg  hover:bg-red-700">
                Get Started Now
            </button>
        </div>
    </div>

   </div>
);
};

export default WhyTokenization