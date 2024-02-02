import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>



     <h1 className="text-center mt-5">Welcome to our website!</h1>


  
  <Link to="/Properties"><button>Go to Properties Page</button></Link>




    </div>
  )
}

export default Home