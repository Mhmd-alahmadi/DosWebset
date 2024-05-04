"use client";
import React from "react";
import { CardMain } from "../../constants";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
export { Card, Typography,CardBody };
import { motion, Variants } from "framer-motion";
import MouseLottie from "../LottieComponents/MouseLottie";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselMain.css';

import { useState } from "react";
import {
  navVariantForImage,
  navVariantForBottomText,
  navVariantForTopText,
} from "../../utils/motion";
import Link from "next/link";

  function CarouselMain() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-between container h-screen mx-auto ">
        <div className="basis-1/4 blur-3xl bg-jabi opacity-55 h-60 w-60"></div>
        <div className="basis-1/4 blur-3xl self-end bg-jabi opacity-55 h-60 w-60"></div>
      </div>
      <div  className="container-fluid grid grid-cols-1">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                 
                 {CardMain.map((items, index) => {
                   return (
              <SwiperSlide className="bg-transparent">
              <Card className=" md:p-10 bg-transparent shadow-none h-full w-full overflow-hidden">
                <CardBody className="grid p-0 lg:p-6 justify-items-center   lg:grid-cols-2 ">
                  <motion.div
                    className="p-6 "
                    variants={navVariantForImage}
                    initial="hidden"
                    whileInView="show"
                  >
                    <img src={items.src} alt=""></img>
                  </motion.div>
                  <div className="grid  justify-items-center md:m-2 lg:m-14  items-end   lg:grid-rows-2">
                    <motion.div
                      style={{
                        direction: "rtl",
                      }}
                      variants={navVariantForTopText}
                      className=""
                      initial="hidden"
                      whileInView="show"
                    >
                      <Typography className="lg:mt-10 mb-3 md:text-5xl lg:text-6xl  text-3xl font-black text-jabi">
                        {items.title}
                      </Typography>
                    </motion.div>
                    <motion.div
                      className="self-start   "
                      style={{
                        direction: "rtl",
                      }}
                      variants={navVariantForBottomText}
                      initial="hidden"
                      whileInView="show"
                    >
                      <Typography className="md:text-4xl px-15 text-center lg:mb-10 md:mb-8 mb-10 text-2xl mx-50 ">
                        {items.description}
                      </Typography>
                    </motion.div>
                  </div>
                </CardBody>
              </Card>
                 </SwiperSlide>
            );
          })}
               </Swiper>
      </div>
      <div className="relative invisible lg:visible container-fluid mt-3 mb-10 flex justify-around  ">
        <div className="w-14 ">
          <Link href="#second-section" onClick={handleScroll}>
            <MouseLottie></MouseLottie>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CarouselMain;
