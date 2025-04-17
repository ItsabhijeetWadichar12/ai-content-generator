import { UserProfile, useUser } from '@clerk/nextjs'
import React from 'react'

function Setting() {
 
  return (
    <div className='flex items-center justify-center h-full w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
      
      <UserProfile/>
      
    </div>
  )
}

export default Setting