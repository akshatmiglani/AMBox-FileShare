"use client"
import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopHeader = ({ setOpen, open }) => {
  return (
    <div className='flex p-5 border-b items-center md:justify-end justify-between'>
      
      <Image className='md:hidden' src='/ambox.png' width={150} height={100} onClick={() => setOpen(prev => !prev)} />
      
      <UserButton />
    </div>
  )
}

export default TopHeader
