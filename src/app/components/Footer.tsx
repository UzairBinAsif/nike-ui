import Image from 'next/image'
import React from 'react'
import logo from '@/../public/location.svg'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-between pt-[40px] w-screen h-[331px] text-[#7E7E7E] bg-[#111111]'>
      <div className='w-[85vw] h-[213px]'>
        <div className='grid grid-cols-3 w-[40%] h-full font-normal text-[10px] leading-[24px]'>
        <div>Find A Store</div>
        <div>Find A Store</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Find A Store</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Send Us Feedback</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        <div>Send Us Feedback</div>
        <div>Find A Store</div>
        <div>Send Us Feedback</div>
        </div>
      </div>
      <div className='flex items-end justify-between w-[85vw] h-[62px]'>
        <div className='flex items-center w-[40%] h-[32px] font-normal text-[11px] leading-[12px]'>
            <div className='flex w-[60px] h-[15px] justify-around items-center'>
                <div className='flex w-[18px] h-[15px] justify-center items-center'>
                <Image src={logo} alt='image'/>
                </div>
                <div className='flex text-white items-center'>India</div>
            </div>
            <div className='h-[14px]'>© 2023 Nike, Inc. All Rights Reserved</div>
        </div>
        <div className='flex items-center justify-end w-[40%] h-[46px] mr-[4vw] font-normal text-[11px] leading-[28px]'>
            <div className='flex w-[80%] justify-around'>
                <button>Guides</button>
                <button>Terms of Sale</button>
                <button>Terms of Use</button>
                <button>Nike Privacy Policy</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
