import React from "react";
import { fh_logo, people01 } from "../Asset";
import { menu, close } from "../Asset";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import UserSingup from "./UserSingup";

const Navbar = (props) => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  return (
    <>
      <div className="shadow-[3px_3px_4px_rgb(0,9,8,0.8)] sticky">
        <img
          src={fh_logo}
          className="sm:block hidden absolute w-14 p-2 hover:scale-105 mx-2 h-14"
          alt=""
        />
        <nav className="p-4 mx-16 sm:block hidden ">
          <ul className="flex  justify-end space-x-6 ">
          <input
          className={`h-[15px] p-[18px] ${props.display}`} 
          type="text"
          onChange={props.handleInputChange}
          value={props.query}
          placeholder="Enter the Location"
        />
            <li
              onClick={() => setActive(props.title[0])}
              className={` ${
                active === props.title[0]
                  ? `${props.color}`
                  : "text-[black]"
              } relative after:content-[""]  after:absolute after:my-6 after:right-0  after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
            >
              <Link to='/home'>
              {props.title[0]}
              </Link>
            </li>
            <li
              onClick={() => setActive(props.title[1])}
              className={` ${
                active === props.title[1]
                  ? `${props.color}`
                  : "text-[black]"
              } relative after:content-[""]  after:absolute after:my-6 after:right-0  after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
            >
               <Link to='/about'>
              {props.title[1]}
              </Link>
              
            </li>
            <li
              onClick={() => setActive(props.title[2])}
              className={` ${
                active === props.title[2]
                  ? `${props.color}`
                  : "text-[black]"
              } relative after:content-[""]  after:absolute after:my-6 after:right-0  after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
            >
               <Link to='/reach-us'>
              {props.title[2]}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute right-2 sm:bottom-[9px]  cursor-pointer sm:mx-3 w-10 h-10 m-2 sm:m-0">

        <Link to="/singup">
          <img className='hover:scale-105 ' src={people01} alt="" onClick={()=>setToggle1(!toggle1)} />
          </Link>

        </div>









        {/* ______________________________________________________________________________ */}

        <div className={` sm:hidden flex justify-center`}>
          <img
            src={toggle ? menu : close}
            className={`h-8 w-8 z-10 absolute left-3 ${
              !toggle ? "bg-[none]" : "bg-gray-500"
            } p-1 my-3`}
            alt={menu}
            onClick={() => setToggle(!toggle)}
          />
          <img
            src={fh_logo}
            className="w-14 p-2 hover:scale-105 mx-2 h-14  "
            alt=""
          />
          <div
            className={`${
              toggle ? "hidden" : "block"
            } absolute m-0 left-0 p-0 z-[1] w-[60%] h-max bg-black border-[2px]  rounded-2xl`}
          >
            <ul className="px-10 mx-4 my-10 py-2 grid grid-flow-row gap-3">
              <li
                onClick={() => setActive(props.title[0])}
                className={` ${
                  active === props.title[0]
                    ? "text-gray-600 after:w-[10%]"
                    : "text-[#d3d1d1]"
                } relative after:content-[""]   after:absolute after:my-6 after:left-0  after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
              >
                {props.title[0]}
              </li>

              <li
                onClick={() => setActive(props.title[1])}
                className={` ${
                  active === props.title[1]
                    ? "text-gray-600 after:w-[10%]"
                    : "text-[#cac5c5]"
                } relative after:content-[""]  after:absolute after:my-6 after:left-0  after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
                >
                {props.title[1]}
              </li>
              <li
                onClick={() => setActive(props.title[2])}
                className={` ${
                  active === props.title[2]
                  ? "text-gray-600 after:w-[10%]"
                    : "text-[#d5d0d0]"
                } relative after:content-[""]  after:absolute after:my-6 after:left-0 after:bg-[red] after:h-[3px] hover:transition-[0.3s] cursor-pointer `}
              >
                {props.title[2]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{/* <div className={`hover:bg-gray-600 rounded-[12px_12px_0px_2px]`}>
<li className='text-white p-2 text-center '>Homme</li>
 <hr className='bg-white'/>
</div>
<div className={`hover:bg-gray-500 `}>
<li className='text-white p-2 text-center'>Homme</li>
 <hr className='bg-white'/>
</div>
<div className={`hover:bg-gray-500 `}>
<li className='text-white p-2 text-center'>Homme</li>
 <hr className='bg-white'/>
</div>
<div className={`hover:bg-gray-500 `}>
<li className='text-white p-2 text-center'>Homme</li>
 <hr className='bg-white'/>
</div>
<div className={`hover:bg-gray-500 `}>
<li className='text-white p-2 text-center'>Homme</li>
 <hr className='bg-white'/>
</div> */}