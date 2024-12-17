import React from 'react'
import { Metadata } from 'next';
import Product from '../components/Product'
import I from "@/../public/GearUpImage1.svg";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Dri-FIT ADV TechKnit Ultra"
    price="₹ 3 895"
    content="Men's Short-Sleeve Running Top"
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Dri-FIT ADV - Nike",
  description: "Designed by Uziar Bin Asif",
};