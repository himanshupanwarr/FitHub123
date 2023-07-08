import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
    <>
  <div className='w-[max] sm:mx-[100px] mx-4 h-[400px] ' >
   <h2 className="py-2 px-7 text-3xl font-serif  ">Popular Gym</h2>
   <div  className="scrollbar grid grid-flow-col  gap-4 py-2 px-5">
  <Link to='/home/Main/Search'>
      
      <Card image1={'https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?auto=compress&cs=tinysrgb&w=600'} title={'Cult Fitness'}/>
  </Link>
  <Link to='/home/Main/Search'>
      
      <Card  image1={'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600'} title={'Gold Gym'}/>
  </Link> <Link to='/home/Main/Search'>
      
      <Card image1={"https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?b=1&s=612x612&w=0&k=20&c=b13H5TTS1fK3L22PonClTd5L4B6_Ol4cucmOQOgeuWQ="} title={'Freaks Fitness'}/>
  </Link> 
  <Link to='/home/Main/Search'>
      
      <Card image1={"https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600"} title={'FIt And FIne'}/>
  </Link>
  <Link to='/home/Main/Search'>
      
      <Card image1={"https://images.pexels.com/photos/866023/pexels-photo-866023.jpeg?auto=compress&cs=tinysrgb&w=600"} title={'Spartans Gym'}/>
  </Link>
     
      
    
   </div>
  </div>
</>
  )
}

export default Carousel