import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="h-fit  text-white bg-blue-950 rounded-tr-[20px] mt-20 rounded-tl-[20px] flex flex-col items-center">
      <h1  data-aos = "fade-down" className="text-center pt-16 font-bold text-3xl sm:text-2xl">
        Get solid advice to grow your business
      </h1>
      <p className="text-center mt-8 font-bold  md:w-4/5 sm:w-full  sm:px-4 w-[50%]">
        Subscribe to our email list to receive advice from other business
        owners, support articles, and industry tips.
      </p>

      <div className="w-[50%]  md:w-full  sm:px-4  md:px-8 md:flex-col  mt-8 flex items-center justify-between ">
        <input
          data-aos = "fade-right"
          placeholder="Enter your email to get started"
          className="w-[75%] p-8 md:w-full placeholder-white  bg-[#3b3a70] h-16 outline-none rounded-md"
        />

        <button  data-aos = "fade-left" className="px-8  md:mt-4  md:w-full py-5 text-md font-bold  text-blue-950 capitalize rounded-md  cursor-pointer bg-white">
          subscribe
        </button>
      </div>

      <h1   data-aos = "fade-down" className="text-5xl md:text-3xl  sm:w-full  sm:text-2xl  w-[83%]  text-center mt-16 font-bold">
        Join 400,000+  Small Businesses using Kippa to grow
      </h1>
      <button  data-aos = "zoom-out" className="px-8 py-4  mt-8 text-md text-blue-950 font-bold capitalize rounded-md  cursor-pointer bg-white">
        download kippa
      </button>

      <section className="flex   sm:flex sm:flex-col   md:grid md:grid-cols-2  md:justify-items-center  md:gap-12 items-center mt-16 justify-between w-[80%] ">
        <img
          data-aos = "fade-right"
        
        src="https://kippa.africa/_nuxt/img/disrupt-africa.8795e0e.png"
          className="w-24 h-24 object-contain "
          alt="img"
        />
        <img
         data-aos = "fade-right"
          src="https://kippa.africa/_nuxt/img/business-insider.5c09e1c.png"
          className="w-24 h-24  object-contain"
          alt="img"
        />

        <img
         data-aos = "fade-left"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACdSURBVHgB7dbRCYNAEAbhMaSPWIql2FlqSSUpxex1sMIFkX8+OHxZVObhWJAkSZIkSWmWo3ChpXTm6jf3eryZ7EE4AxDOAIQzAOEMQLixCXa3q7XO1pz91PmemO1+/8VVxip69O0n3ts1fQ0evAMIZwDCGYBwBiBcfIAn97H9Yxu8U4C1zs5k3gGEMwDhDEA4AxAuPoAkSZIkScrzA2bJbTtDz4U6AAAAAElFTkSuQmCC"
          className="w-24 h-24  object-contain "
          alt="img"
        />
        <img
         data-aos = "fade-left"
          src="https://kippa.africa/_nuxt/img/bbc.45fe866.png"
          className="w-24 h-24 object-contain"
          alt="img"
        />
      </section>
      <section className="w-[90%] md:grid md:grid-cols-2  sm:px-6 md:gap-3  md:h-fit   mt-24 flex items-start justify-around">
        <img
    
          src="https://invoice.kippa.africa/images/logos/logo-white.png"
          className="w-24 mr-32 object-contain  md:col-span-2"
        />

        

        <ul  className="list-none  font-bold text-white text-sm  md:mb-12 capitalize ">
            <h3  className="text-[20px] font-bold capitalize mb-4">
                Company
            </h3>
          <li className="mb-3 cursor-pointer">Careers</li>
          <li className="mb-3  cursor-pointer">FAQs</li>
          <li className="mb-3  cursor-pointer">Terms of Service</li>
          <li className="mb-3  cursor-pointer">Privacy policy</li>
          <li className="mb-3  cursor-pointer">Year in Review</li>
        </ul>
        <ul  className="list-none  font-bold  md:mb-12 text-white text-sm capitalize ">
            <h3  className="text-[20px] font-bold capitalize mb-4">
            CONTACT
            </h3>
          <li className="mb-3 cursor-pointer">support@kippa.africa</li>
          <li className="mb-3  cursor-pointer">+2348173217999</li>
      
        </ul>
        <ul  className="list-none  font-bold text-white text-sm capitalize ">
            <h3  className="text-[20px] font-bold capitalize mb-4">
            NIGERIA
            </h3>
          <li className="mb-3 cursor-pointer">Shonny Highway, Shonibare</li>
          <li className="mb-3  cursor-pointer">Estate, Maryland, Lagos</li>
      
        </ul>
        <ul  className="list-none  font-bold text-white text-sm capitalize ">
            <h3  className="text-[20px] font-bold capitalize mb-4">
            UNITED STATES
            </h3>
          <li className="mb-3 cursor-pointer">251 Little Falls Drive,</li>
          <li className="mb-3  cursor-pointer">Wilmington, DE.</li>
      
        </ul>
        
      </section>


      <div  className="w-[80%] mt-16 mb-12 h-[0.5px] bg-gray-200">
       
      </div>

      <p  className="text-xs text-center  mb-28 w-[80%] ">
      Kippa is a technology platform - it is not a bank and does not hold or claim to hold a banking license. The banking services/financial services offered on the Kippa platform are provided by CBN-licensed banks and financial institutions
      </p>
    </div>
  );
};

export default Footer;
