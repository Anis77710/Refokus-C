import React from "react";
import Button from "./Button";

function Product({val, mover, count}){

    return(
        <div className="w-full text-white">
            <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-lg mx-auto h-[15rem] flex items-center justify-between">
                <h1 className="text-6xl capitalize">{val.title}</h1>
                <div className="dets w-1/3">
                    <p className="mb-5">{val.description}</p>
                    <div className="flex items-center gap-5">
                        {val.live && <Button />}
                        {val.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;