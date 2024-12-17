import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/../public/mainLogoVector.svg";

const page = () => {
  return (
    <div className="flex justify-center p-4 sm:w-[70vw] md:w-[50vw] mx-auto h-fit items-center">
      <div className="text-center flex flex-col w-[80%] sm:w-[90%] gap-5 xl:w-[30vw] justify-center items-center">
        <Image src={logo} alt="image" />
        <div className="font-bold text-[18px] leading[26px] text-[#111111] text-center ">
        BECOME A NIKE MEMBER
        </div>
        <div className="font-normal text-[12px] leading-[22px] w-full text-[#8D8D8D]">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>
        <div className="flex flex-col w-full gap-3 justify-center items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-[40px] text-[#8D8D8D] focus:border-black font-normal px-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full h-[40px] text-[#8D8D8D] focus:border-black font-normal px-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-[40px] text-[#8D8D8D] focus:border-black font-normal px-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-[40px] text-[#8D8D8D] focus:border-black font-normal px-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full h-[40px] text-[#8D8D8D] focus:border-black font-normal px-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <div className="w-full h-[20px] font-normal px-[17px] text-[12px] leading-[16px] text-[#8D8D8D]">Get a Nike Member Reward every year on your Birthday.</div>
          <select
            className="w-full h-[40px] font-normal px-[17px] text-[14px] bg-[#FFFFFF] text-[#8D8D8D] border-[#E5E5E5] border-[1px] rounded-[3px]"
            defaultValue="option1"
          >
            <option value="option1">India</option>
            <option value="option2">Pakistan</option>
            <option value="option3">United States Of America</option>
            <option value="option4">China</option>
            <option value="option5">Turkey</option>
          </select>
          <div className="flex justify-between w-full h-40%">
            <button className="py-2 w-[45%] rounded-[3px] border-[1px] border-[#E5E5E5] active:bg-[#E5E5E5]">Male</button>
            <button className="py-2 w-[45%] rounded-[3px] border-[1px] border-[#E5E5E5] active:bg-[#E5E5E5]">Female</button>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex my-2 h-fit">
              <input
                id="keep-signed-in"
                type="checkbox"
                className="w-5 h-5 rounded border-[1px] border-[#BCBCBC] checked:bg-white"
              />
              <label
                htmlFor="keep-signed-in"
                className="font-normal text-[11px] leading-[14px] min-w-fit ml-[6px] text-[#8D8D8D]"
              >
               Sign up for emails to get updates from Nike on products, offers and your Member benefits
              </label>
            </div>
          </div>    
          <div className="font-normal pb-6 text-[12px] leading-[16px] w-[90%] sm:w-[80%] ml-[6px] text-[#8D8D8D]">By creating an account, you agree to Nike&apos;s <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Use.</span></div>
          <button className="w-[100%] h-[40px] rounded-[3px] bg-[#000000] text-[#FFFFFF] hover:bg-[#212121] active:bg-[#323232] transition ease-in-out">JOIN US</button>
          <div className="font-normal text-[12px] leading-[14px] w-[90%] sm:w-[80%] ml-[6px] text-[#8D8D8D]">Already a Member? <span className="underline font-medium cursor-pointer text-[#111111]">Sign In.</span></div>
        </div>
      </div>
    </div>
  );
};

export default page;
export const metadata: Metadata = {
  title: "Join Us - Nike",
  description: "Designed by Uziar Bin Asif",
};