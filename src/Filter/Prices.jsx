import Input from "./Input";
import "./All.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="font-normal mb-[20px] text-[22px]">Price</h2>

        <label className="block relative pl-[35px] mb-[12px] cursor-pointer sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-[50%] hover:bg-[#ccc] after:content-none after:absolute after:hidden checkmark "></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={450}
          title="Rs400 -700"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={800}
          title="Rs800 - Rs999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1200}
          title="Rs1000 - Rs1500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1500}
          title="Over Rs1500"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;