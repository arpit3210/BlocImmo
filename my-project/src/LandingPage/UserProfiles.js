import React from 'react'
import { UserProfile } from '@clerk/clerk-react'
import Navbar from './Navbar'



const UserProfiles = () => {
  return (
    <div>

<Navbar></Navbar>

<div className='h-20'>

</div>

<div className='flex justify-center items-center'>
<UserProfile/>

</div>


    </div>
  )
}

export default UserProfiles