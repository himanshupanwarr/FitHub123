import "./All.css";
import Input from "./Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="font-normal mb-[20px] text-[22px]">Category</h2>

      <div>
        <label className="block relative pl-[35px] mb-[12px] cursor-pointer sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-[50%] hover:bg-[#ccc] after:content-none after:absolute after:hidden checkmark "></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Gym"
          title="Gym"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Gym & Spa"
          title="Gym & Spa"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Swimming Pool"
          title="Swimming Pool"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;