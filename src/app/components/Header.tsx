
import React from 'react'
import Image from 'next/image'
import Logo from '@/../public/mainLogoVector.svg'
import heart from '@/../public/heart.svg'
import bag from '@/../public/bag.svg'
import search from '@/../public/search.svg'
import Link from 'next/link'


const Header = () => {

  return (
    <div className='flex justify-center items-center w-screen h-[7vh] px-[3vw] lg-px-0 bg-[#FFFFFF]'>
      <div>
        <Image src={Logo} alt='Logo Image' width={58.85}/>
      </div>
      <div className='flex items-center justify-end w-[80vw] h-full'>
        <div className='hidden md:flex items-center justify-around w-[60%] h-full text-[#111111] text-[14px] md:text-[16px] font-medium  leading-[24px]'>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/featured'}>New & Featured</Link>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/'}>Men</Link>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/'}>Women</Link>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/'}>Kids</Link>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/'}>Sale</Link>
          <Link className='nav-links hover:text-gray-500 hover:transition hover:ease-in-out active:text-gray-400' href={'/'}>SNKRS</Link>
        </div>
        <div className='ml-[50px] mr-[20px] flex items-center w-[160px] md:w-[180px] h-[40px] rounded-[100px] bg-[#F5F5F5]'>
            <div className='flex items-center justify-center w-[40px] h-[36px] hover:opacity-60 cursor-pointer'>
                <Image src={search} alt='image'/>
            </div>
            <input type='text' placeholder='Search' className='bg-[#F5F5F5] focus:outline-none flex items-center w-[84px] h-[18px] text-[black] font-medium text-[15px] leading-[18.31px]'></input>
        </div>
      </div>
      <div className='flex justify-center items-center w-[84px] h-full'>
        <Link href={'/'} className='flex justify-center items-center w-9 h-9 hover:opacity-60 cursor-pointer'>
        <Image src={heart} alt='Logo Image'/>
        </Link>
        <Link href={'/checkout'} className='flex justify-center items-center w-9 h-9 hover:opacity-60 cursor-pointer'>
        <Image src={bag} alt='Logo Image'/>
        </Link>
      </div>
    </div>
  )
}

export default Header