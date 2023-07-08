import React from 'react'
import { Button } from 'flowbite-react'
import { location } from '../assets'

const Forms = () => {
  return (
<>
<form className="flex flex-col gap-4  sm:justify-items-start sm:my-[50px] " >
    <div className='flex flex-row'>
        <img className='absolute z-1 w-5 h-7 sm:w-6 sm:h-8 my-1 'src={location} alt="" />
        <input style={{textTransform:'capitalize',boxShadow:'4px 4px 4px'}} className= 'rounded-[4px] bg-[#fefcfc] border-none h-[40px] w-80 px-[25px] p-[10px] text-[#0d0c0c]'  type="text" placeholder='Choose your locality' />
    </div>
        <input style={{textTransform:'capitalize',boxShadow:'4px 4px 4px '}} className='rounded-[4px] bg-[#fff] border-none h-[40px] w-80 px-[20px] p-[10px]'  type="text" />
        <Button className='w-32'>Explore</Button>
   </form>
</>

  )
}

export default Forms
