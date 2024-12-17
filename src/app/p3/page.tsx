import React from 'react'
import { Metadata } from 'next';
import Product from '../components/Product'
import I from "@/../public/herop3.png";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Air Max 97 SE"
    price="₹ 16 995"
    content="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    —designed to push you past your limits and help you go to the max."
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Air Max 97 SE - Nike",
  description: "Designed by Uziar Bin Asif",
};