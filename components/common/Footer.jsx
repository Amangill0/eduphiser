import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcons, GoogleIcons, InstaIcons, LinkdinIcons, MailIcons, TelephoneIcons, TwitterIcons } from "./Icons";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#004C8F]">
        <section className="flex justify-between   max-xl:flex max-xl:flex-col px-4  pt-[126px] pb-[100px] max-w-[1500px] w-full mx-auto  gap-[70px]">
          <div className=" flex max-md:text-center  max-xl:mx-auto flex-col">
            <Link href="/home">
              <Image
                className="max-md:mx-auto"
                src="/images/footerlogo.png"
                alt="navbar"
                width={217}
                height={44}
              />
            </Link>
            <h3 className="text-[#EBEBEB] pt-[13px] text-xl font-normal pb-[37px]   ">
              Lending education for future superheros
            </h3>
            <h2 className=" text-xl font-semibold text-white pb-[13px]  ">
              Address
            </h2>
            <p className=" mont text-base text-[#FDFDFD] font-medium max-w-[417px] w-full pb-[36px] ">
              A-43 FF KH NO -14/11/1 GA, NO 2 SITA PURI-1, Palam, South West
              Delhi, New Delhi, Delhi, India, 110045.
            </p>
            <div className=" flex max-md:mx-auto items-center gap-[26px] ">
              <Link className="group" href="/">
               <FacebookIcons/>
              </Link>
              <Link className="group" href="/">
               <TwitterIcons/>
              </Link>
              <Link className="group" href="/">
              <InstaIcons/>
                
              </Link>
              <Link className="Group" href="/">
              <LinkdinIcons/>
                
              </Link>
              <Link className="group" href="/">
               <GoogleIcons/>
              </Link>
            </div>
          </div>

          <div className="flex  justify-between max-sm:grid-cols-1 max-md:grid max-md:grid-cols-2  gap-[70px]">
            <div className=" flex max-md:mx-auto flex-col ">
              <Link
                className="text-xl max-md:text-center hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out font-semibold  text-white "
                href="/"
              >
                {" "}
                Our Services
              </Link>
              <Link
                className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7] pt-[40px] "
                href="/"
              >
                {" "}
                Educational Loan
              </Link>
            </div>
            <div className=" max-md:mx-auto  max-md:text-center  flex flex-col">
              <Link
                className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold pb-[40px] text-white "
                href="/"
              >
                {" "}
                Resources
              </Link>
              <div className=" flex flex-col gap-[26px]">
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7]  "
                  href="/"
                >
                  {" "}
                  About Us
                </Link>
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7] "
                  href="/"
                >
                  {" "}
                  Career
                </Link>
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7]  "
                  href="/"
                >
                  {" "}
                  FAQs
                </Link>
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7]  "
                  href="/"
                >
                  {" "}
                  Blogs
                </Link>
              </div>
            </div>
            <div className=" max-md:mx-auto  flex flex-col ">
              <Link
                className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  max-md:text-center font-semibold  text-white  pb-[40px]"
                href="/"
              >
                {" "}
                Useful Links
              </Link>
              <div className=" flex max-md:text-center  flex-col gap-[26px]">
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-semibold  text-[#E7E7E7] "
                  href="/"
                >
                  {" "}
                  Privacy Policy
                </Link>
                <Link
                  className="text-xl hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  max-md:text-center  xl:w-[99px]  font-semibold  text-[#E7E7E7] "
                  href="/"
                >
                  {" "}
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className=" flex max-md:mx-auto  flex-col pb-[40px]">
              <Link
                className="text-xl pb-[40px] hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  max-md:mx-auto  font-semibold  text-white "
                href="/"
              >
                {" "}
                Contact Us
              </Link>
              <div className=" flex max-md:mx-auto  flex-col gap-[26px]">
                <div className="flex group items-center gap-2">
                  <MailIcons />
                  <Link
                    className=" mont text-xl group-hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-normal text-[#E4E4E4]"
                    href="/"
                  >
                    eduphiser@gmail.com
                  </Link>
                </div>
                <div className="flex max-md:mx-auto group  items-center gap-2">
                  <TelephoneIcons />
                  <Link
                    className=" mont text-xl  group-hover:opacity-[0.5] duration-300 transition ease-in-out hover:ease-in-out  font-normal text-[#E4E4E4]"
                    href="/"
                  >
                    +91-9525536555
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" bg-[rgba(255,255,255,0.25)] w-full h-[1px] "></div>

        <div className=" flex px-4 pt-[78px] max-lg:hidden pb-[55px] max-w-[1500px] w-full mx-auto justify-between items-center">
          <Link className="text-[#EAEAEA]  text-xl font-light  " href="/">
            © 2024, All right reserved by EduPhiser Services Private Limited{" "}
          </Link>
          <div className=" flex justify-between items-center gap-[50px] ">
            <Link
              className="text-[#BDBDBD]  text-xl font-medium pop  "
              href="/"
            >
              Privacy Policy{" "}
            </Link>
            <Link
              className="text-[#BDBDBD]  text-xl font-medium pop  "
              href="/"
            >
              Term of Use{" "}
            </Link>
            <Link
              className="text-[#BDBDBD]  text-xl font-medium pop  "
              href="/"
            >
              Legal{" "}
            </Link>
            <Link
              className="text-[#BDBDBD]  text-xl font-medium pop  "
              href="/"
            >
              Site Map{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
