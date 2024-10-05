import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="h-16 p-3 max-w-screen-lg border-b border-zinc-400 mx-auto flex items-center justify-between text-white font-satoshi">
      <div className="leftNav flex gap-16">
        <img
          className="mr-10"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        {["Home", "Work", "About", "", "News"].map((elem, index) => {
          return (
            <a
              href="#"
              key={elem}
              className="text-sm font-medium flex gap-1 items-center justify-center"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "rgb(0, 255, 25) 0px 0px 0.25em" }}
                  className="inline-block h-[5px] w-[5px] bg-green-400 rounded-full "
                ></span>
              )}
              {elem}
              {elem.length == 0 && (
                <span className="inline-block h-6 w-[2px] bg-zinc-700"></span>
              )}
            </a>
          );
        })}
      </div>
      <div className="rightNav">
        <Button />
      </div>
    </nav>
  );
}

export default Navbar;
