import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover=false }) {
  
  return (
    <motion.div
      className={`min-h-[25rem] text-white bg-zinc-800 rounded-md p-4 ${width} hover:}`}
      whileHover={{backgroundColor: hover===true && "#7443ff", padding: "21px"}}
    >
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-satoshi">first heading</h3>
            <IoIosArrowRoundForward />
          </div>
          <h1 className="mt-5 font-medium text-2xl font-satoshi">
            Second heading!!
          </h1>
        </div>
        <div>
          {start && (
            <>
              <h1 className="text-6xl font-bold">Start a Project </h1>
              <button className="mt-5 px-3 py-1 border border-white rounded-full">
                Contact Us
              </button>
            </>
          )}
            {para && 
          <p className="text-sm font-satoshi">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
            }
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
