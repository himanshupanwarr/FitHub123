import React from "react";
import { useState, useRef, useEffect } from "react";

const Suggestion = ({ props, handleInputChange, query }) => {
  const box = useRef(null);
  useOutsideAlerter(box);
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState("");
  const [Value, setValue] = useState("");
  const locations = [
  "Ananad vihar"
  ,"Rohini",
  "Sahadhara",
  "Dwarka",
  "Pitampura",
  "Adarsh Nagar"
  ];
  return (
    <>
      <div>
        <input
          ref={box}
          type="search"
          onClick={() => setActive(!active)}
          className="capitalize p-2 px-4 rounded-[4px] w-[405px] "
          placeholder="choose your location"
          value={Value}
          onChange={(e) => {
            setValue(e.target.value);
            setActive1(e.target.value);
            setActive(false);
          }}
        />

        <ul
          className={`max-h-[400px] overflow-y-scroll min-w-max w-[405px] absolute bg-gray-200 rounded-[4px_4px_4px_4px]  space-y-2 p-3 ${
            !active ? "block" : "hidden"
          } `}
        >
          {locations
            .filter((nav) => {
              if (active1 === "") {
                return nav;
              } else if (nav.toLowerCase().startsWith(active1.toLowerCase())) {
                return nav;
              } else if (nav.toLowerCase().includes(active1.toLowerCase())) {
                return nav;
              } else {
                return 0;
              }
            })
            .map((nav, index) => (
              <div className="bg-gray-400 rounded-[2px] hover:bg-slate-300 p-2 ">
                <li
                  className={`text-[black] text-center cursor-pointer  `}
                  onClick={() => {
                    setValue(nav);
                  }}
                >
                  {nav}
                </li>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(!false);
        }
      }

      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  }
};

export default Suggestion;
