import Lottie from "lottie-react";
import React from "react";
import Smart from "@/public/Lottie/Loding.json";
const LodingLottie = () => {
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
  export default LodingLottie;