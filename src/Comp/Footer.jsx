import React from 'react'
import { Footer } from 'flowbite-react'
// import { Link } from 'react-router-dom'
import { facebook,footerimg,instagram,linkedin,twitter} from '../Asset'
const Footers = () => {
  return (
    
    <div className="w-full my-[40px] rounded-[10px] px-[20px]">
    <div className="grid rounded-[10px_10px_0_0] w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4" style={{backgroundImage:`url(${footerimg})`,backgroundPosition:'center',backgroundSize:'cover'}}>
    <ul className='p-4 '>
   <h2 className='text-xl font-bold py-4 tracking-tight text-gray-300 dark:text-white'>
     Trending Fitness Centres
    </h2>
        <li className='tracking-tight text-gray-100'>

Fitness First - Select Citywalk Mall, Saket
        </li>
        <li className='tracking-tight text-gray-100'>

Goodways Fitness
        </li>
        <li className='tracking-tight text-gray-100'>
            
Fitness First - Connaught Place
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Janakpuri
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Dwarka
        </li>
        <li className='tracking-tight text-gray-100'>

Crosstrain Fight Club
        </li>
    </ul>
    <ul className='p-4 '>
   <h2 className='text-xl font-bold py-4 tracking-tight text-gray-300 dark:text-white'>
     Trending Fitness Centres
    </h2>
        <li className='tracking-tight text-gray-100'>

Fitness First - Select Citywalk Mall, Saket
        </li>
        <li className='tracking-tight text-gray-100'>

Goodways Fitness
        </li>
        <li className='tracking-tight text-gray-100'>
            
Fitness First - Connaught Place
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Janakpuri
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Dwarka
        </li>
        <li className='tracking-tight text-gray-100'>

Crosstrain Fight Club
        </li>
    </ul>
    <ul className='p-4 '>
   <h2 className='text-xl font-bold py-4 tracking-tight text-gray-300 dark:text-white'>
     Trending Fitness Centres
    </h2>
        <li className='tracking-tight text-gray-100'>

Fitness First - Select Citywalk Mall, Saket
        </li>
        <li className='tracking-tight text-gray-100'>

Goodways Fitness
        </li>
        <li className='tracking-tight text-gray-100'>
            
Fitness First - Connaught Place
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Janakpuri
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Dwarka
        </li>
        <li className='tracking-tight text-gray-100'>

Crosstrain Fight Club
        </li>
    </ul>
    <ul className='p-4 '>
   <h2 className='text-xl font-bold py-4 tracking-tight text-gray-300 dark:text-white'>
     Trending Fitness Centres
    </h2>
        <li className='tracking-tight text-gray-100'>

Fitness First - Select Citywalk Mall, Saket
        </li>
        <li className='tracking-tight text-gray-100'>

Goodways Fitness
        </li>
        <li className='tracking-tight text-gray-100'>
            
Fitness First - Connaught Place
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Janakpuri
        </li>
        <li className='tracking-tight text-gray-100'>

Gold's Gym Dwarka
        </li>
        <li className='tracking-tight text-gray-100'>

Crosstrain Fight Club
        </li>
    </ul>


    </div>










      <div className="w-full rounded-[0_0_10px_10px]  bg-gray-600 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="FitnessHub™"
        year={2022}
      />
      {/* <div className="grid grid-flow-col-2 gap-4">
        <h3>
            Download FitnessHub App
        </h3>
        <a href='https://www.facebook.com/ ' target={'_blank'}>  <img
          src={facebook}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
    </a>
    <a href='https://www.instagram.com/ ' target={'_blank1'}>  <img
          src={instagram}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
        </a>

      </div> */}
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    <a href='https://www.facebook.com/ ' target={'_blank'}>  <img
          src={facebook}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
    </a>
    <a href='https://www.instagram.com/ ' target={'_blank1'}>  <img
          src={instagram}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
    </a><a href='https://www.twitter.com/ ' target={'_blank2'}>  <img
          src={twitter}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
    </a>
    <a href='https://www.linkedin.com/ ' target={'_blank3'}>  <img
          src={linkedin}
          className=" w-14 p-2 hover:scale-105 mx-2 h-14 rounded-2xl"
          alt=""
        />
    </a>
     
        
       

       
      </div>
    </div>
    </div>
  )
}

export default Footers