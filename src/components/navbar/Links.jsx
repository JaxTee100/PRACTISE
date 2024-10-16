'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Links } from './navbarData'


const NavLinks = () => {

    
    const session = true;
    const isAdmin = true;
    const pathname = usePathname();
  return (
    <div className='space-x-10'>
        { Links.map((link, key) =>(
            <Link 
                href={link.path} 
                key={link.title} 
                className={`${pathname === link.path && 'bg-white rounded-full p-2 text-blue-950'} font-semibold p-2 rounded-full hover:text-blue-950 hover:bg-white`}
                >
                {link.title}
            </Link>
        ))}
        {
            session ? (
                <>
                    { isAdmin && <Link href='/admin' className={`${pathname === '/admin' && 'bg-white rounded-full p-2 text-blue-950'} font-semibold rounded-full p-2 hover:text-blue-950 hover:bg-white`}>Admin</Link>}
                    <Link href='/logout' className={`${pathname === '/logout' && 'bg-white rounded-full p-2 text-blue-950'} font-semibold rounded-full p-2 hover:text-blue-950 hover:bg-white`}><button>Logout</button></Link>
                </>
            ) : (
                <Link href='/login' >Login</Link>
            )
        }
    </div>
  )
}

export default NavLinks