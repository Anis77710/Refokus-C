import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "arqitel is a very good brand it love yooo ibrooo he lorem ispus doller spiur siuuuu cristiano ronaldo goat of football has scored the most goals in the foootball it's 904",
      live: true,
      case: false,
    },
    {
      title: "Lore-ED",
      description:
        "CR7  goat of basketball has scored the most goals in the foootball it's 904 adipisicing elit. Rem quisquam deleniti nemo libero eos nisi aperiam officiis!",
      live: true,
      case: true,
    },
    {
      title: "TTR-17",
      description:
        "Cricketkholi is a very good brand it love yooo ibrooo he lorem ispus doller spiur siuuuu cristiano ronaldo goat adipisicing elit. Rem quisquam deleniti nemo libero eos nisi aperiam officiis!",
      live: true,
      case: false,
    },
    {
      title: "Yahoo",
      description:
        "He lorem ispus doller spiur siuuuu cristiano ronaldo goat adipisicing elit. Rem quisquam deleniti nemo libero eos nisi aperiam officiis! adipisicing elit. Rem quisquam deleniti nemo libero eos",
      live: true,
      case: true,
    },
    {
      title: "PolTQ-1",
      description:
        "adipisicing elit. Rem quisquam deleniti nemo libero eos nisi aperiam officiis! doller spiur siuuuu cristiano ronaldo gadipisicing elit. Rem quisquam deleniti nemo libero eos nisi aperiam officiis!",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 15);
  };

  return (
    <>
      <div className="mt-20 relative">
        {products.map((elem, index) => (
          <Product key={index} val={elem} mover={mover} count={index} />
        ))}
        <div className="h-full w-full absolute top-0 pointer-events-none ">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
            className="h-[15rem] w-[20rem] bg-red-200 rounded-md absolute left-[44.5%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
              className="h-full w-full  overflow-hidden"
            >
             <video autoPlay muted loop src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
              className="h-full w-full bg-sky-300"
            >
              <video autoPlay muted loop src="https://videos.pexels.com/video-files/856882/856882-hd_1920_1080_24fps.mp4" className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
              className="h-full w-full bg-sky-400"
            >
              <video autoPlay muted loop src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
              className="h-full w-full bg-sky-500"
            >
              <video autoPlay muted loop src="https://videos.pexels.com/video-files/4029955/4029955-uhd_2560_1440_30fps.mp4" className="h-full w-full object-cover"></video>
            </motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.17, 1], duration: 0.5 }}
              className="h-full w-full bg-sky-500"
            >
                          <video autoPlay muted loop src="https://videos.pexels.com/video-files/5680034/5680034-hd_1920_1080_24fps.mp4" className="h-full w-full object-cover"></video>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
