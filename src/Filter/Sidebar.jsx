import Category from "./Category";
import Price from "./Prices";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="w-[15%] fixed h-[100%] border-black z-3 flex flex-col items-center space-y-4">
        <div className="mb-[1.1rem] mt-[10px] flex flex-row">
          <img className='w-[20px] h-[20px] mt-[37px] mr-[5px]'  src="https://img.icons8.com/?size=1x&id=3720&format=png" alt="" />
          <h1 className='mt-[30px] text-[22px] mr-[20px]'>Filters</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
