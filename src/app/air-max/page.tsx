import { Metadata } from 'next';
import React from 'react'
import Product from '../components/Product'
import I from "@/../public/herop2.png";

const page = () => {
  return (
    <Product 
    img={I}
    heading="Nike Air Max Pulse"
    price="₹ 13 995"
    content="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    —designed to push you past your limits and help you go to the max."
    />
  )
}

export default page
export const metadata: Metadata = {
  title: "Featured - Nike",
  description: "Designed by Uziar Bin Asif",
};