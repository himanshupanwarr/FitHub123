import React from 'react'
import List from './List'
import { Link } from 'react-router-dom';
import Input from "../Detail/inpt";
// const handleChange = (event) => {
//   setSelectedCategory(event.target.value);
// };



const Sidebar = ({handleChange}) => {
  return (
    <>
    <h3 className='text-3xl m-[0] ml-[40px] mt-1'>TOP SEARCH RESULTS</h3> 
    <div className='flex '>
    <div className='p-[3%]'>
      <div className='w-fit   border-solid border-black rounded-[3px] shadow-[1px_1px_1px_1px]'>
        <ul>
          <div className='bg-slate-500 py-1 px-3 w-[250px] flex justify-center'>

          <h3>Top Deals</h3>
          </div>
          <li className='p-2'>
          <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />

            <span className='text-1xl'>Best Offers</span>
            <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p>
      </li>            
          <li className='p-2'>
           

            <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
            <span className='text-1xl'>Best Offers</span>
          
            <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p>
          </li>
        </ul>
      </div>

      <div className='w-fit border-solid border-black rounded-[3px] shadow-[1px_1px_1px_1px] my-10 '>
        <ul>

        <div className='bg-slate-500 py-1 px-3 w-[250px] flex justify-center'>
                <h3>Price Range</h3>
        </div>



        <div className='px-4 text-[15px]'>
            <h4>Membership Cost Monthly</h4>
        </div>
        <Input 
        className='mx-[20px] h-[12px]'
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />
          <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>2000 to 4000</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li> 
           <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>4000 to 10000 </span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li>
         <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>10000 and above </span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li>
        </ul>

      </div>
      <div className='w-fit   border-solid border-black rounded-[3px] shadow-[1px_1px_1px_1px] h-[200px] '>
          <div className='bg-slate-500 py-1 px-3 w-[250px] flex justify-center'>
              
          <h3>Facilities</h3>
          </div>
          <div className='scrollbar h-[160px]'>
        <ul>

          <li className='p-2'>
          <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />

            <span className='text-1xl'>Best Offers</span>
            {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
      </li>            
          <li className='p-2'>
           

            <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
            <span className='text-1xl'>Best Offers</span>
          
            {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
          </li>
          <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li> 
         <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li>
         <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li> 
         <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li> <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li> 
         <li className='p-2'>
           

           <input type="checkbox" name="" id="" className='mx-2 h-[12px]' />
           <span className='text-1xl'>Best Offers</span>
         
           {/* <p className=' font-[10] text-[14px] px-8'> Lorem ipsum dolor sit.</p> */}
         </li>
        </ul>

          </div>
      </div>

          
    </div>
    <div className='p-[30px_20px] space-y-3'>

     <Link to='/home/Sidebar/Search'>
      <List values={['Cult Fitness','Model-town','Reach-us','th']} imageUrl={'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600'}></List>
      <List values={['SportsFit By MS Dhoni Dwarka','About','Reach-us']} imageUrl={'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600'}></List>
      <List values={['Fitness Nation Gym','About','Reach-us']} imageUrl={'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600'}></List>

      <List values={['Battlefield Gym Dwarka','Dwarka','Reach-us']} imageUrl={'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600'}></List>
      
     
     </Link>
    </div>
              </div>

              </>
  )
}

export default Sidebar