import Lottie from "lottie-react";
import React from "react";
import Smart2 from "@/public/Lottie/About.json";
const About = () => {
    return (
      <>
       <Lottie
       color="#000"
        animationData={Smart2}
        
        loop={true}
      />
      </>
    );
  };
  export default About;