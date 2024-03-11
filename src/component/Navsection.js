import React from "react";
import Header from "./Header";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Navsection = ({toggle , settoggle}) => {
  return (
    <>
  
    <div className="w-screen fixed h-screen  z-40 bg-white top-0  px-4">
    <Header   toggle = {toggle}  settoggle = {settoggle}  />
        <h1 className="text-2xl  mt-12 capitalize font-bold">product</h1>
        <section className="grid  grid-cols-2 mt-8  items-start  font-bold capitalize text-lg">
          <div className="flex items-start  pl-8 justify-start">invoice</div>
          <div className="flex   justify-center">bookkeeping</div>
          <div className="flex  pl-8 justify-start">payments</div>
        </section>

        <h1 className="text-2xl  mt-6 capitalize font-bold">About kippa</h1>
        <h1 className="text-2xl  mt-4 capitalize font-bold">blog</h1>

        <h1 className="text-2xl  mt-4 capitalize font-bold">FAQS</h1>

        <section className="grid  mt-8 grid-cols-2 gap-4">
          <ul className="list-none  font-bold  text-2xl capitalize ">
            <li className="mb-4 text-[gray] cursor-pointer"><FaLinkedin /></li>
            <li className="mb-4 text-[gray]  cursor-pointer"><FaTwitter /></li>
            <li className="mb-4   text-[gray] cursor-pointer"><FaInstagram /></li>
            <li className="mb-4  text-[gray] cursor-pointer"><FaFacebook /></li>
          </ul>
          <ul className="list-none  font-bold  text-sm capitalize ">
            <li className="mb-3  text-[gray] cursor-pointer">company </li>
            <li className="mb-3 cursor-pointer">careers</li>
            <li className="mb-3  cursor-pointer">FAQs</li>
            <li className="mb-3 cursor-pointer">Terms of Condition</li>
            <li className="mb-3  cursor-pointer">privacy policy</li>
          </ul>

          <ul className="list-none  font-bold  text-sm capitalize ">
            <li className="mb-3  text-[gray] cursor-pointer"> contact</li>

            <li className="mb-3 cursor-pointer">support@kippa.africa</li>
            <li className="mb-3  cursor-pointer">+2348071434751</li>
          </ul>

          <ul className="list-none  font-bold  text-sm capitalize ">
            <li className="mb-3 text-[gray] cursor-pointer">Nigeria</li>
            <li className="mb-3 cursor-pointer">14 williams onah drive </li>
            <li className="mb-3  cursor-pointer">chevyview estate chevron drive, lekki, lagos </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Navsection;
