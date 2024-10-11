import Link from 'next/link'
import React from 'react'

const Links = () => {

    const Links = [
        {
            title: 'Homepage',
            path:  '/'
        },
        {
            title: 'About',
            path:  '/about'
        },
        {
            title: 'Contact',
            path:  '/contact'
        },
        {
            title: 'Blog',
            path:  '/blog'
        }
    ]
  return (
    <div>
        { Links.map((link, key) =>(
            <Link href={link.path} key={link.title} className=''>{link.title}</Link>
        ))}
    </div>
  )
}

export default Links