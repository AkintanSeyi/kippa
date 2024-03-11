import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import imgHeader from "../image/4257d641-3c5c-4388-a91f-d628c8e46d0c (1).png"

const Header = ({toggle , settoggle}) => {
  return (
    <div  style={ toggle === true ? {
      backgroundColor : "white" 
    }  : {
      backgroundColor : "#1d235e"  
    }  } className="h-20 px-16 md:pt-4 md:px-6  items-center justify-between text-white flex bg-blue-950">
    { toggle == false && <img
        src="https://invoice.kippa.africa/images/logos/logo-white.png"
        className="w-20"
      />}
      {
        toggle == true  && 
        <img
        src= {imgHeader}  className="w-24"
      />
      }
      <div className="w-[25%] md:hidden capitalize flex  text-sm font-bold justify-between">
        <div className="w-fit  flex justify-between items-center">
          <span className="mr-1">product</span>
          <MdKeyboardArrowDown className="text-lg" />
        </div>
        <p>About Kippa</p>
        <p>Blog</p>
        <p className="uppercase">FAQ</p>
      </div>
      <button className="w-fit  md:hidden px-8   bg-white h-[42px] border-none rounded-lg  cursor-pointer  text-sm  font-bold text-blue-950">
        Get app
      </button>

      {  toggle == false  ?   <div   className="w-12 h-12 rounded-[50%]  hidden   md:flex  items-center    flex-col justify-center p-3 border-[1px] border-[lightgray]">
    <div  onClick={() => settoggle(true)} className="w-[100%] h-[3px] bg-[lightgray] "></div>
        <div className="w-[100%] mt-2 h-[3px] bg-[lightgray] "></div>
        <div className="w-[100%] mt-2 h-[3px] bg-[lightgray] "></div>  
      </div>  : <p onClick={() => settoggle(false)} className="text-[gray] text-3xl">
 &#10006;

        </p>

      }
      
      </div> 
  );
};

export default Header;
