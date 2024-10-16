import Image from 'next/image'
import React from 'react'

const PostCard = () => {
  return (
    <div className='flex flex-col gap-[20px] mb-[20px] '>
        <div className='flex'>
            <div className='w-[90%] h-[400px] relative'>
                <Image src='https://images.pexels.com/photos/13316725/pexels-photo-13316725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className='object-cover'/>
            </div>
            <span className='text-[12px] -rotate-90 m-auto'>01:01:2019</span>
        </div>
        <div className='flex '>
            <h1 className='w-[90%] text-[24px] mb-[20px] '>TItle</h1>
            <p className='w-[90%] text-gray-500 font-light mb-[20px] '>Desc</p>
        </div>
    </div>
  )
}

export default PostCard