import Image from "next/image";
import left from "@/../public/leftArrow.png";
import right from "@/../public/rightArrow.png";
import HeroProduct from "./HeroProduct";
import p1 from "@/../public/herop1.png";
import p2 from "@/../public/herop2.png";
import p3 from "@/../public/herop3.png";
import Link from "next/link";

export default function SecondSection() {
  return (
    <div className="w-screen flex flex-col items-center h-fit">
      <div className=" text-[#111111] text-[22px] leading-[28px] font-medium flex items-center justify-between w-[90vw] h-[10%]">
        <span>Best of Air Max</span>
        <div className="flex items-center justify-around h-[92%] w-[120px]">
          <div>Shop</div>
          <div className="w-[20%] cursor-pointer rounded-full">
            <Image src={left} alt="image" />
          </div>
          <div className="w-[20%] hover:opacity-75 transition ease-in-out cursor-pointer rounded-full">
            <Image src={right} alt="image" />
          </div>
        </div>
      </div>
      <div className=" w-[90vw] h-fit">
        <div className="grid gap-3 justify-items-center grid-cols-2 md:grid-cols-3">
          <Link href={'/air-max-women'}><HeroProduct
            img={p1}
            named="Nike Air Max Pulse"
            price="₹ 13 995"
            category="Women's Shoes"
          /></Link>
          <Link href={'/air-max'}>
            <HeroProduct
              img={p2}
              named="Nike Air Max Pulse"
              price="₹ 13 995"
              category="Men's Shoes"
            />
            </Link>
            <Link href={'/p3'}>
          <HeroProduct
            img={p3}
            named="Nike Air Max 97 SE"
            price="₹ 16 995"
            category="Men's Shoes"
            />
            </Link>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
