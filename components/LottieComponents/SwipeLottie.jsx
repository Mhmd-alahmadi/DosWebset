import Lottie from "lottie-react";
import React from "react";
import Swipe from "@/public/Lottie/Swipe.json";
const SwipeLottie = () => {
    return (
      <>
       <Lottie
       color="#000"
        animationData={Swipe}
        
        loop={true}
      />
      </>
    );
  };
  export default SwipeLottie;