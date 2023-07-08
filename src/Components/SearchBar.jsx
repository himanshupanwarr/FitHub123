import React from 'react'
import { gym } from '../assets'
import Forms from './Forms'

const SearchBar = () => {
  return (
   <>
   <div className='p-5 sm:py-12 my-2 sm:my-0 rounded-2xl sm:flex flex-row  sm:h-96'  style={{background:"radial-gradient(circle, rgba(2,2,61,1) 29%, rgba(59,14,80,1) 100%)"}}>
    <div className='text-left  sm:p-8 w-[450p] sm:w-[400px]' >

  <h3 className={` text-4xl sm:text-[45px] font-medium text-slate-50`}>Find The Best Gym Near You</h3>
  <h4 className='text-2xl my-3 py-3  text-slate-50'>At best Prices | Flat 10% off</h4>
    </div>
    <Forms/>
   </div>
   </>
  )
}

export default SearchBar