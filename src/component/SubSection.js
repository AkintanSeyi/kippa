import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SubSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="h-[700px]  md:pb-12 md:mt-12 md:h-fit text-white bg-blue-950   ">
      <h1 className="text-4xl  capitalize  sm:text-2xl pt-20  font-bold   text-center">
        Do business quickly, with confidence
      </h1>
      <section className=" flex w-full md:grid   sm:flex  sm:flex-col sm:items-center  md:justify-items-center  md:grid-cols-2 mt-20  h-[80%]  px-8 justify-around ">
        <div  data-aos = "fade-right" className="flex  md:w-1/2 flex-col sm:w-full  items-center  md:text-center   w-[25%]">
          <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-[50%]">
            <img
              className="w-16  h-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_CTW9wngGao2KaiyExjT4AYT92hvSJzdBA&usqp=CAU"
              alt="img"
            />
          </div>

          <h3 className="mt-8 text-[22px]  font-bold">100% safe and secure</h3>

          <p className="mt-8 text-lg  text-center">
            All our accounts are enabled with two factor authentication to
            ensure extra- secure transactions.
          </p>
        </div>
        <div  data-aos = "fade-up" className="flex flex-col sm:mt-28 sm:w-full items-center  md:w-1/2  md:text-center w-[25%]">
          <div className="w-28  h-28 bg-white  flex justify-center items-center rounded-[50%]">
            <img
              className="w-24 object-contain  rounded-[50%] h-20"
              src="https://static.vecteezy.com/system/resources/previews/005/145/809/non_2x/folder-file-check-mark-icon-vector.jpg"
              alt="img"
            />
          </div>

          <h3 className="mt-8 text-[22px]  font-bold">
            Your Data is Protected
          </h3>

          <p className="mt-8 text-lg  text-center">
            We implement the highest digital security
          </p>

          <p className="mt-2 text-lg  text-center">
          encryption and access protocols. Customer
          </p>
          <p className="mt-2 text-lg  text-center">
          privacy is central to our build and we never

          </p>
          <p className="mt-2 text-lg  text-center">
          share your data without consent.
          </p>
        </div>

        <div  data-aos = "fade-left" className="flex flex-col  sm:w-full  sm:mt-28 items-center md:w-1/2  md:text-center  w-[25%]">
          <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-[50%]">
            <img
              className="w-24 object-contain rounded-[50%] h-20"
              src="https://img.freepik.com/premium-vector/people-with-stars-chat-bubble-colored-icon-positive-feedback-symbol-icon_756957-2121.jpg"
              alt="img"
            />
          </div>

          <h3 className="mt-8 text-[22px] text-center font-bold">
            Customer Success is our priority
          </h3>

          <p className="mt-8 text-lg  text-center">
            We’re here to help you and your business
          </p>

          <p className="mt-2 text-lg  w-[95%] text-center">
            succeed. Chat with us via WhatsApp or
          </p>
          <p className="mt-2 text-lg  text-center">
            Email, or call us directly
          </p>
        </div>
      </section>
    </div>
  );
};

export default SubSection;
