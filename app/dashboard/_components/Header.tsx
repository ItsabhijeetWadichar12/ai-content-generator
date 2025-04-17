"use client";

import Templates from '@/app/(data)/Templates';
import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Header({userSearchInputH}:any) {
  
    const [templateList , setTemplateList]=useState(Templates);

    const onSearchInput = (onSearchInput:any)=>{
      if (onSearchInput) {
        const filterData = Templates.filter(item=>
          item?.name?.toLowerCase().includes(onSearchInput.toLowerCase())
        );
        setTemplateList(filterData);
      }else{
        setTemplateList(Templates)
      }
      console.log(onSearchInput)
    }
  
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg '>
        <Search/>
       <input type="text" placeholder='Search...'
         onChange={(event)=>onSearchInput(event?.target?.value)}
        className='outline-none'
        />
      </div>
      <div className='flex justify-center gap-3'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white'>Join Membership Just for ₹99/month</h2>
        <UserButton/>
      </div>
    </div>
  )
}

export default Header