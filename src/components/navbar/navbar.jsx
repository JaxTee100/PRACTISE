"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Links from './Links'
import { IoMenuSharp } from "react-icons/io5";
import NavLinks from './Links';
import WebNav from './WebNav';

const Navbar = () => {
  const [openWebNav, setOpenWebNav] = useState(false)
  return (
    <div className='flex items-center justify-between px-8 py-4 h-[100px] relative'>
      <Link href='/'><div className='text-lg '>
        Logo
      </div>
      </Link>
      <div className='hidden lg:block'>
        <NavLinks />
      </div>
      <div className='lg:hidden'>
        <IoMenuSharp size={20} onClick={() => setOpenWebNav(prev => !prev)}/>
      </div>

      { openWebNav && 
        <div className='absolute right-0 top-20 w-[50%] lg:hidden'>
          <WebNav />
        </div>}
    </div>
  )
}

export default Navbar