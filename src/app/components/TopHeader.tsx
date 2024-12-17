import Image from "next/image";
import React from "react";
import logo from "@/../public/Vector.svg";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="flex justify-center w-screen h-[5vh] py-0 bg-[#F5F5F5]">
      <div className="flex items-center justify-between w-[93vw]">
        <div className="ml-[1vw] w-5 h-5 md:w-6 md:h-6">
          <Image src={logo} alt="Image" width={24} />
        </div>
        <div className="flex w-[272.81px] font-medium text-[11px] leading-[14px] h-full">
            <div className="flex justify-around items-center w-[98.5px] h-full">
                <Link href={'/'} className="cursor-pointer hover:text-gray-500 active:text-gray-400 transition ease-in-out">Find a Store</Link>
                <div>|</div>
            </div>
            <div className="flex justify-around items-center w-[51.81px] h-full">
                <Link href={'/help'} className="cursor-pointer hover:text-gray-500 active:text-gray-400 transition ease-in-out">Help</Link>
                <div>|</div>
            </div>
            <div className="flex justify-around items-center w-[122.5px] h-full">
                <Link href={'/join-us'} className="cursor-pointer hover:text-gray-500 active:text-gray-400 transition ease-in-out">Join Us</Link>
                <div>|</div>
                <Link href={'/login'} className="cursor-pointer hover:text-gray-500 active:text-gray-400 transition ease-in-out">Sign In</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
