import Lottie from "lottie-react";
import React from "react";
import Smart from "@/public/Lottie/World.json";
const WorldLottie = () => {
    return (
      <>
       <Lottie
       color="#000"
        animationData={Smart}
        
        loop={true}
      />
      </>
    );
  };
  export default WorldLottie;