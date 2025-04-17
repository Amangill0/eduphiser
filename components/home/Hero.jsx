import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <main className="bg-[#F2FAFF]">
        <section className="flex  max-[1000px]:flex max-[1000px]:flex-col  justify-between  max-[1000px]:pt-4  pl-[20px] mr-auto pt-[10px]">
          <div className="max-w-[585px]  sm:pb-[40px] 2xl:pb-[185px] lg:pb-[70px] max-[1000px]:text-center  max-[685px]:pb-12  max-[685px]:pt-[50px] pt-[111px] w-full mx-auto ">
            <h2 className="mont pb-4 text-[#03206B] text-lg   max-[685px]:text-sm lg:text-[24px] font-bold leading-[120%] ">
              Fund Your Dreams, Secure Your Career
            </h2>
            <h3 className=" pb-4 lg:pb-[33px] text-[#1E1E1E] text-[30px]  max-[100px]:text-3xl md:text-[35px] xl:text-[69px] font-bold leading-[105%]   ">
              Educational Loans <span className="font-normal"> for a</span>
              <span className="text-[#1877F2]"> Brighter</span> Tomorrow
            </h3>
            <p className=" text-[#01014C] w-full pb-7 lg:pb-[38px]pb-4  max-[1000px]:text-md  max-[1000px]:text-center  max-w-[649px] mont md:text-[17px] xl:text-[24px] font-normal text-justify leading-[164%] ">
              Discover the Best offerings on Study Loans along with our
              comprehensive support and guidance. Join the Movement of Inclusive
              Education with Eduphiser.
            </p>
            <button className=" rounded-[12px] hover:bg-white hover:text-[#0D50FF] duration-700 cursor-pointer hover:ease-in-out ease-in-out transition  bg-[#0D50FF]  max-[685px]:text-base  max-[685px]:w-[150px]  max-[685px]:h-[55px] w-[200px] lg:w-[299px] h-[74px] lg:h-[74px] px-6 lg:px-[32px] py-4 mont text-[20px] md:text-[22px] font-bold text-white uppercase  shadow-[0px_18px_30px_-10px_rgba(64,117,255,0.46)] ">
              Apply Now
            </button>
          </div>
          <div className=" w-full max-w-[990px] flex items-end">
            <Image
              src="/images/mainsectionimage.png"
              alt="men "
              height={734}
              width={995}
            ></Image>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
