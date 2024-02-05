import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../LandingPage/Navbar'
import Footer from '../LandingPage/Footer'
import Header from '../LandingPage/Header'
import FormInput from '../LandingPage/FormInput'

import Review from '../LandingPage/Review'
import Statistics from '../LandingPage/Statistics'
import CTA from '../LandingPage/CTA'

import Process from '../LandingPage/Process'
import MarketPlace from '../LandingPage/MarketPlace'
import WhyTokenization from '../LandingPage/WhyTokenization'
import Partners from '../LandingPage/Partners'



import EasyProcess from '../LandingPage/EasyProcess'
import WeAccept from '../LandingPage/WeAccept'
import SubmitProperty from '../LandingPage/SubmitProperty.js'
import InvestorWeServe from '../LandingPage/InvestorWeServe.js'

// import { useLocomotiveScroll } from 'react-locomotive-scroll'



const Home = () => {

  // const { scroll } = useLocomotiveScroll()


  return (
    <div className='  '>



<Navbar></Navbar>

<Header></Header>

<MarketPlace></MarketPlace>


<div id='WhyTokenization'  >
<WhyTokenization></WhyTokenization>
</div>

<Partners></Partners>

<EasyProcess></EasyProcess>

<WeAccept></WeAccept>

<SubmitProperty></SubmitProperty>

 <InvestorWeServe/> 

<CTA></CTA>


<Footer></Footer>

{/* <FormInput></FormInput>
<Review></Review>

<Statistics></Statistics> */}

{/* <Process></Process> */}


      {/* <h1 className="text-center mt-5">Welcome to our website!</h1> */}


      {/* <div className='flex flex-col py-4 px-6 justify-center items-center'>
        <Link to="/PropertiesList"><button className='py-6 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 px-5'>Go to Properties Page</button></Link>
      </div> */}







    </div>
  )
}

export default Home