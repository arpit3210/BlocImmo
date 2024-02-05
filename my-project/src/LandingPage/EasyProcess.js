import React from 'react'
import { SelectProperty1 ,SignUP,StartInvesting } from '../Assets/PartnersLogos'


const EasyProcess = () => {
    return (
<div className='flex flex-col justify-center items-center min-h-screen'>

<h1 className='md:text-5xl text-sky-700 text-4xl text-center pb-4'>Getting Started is Easy</h1>
<div className='h-0.5 lg:w-1/3 w-full mx-10  bg-red-700 '></div>

<div className='flex gap-28 justify-center items-center py-10 px-10 flex-wrap '>


<EasyProcessCards 

Title="Sign In/Up"
imgURL={SignUP}
Description="Sign up to get an account"
/>

<EasyProcessCards 

Title="Select a Property"
imgURL={SelectProperty1}
Description="Select your desired property"
/>

<EasyProcessCards 

Title="Start Investing"
imgURL={StartInvesting}
Description="You are on your way to owning real estate shares"
/>

</div>


<GetStartedButton/>


</div>
    )
}

export default EasyProcess





const EasyProcessCards = ({imgURL, Title,  Description}) => {
    return (
        <div className=''>


            <div className='flex flex-col w-72 m-4 justify-center items-center '>

                <img src={imgURL} alt="BlocImmo" />

                <h1 className='text-4xl text-sky-800 text-center'>{Title}</h1>

                <p className='text-2xl text-sky-800 py-3 text-center'>{Description} </p>


            </div>

        </div>
    )
}


const GetStartedButton = () => {
    return (
        <div className='py-8'>

            <div className='flex justify-center items-center'>
                <button className='hover:bg-red-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-white  border border-red-600 text-red-600 py-4 px-14 text-2xl rounded-xl '> Get Started Now </button>
            </div>

        </div>
    )
}
