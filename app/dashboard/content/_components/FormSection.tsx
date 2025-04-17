"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { Loader2Icon } from 'lucide-react'




interface PROPS{
    selectedTemplates?:TEMPLATE
    userFormData?:any
    loading:any
}


function FormSection({selectedTemplates , userFormData , loading}:PROPS) {

    const [formData , setFormData] = useState<any>();

    const handleInputChange=(event:any)=>{
        const {name , value} = event.target;
        setFormData({...formData,[name]:value})
    }
    const onSubmit = (e:any)=>{
        e.preventDefault();
        userFormData(formData);

        
    }
  return (
    <div className='p-5 shadow-md border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white'>
        {/* @ts-ignore */}
        <Image src={selectedTemplates?.icon} alt='icon' width={50} height={50} />
        <h2 className='font-bold text-2xl mb-3 text-purple-500'>{selectedTemplates?.name}</h2>
        <p className='text-sm text-gray-500'>{selectedTemplates?.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {
                selectedTemplates?.form?.map((item , index)=>(
                    
                    <div className='my-2 flex flex-col gap- mb-8'>
                        <label htmlFor="" className='font-bold'>{item?.label}</label>

                        {
                            item.field =='input'?
                            <Input name={item?.name} required={item.required}
                            onChange={handleInputChange}
                            />:
                            item.field =='textarea'?
                            <Textarea name={item?.name} required={item.required}
                            onChange={handleInputChange}
                            />:null

                        }
                    </div>
                ))
            }
            <Button type="submit" className='w-full py-6'
            disabled={loading}
            >
                {loading&&<Loader2Icon className='animate-spin'/>}
                Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection