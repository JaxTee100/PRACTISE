import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-[100px]'>
      <div className='flex-1 flex  flex-col gap-[30px]'>
        <h2 className='text-[#3673fd] font-semibold'>About My Company</h2>
        <h1 className='text-[54px] font-bold'>
          We create digital ideas<br/> that are bigger, bolder,<br/> braver and better
        </h1>
        <p className='text-[20px] font-semibold'>
        We create digital ideas that are bigger, bolder , 
        braver and betterWe create digital ideas that are bigger,
         bolder , braver and better
         We create digital ideas that are bigger, bolder , braver and better
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[#3673fd] font-bold'>10 K+</h1>
            <p className='text-sm'>Years of experience</p>
          </div>
          <div className='flex flex-col gap-[10px] text-lg'>
            <h1 className='text-[#3673fd] font-bold'>10 K+</h1>
            <p className='text-sm'>Years of experience</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[#3673fd] font-bold'>10 K+</h1>
            <p className='text-sm'>Years of experience</p>
          </div>
          
        </div>
        
      </div>
      <div className='flex-1 relative border'>
          <Image src='/about.png' alt='' fill />

      
        </div>
    </div>
  )
}

export default AboutPage