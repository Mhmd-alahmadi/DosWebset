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
    <Card shadow={true} className="bg-jabi p-0 drop-shadow-2xl justify-center lg:rounded-[5rem] h-[70vh] shadow-2xl  lg:mt-6 mt-0   w-full">
    <CardBody className='grid p-0 justify-center grid-cols-1'>
        <div dir='rtl' className='"grid mt-5 lg:mt-0 justify-items-center content-center  lg:grid-rows-2'>
            <h1 className={` text-center text-white 2xl:text-7xl xl:text-6xl lg:text-5xl  text-5xl`}>
       من جيب وفي الجيب
            </h1>
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
