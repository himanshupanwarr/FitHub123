
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom';


const Card = ({ img, title, star, reviews, prevPrice, newPrice,location }) => {
  return (
    <>
      <section className="flex border-[2px] pb-[2px]">
        <div className="block p-[3%] ">
    <img src={img} className='w-[250px] h-[150px] rounded-[5px]' alt={title} srcset=""/>
</div>
        <div className="p-[10px_30px_30px_50px] space-y-2 w-[500px] h-[220px]">
    <div>
    <h3 className='text-[18px] font-bold text-gray-500'
    >{title}</h3>

    <p className='text-green-500 text-[12px]'>{location}</p>
    
    </div>
    <p1>Lorem ipsum dolor sit.</p1>
    <br/>
        <div >
        <section className="flex mb-[1rem]">
            {star}  {star}  {star}  {star}
            <span className="ml-[0.9rem]">{reviews}</span>
          </section>

        </div>
        <Link to='/home/Main/Search'>
    <Button className='mt-[30px]'> Explore</Button>
        </Link>
    <div className="text-right  pl-[100px] ">
              <del>{prevPrice}</del> {newPrice}
    </div>
    </div>
      </section>
    </>
  );
};

export default Card;
