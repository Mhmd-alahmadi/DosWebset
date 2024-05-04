"use client"
import React from 'react'
import {
  Card,
  CardBody
} from "@material-tailwind/react";
import { HowServicesCard } from "../../constants";
import Image from 'next/image'
import { motion } from "framer-motion";



export default function HowServicesDiv() {
  return (

    <>
      {
        HowServicesCard.map((items, index) => {
          const xx = items.hrefDiv as string; 
    
          return (

            <>
              <div id={`${xx}`}  className="container-fluid pt-24 h-screen 2xl:px-30 xl:px-20 lg:px-5  lg:mx-auto mx-4">
                <Card shadow={false} className={`${items.bg} justify-center   py-10 lg:px-0 px-5  lg:rounded-[5rem]     lg:mt-6 mt-0   w-full lg:h-[70vh] h-[90vh] `}>
                  <CardBody className='grid p-0  lg:grid-cols-2 grid-cols-1 justify-items-center items-center'>

                    <div dir='rtl' className={` mt-5 lg:mt-0 mb-10 lg:mb-0 justify-center content-center lg:grid-rows-2`}>
                      <h1 className={` text-center text-jabi 2xl:text-7xl xl:text-6xl lg:text-5xl  text-5xl`}>
                        {items.title}
                      </h1>
                      <div className='xl:px-20 lg:px-10 px-0 text-xl  text-jabi'>
                        {items.list}

                      </div>



                    </div>
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


                      className={`bg-bottom ${items.postion}  lg:mx-10 bg-contain bg-no-repeat lg:w-[35vw] w-[80vw] h-[40vh]  object-contain  p-0 m-0 relative `}>
                      <Image className='object-cover object-top	 lg:rounded-[2rem] rounded-[1rem]'  fill alt='' src={items.src}></Image>
                    </motion.div>
                  </CardBody>
                </Card>
              </div></>
          )

        })
      }
    </>
  )
}


