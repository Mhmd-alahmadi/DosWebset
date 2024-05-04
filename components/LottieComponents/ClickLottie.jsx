import Lottie from "lottie-react";
import React from "react";
import Click from "@/public/Lottie/Click.json";
const ClickLottie = () => {
    return (
      <>
       <Lottie
       color="#000"
        animationData={Click}
        
        loop={true}
      />
      </>
    );
  };
  export default ClickLottie;