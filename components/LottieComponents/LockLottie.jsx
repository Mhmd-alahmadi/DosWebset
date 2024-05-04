import Lottie from "lottie-react";
import React from "react";
import Smart from "@/public/Lottie/Lock.json";
const LockLottie = () => {
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
  export default LockLottie;