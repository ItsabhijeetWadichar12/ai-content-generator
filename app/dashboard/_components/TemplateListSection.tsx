import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function TemplateListSection({userSearchInput}:any , {userSearchInputH}:any) {

  const [templateList , setTemplateList]=useState(Templates);

  useEffect(()=>{
    if (userSearchInput||userSearchInputH) {
      const filterData = Templates.filter(item=>
        item?.name?.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }else{
      setTemplateList(Templates)
    }
    console.log(userSearchInput)
  
  },[userSearchInput , userSearchInputH])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white '>
        {templateList?.map((item:TEMPLATE , index:number)=>(
            <TemplateCard {...item}/>
        ))}
    </div>
  )
}

export default TemplateListSection