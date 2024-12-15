import Image from 'next/image'
import React from 'react'
import logo from '@/../public/location.svg'
import t from '../../../public/twitter.svg'
import fb from '../../../public/fb.svg'
import yt from '../../../public/yt.svg'
import ig from '../../../public/ig.svg'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-between pt-[40px] w-screen h-fit sm:h-[331px] text-[#7E7E7E] bg-[#111111]'>
      <div className='sm:flex w-[85vw] h-fit sm:h-[213px]'>
        <div className=' sm:w-[60vw] h-fit text-center sm:text-left'>
          <div className='grid lg:w-[80%] sm:grid-cols-3 h-full font-normal text-[10px] leading-[24px]'>
            <div className='my-4 md:my-0 w-[100%] h-fit'>
            <div className='font-normal text-[10px] text-[#FFFFFF] tracking-[0.5px] leading[32.67px]'>FIND A STORE</div>
            <div className='font-normal text-[10px] text-[#FFFFFF] leading[32.67px]'>BECOME A MEMBER</div>
            <div className='font-normal text-[10px] text-[#FFFFFF] leading[32.67px]'>SIGN UP FOR EMAIL</div>
            <div className='font-normal text-[10px] text-[#FFFFFF] leading[32.67px]'>Send Us Feedback</div>
            <div className='font-normal text-[10px] text-[#FFFFFF] leading[32.67px]'>STUDENT DISCOUNTS</div>
          </div>
          <div className=' my-4 md:my-0 w-[100%] h-fit'>
            <div className='font-normal text-[10px] text-[#FFFFFF] tracking-[0.5px] leading[32.67px]'>GET HELP</div>
            <div className='font-normal text-[11px] leading[28px]'>Order Status</div>
            <div className='font-normal text-[11px] leading[28px]'>Delivery</div>
            <div className='font-normal text-[11px] leading[28px]'>Returns</div>
            <div className='font-normal text-[11px] leading[28px]'>Payment Options</div>
            <div className='font-normal text-[11px] leading[28px]'>Contact Us On Nike.com Inquiries</div>
            <div className='font-normal text-[11px] leading[28px]'>Contact Us On All Other Inquiries</div>
          </div>
          <div className='my-4 md:my-0 w-[100%] h-fit'>
            <div className='font-normal text-[10px] text-[#FFFFFF] tracking-[0.5px] leading[32.67px]'>FIND A STORE</div>
            <div className='font-normal text-[11px] leading[28px]'>About Nike</div>
            <div className='font-normal text-[11px] leading[28px]'>News</div>
            <div className='font-normal text-[11px] leading[28px]'>Careers</div>
            <div className='font-normal text-[11px] leading[28px]'>Investors</div>
            <div className='font-normal text-[11px] leading[28px]'>Sustainability</div>
          </div>
          </div>
          
        </div>
        <div className='hidden sm:flex gap-4 justify-end h-fit w-[25vw]'>
          <button className='w-[30px] h-[30px] rounded'><Image src={t} alt={'image here'}/></button>
          <button className='w-[30px] h-[30px] rounded'><Image src={fb} alt={'image here'}/></button>
          <button className='w-[30px] h-[30px] rounded'><Image src={yt} alt={'image here'}/></button>
          <button className='w-[30px] h-[30px] rounded'><Image src={ig} alt={'image here'}/></button>
        </div>
      </div>
      <div className='flex-col items-center md:flex-row-reverse flex md:items-end justify-between w-[85vw] h-fit md:h-[62px]'>
        <div className='flex items-center justify-end w-full md:w-[40%] h-[46px] md:mr-[4vw] font-normal text-[11px] md:leading-[28px]'>
            <div className='flex text-[8px] w-full md:w-[80%] justify-around'>
                <button>Guides</button>
                <button>Terms of Sale</button>
                <button>Terms of Use</button>
                <button>Nike Privacy Policy</button>
            </div>
        </div>
        <div className='flex items-center justify-center w-[80%] md:w-[40%] h-[32px] font-normal text-[11px] leading-[12px]'>
            <div className='flex w-[60px] h-[15px] justify-around items-center'>
                <div className='flex w-[18px] h-[15px] justify-center items-center'>
                <Image src={logo} alt='image'/>
                </div>
                <div className='flex text-white items-center'>India</div>
            </div>
            <div className='text-[9px] md:text-[11px] h-[14px]'>© 2023 Nike, Inc. All Rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default Footer