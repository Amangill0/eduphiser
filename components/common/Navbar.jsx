import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomeIcons } from "./Icons";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-[1561px] flex gap-[55px]  items-center w-full mx-auto px-2.5 py-[15px] bg-white   ">
        <Link href="/home">
          <Image
            src="/images/navbar.png"
            alt="navbar"
            width={217}
            height={44}
          />
        </Link>

        <div className=" xl:flex justify-between max-xl:hidden  items-center gap-[35px]">
          <Link
            className="text-[#0F0F12] hover:rounded-[7px] duration-300 ease-in-out transition hover:border-1px hover:border-solid hover:border-[#DADADA] p-[7px]  hover:bg-white hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)]  flex gap-2.5 items-center  text-xl font-semibold mont "
            href="/"
          >
            <span>
              {" "}
             <HomeIcons/>
            </span>{" "}
            Educational Loan
          </Link>
          <Link
            className="text-[#0F0F12] hover:rounded-[7px] duration-300 ease-in-out transition hover:border-1px hover:border-solid hover:border-[#DADADA] p-[7px] hover:bg-white hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)]  text-xl font-semibold mont "
            href="/"
          >
            How it Works
          </Link>
          <Link
            className="text-[#0F0F12] hover:rounded-[7px] duration-300 ease-in-out transition hover:border-1px hover:border-solid hover:border-[#DADADA] p-[7px]  hover:bg-white hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)]  text-xl font-semibold mont "
            href="/"
          >
            Blogs
          </Link>
          <Link
            className="text-[#0F0F12] hover:rounded-[7px] duration-300 ease-in-out transition hover:border-1px hover:border-solid hover:border-[#DADADA] p-[7px]  hover:bg-white hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)]  text-xl font-semibold mont "
            href="/"
          >
            Be Our Partner
          </Link>
          <Link
            className="text-[#0F0F12] hover:rounded-[7px] duration-300 ease-in-out transition hover:border-1px hover:border-solid hover:border-[#DADADA] p-[7px]  hover:bg-white hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)]  text-xl font-semibold mont "
            href="/"
          >
            Contact Us
          </Link>
          <button className="flex items-center cursor-pointer  duration-700 hover:ease-in-out transition ease-in-out group hover:text-[#fff] hover:bg-[#0378E5]  gap-2.5 rounded-[7px] py-[14px] px-[28px] border-1px border-solid border-[#DADADA] shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)] ">
            <Image
              src="/images/loginbtn.png"
              alt="loginbtn"
              width={20}
              height={20}
            />
            <h2 className="text-[#1877F2] text-xl  group-hover:text-[#fff] fonr-bold uppercase     ">
              Log In
            </h2>
          </button>
          <button className=" rounded-[7px] hover:text-[#1877F2] border-[1px] border-solid border-transparent hover:shadow-[0px_0px_15px_-10px_rgba(0,0,0,0.84)] group w-[153px] duration-700 hover:bg-white hover:border-[1px] hover:border-solid hover:border-[#dadada] transition ease-in-out cursor-pointer py-[14px] px-[28px] bg-[#0378E5] ">
            <h2 className="text-white text-xl group-hover:text-[#1877F2] fonr-bold uppercase  ">
              Sign up
            </h2>
          </button>
        </div>

<h2 className=" rotate-[45deg] font-bold text-5xl absolute top-2.5 xl:hidden right-2.5   " >+</h2>


      </nav>
    </div>
  );
};

export default Navbar;
