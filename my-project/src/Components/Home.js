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


const Home = () => {
  return (
    <div>

{/* <Navbar></Navbar>

<Header></Header> */}

<MarketPlace></MarketPlace>
{/* <FormInput></FormInput>
<Review></Review>

<Statistics></Statistics>
<CTA></CTA>

<Process></Process>

<Footer></Footer> */}

      {/* <h1 className="text-center mt-5">Welcome to our website!</h1> */}


      {/* <div className='flex flex-col py-4 px-6 justify-center items-center'>
        <Link to="/PropertiesList"><button className='py-6 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 px-5'>Go to Properties Page</button></Link>
      </div> */}







    </div>
  )
}

export default Home