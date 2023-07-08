import React from 'react'
import { Button } from 'flowbite-react'

const List = (props) => {
  return (
    
           <div className="flex border-[2px]">

                <div className="block p-[3%] ">
                    <img src={props.imageUrl} className='w-[250px] h-[150px] rounded-[5px]' alt="" srcset=""/>
                </div>
            
                <div className="p-[10px_30px_30px_50px] space-y-2 w-[500px] h-[220px]">
                    <div>
                    <h3 className='text-[18px] font-bold text-gray-500'
                    >{props.values[0]}</h3>
            
                    <p className='text-green-500 text-[12px]'>{props.values[1]}</p>
                    
                    </div>
                    <p1>{props.values[2]}</p1>
                    <br/>
                        <div >

                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <i className="fa-solid fa-star  text-yellow-500"></i>
                    <i className="fa-solid fa-star-half-stroke  text-yellow-500"></i>
                        </div>
                    <Button className='mt-[30px]'> Explore</Button>
                    <div className="text-right  pl-[100px] ">
                    
                        <p>1 person</p>
                        <h4>100 <span>

                            /day
                        </span>
                          </h4>
        
                    </div>
    

                </div>

            </div>
    
  )
}

export default List