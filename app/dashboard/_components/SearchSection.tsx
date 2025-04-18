
"use client "
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-orange-600 via-white to-green-600 text-white flex flex-col justify-center items-center  dark:bg-gray-90'>
       <h2 className='text-3xl font-bold'> Browse All Templates </h2>
       <p>What Would you like to create today? </p>

       <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]'>
            <Search className='text-gray-500'/>
            <input type='text' placeholder='Search..' 
            onChange={(event)=>onSearchInput(event?.target?.value)}
            className='bg-transparent w-full outline-none text-black'/>
        </div>
       </div>
    </div>
  )
}

export default SearchSection