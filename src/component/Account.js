import React , {useEffect}from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Account = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="mt-8 ">
      <h1 className="text-3xl font-bold text-center  ">
        One account to run your small business like the big boys
      </h1>

      <div className="h-fit ">
        <section className="h-screen w-full  md:h-fit  flex md:flex-col md:mt-12 md:items-center">
          <div  data-aos = "fade-right" className="w-1/2  md:w-full  md:h-[450px]  sm:h-[400px] h-full flex items-center justify-center">
            <div className="w-[70%]  sm:w-[92.5%]  sm:h-[90%] md:h-full  flex items-center justify-center rounded-lg h-[70%] bg-[#f7f4f4]">
              <img
                className="w-[80%]  sm:w-[95%]  h-full"
                src="https://kippa.africa/_nuxt/img/bookkeping-hero-img.f548ecd.webp"
                alt="img"
              />
            </div>
          </div>

          <div  data-aos = "fade-left" className="w-1/2  md:h-fit md:mt-8 md:text-start  md:ml-[35%]  sm:ml-12  sm:mt-4    md:w-full h-full      flex flex-col justify-center ">
            <h1 className="text-2xl font-bold md:mb-4 ">
              Instant Business Bank Account
            </h1>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                get an account in your business name
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg  ">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize   sm:text-sm  font-bold">
                send an receive payment from your customers{" "}
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3   text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize sm:text-sm font-bold">
                seperate your business from personal finances{" "}
              </p>
            </div>

            <p className="text-blue-700  cursor-pointer mt-12  underline uppercase">
              open an business bank account
            </p>
          </div>
        </section>

        <section className="h-screen w-full  md:px-2  px-20  md:h-fit md:flex-col flex  md:mt-28 md:items-center ">
          <div  data-aos = "fade-right" className="w-1/2  sm:ml-12  sm:mt-4   md:h-fit md:mt-8 md:text-start  md:ml-[35%]   md:w-full h-full      flex flex-col justify-center ">
            <h1 className="text-2xl font-bold  md:mb-4 capitalize">
              bookkeeping
            </h1>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                record your daily income
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                send free receipts and invoice{" "}
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize sm:text-sm font-bold">
                recover debt 3x faster from debtors{" "}
              </p>
            </div>
            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                manage your stock without counting{" "}
              </p>
            </div>

            <p className="text-blue-700  cursor-pointer  mt-12 md:mb-8 underline uppercase">
              learn more
            </p>
          </div>

          <div  data-aos = "fade-left" className="w-1/2  sm:h-[400px]  md:w-full  md:h-[450px]  h-full flex items-center justify-center">
            <div className="w-[70%]   sm:w-[92.5%]  sm:h-[90%]  md:h-full  flex items-center justify-center rounded-lg h-[70%] bg-[#f7f4f4]">
              <img
                className="w-[80%] sm:w-[95%] h-full"
                src="https://kippa.africa/_nuxt/img/bookkeping-hero-img.f548ecd.webp"
                alt="img"
              />
            </div>
          </div>
        </section>

        <section className="h-screen w-full    md:h-fit md:flex-col flex  md:mt-28 md:items-center ">
          <div  data-aos = "fade-right" className="w-1/2  md:w-full   sm:h-[400px] md:h-[450px]  h-full flex items-center justify-center">
            <div className="w-[70%]  sm:w-[92.5%]  sm:h-[90%] md:h-full  flex items-center justify-center rounded-lg h-[70%] bg-[#f7f4f4]">
              <img
                className="w-[80%]   sm:w-[95%]  h-full"
                src="https://cdn-icons-png.freepik.com/512/2656/2656425.png"
                alt="img"
              />
            </div>
          </div>

          <div  data-aos = "fade-left" className="w-1/2  sm:ml-12  sm:mt-4   md:h-fit md:mt-8 md:text-start  md:ml-[35%]   md:w-full h-full      flex flex-col justify-center ">
            <h1 className="text-2xl font-bold ">Get a POS terminal</h1>

            <div className="mt-4 flex ">
              <p className="mr-3   text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize sm:text-sm font-bold">
                Collect card payments offline using KippaPay™
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                Make extra cash by becoming an Mobile Money Agent{" "}
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                Get a POS terminal for FREE{" "}
              </p>
            </div>

            <p className="text-blue-700  cursor-pointer mt-12  underline uppercase">
              BECOME A KIPPAPAY™ AGENT
            </p>
          </div>
        </section>

        <section   className="h-screen w-full  md:px-2 px-20  md:h-fit md:flex-col flex  md:mt-28 md:items-center ">
          <div  data-aos = "fade-right" className="w-1/2  sm:ml-12  sm:mt-4  md:h-fit md:mt-8 md:text-start  md:ml-[35%]   md:w-full h-full      flex flex-col justify-center ">
            <h1 className="text-2xl font-bold md:mb-8">CAC Registration</h1>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm font-bold">
                Register your business with the name for N20,000
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg  sm:text-sm capitalize  font-bold">
                Premium processing in days{" "}
              </p>
            </div>

            <p className="text-blue-700  cursor-pointer md:mb-4 mt-12  underline uppercase">
              REGISTER YOUR BUSINESS
            </p>
          </div>

          <div  data-aos = "fade-left" className="w-1/2 sm:h-[400px]  md:w-full  md:h-[450px]  h-full flex items-center justify-center">
            <div className="w-[70%]  sm:w-[92.5%]  sm:h-[90%]  md:h-full  flex items-center justify-center rounded-lg h-[70%] bg-blue-950">
              <img
                src="https://invoice.kippa.africa/images/logos/logo-white.png"
                className="w-[80%]  h-full object-contain  sm:w-[95%]"
              />
            </div>
          </div>
        </section>

        <section className="h-screen w-full  md:h-fit  flex md:flex-col md:mt-12 md:items-center">
          <div  data-aos = "fade-right" className="w-1/2  sm:h-[400px] md:mt-12 md:w-full  md:h-[450px]  h-full flex items-center justify-center">
            <div className="w-[70%]  sm:w-[92.5%]  sm:h-[90%] md:h-full  flex items-center justify-center rounded-lg h-[70%] bg-[#f7f4f4]">
              <img
                className="w-[80%]  sm:w-[95%]  h-full"
                src="https://cdn-icons-png.freepik.com/512/2656/2656425.png"
                alt="img"
              />
            </div>
          </div>

          <div  data-aos = "fade-left" className="w-1/2   sm:ml-12  sm:mt-4  md:h-fit md:mt-8 md:text-start  md:ml-[35%]   md:w-full h-full      flex flex-col justify-center">
            <h1 className="text-2xl font-bold ">
              Free Website for your business
            </h1>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                Create e-commerce storefront in 15 seconds
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm  font-bold">
                Manage orders easily via WhatsApp{" "}
              </p>
            </div>

            <div className="mt-4 flex ">
              <p className="mr-3 text-lg">
                <FaCheck className="text-blue-700" />
              </p>
              <p className="text-lg capitalize  sm:text-sm font-bold">
                Receive instant payments for orders{" "}
              </p>
            </div>

            <p className="h-8 md:mb-16 bg-blue-900  text-white rounded-2xl flex items-center justify-center  text-[15px] w-fit px-4 cursor-pointer mt-12  ">
              Coming soon
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
