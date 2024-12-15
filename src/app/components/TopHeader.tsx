import Image from "next/image";
import React from "react";
import logo from "@/../public/Vector.svg";

const TopHeader = () => {
  return (
    <div className="flex justify-center w-screen h-[5vh] py-0 bg-[#F5F5F5]">
      <div className="flex items-center justify-between w-[93vw]">
        <div className="ml-[1vw] w-5 h-5 md:w-6 md:h-6">
          <Image src={logo} alt="Image" width={24} />
        </div>
        <div className="flex w-[272.81px] font-medium text-[11px] leading-[14px] h-full">
            <div className="flex justify-around items-center w-[98.5px] h-full">
                <div className="cursor-pointer hover:text-gray-500 transition ease-in-out">Find a Store</div>
                <div>|</div>
            </div>
            <div className="flex justify-around items-center w-[51.81px] h-full">
                <div className="cursor-pointer hover:text-gray-500 transition ease-in-out">Help</div>
                <div>|</div>
            </div>
            <div className="flex justify-around items-center w-[122.5px] h-full">
                <div className="cursor-pointer hover:text-gray-500 transition ease-in-out">Join Us</div>
                <div>|</div>
                <div className="cursor-pointer hover:text-gray-500 transition ease-in-out">Sign In</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
