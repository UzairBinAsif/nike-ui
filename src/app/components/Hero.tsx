import React from 'react'
import Image from 'next/image'
import hI from '@/../public/heroImage.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center h-[777px] xl:h-[977px]'>
      <div className='h-[7vh]'>
        <div className='h-[17px] font-medium text-[15px] leading-[16px] text-center'>Hello Nike App</div>
        <div className='h-[4vh] font-normal text-[11px] leading-[24px] content-center text-center'>Download the app to access everything Nike. <span className='font-medium underline hover:text-gray-500 transition ease-in-out cursor-pointer'>Get Your Great</span></div>
      </div>
      <div className='flex flex-col items-center justify-between w-fit h-[90%]'>
      <div className='flex justify-center w-[85%]'>
        <Image src={hI} alt='image here'/>
      </div>
      <div className=' w-[70%] content-center text-center'>
        <div className='font-medium text-[15px] leading-[24px]'>First Look</div>
        <div className='font-medium text-[56px] leading-[60px] mb-4'>Nike Air Max Pulse</div>
        <div className='font-normal text-[15px] leading-[24px] px-[14%]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
—designed to push you past your limits and help you go to the max.</div>
        <div className='pt-6 gap-6'>
          <button className='font-medium text-[15px] leading-[24px] rounded-full text-[#FFFFFF] mx-[3px] py-[7.5px] px-[22px] bg-[#111111]'>Notify Me</button>
          <button className='font-medium text-[15px] leading-[24px] rounded-full text-[#FFFFFF] mx-[3px] py-[7.5px] px-[22px] bg-[#111111]'>Shop Air Max</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
