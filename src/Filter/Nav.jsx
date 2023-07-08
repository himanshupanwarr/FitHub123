
import Navbar from "../Comp/Navbar";

const Nav = ({ handleInputChange, query }) => {
  return (
    
    <>
    <div className=' bg-gray-600 '>

    <Navbar display={'block'} handleInputChange={handleInputChange} query={query} color={"text-white after:w-[50%]"} title={['Home','About','Reach-us']}/>
    </div>
    </>
  );
};

export default Nav;