import Image from "next/image";
import React from "react";

const Partnerwith = () => {
  return (
    <div>
      <section className="max-w-[1514px]  max-md:text-center pt-[60px] sm:pb-[130px] lg:pb-[165px]  px-4  w-full mx-auto max-md:flex max-md:flex-col lg:flex items-center justify-between ">
        <div className="pb-[21px] ">
          <h2 className=" bg-[url(/images/bginpartnertext.png)]  text-[30px] sm:text-[40px]  max-w-[764px] w-full  bg-no-repeat bg-cover px-[55px] py-[50px] md:text-[50px]  mont lg:text-[80px] font-bold leading-[125%] text-black ">
            <span className=" text-[#1877F2]">Partner</span> With eduphiser.com
          </h2>
          <p className=" text-[#012D64] max-md:text-center text-justify mont text-[16px] md:text-[20px] lg:text-[30px] font-normal  leading-[148%] max-w-[779px]  w-full pb-[20px]   ">
            We are the specialist of Education Financing. Unlock endless
            possibility for growth and expand your business by partnering with
            us.{" "}
          </p>
          <button className=" rounded-[7px] hover:border-[1px] hover:border-solid hover:border-[#dadada]  hover:bg-white hover:text-[#0D50FF] border-[1px] border-solid border-[#0D50FF] duration-700 cursor-pointer hover:ease-in-out ease-in-out transitio max-md:mx-auto bg-[#1877F2] flex justify-center font-mont items-center px-3 sm:px-[26px] py-3 sm:py-[19px] text-white text-[16px] md:text-[20px] lg:text-[25px] font-semibold uppercase text-center  ">
            Partner With Us
          </button>
        </div>

        <Image
          className="mx-auto"
          src="/images/partnerwith.png"
          alt="partner"
          width={547}
          height={547}
        />
      </section>
      <div className=" pb-[245px] max-lg:pb-[100px] px-4">
        <div className=" max-w-[1514px]  max-md:flex max-md:flex-col pb-4  rounded-[36px]  lg:pr-[60px] gap-[30px] lg:flex justify-between  w-full mx-auto bg-[#E1EDFD]  ">
          <Image
            className=" pl-2.5 py-4 mx-auto"
            src="/images/wearehere.png"
            alt="wearehere"
            width={298}
            height={298}
          />
          <div className="flex flex-col mx-auto ">
            <h3 className=" mont mx-auto  xl:pt-[52px] pb-4 md:text-[47px] md:pt-[40px]  xl:text-[57px] font-medium capitalize leading-[160%] text-justify text-[#000]  ">
              We are here{" "}
              <span className=" text-[#00396C] font-bold">for you !</span>
            </h3>
            <p className=" max-w-[762px] text-center max-lg:px-[10px] mx-auto w-full xl:text-[28px] md:text-[20px] mont leading-[160%] capitalize  text-[#002A4F]    ">
              Whether you want a new Study Loan or have a Query on an existing
              one, we’re always here to help.
            </p>
          </div>
          <button className=" hover:border-[1px] hover:border-solid hover:border-[#dadada] border-[1px] border-solid border-[#0D50FF] hover:bg-white hover:text-[#0D50FF] duration-700 cursor-pointer hover:ease-in-out ease-in-out transition   text-white w-[249px] h-[40px] md:h-[60px] mx-auto md:mt-[60px] lg:py-[18px] py-[10px] xl:mt-[118px] lg:mt-[95px] flex justify-center  items-center  text-justify mont md:text-[26px] xl:text-[30px] font-medium capitalize leading-[160%] rounded-[7px] bg-[#1877F2]  ">
            contact now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partnerwith;
