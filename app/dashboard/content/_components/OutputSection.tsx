import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props{
    aiOutput:string
}

function OutputSection({aiOutput}:props) {

    const editorRef:any=useRef();

    useEffect(()=>{
       const editorInstance = editorRef.current.getInstance();
       editorInstance.setMarkdown(aiOutput);

    },[aiOutput])
    console.log(aiOutput)
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg border'>
        <div className='flex justify-between items-center p-5 '>
            <h2 className='text-lg font-bold'>Your Result </h2>

            <Button className='flex gap-2'
            onClick={()=>navigator?.clipboard?.writeText(aiOutput)}
            > <Copy className='w-4 h-4'/> Copy </Button>
        </div>
        <Editor
        className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
            ref={editorRef}
            initialValue="Your Result Will Apear Here"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
  </div>
  )
}

export default OutputSection