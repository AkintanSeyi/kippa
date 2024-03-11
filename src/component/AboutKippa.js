import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutKippa = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="px-20 sm:px-4   md:px-8   h-fit  flex flex-col items-center">
      <h1  data-aos = "fade-down" className="text-center font-bold text-4xl sm:text-2xl  ">
        The truth about Kippa, from our users
      </h1>

      <video className="mt-4 mb-4 rounded-lg w-[90%] md:h-full md:w-[100%]" controls>
        <source src="" type="video/mp4"></source>
      </video>
      <section className="flex   sm:flex  sm:flex-col sm:items-center w-fit md:gap-12  items-center justify-between  md:h-fit md:mt-14 md:mb-4  md:grid md:grid-cols-2 h-[40vh]">
        <div  data-aos = "fade-right" className="w-[30%]  md:w-80  md:h-fit  sm:w-[95%] px-8 py-8  h-40  rounded-md  border-[1px] border-[lightgrey]">
          <p className="text-sm ">
            "I'm actually enjoying the App. It has several unique features, and
            it's good for business. Keep it up, Kippa!"
          </p>
          <h1 className="mt-4 text-[20px] font-bold">Prince Obi-Ijomah</h1>
        </div>
        <div  data-aos = "fade-up" className="w-[30%]  md:w-80 md:h-fit  sm:w-[95%]  px-8 py-8  h-40  rounded-md  border-[1px] border-[lightgrey]">
          <p className="text-sm ">
            "Great work, This App is very nice. I use it to track everything
            that is happening in my store. No more shortage."
          </p>
          <h1 className="mt-4 text-[20px] font-bold">Prince Mexdex</h1>
        </div>
        <div  data-aos = "fade-left" className="w-[30%]  md:w-80 md:h-fit  sm:w-[95%]  px-8 py-8  h-40  rounded-md  border-[1px] border-[lightgrey] ">
          <p className="text-sm ">
            "I routinely don't review apps, but this is an exception. I am so
            proud of the work the team behind this App have done. ”
          </p>

          <h1 className="mt-4 text-[20px] font-bold">Oyinlola Fasina</h1>
        </div>
      </section>
    </div>
  );
};

export default AboutKippa;
