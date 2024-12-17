import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { PiShoppingCartLight } from "react-icons/pi";
interface Prop {
  img: StaticImageData,
  heading: string,
  content: string,
  price: string,
}

const Product = (props: Prop) => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-8 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full rounded-lg overflow-hidden">
        <div>
          <Image
            src={props.img}
            alt="image"
            width={500}
            height={500}
            className="object-cover h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{props.heading}</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {props.content}
            </p>
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-3xl font-bold">{props.price}</p>
            <button className="mt-4 w-full sm:w-60 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3">
              <PiShoppingCartLight className="h-7 w-7" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
