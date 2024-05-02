"use client"
import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  CardFooter


} from "@material-tailwind/react";
import About from '../LottieComponents/AboutLottie'
import Image from 'next/image'
import { motion } from "framer-motion";



export default function AboutCard() {
  return (
    <>
      <div id="second-section" className="container-fluid  mt-10 content-center h-auto  mx-4">
      <div className="container-fluid lg:mb-40 mb-20">
        <h1 className='text-center text-jabi text-6xl'>عـــــن جـــيـــب </h1>
      </div>
        <div dir='rtl' className='grid grid-cols-1 gap-6 lg:grid-cols-3  justify-items-center ' >

        <Card className="m-5 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image className='object-cover object-top	 '  fill alt='' src={"/aboutImg/seen.jpg"}></Image>

          </CardHeader>
          <CardBody>
            <h1  className="mb-2 text-3xl text-center text-black">
            رؤيتنا
            </h1>
            <p className='text-2xl text-justify'>
            تحقيق جودة الشمول المالي في الدفع الإلكتروني لكل مواطن يمني وأن نصل عبر جيب لمستقبل مالي أفضل .. 
            </p>
          </CardBody>
        </Card>
       

        <Card className="m-5 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image className='object-cover object-top	 '  fill alt='' src={"/aboutImg/massage.jpg"}></Image>
          </CardHeader>
          <CardBody>
            <h1  className="mb-2 text-3xl text-center text-black">
            رسالتنا
            </h1>
            <p className='text-2xl text-justify'>
            الاستمرار والالتزام بتقديم حلول مالية رقمية سهلة ومواكبة لاحتياجات العملاء ورغباتهم عبر شبكة جيب الواسعة، وبناء اقتصاد مالي يمني رقمي يُمكِّن كل مواطن من التمتع بخدمات الدفع الإلكتروني بسهولة ويسر.            </p>
          </CardBody>
        </Card>


        <Card className="m-5 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image className='object-cover object-top	 '  fill alt='' src={"/aboutImg/values.jpg"}></Image>
          </CardHeader>
          <CardBody>
            <h1  className="mb-2 text-3xl text-center text-black">
            قيمنا
            </h1>
            <p className='text-2xl text-center'>
            الـــــنــــــزاهـــــة 	&nbsp;	&nbsp;	&nbsp;-	&nbsp;	&nbsp;	&nbsp; الـــــتـــــمـــــيـــــز &nbsp;	&nbsp;	&nbsp;-	&nbsp;	&nbsp;	&nbsp; الابـــــتــــكـــــار &nbsp;	&nbsp;	&nbsp;-	&nbsp;	&nbsp;	&nbsp; رضــــا الـــعــمــلاء
            </p>
          </CardBody>
        </Card>
        
        </div>
      </div>
    </>
  )
}


