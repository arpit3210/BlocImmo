import React from 'react'
import { Investor1, Investor2, Investor3 } from '../Assets/PartnersLogos'

const InvestorWeServe = () => {
  return (
    <div className='min-h-screen flex justify-center items-center '>
<div className='flex flex-col justify-center items-center'>
    
<h1 className='lg:text-5xl text-4xl text-sky-800 my-6 '>Investors We Serve</h1>
<div className='h-0.5 bg-red-700   '> <span className='invisible  lg:text-5xl text-4xl text-sky-800  '>Investors We Serve</span> </div>



<div className='flex max-lg:flex-col justify-center my-9 lg:gap-32 gap-10 items-center'>

<InvestorWeServeCard
Title = "Individual Investors"
imgUrl = {Investor1}
/>
<InvestorWeServeCard
Title = "Institutional Investors"
imgUrl = {Investor2}
/>
<InvestorWeServeCard
Title = "Family Offices"
imgUrl = {Investor3}
/>

</div>


<div className='text-3xl text-sky-700 my-6 '>And More!</div>

</div>

    </div>
  )
}

export default InvestorWeServe




const InvestorWeServeCard = ({imgUrl, Title}) => {
  return (
    <div className='hover:-translate-y-6 duration-500 transition ease-in-out delay-150 '>

<div className='bg-white shadow-xl flex flex-col justify-center items-center  rounded-3xl p-10'>
    <img src={imgUrl}  alt="Investors" />
    <h1 className='text-sky-800 lg:text-3xl text-2xl lg:my-2'>{Title}</h1>

</div>

    </div>
  )
}





