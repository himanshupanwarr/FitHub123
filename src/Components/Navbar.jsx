
import React from "react";
import { logo1 } from "../assets";
import { spades } from "../assets";

const Navbars = () => {

  return (
   <>
   <div className="absolute m-6">

    <img src={spades} alt="" className="w-12 h-12 my-1 rounded-xl" />
    <h3 className=" absolute bottom-[2px] top-[0px] font-medium text-[20px] mx-[60px] text-white">Monkey Games</h3>
   </div>

    <div className='flex justify-between sm:absolute right-0 p-[0_2%]'>
    <nav className='flex align-middle justify-between'>
    

            <ul className='flex  space-x-[80px] my-[20px] hover:text-red-500'>
                <li className="text-white font-medium text-[18px]  hover:text-red-500"><a href="https://cardgames.io/solitaire/">Solitaire</a></li>
                <li className="text-white font-medium text-[18px] hover:text-red-500"><a href="https://cardgames.io/hearts/">Hearts</a></li>
                <li className="text-white font-medium text-[18px] hover:text-red-500"><a href="https://cardgames.io/spades/">Spades</a></li>
                <li className="text-white font-medium text-[18px] hover:text-red-500"><a href="https://cardgames.io/ginrummy/">Rummy</a></li>
            </ul>
    
        </nav>

       
    </div>
   
   
   </>
  );
};

export default Navbars;
