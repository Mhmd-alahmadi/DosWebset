import { motion } from "framer-motion";
import  DownloedLottie  from "../LottieComponents/DownLoedLottie";
import  JaiblogoSmartPhone  from "../HelperCompoents/JaiblogoSmartPhone";
import {
  navVariantForPhone
} from "../../utils/motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Link from "next/link";
const Mobile3D = () => {
  return (
    <motion.section variants={navVariantForPhone}  initial="hidden"
    whileInView="show" className="grid lg:mt-0 mt-0 w-full h-full place-content-center bg-neutral-900 p-12">
      <FloatingPhone />
    </motion.section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",}}
      className="rounded-[24px]  bg-jabi"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative lg:h-[70vh] lg:w-[20vw] md:w-[40vw] w-[70vw] h-[60vh] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-black p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-4 z-10 h-4 w-20 -translate-x-[50%] rounded-md bg-black"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2 pr-4 pt-1">
        <FiWifi className="text-neutral-600 text-2xl" />
        <FiBatteryCharging className="text-neutral-600 text-2xl" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
   
        <JaiblogoSmartPhone/>

    
<Link className="cursor-pointer" href={ "https://e-jaib.com/Download.html" } >
<button  className="absolute    text-white bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-jabi py-2 text-3xl font-medium text-violet-500 backdrop-blur">
<div className="flex justify-evenly">
<div className="w-10 ">
        <DownloedLottie></DownloedLottie>
        </div>
     <div>
     حمله الان 
      </div> 

</div>
 
       
      </button>
</Link>
    

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-jabi" /> */}
    </div>
  );
};

export default Mobile3D;