"use client";
import "./ClipPathTransition.scss";
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowSizeContext } from "../../contexts/WindowSizeContext";
import { OurServis } from "../../constants";
import { IoCloseSharp } from "react-icons/io5";
import Testlottiefiles from "../LottieComponents/MouseLottie";
const variants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: { duration: 0.4 },
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, staggerChildren: 0.1 },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.4 },
  },
};

const squareVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const ClipPathTransition = () => {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const { width } = useContext(WindowSizeContext) || 0;
  const renderSquares = () => {

    return OurServis.map((item, i) => (
     

      <motion.div
        key={i}
        className={`square    square--${"jaib"}`}
        onClick={() => setSelectedSquare(item)}
        variants={squareVariants}
        transition={{ duration: 0.2, type: "spring" }}
      >
        
        <div className="bg-white flex justify-center  rounded-3xl  text-jabiOffBlack md:m-10 m-2 ">
          <img src={item.src} alt="" className="md:w-24 w-12 m-10"></img>
        </div>
        <div>
          <div className="md:text-3xl text-xl md:mb-5 mb-2 text-center jaibFontBold text-white ">
            <h1>{item.title}</h1>
          </div>
        </div>
      </motion.div>
       
    ));
  };

  return (
    <div className="lg:container h-screen container-fluid grid grid-cols-1  mx-auto ">
        <div className="relative w-auto  p-5">
    <div
      className={`cp-transition   cp-transition__container cp-transition__container--${selectedSquare}`}
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        {selectedSquare ? (
          <motion.div
            className={`card  rounded-3xl   card__wrapper card__wrapper--${selectedSquare}`}
            key="card"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="card__header  text-5xl">
              <button onClick={() => setSelectedSquare(null)}>
                <h1><IoCloseSharp /></h1>
              </button>
            </div>
            <div className="">
              <div className="grid grid-cols-1 justify-items-center">
              <img src={selectedSquare.src} alt="" className="md:w-32 w-20 "></img>
                <h1 className="md:text-5xl text-xl md:my-10 my-5">{selectedSquare.title}</h1>
              </div>


              <div className=" md:text-5xl text-xl text-justify mb-14"
              style={{ direction:"rtl" }}
              >
                <p>
                {selectedSquare.description}
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="cp-transition__squares-wrapper md:grid-cols-2 grid-cols-2 w-96 grid lg:grid-cols-3"
            key="squares"
            style={{ direction: "rtl" }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              key={1}
              className={`square--${"jaib1"} md:my-0 my-10 grid grid-cols-1 justify-items-center items-center`}
              variants={squareVariants}
              transition={{ duration: 0.2, type: "spring" }}
            >
             
                <div className="">
                  <h1 className="md:text-8xl  text-4xl text-center jaibFontBold text-jabi">
                    الخدمات{" "}
                  </h1>
                  <p className="md:text-3xl text-xl text-center  Jaibfont">
                    توفر جيب خدمات تُلبيّ كل احتياجاتك الأساسية والترفيهية.
                  </p>
                </div>
         
            </motion.div>
            {renderSquares()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
    </div>
  );
};

export default ClipPathTransition;
