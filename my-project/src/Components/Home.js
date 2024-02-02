import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>



     <h1 className="text-center mt-5">Welcome to our website!</h1>


<div className='flex flex-col py-4 px-6 justify-center items-center'>  
  <Link to="/PropertiesList"><button className='py-6 bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 px-5'>Go to Properties Page</button></Link>


</div>

    </div>
  )
}

export default Home