import Image, { StaticImageData } from "next/image";
interface Prop {
  img: StaticImageData,
  named: string,
  price: string,
  category: string,
}

const HeroProduct = (props: Prop) => {
  return (
    <div className={` my-2 md:w-[25vw] h-fit`}>
      <div>
        <Image src={props.img} alt="image here" />
      </div>
      <div className="flex flex-col font-medium items-center text-[15px]">
        <div className="flex justify-between w-[95%]">
          <div className="font-medium text-[14px] truncate sm:text-[15px] leading-[24px]">{props.named}</div>
          <div className="font-medium text-[13px] min-w-fit0 sm:text-[15px] leading-[24px]">{props.price}</div>
        </div>
        <div className="text-[#757575] w-[95%] font-normal self-start text-[14px] ml-[8px] leading-[24px]">{props.category}</div>
      </div>
    </div>
  );
};

export default HeroProduct;
