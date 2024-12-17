import React from 'react';
import type { Metadata } from "next";
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const page = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16'>
      {/* Search and Help Input */}
      <div className='flex flex-col justify-center items-center gap-3'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>GET HELP</h1>
        <div className='relative w-full sm:w-[400px] lg:w-[600px]'>
          <input
            type="email"
            placeholder="What can we help you with?"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col sm:flex-row gap-8 mt-14'>
        {/* Left Section */}
        <div className='w-full sm:w-[70%] lg:w-[75%]'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-5'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
          <p className=' text-base sm:text-lg md:text-xl'>
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <div className=' text-base sm:text-lg md:text-xl'>
            <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
            <p>Apple Pay</p>
          </div>
          <p className=' text-base sm:text-lg md:text-xl'>
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.
          </p>

          <div className='flex gap-3 mt-4'>
            <button className='rounded-full w-28 h-9 bg-black text-white'>JOIN US</button>
            <button className='rounded-full w-32 h-9 bg-black text-white'>SHOP NIKE</button>
          </div>

          {/* FAQs */}
          <div className='mt-8'>
            <h2 className='font-bold text-xl sm:text-2xl'>FAQs</h2>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg sm:text-xl'>Does my card need international purchases enabled?</h3>
              <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              <p>Please note, some banks may charge a small transaction fee for international orders.</p>
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg sm:text-xl'>Can I pay for my order with multiple methods?</h3>
              <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg sm:text-xl'>What payment method is accepted for SNKRS orders?</h3>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div className='mt-4'>
              <h3 className='font-semibold text-lg sm:text-xl'>Why don&apos;t I see Apple Pay as an option?</h3>
              <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
            </div>
          </div>

          {/* Thumbs Up/Down */}
          <div className='flex items-center mt-6'>
            <h3 className='mr-4 text-base sm:text-lg'>Was this answer helpful?</h3>
          </div>

          <div className='flex gap-3'>
              <IoIosThumbsUp className='h-8 w-8' />
              <IoIosThumbsDown className='ml-6 h-8 w-8' />
            </div>

          {/* Related Links */}
          <div className='flex flex-col gap-3 mt-8'>
            <h1 className='text-gray-400 text-lg sm:text-xl'>RELATED</h1>
            <Link href={'/help'} className='underline text-base sm:text-lg'>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</Link>
            <Link href={'help'} className='underline  text-base sm:text-lg mb-5'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</Link>
          </div>
        </div>

        {/* Right Section (Contact Us) */}
        <div className='w-full sm:w-[30%] lg:w-[25%] border-l border-gray-300 pl-8'>
          <h1 className='font-bold text-xl sm:text-2xl text-center mb-5'>CONTACT US</h1>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center'>
              <FaMobileScreenButton className='h-20 w-20 mb-2' />
              <p className='text-center'>000 800 919 0566</p>
              <p className='text-center text-sm sm:text-base'>Products & Orders: 24 hours a day, 7 days a week</p>
              <p className='text-center text-sm sm:text-base'>Company Info & Enquiries: 07:30-16:30, Monday - Friday</p>
            </div>

            <div className='flex flex-col items-center'>
              <RiMessage2Fill className='w-20 h-20 mb-2' />
              <p>24 hours a day</p>
              <p>7 days a week</p>
            </div>

            <div className='flex flex-col items-center'>
              <MdEmail className='w-20 h-20 mb-2' />
              <p>We&apos;ll reply within</p>
              <p>five business days</p>
            </div>

            <div className='flex flex-col items-center'>
              <IoLocationSharp className='w-20 h-20 mb-2' />
              <p>STORE LOCATOR</p>
              <p className='text-center'>Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
export const metadata: Metadata = {
  title: "Help - Nike",
  description: "Designed by Uziar Bin Asif",
};