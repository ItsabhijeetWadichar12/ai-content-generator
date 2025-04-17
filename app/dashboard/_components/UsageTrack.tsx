"user client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/DB';
import { AIOutput, UserPurchase } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserPricingContext } from '@/app/(context)/UserPricingContext';
import { UpdateUsageContext } from '@/app/(context)/UpdateUsageContext';
import Link from 'next/link';

 function UsageTrack() {

    const {user} = useUser();
    const {totalUsage , setTotalUsage} = useContext(TotalUsageContext);
    const {userPriceing , setUserPriceing} = useContext(UserPricingContext);
    const [maxWordsPer,setMaxWordsPer] = useState<number>(10000)
    const {updateUsage , setUpdateUsage} = useContext(UpdateUsageContext);
    const GetDATA = async()=>{
{/* @ts-ignore */}
        const result:HISTORY = await db.select().from(AIOutput).where(eq(AIOutput?.createdBy , user?.primaryEmailAddress?.emailAddress));
        {/* @ts-ignore */}
        GetTotalUsage(result);
        
    }
        useEffect(()=>{
            user&&GetDATA()
            user&&InUserPricing();
        },[user])

        useEffect(()=>{
            user&&GetDATA();
        },[updateUsage&&user])

    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result?.forEach(element=>{
            total+= Number(element?.aiResponse?.split(/\s+/)?.filter((word) => word.length > 0)?.length)
            setTotalUsage(total)
        })

        console.log(total)
    }

    const InUserPricing=async()=>{
{/* @ts-ignore */}

        const result = await db.select().from(UserPurchase).where(eq(UserPurchase?.userEmail,user?.primaryEmailAddress?.emailAddress))

        if(result){
            setUserPriceing(true);
            setMaxWordsPer(100000000)
        }
    }

    

  return (
    <div className='m-5'>
        <div className='bg-primary text-white rounded-lg p-5'>
            <h2 className='font-medium'>Credits </h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-full'
                style={{
                    width:(totalUsage/maxWordsPer)*100+"%"
                }}
                >
                </div>
            </div>

            <h2 className='text-sm my-2'>{totalUsage } / {userPriceing?'unlimited':'10,000 Credits used'}</h2>
        </div>
        <Link href={'/dashboard/pricing'}>
        <Button className='w-full text-green-500' variant="ghost">Upgarde</Button>
        </Link>
    </div>
  )
}

export default UsageTrack