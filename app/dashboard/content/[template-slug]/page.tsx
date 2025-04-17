"use client"

import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/DB'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserPricingContext } from '@/app/(context)/UserPricingContext'
import { UpdateUsageContext } from '@/app/(context)/UpdateUsageContext'


interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {

    const selectedTemplates:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

    const [Loading , setLoading] = useState<any>(false);

    const [aiOutput , setAiOutput] = useState<string>('');

    const {totalUsage} = useContext(TotalUsageContext);

    const {user} = useUser();

    const router = useRouter();
        const {userPriceing , setUserPriceing} = useContext(UserPricingContext);
    
    const {updateUsage , setUpdateUsage} = useContext(UpdateUsageContext);
    const GenearatAIContent = async (formData:any)=>{

        if(totalUsage>= 10000&&!userPriceing){
            alert('You have reached your daily usage limit');
            router.push('/dashboard/pricing')
        }
            setLoading(true)
            //TODO: implement AI content generation
            const SelectedPrompt=selectedTemplates?.aiPrompt;
    
            const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;
    
            const result = await chatSession.sendMessage(FinalAIPrompt);
    
            console.log(result?.response?.text());
    
            setAiOutput(result?.response?.text());
            await SaveInDb(JSON.stringify(formData),selectedTemplates?.slug,result?.response?.text())
    
            setLoading(false)

            setUpdateUsage(Date.now())
       

    }

    const SaveInDb= async (formData:any , slug:any,aiResponse:string)=>{
        const result = await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResponse,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/YYYY'),
        })

        console.log(result);
    }
    
  return (
    <div className='p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Link href={"/dashboard"}>
        <Button className='text-md'> <ArrowLeft className='mr-2 w-4 h-4' /> Back</Button>
        </Link>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 py-5 '>
        {/* FormSection  */}
        <FormSection selectedTemplates={selectedTemplates} userFormData={(v:any)=>GenearatAIContent(v)} loading={Loading}/>

        {/* OutputSection  */}

        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>

        </div>
    </div>
    </div>

  )
}

export default CreateNewContent