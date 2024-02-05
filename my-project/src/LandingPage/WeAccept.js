import React from 'react'
import { Ethereumtokenbanner } from '../Assets/PartnersLogos'
import { SignInButton } from '@clerk/clerk-react'

const WeAccept = () => {
  return (
<div className=' flex flex-col justify-center bg-sky-800 items-center '>

<div className='flex max-sm:flex-col lg:max-w-screen-xl w-[100vw] justify-around items-center p-4   '>

<h1 className='lg:text-7xl text-4xl text-gray-300'>We Accept Only:</h1>

<SignInButton />


<img className=' grayscale' src={Ethereumtokenbanner} width={300} alt="Ethereumtokenbanner" />

<h1 className='text-5xl text-white'></h1>
    </div>
</div>
  )
}

export default WeAccept