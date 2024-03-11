import React, { useEffect } from "react";
import kippaimg from "../image/c07f07176115193.Y3JvcCwyMDQ1LDE2MDAsMjU4LDA (1).png";
import { TiArrowRightThick } from "react-icons/ti";
import { IoLogoApple } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstHomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section className="  relative h-[1050px]">
      <div className=" w-sceen bg-blue-950 text-white h-[810px] flex  md:h-fit  md:flex-col md:items-center ">
        <div  data-aos = "fade-right" className="w-1/2  pt-24  sm:pl-4  pl-12  md:w-[100%]    ">
          <div className="w-fit pr-2    font-bold text-sm pl-2 items-center flex h-[40px] rounded-[20px] bg-[#3b3a70]">
            <div className="h-[70%]  sm:text-sm text-black  mr-2 text-sm flex font-bold items-center rounded-[20px] sm:px-4 bg-white capitalize w-fit px-4">
              new
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619175.png"
              className="w-5 h-5 mr-2 "
              alt="img"
            />
            <p className="mr-2 w-fit sm:flex sm:text-xs">
              Kippa bolsters team with two
              <span className="sm:hidden">industry veterans</span>
              <span className="none  sm:block">...</span>
            </p>
            <TiArrowRightThick className="text-lg" />
          </div>

          <h1 className="text-5xl  capitalize  sm:text-3xl  mt-12  font-bold   w-[90%]">
            Simple banking & bookkeeping for your micro business
          </h1>
          <p className="w-4/5 mt-4 font-bold  sm:text-sm sm:leading-8 sm:w-full">
            Get an Instant Business Bank Account, Simple Bookkeeping, Send
            Invoices & Receipts, and get an E-commerce website, all in one FREE
            app!
          </p>
          <button className="  sm:mt-12 w-fit px-8 mt-4 capitalize bg-white h-[45px] border-none rounded-lg  cursor-pointer  text-sm  font-bold text-blue-950">
            download app
          </button>
          <div className="flex items-center justify-between sm:mt-8 w-fit mt-4 ">
            <span className="mr-4 font-bold">Available on</span>
            <p className="mr-4  text-2xl">
              <IoLogoApple />
            </p>
            <img
              src="https://www.svgrepo.com/show/223032/playstore.svg"
              className="w-5 h-5 mr-2"
              alt="img"
            />
          </div>
        </div>

        <div className="  flex w-1/2 h-full items-center justify-center  md:w-[100%] md:mt-20  md:mb-20">
          <img
            src="https://kippa.africa/_nuxt/img/hero-new-illustration.96eb53e.png"
            alt="img"
            className="w-full  animateimg"
          />
        </div>
      </div>

      <div  data-aos = "zoom-in" className="w-full  h-[fit] sm:none  block sm:hidden sm:opacity-0  absolute bottom-[-60px]  left-[30%]  md:left-[50%] md:bottom-[-450px]">
        <img
          className="w-[55%]  rounded-lg"
          object-contain
          src={kippaimg}
          alt="img"
        />
      </div>
    </section>
  );
};

export default FirstHomePage;
