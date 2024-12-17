import Image, { StaticImageData } from "next/image";
interface Prop {
  img: StaticImageData,
  named: string,
  price: string,
  category: string,
}

const HeroProduct = (props: Prop) => {
  return (
    <div className={` my-2 md:w-[20vw] h-fit`}>
      <div>
        <Image src={props.img} alt="image here" />
      </div>
      <div className="flex mt-3 flex-col font-medium items-center text-[15px]">
        <div className="flex justify-between w-[95%]">
          <div className="w-[75%] md:w-[70%] font-medium text-[15px] sm:truncate md:text-[12px] leading-[24px]">{props.named}</div>
          <div className="font-medium text-[15px] min-w-fit sm:text-[12px] leading-[24px]">{props.price}</div>
        </div>
        <div className="mt-3 w-[100%]">
        <div className="text-[#757575] w-[70%] font-normal self-start text-[13px] md:text-[12px] lg:text-[15px] ml-[8px] leading-[24px]">{props.category}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;