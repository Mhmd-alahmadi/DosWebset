"use client"
import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Link from "next/link";
  import MouseLottie from "../LottieComponents/MouseLottie";

  import  Style  from './MainCardForPages.module.css';
  import Image from 'next/image'
export default function MainCardForPages() {
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
    <div className="container-fluid  2xl:px-30 xl:px-20 lg:px-5 h-[85vh] lg:mx-auto mx-10">
    <Card shadow={true} className="bg-jabi p-0 drop-shadow-2xl lg:rounded-[5rem] rounded-tl- h-auto shadow-2xl  lg:mt-6 mt-0   w-full">
    <CardBody className='grid p-0 lg:grid-cols-2 grid-cols-1'>
        <div className="bg-bottom lg:mx-5 bg-contain bg-no-repeat bg-[url('/BusinessImg/mainCard.png')] w-full object-contain   lg:order-first order-last p-0 m-0 relative md:h-[70vh] h-[60vh]">
        </div>
        <div dir='rtl' className='"grid mt-5 lg:mt-0 justify-center content-center lg:grid-rows-2'>
            <h1 className={` text-center text-white 2xl:text-7xl xl:text-6xl lg:text-5xl  text-5xl`}>
         جيب حاضر للجميع
            </h1>
            <p  className={`text-center lg:text-justify mt-5 2xl:text-4xl xl:text-3xl lg:text-2xl text-2xl text-white xl:px-20 lg:px-10 px-10`}>
            تخيل أن كل احتياجاتك الأساسية والترفيهية موجودة على تطبيق جيب بصورة مسهلة وواضحة ومطورة كالتالي:       
            </p>
        </div>
    </CardBody>
  </Card>
  <div className="relative invisible lg:visible container-fluid mt-3 mb-10 flex justify-around  ">
        <div className="w-14 ">
          <Link href="#second-section" onClick={handleScroll}>
            <MouseLottie></MouseLottie>
          </Link>
        </div>
      </div>
  </div>
  )
}
