import React from 'react'
import Image from 'next/image';
import e1 from '@/../public/eImage1.svg'
import e2 from '@/../public/eImage2.svg'
import e3 from '@/../public/eImage3.svg'

const SixthSection = () => {
  return (
    <div className='flex flex-col mt-[3vh] items-center w-screen h-fit'>
        <div className='w-[90vw]'>        
            <div className="flex text-[#111111] items-center justify-start font-medium text-[18px] sm:text-[23px] leading-[28px] h-[10%]">
            <span>Don&apos;t Miss</span>
        </div>
        <div className='grid gap-2 justify-items-center grid-cols-2 md:grid-cols-3'>
            <div className='my-4 w-[100%]'>
              <Image src={e1} alt='image'/>
            <button className=' bg-[#FFFFFF] py-[5px] md:py-[5px] px-3 md:px-4 rounded-full active:bg-[#dddddd] -translate-y-14 translate-x-5'>Men&apos;s</button>
            </div>
            <div className='my-4 w-[100%]'>
              <Image src={e2} alt='image'/>
              <button className=' bg-[#FFFFFF] py-[5px] md:py-[5px] px-3 md:px-4 rounded-full active:bg-[#dddddd] -translate-y-14 translate-x-5'>Women&apos;s</button>
              </div>
            <div className='my-4 w-[100%]'>
              <Image src={e3} alt='image'/>
              <button className=' bg-[#FFFFFF] py-[5px] md:py-[5px] px-3 md:px-4 rounded-full active:bg-[#dddddd] -translate-y-14 translate-x-5'>Kids&apos;s</button>
              </div>
        </div>
        </div>
            <div className='text-center grid gap-1 my-[5vh] grid-cols-2 md:grid-cols-4 font-medium text-[11px] text-[#757575] md:text-[13px] lg:text-[15px] leading-[24px] w-[75%]'>
              <div>
                <div className='cursor-pointer hover:underline text-center active:opacity-50 text-[#111111] font-medium my-[2vh]'>Icons</div>
                <div className='text-center'>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Air Force 1</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Huarache</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Air Max 90</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Air Max 95</div>
                </div>
              </div>
              <div>
                <div className='cursor-pointer hover:underline text-center active:opacity-50 text-[#111111] font-medium my-[2vh]'>Shoes</div>
                <div className='text-center'>
                  <div className='cursor-pointer hover:underline active:opacity-50'>All Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Custom Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Jordan Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Running Shoes</div>
                </div>
              </div>
              <div>
                <div className='cursor-pointer hover:underline text-center active:opacity-50 text-[#111111] font-medium my-[2vh]'>Clothing</div>
                <div className='text-center'>
                  <div className='cursor-pointer hover:underline active:opacity-50'>All Clothing</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Modest Wear</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Hoodies & Pullovers</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Shirts & Tops</div>
                </div>
              </div>
              <div>
                <div className='cursor-pointer hover:underline text-center active:opacity-50 text-[#111111] font-medium my-[2vh]'>Kids&apos;</div>
                <div className='text-center'>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Infant & Toddler Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Kids&apos; Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Kids&apos; Jordan Shoes</div>
                  <div className='cursor-pointer hover:underline active:opacity-50'>Kids&apos; Basketball Shoes</div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default SixthSection
