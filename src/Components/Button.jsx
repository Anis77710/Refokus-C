import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";


function Button({title = "Get Started"}){

    return(
        <div className="max-w-36">
            <div className="button px-3 py-1 rounded-full flex items-center gap-6 cursor-pointer text-black bg-white">
                {title}
                <FaArrowTurnDown className="rotate-90" />
            </div>
        </div>
    )
}

export default Button