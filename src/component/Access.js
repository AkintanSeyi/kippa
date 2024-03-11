import React , {useEffect} from "react";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Access = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="  flex flex-col  md:h-fit md:pb-24 md:mt-12 items-center  mt-12 h-[45vh] ">
      <h1  data-aos = "fade-down" className="text-3xl pt-12 text-center font-bold">
        Resources to help your business succeed
      </h1>
      <h3 className="text-lg pt-4 text-center  sm:text-sm">
        Business is hard work, learn a few things to make it easier
      </h3>
      <div className="flex items-center  sm:w-full  md:w-1/2 h-fit mt-8 justify-around w-[30%]">
        <button  data-aos = "fade-right" className="w-fit flex  items-center  justify-center px-4 py-3 rounded-lg font-bold capitalize text-white bg-blue-700">
          blog
          <GoArrowUpRight className="ml-1 text-lg text-bold" />
        </button>
        <button  data-aos = "fade-up" className="w-fit   flex items-center  justify-center px-4 py-3 rounded-lg font-bold  text-white   bg-blue-700">
          E-book
          <GoArrowUpRight className="ml-1 text-lg text-bold" />
        </button>
        <button  data-aos = "fade-left" className="w-fit flex items-center  justify-center px-4 py-3 rounded-lg font-bold  text-white capitalize  bg-blue-700">
          webinar
          <GoArrowUpRight className="ml-1 text-lg text-bold" />
        </button>
      </div>
    </div>
  );
};

export default Access;
