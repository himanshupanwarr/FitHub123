import React from 'react'
// import { th } from '../Asset'

const Photo = (props) => {
  return (
    <div className='flex justify-center space-x-6 p-[3%]'>
         <div >
            <img className='w-[600px] h-[350px]'src={props.image1[4]} alt="" />
         </div>
         <div className='space-y-[10px]'>
            <img className='w-[450px] h-[240px]' src={props.image1[1]} alt="" />
            <div className='grid grid-flow-col grid-cols-5 space-x-[10px]'>
                <img className='w-[100px] h-[100px]' src={props.image1[2]} alt="" />
                <img className='w-[100px] h-[100px]' src={props.image1[3]} alt="" />
                <img className='w-[100px] h-[100px]' src={props.image1[0]} alt="" />
                <img className='w-[100px] h-[100px]' src={props.image1[5]} alt="" />
            </div>
         </div>
    </div>
  )
}

export default Photo