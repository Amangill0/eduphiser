import React from "react";
import { CircleIcons } from "../common/Icons";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="bg-[#F2FAFF]">
      <div className="flex justify-between max-md:text-center max-md:rounded-[20px] max-md:flex max-md:flex-col px-4 pt-[10px]  items-center  gap-[20px] max-w-[1676px] w-full mx-auto ">
        <div className=" max-w-[822px] md:max-w-[622px]  xl:max-w-[722px] md:py-[50px] xl:py-[74px] sm:pl-[40px]  xl:pl-[100px] rounded-t-[40px] bg-no-repeat bg-cover w-full bg-[url(/images/aboutusbgimg.png)]  ">
          {" "}
          <h2 className=" mont lg:text-[60px] md:text-[40px] text-[30px] max-md:pt-[60px] xl:text-[80px] pb-[22px] font-semibold text-[#00396C]  ">
            About us
          </h2>
          <div className="  max-md:justify-center items-center flex gap-2">
            <CircleIcons />
            <h3 className=" text-[#01014C] md:text-xl mont text-base lg:text-[25px] mont-medium leading-[172%] ">
              Breaking the Financial Barriers
            </h3>
          </div>
          <div className=" max-md:justify-center items-center max-md:pb-[30px] flex gap-2">
            <CircleIcons />
            <h3 className=" text-[#01014C]  mont md:text-xl text-base lg:text-[25px] mont-medium leading-[172%] ">
              Enabling the access to Quality Education.
            </h3>
          </div>
        </div>
        <div className=" md:w-[50%] max-md:w-[80%]   xl:w-[40%]">
          <Image
            className="w-full"
            src="/images/aboutusimg.png"
            alt="aboutus"
            width={565}
            height={386}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
