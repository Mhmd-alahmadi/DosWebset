"use client"
import React from 'react'
import {
  Card,
  CardBody

} from "@material-tailwind/react";
import About from '../LottieComponents/AboutLottie'
import Image from 'next/image'
import { motion } from "framer-motion";



export default function HowJaibDiv() {
  return (




    <>
      <div id="second-section" className="container-fluid relative lg:pt-24 pt-5 h-auto  2xl:px-30 xl:px-20 lg:px-5  lg:mx-auto mx-4">
        <Card shadow={false} className={` bg-white justify-center   lg:py-10 lg:px-0 px-5  lg:rounded-[5rem]     lg:mt-6 mt-0   w-full lg:h-[70vh] h-auto `}>
          <CardBody className='grid p-0   justify-items-center items-center'>

            <div dir='rtl' className={`flex items-center  lg:mt-0 lg:mb-0 justify-center content-center `}>
              <h1 className={` text-center text-jabi 2xl:text-7xl xl:text-6xl lg:text-5xl  text-5xl`}>
                من هي جيب
              </h1>
              <div className="w-24">
                <About></About>
              </div>
            </div>
            <div>
              <div className='xl:px-20 lg:px-10 px-0   text-black'>
                <p dir='rtl' className='text-justify md:text-4xl text-2xl' >
                  في وقتنا هذا.. صار صعب نعيش من دون تكنولوجيا... خصوصا لو كانت هذه التكنولوجيا مرتبطة بالمعاملات المالية اليومية.. والمحفظة الإلكترونية هي واحدة من أهم أدوات هذه المعاملات.. <span className='font-extrabold text-jabi'>جيب</span> أفضل خيار لمحفظة إلكترونية من ناحية التطور والتعامل السهل وتغطية كافة احتياجاتك كمستخدم .. اكتشف محفظة <span className='font-extrabold text-jabi'>جيب</span> وكيف تعمل واستفيد من فوائدها الوفيرة وكيف تناسب الجميع!
                  <span className='font-extrabold text-jabi'> جيب </span> واحدة من أهم خدمات شركة عهد للخدمات المالية التي انطلقت في مارس2023 لتكون المحفظة الرائدة في عالم التكنولوجيا المالية. وهي عبارة عن تطبيق محمول يعمل على الهواتف الذكية والأجهزة اللوحية، عشان تسهّل المعاملات المالية الإلكترونية. وتتميز بواجهة مستخدم بسيطة وسهلة الاستخدام للمستخدمين وهذا يجعلها مرنة في القيام بمجموعة متنوعة من المعاملات المالية بكل سهولة ويسر وتقدم <span className='font-extrabold text-jabi'>جيب</span> أفضل خدمات الدفع الإلكتروني الذي يُسهِّل على مستخدمها تعاملاته المالية من تسديد خدمات ودفع مشتريات وإرسال حوالات وغيرها من الخدمات الأخرى التي تُغنيه عن المحفظة التقليدية والأموال التالفة، وتلتزم بتقديم تكنولوجيا الدفع المالي بأفضل الطرق وأسهلها حتى تتناسب مع طبيعة واحتياجات المواطن اليمني، وبالتالي <span className='font-extrabold text-jabi' >جيب</span>, تخلَّصك من مشاكل تلف العملة النقدية، والمشاكل الأخرى التي تُعاني منها في تسديد جميع مدفوعاتك.
                </p>
              </div>



            </div>

          </CardBody>
        </Card>

      </div></>



  )
}


