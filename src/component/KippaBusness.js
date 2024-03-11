import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const KippaBusness = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className=" mt-[140px] h-[45vh]  sm:flex sm:items-center sm:flex-col sm:mt-28  md:mt-[580px] md:h-fit md:mb-28">
      <h1  className="text-3xl sm:w-4/5 font-bold text-center">
        <span  className="text-blue-700  mr-2">400,000+</span>micro businesses use
        Kippa
      </h1>
      <div  data-aos = "fade-up" className="mt-20  flex items-center justify-center  sm:hidden sm:opacity-0">
        <img
          src="https://kippa.africa/_nuxt/img/kippa-stats-illustration.1ab4fcf.png"
          alt="img-1"
          className=""
        />
      </div>
    </div>
  );
};

export default KippaBusness;
