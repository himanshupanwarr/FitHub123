const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="block relative pl-[35px] mb-[12px] cursor-pointer sidebar-label-container" >
        <input className='opacity-0 absolute pointer' onChange={handleChange} type="radio" value={value} name={name} />
        <span className=" absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-[50%] hover:bg-[#ccc] after:content-none after:absolute after:hidden checkmark "style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;


