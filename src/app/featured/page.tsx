import Image from 'next/image';
import { Metadata } from 'next';
import img from '@/../public/productShoe.svg';
import { PiShoppingCartLight } from "react-icons/pi";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-8 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full rounded-lg overflow-hidden">
        
        {/* Product Image Section */}
        <div>
          <Image
            src={img}
            alt="Nike Air Force 1 PLT.AF.ORM"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

    
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Nike Air Force 1 PLT.AF.ORM</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan Mid. Its &apos;inside-out&apos;-inspired
              construction, including unique layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while 
              unexpected shading, a rich mixture of materials, and an aged midsole aesthetic give this release an 
              artisan finish.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-2xl sm:text-3xl font-bold">₹ 8,695.00</p>
            <button className="mt-4 w-full sm:w-60 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-3">
              <PiShoppingCartLight className="h-7 w-7" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export const metadata: Metadata = {
  title: "Featured - Nike",
  description: "Designed by Uziar Bin Asif",
};