import Link from 'next/link'
import React from 'react'
import { Links } from './navbarData'
import { usePathname } from 'next/navigation';

const WebNav = () => {
  const session = true;
    const isAdmin = true;
    const pathname = usePathname();
  return (
    <div className='border p-4 flex flex-col items-center transition-[0.3s] '>
      { Links.map((link, key) =>(
            <Link
                href={link.path} 
                key={link.title} 
                className={`${pathname === link.path && 'bg-white rounded-sm p-2 text-blue-950'} w-full flex justify-center items-center font-semibold p-2 rounded-sm hover:text-blue-950 hover:bg-white`}
                >
                {link.title}
            </Link>
        ))}
    </div>
  )
}

export default WebNav