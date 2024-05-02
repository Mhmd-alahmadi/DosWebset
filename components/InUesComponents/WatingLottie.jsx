import Lottie from "lottie-react";
import React from "react";
import animationData from "@/public/WatingLottie.json";
const WatingLottie = ( style ) => {
    return (
      <>
       <Lottie
       style={{ style }}
        animationData={animationData}
        loop={true}
      />
      </>
    );
  };
  export default WatingLottie;