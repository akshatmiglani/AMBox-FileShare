"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div
        className={`h-full md:w-64 flex-col fixed inset-y-0 z-50 ${open ? '' : 'md:flex hidden'}`}>
        <SideNav />
      </div>
      <div className={`md:ml-64`}>
        <TopHeader setOpen={setOpen} />
        {children}
      </div>
    </div>
  )
}

export default Layout
