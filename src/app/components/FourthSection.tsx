import React from 'react'
import GearUpProduct from './GearUpProduct'
import g1 from "@/../public/GearUpImage1.svg";
import g2 from "@/../public/GearUpImage2.svg";
import g3 from "@/../public/GearUpImage3.svg";
import g4 from "@/../public/GearUpImage4.svg";
import Link from 'next/link';


const FourthSection = () => {
  return (
    <div className="w-screen flex flex-col items-center h-fit">
        <div className='w-[90vw]'>        
            <div className="flex text-[#111111] items-center justify-start font-medium text-[18px] sm:text-[23px] leading-[28px] h-[10%]">
            <span>Gear Up</span>
        </div>
      <div className=" w-[90vw] h-fit">
        <div className="grid gap-3 justify-items-center grid-cols-2 md:grid-cols-4">
          <Link href={'/p4'}>
            <GearUpProduct 
            img={g1}
            named="Nike Dri-FIT ADV TechKnit Ultra"
            price="₹ 3 895"
            category="Men's Short-Sleeve Running Top"
            />
          </Link>
          <Link href={'/p5'}>
            <GearUpProduct 
            img={g2}
            named="Nike Dri-FIT Challenger"
            price="₹ 2 495"
            category="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
            />
          </Link>
          <Link href={'/p6'}>
            <GearUpProduct 
            img={g3}
            named="Nike Dri-FIT ADV Run Division"
            price="₹ 5 295"
            category="Women's Long-Sleeve Running Top"
            />
          </Link>
          <Link href={'/p7'}>
            <GearUpProduct 
            img={g4}
            named="Nike Fast"
            price="₹ 3 795"
            category="Women's Mid-Rise 7/8 Running Leggings with Pockets"
            />
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>
  )
}

export default FourthSection
