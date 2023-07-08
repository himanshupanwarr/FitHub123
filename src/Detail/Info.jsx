import React from 'react'
import { th } from '../Asset'
import { Button } from 'flowbite-react'
import Ratings from './Rating'
import { Link } from 'react-router-dom'

const Info = ({location}) => {
  return (
    <div className='flex sm:ml-[180px] mx-[15px] space-x-6 p-[0_10px_10px_1px]'>
    <div className='w-[600px] h-[400px] border-[2px] p-[2%] rounded-[4px] space-y-6'>
      {/* <h2 className='text-3xl text-red-400'>
        {title}
      </h2> */}
      {/* <spap className='text-[10px] text-left  text-gray-600'>{location}</spap> */}
      <h3 className='text-2xl font-bold text-red-300'>Address</h3>
      <div>

      <p className=' text-gray-600'>H-4/3, Model Town Phase II, Block H, Near Chache Di Hatti, Model Town, 110009</p>
      <br />
      
      <span className='text-[13px]  text-green-600 '>
      Timings : 6:00 AMto11:00 PM
      </span>
      </div>

      <div>
        <span className='text-[17px] text-red-300'>Activities Available
</span>
<p className=' text-gray-600'>Cross Functional| Group X| Yoga| Dance| HRX| Strength & Conditioning|</p>
      </div>
    </div>
    <div className='space-y-[10px]'>
       <div className='grid grid-flow-col text-gray-500 grid-cols-5 space-x-[10px]'>
           <span className='text-gray-500'>7666XXXXX </span>
           <span>|</span>
           <span>Directions</span>
           <span>|</span>
           <span>Share</span>
       </div>
      <div className='rounded-[4px] border-[2px] w-[450px] h-250px] space-y-10 p-[5%]'>
        <span>Experience a Workout at CULT-Model Town</span>
       
       <div className='grid grid-flow-col grid-cols-2 space-x-4'>
        <Link to='/home/Main/Search/Membership'> 
         <Button color="success">
    BUY MEMBERSHIP
    </Button>
        </Link>
   <Link to='/home/Main/Search/Member'>
    <Button color="warning">
      BOOK 2 FREE TRIALS
    </Button>
   </Link>
        </div>

      </div>
        <div className='m-[10px] space-y-2'>
            <Ratings>

            </Ratings>
        </div>
    </div>
</div>

  )
}

export default Info