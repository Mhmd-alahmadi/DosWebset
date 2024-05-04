import React from 'react'
import {
  Card,
  CardBody

} from "@material-tailwind/react";

export { CardBody, Card };
import { OurServisCard } from "../../constants";
import Image from 'next/image'
import { motion } from "framer-motion";



export default function OurservicesDiv() {
  return (

    <>
      {
        OurServisCard.map((items, index) => {
const xx = items.hrefDiv as string; 
    
          return (

            <>
              <div id={xx}  className="container-fluid pt-24 h-screen 2xl:px-30 xl:px-20 lg:px-5  lg:mx-auto mx-4">
              <Card shadow={false} className={`${items.bg}  py-10 lg:px-0 px-5  lg:rounded-[5rem] rounded-tl- h-auto   lg:mt-6 mt-0   w-full`}>
                  <CardBody className='grid p-0  lg:grid-cols-2 grid-cols-1'>

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


                      className={`bg-bottom ${items.postion}  lg:mx-5 bg-contain bg-no-repeat  w-full object-contain     p-0 m-0 relative md:h-[70vh] h-[60vh]`}>
                      <Image className='object-contain' fill alt='' src={items.src}></Image>
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


