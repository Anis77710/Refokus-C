import React from "react";

function Footer() {
  return (
    <div className=" w-full">
      <div className="text-white max-w-screen-lg py-10 mx-auto flex gap-16">
        <div className="text-[10.5rem] leading-none tracking-tight font-semibold basis-1/2">
          refokus.
        </div>
        <div className=" basis-1/2 flex pt-7 gap-10">
            <div>
                <h2 className="text-zinc-500 mb-5">Socials</h2>
                {["Facebook", "Twitter(X?)", "LinkedIn" ].map((elem, index)=> <a key={index} className="block mt-1 cursor-pointer text-zinc-600 ">{elem}</a>)}
            </div>
            <div>
                <h2 className="text-zinc-500 mb-5">Sitemaps</h2>
                {["Home", "About ", "Contact" ].map((elem, index)=> <a key={index} className="block mt-1 cursor-pointer text-zinc-100 ">{elem}</a>)}
            </div>

            <div className="flex basis-1/2 text-right flex-col items-end">
                <p className=" mb-3">Refokus is pioneering digital agency driven & design and empowered by technology.</p>
                <img className="" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
