import Lottie from "lottie-react";
import React from "react";
import Smart from "@/public/Lottie/Smart.json";
const SmartLottie = () => {
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
  export default SmartLottie;
