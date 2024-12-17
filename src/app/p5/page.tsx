import React from 'react'
import { Metadata } from 'next';
import Product from '../components/Product'
import I from "@/../public/GearUpImage2.svg";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Dri-FIT Challenger"
    price="₹ 2 495"
    content="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Dri-FIT Challenger - Nike",
  description: "Designed by Uziar Bin Asif",
};