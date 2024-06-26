import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import  WatingLottie  from "./WatingLottie";



const CardsOffers = () => {
  return (
    <div className="grid w-full lg:grid- md:grid-cols-2 grid-cols-1  justify-items-stretch  px-4 py-12 text-slate-900">
      {
        Array.from({length:4}).map((_,index)=>( <OffersCard />))
       
        
      }
    

    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const OffersCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-jabi "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center justify-items-center rounded-xl bg-white shadow-lg"
      >
        <div className="w-24 ">
        <WatingLottie
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto"
        />
         </div>

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-5xl font-bold"
        >
          قـريــبــاً
        </p>
      </div>
    </motion.div>

    
  );
};

export default CardsOffers;