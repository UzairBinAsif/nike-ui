import React from 'react'
import Image from 'next/image'
import img from '@/../public/thirdSecImage.svg'

const ThirdSection = () => {
  return (
    <div className='flex flex-col mt-[3vh] items-center w-screen'>
        <div className='w-[90vw]'>        
            <div className="flex text-[#111111] items-center justify-start font-medium text-[18px] sm:text-[23px] leading-[28px] h-[10%]">
            <span>Featured</span>
        </div>
            <div className='my-4'><Image src={img} alt='image'/></div>
        </div>
            <div className='flex mt-[5vh] flex-col font-normal text-[15px] leading-[24px] gap-5 items-center w-[75%]'>
                <div className='text-[#111111] font-medium text-[19px] sm:text-[28px] lg:text-[54px] max-[358px]:leading-none leading-[60px] text-center'>STEP INTO WHAT FEELS GOOD</div>
                <div className='text-[#111111] text-center'>Cause everyone should know the feeling of running in that perfect pair.</div>
                <button className="hover:bg-[#272727] transition ease-in-out active:bg-[#393939] rounded-full text-[#FFFFFF] py-[9px] px-[12px] md:py-[7.5px] md:px-[22px] mb-[5vh] bg-[#111111]">
                Find Your Shoe
            </button>
            </div>
    </div>
  )
}

export default ThirdSection
