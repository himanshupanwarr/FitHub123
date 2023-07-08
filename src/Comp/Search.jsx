import React from "react";
import { Button } from "flowbite-react";
import Suggestion from "./Suggestion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { gym } from "../Asset";

const Search = () => {
  return (
    <>
      <div
        className="w-[100%] h-[660px] my-2 flex z-0"
        style={{
          backgroundImage: `url(${gym})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[100%] sm:ml-[120px] h-[100%] flex flex-col space-y-3 p-12 my-3">
          <h3 className="text-3xl sm:text-4xl text-white w-[405px] my-3 ">
            Find Your Ideal Fitness Center
          </h3>
          <div className="capitalize w-[100%] sm:w-[30%] rounded-[4px] my-4">
            <Suggestion name={"name"} />
          </div>
          {/* <div className="pt-3">
            <Suggestion name={"password"} />
          </div> */}
          <div className="pt-3">
            <Link to="/home/Main">
              <Button>Explore</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
