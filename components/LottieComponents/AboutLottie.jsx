import Lottie from "lottie-react";
import React from "react";
import Smart from "./public/Lottie/About.json";
const About = () => {
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
  export default About;