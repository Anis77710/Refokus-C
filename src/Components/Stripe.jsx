import React from "react";

function Stripe({val}) {

  return (

   <div className="w-[16.67%] border-y border-r flex items-center text-white p-3 justify-between">
    <img className="h-[85%]" src={val.url} />
    <span className="font-semibold">{val.num}</span>
   </div>

)
}

export default Stripe;
