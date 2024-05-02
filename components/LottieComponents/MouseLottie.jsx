"use client";
import Lottie from "lottie-react";
import React from "react";
import animationData from "./public/MouseLottie.json";
const MouseLottie = () => {
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
  export default MouseLottie;