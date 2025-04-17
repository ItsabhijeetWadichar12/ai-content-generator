"use client"

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack';
import Link from 'next/link';


function SideNav() {
 
    const menuList =[
        {
            name:"Home",
            icon:Home,
            path:'/dashboard'
        },
        {
            name:"History",
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:"Pricing",
            icon:WalletCards,
            path:'/dashboard/pricing'
        },
        {
            name:"Setting",
            icon:Settings,
            path:'/dashboard/setting'
        }

    ]


    const path = usePathname();

    useEffect(()=>{
        console.log(path);
        
    })
  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src="/logo.svg" width={120} height={100} alt='logo'/>

        </div>
        <hr className='my-6 border'/>

        <div className='mt-3'>
            {menuList?.map((menu , index)=>(
                <Link href={menu?.path}>
                <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer mt-5
                    ${path==menu?.path&&'bg-primary text-white'}
                    `  
                }>
                    <menu.icon className='w-7 h-7'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
                </Link>
            ))}
        </div>

        <div  className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNav