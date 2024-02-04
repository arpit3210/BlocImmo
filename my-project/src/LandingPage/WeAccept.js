import React from 'react'
import { Ethereumtokenbanner } from '../Assets/PartnersLogos'

const WeAccept = () => {
  return (
    <div className='flex max-sm:flex-col justify-around items-center p-4 bg-sky-800  '>

<h1 className='lg:text-7xl text-4xl text-gray-300'>We Accept Only:</h1>

<img className=' grayscale' src={Ethereumtokenbanner} width={300} alt="Ethereumtokenbanner" />

<h1 className='text-5xl text-white'></h1>
    </div>
  )
}

export default WeAccept