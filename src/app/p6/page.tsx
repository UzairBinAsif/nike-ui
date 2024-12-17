import React from 'react'
import { Metadata } from 'next';
import Product from '../components/Product'
import I from "@/../public/GearUpImage3.svg";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Dri-FIT ADV Run Division"
    price="₹ 5 295"
    content="Women's Long-Sleeve Running Top"
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Dri-FIT ADV Run Division - Nike",
  description: "Designed by Uziar Bin Asif",
};