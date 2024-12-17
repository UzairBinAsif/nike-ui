import React from "react";
import Image from "next/image";
import hI from "@/../public/heroImage.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center box-border w-screen h-fit">
      <div className="h-[7vh]-300">
        <div className="h-[17px] font-medium text-[15px] leading-[16px] text-center">
          Hello Nike App
        </div>
        <div className="h-[4vh] font-normal text-[11px] leading-[24px] content-center text-center">
          Download the app to access everything Nike.{" "}
          <span className="font-medium underline hover:text-gray-500 transition ease-in-out cursor-pointer">
            Get Your Great
          </span>
        </div>
      </div>
      <div className="flex flex-col m-0 items-center w-[90vw] h-fit">
        <Link href={'/air-max'} className="flex justify-center w-full">
          <Image src={hI} alt="image here" />
        </Link>
        <div className="w-full mt-[2vh] md:mt-[6vh] content-center text-center">
          <div className="font-medium text-[15px] sm:leading-[24px]">
            First Look
          </div>
          <div className="font-medium text-[30px] md:text-[56px] md:leading-[60px] mb-4">
            Nike Air Max Pulse
          </div>
          <div className="font-normal text-[15px] md:leading-[24px] px-[14%]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </div>
          <div className="my-6 md:mb-[5vw] gap-6">
            <button className="font-medium text-[15px] active:bg-[#444444] leading-[24px] rounded-full text-[#FFFFFF] mr-[6px] py-[9px] px-[12px] md:mx-[3px] md:py-[7.5px] md:px-[22px] bg-[#111111]">
              Notify Me
            </button>
            <button className="font-medium text-[15px] active:bg-[#444444] leading-[24px] rounded-full text-[#FFFFFF] ml-[6px] py-[9px] px-[12px] md:mx-[3px] md:py-[7.5px] md:px-[22px] bg-[#111111]">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
