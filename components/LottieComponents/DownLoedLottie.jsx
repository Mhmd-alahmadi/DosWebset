import Lottie from "lottie-react";
import React from "react";
import animationData from "@/public/DownloedLottie.json";
const DownloedLottie = () => {
    return (
      <>
       <Lottie
       color="#000"
        animationData={animationData}
        
        loop={true}
      />
      </>
    );
  };
  export default DownloedLottie;