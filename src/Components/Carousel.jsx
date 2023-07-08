import React from 'react'
import { Carousel } from 'flowbite-react'
import { game1, Solitare } from '../assets'
import { game2 } from '../assets'
import { Hearts } from '../assets'

const Carousels = () => {
   
  return (
    <>
<div className="h-56 sm:h-96 my-[100px]  mx-[10px]  bg-black rounded-2xl ">
  <Carousel slide={true} >
    <img 
      src={game1}
      alt="..."
      className='p-0'
    />
    <img
      src={game2}
      alt="..."
 
    />
    <img
      src={Hearts}
      alt="..."
   
    />
    <img
      src={Solitare}
      alt="..."
     
    />
  </Carousel>
</div>


    </>
  )
}

export default Carousels