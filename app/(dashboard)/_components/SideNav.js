"use client"
import { Upload, File } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SideNav = () => {
    const menuList = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: 'upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: 'files'
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b'>
                <Image src='/ambox.png' width={150} height={150} alt='Logo' />
            </div>
            <div className='flex flex-col float-left w-full'>
                {menuList.map((item, index) => (
                    <button 
                        key={item.id} 
                        className={`flex gap-2 p-4 px-6 w-full hover:bg-gray-100  text-gray-500 ${activeIndex==index?'bg-red-100 text-primary':null}`} 
                        onClick={() => setActiveIndex(index)}
                    >
                        <item.icon />
                        <h2>{item.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideNav
