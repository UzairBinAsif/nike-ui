import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/../public/mainLogoVector.svg";

const page = () => {
  return (
    <div className="flex justify-center p-4  w-fit mx-auto h-fit items-center">
      <div className="text-center flex flex-col w-[80%] sm:w-[90%] gap-5 xl:w-[30vw] justify-center items-center">
        <Image src={logo} alt="image" />
        <div className="font-bold text-[18px] leading[26px] text-[#111111] text-center ">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </div>
        <div className="flex flex-col w-full gap-3 justify-center items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-[40px] font-normal pl-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full h-[40px] font-normal pl-[17px] text-[14px] bg-[#FFFFFF] border-[#E5E5E5] border-[1px] rounded-[3px]"
          />
          <div className="flex w-full justify-between items-center">
            <div className="flex my-2 items-center h-fit">
              <input
                id="keep-signed-in"
                type="checkbox"
                className="w-5 h-5 rounded border-[1px] border-[#BCBCBC] checked:bg-white"
              />
              <label
                htmlFor="keep-signed-in"
                className="font-normal text-[11px] sm:text-[12px] leading-[24px] min-w-fit ml-[6px] text-[#8D8D8D]"
              >
                Keep me signed in
              </label>
            </div>
            <div className="font-normal min-w-fit text-[11px] text-[#BCBCBC] sm:text-[12px] leading[13.8px]">
              Forgotten your password?
            </div>
          </div>
          <div className="font-normal pb-6 text-[12px] leading-[16px] w-[90%] sm:w-[80%] ml-[6px] text-[#8D8D8D]">By logging in, you agree to Nike&apos;s <span className="underline">Privacy Policy</span> and Terms of Use.</div>
          <button className="w-[100%] h-[40px] rounded-[3px] bg-[#000000] text-[#FFFFFF]">Sign In</button>
          <div className="font-normal text-[12px] leading-[14px] w-[90%] sm:w-[80%] ml-[6px] text-[#8D8D8D]">Not a Member? <span className="underline font-medium cursor-pointer text-[#111111]">Join Us.</span></div>
        </div>
      </div>
    </div>
  );
};

export default page;
export const metadata: Metadata = {
  title: "Sign In - Nike",
  description: "Designed by Uziar Bin Asif",
};