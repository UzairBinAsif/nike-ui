import React from 'react'
import { Metadata } from 'next';
import Product from '../components/Product'
import I from "@/../public/GearUpImage4.svg";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Fast"
    price="₹ 3 795"
    content="Women's Mid-Rise 7/8 Running Leggings with Pockets"
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Fast - Nike",
  description: "Designed by Uziar Bin Asif",
};