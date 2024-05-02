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



export default function AboutCardYong() {
  return (
    <><div className="container-fluid h-auto mb-10 ">
      <div className="container-fluid ">
        <h1 className='text-center text-jabi text-6xl'>مسؤوليتنا المجتمعية</h1>
      </div>
      <div id="second-section" className="hidden lg:block container-fluid pt-14  2xl:px-30 xl:px-20 lg:px-5  lg:mx-auto mx-4">
        <div className='grid grid-rows-2  gap-24 justify-items-center' >
          <Card dir='rtl' className="w-full justify-self-end lg:max-w-[100vw] xl:max-w-[70vw] flex-row ">  
              <CardHeader
            shadow={false}
            floated={false}
            className="m-0 lg:w-2/5 w-full shrink-0 lg:rounded-l-none rounded-b-none"
          >
            <Image className='object-cover object-top	 h-full' fill alt='' src={"/aboutImg/mans.jpg"}></Image>

          </CardHeader>
            <CardBody>
              <Typography variant="h3" color="gray" className="mb-4 uppercase">
                تمكين ودعم الشباب
              </Typography>

              <Typography color="gray" className="mb-8 text-2xl font-normal">
                لأن الشباب هم محور المستقبل وصورته الحاضرة.. فجيب تحرص على تمكينهم ودعمهم من خلال احتضان أفكارهم الإبداعية ودعم اقتراحاتهم المبتكرة وتشجيع أعمالهم ومبادراتهم الفعّالة بما يخدم رؤية جيب في الدفع الإلكتروني وتحقيق رسالتها في التطور المالي الرقمي.
              </Typography>
            </CardBody>
          </Card>


          <Card dir='rtl' className="w-full justify-self-start g:max-w-[100vw] xl:max-w-[70vw] flex-row">      <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-l-none"
          >

            <Image className='object-cover object-top h-full	 ' fill alt='' src={"/aboutImg/heckers.jpg"}></Image>

          </CardHeader>
            <CardBody>
              <Typography variant="h3" color="gray" className="mb-4 uppercase">
                حماية المستهلك من الغش والخداع        </Typography>

              <Typography color="gray" className="mb-8 text-2xl font-normal">
                احنا في جيب نسعى دائما لحمايتك من كل الأساليب المتبعة في التزوير والخداع والغش الذي من الممكن أن تقع فيه دون علمك. كما نعمل على نشر الحملات التوعوية لتوعية المواطنين بتوخي الحذر في جميع تعاملاتهم المالية، وتقدم جيب أفضل الخدمات الآمنة والحماية الكاملة لأموال عملائها وبياناتهم الشخصية.        </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div id="second-section" className="lg:hidden  container-fluid pt-14  2xl:px-30 xl:px-20 lg:px-5  lg:mx-auto mx-4">
      <Card className="mt-6 w-fit mb-16">
      <CardHeader color="blue-gray" className="relative h-56">
        
                    <Image className='object-cover object-top	 h-full' fill alt='' src={"/aboutImg/mans.jpg"}></Image>

      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        تمكين ودعم الشباب        </Typography>
        <Typography>
        لأن الشباب هم محور المستقبل وصورته الحاضرة.. فجيب تحرص على تمكينهم ودعمهم من خلال احتضان أفكارهم الإبداعية ودعم اقتراحاتهم المبتكرة وتشجيع أعمالهم ومبادراتهم الفعّالة بما يخدم رؤية جيب في الدفع الإلكتروني وتحقيق رسالتها في التطور المالي الرقمي.

        </Typography>
      </CardBody>

    </Card>
    <Card className="mt-6 w-fit mb-16">
      <CardHeader color="blue-gray" className="relative h-56">
        
      <Image className='object-cover object-top h-full	 ' fill alt='' src={"/aboutImg/heckers.jpg"}></Image>

      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        حماية المستهلك من الغش والخداع       
       </Typography>
        <Typography>
        احنا في جيب نسعى دائما لحمايتك من كل الأساليب المتبعة في التزوير والخداع والغش الذي من الممكن أن تقع فيه دون علمك. كما نعمل على نشر الحملات التوعوية لتوعية المواطنين بتوخي الحذر في جميع تعاملاتهم المالية، وتقدم جيب أفضل الخدمات الآمنة والحماية الكاملة لأموال عملائها وبياناتهم الشخصية.        

        </Typography>
      </CardBody>

    </Card>
        </div>
        </div>

    </>
  )
}


