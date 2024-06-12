import { File, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UploadPreview = ({file,removeFile}) => {
  return (
    <div className='flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-red-200' >
        <div className='flex items-center p-2'>
        <File width={50} height={50}/>
        <div>
            <h2 className='text-left'>{file.name}</h2>
            <h2 className='text-[12px] text-gray-400'> {file?.type} / {(file.size/1024/1024).toFixed(2)}MB</h2>
        </div>
        </div>
        <X className='text-red-500 cursor-pointer' onClick={()=>removeFile()}/>
    </div>
  )
}

export default UploadPreview