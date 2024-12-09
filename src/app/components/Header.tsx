import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/mainLogoVector.svg'
import heart from '@/../public/heart.svg'
import bag from '@/../public/bag.svg'
import search from '@/../public/search.svg'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex justify-center items-center w-screen h-[60px] bg-[#FFFFFF]'>
      <div>
        <Image src={Logo} alt='Logo Image' width={58.85}/>
      </div>
      <div className='flex items-center justify-end w-[80vw] h-full'>
        <div className='flex items-center justify-around w-[60%] h-full text-[#111111] text-[16px] font-medium  leading-[24px]'>
          <Link href={'/'}>New & Featured</Link>
          <Link href={'/'}>Men</Link>
          <Link href={'/'}>Women</Link>
          <Link href={'/'}>Kids</Link>
          <Link href={'/'}>Sale</Link>
          <Link href={'/'}>SNKRS</Link>
        </div>
        <div className='ml-[50px] mr-[20px] flex items-center w-[180px] h-[40px] rounded-[100px] bg-[#F5F5F5]'>
            <div className='flex items-center justify-center w-[40px] h-[36px]'>
                <Image src={search} alt='image'/>
            </div>
            <input type='text' placeholder='Search' className='flex items-center w-[84px] h-[18px] text-[#CCCCCC] font-medium text-[15px] leading-[18.31px]'></input>
        </div>
      </div>
      <div className='flex justify-center items-center w-[84px] h-full'>
        <div className='flex justify-center items-center w-9 h-9'>
        <Image src={heart} alt='Logo Image'/>
        </div>
        <div className='flex justify-center items-center w-9 h-9'>
        <Image src={bag} alt='Logo Image'/>
        </div>
      </div>
    </div>
  )
}

export default Header