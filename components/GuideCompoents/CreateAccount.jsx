"use client"
import React from 'react'
import { useEffect, useRef, useState} from 'react'


import { motion } from "framer-motion";
import Confetti from 'react-confetti'

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  DocumentCheckIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import './Guide.css';


export default function CreateAccount() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [Height, setHeight] = useState(0);

  ///////////
  ///////
  useEffect(() => {
    // when the component gets mounted
    setWidth(ref.current.offsetWidth);
    // to handle page resize
    const getwidth = () => {
      setWidth(ref.current.offsetWidth);
    };

    setHeight(ref.current.offsetWidth);
    // to handle page resize
    const getheight = () => {
      setHeight(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getwidth);
    window.addEventListener("resizeh", getheight);
    // remove the event listener before the component gets unmounted
    return () =>{ 
      window.removeEventListener("resizeh", getheight);
      window.removeEventListener("resize", getwidth)};
  }, []);
  ////////////

  const data = [
    {
      label: "سجل",
      value: "register",
      icon: DocumentCheckIcon,
      desc: `.`,
    },
    {
      label: "وثق",
      value: "Trust",
      icon: IdentificationIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "انطلق",
      value: "goahead",
      icon: RocketLaunchIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
   
  ];
  return (
    <>
    <div dir='rtl' className="container lg:mx-auto px-5">

    <Tabs  value="register">
      <TabsHeader className='bg-jabi bg-opacity-100  '>
        {data.map(({ label, value , icon }) => (
          <Tab key={value} className='text-white' activeClassName='selectFont'  value={value}>
            <div className="flex items-center gap-2 ">
            {React.createElement(icon, { className: "w-5 h-5 " })}
              <h1 className='text-3xl   '>{label}</h1>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
             
          
             { value == 'goahead'? ( 
             <div dir='rtl' ref={ref} className={`flex justify-center items-center container mx-auto  h-[70vh]`}>
             <Confetti
                width={width}
                height={Height}
   
             run={ value == 'goahead' ? true :false }
             colors={ ['#000','#e4122c' , '#e4122c' ,'#e4122c'] }
             tweenDuration={55555}
             
             />
             <p className='text-5xl text-center'>
             انطلق وتمتع بإيداع أموالك وتغذية حسابك عبر وكلاء ونقاط خدمة جيب.. شحن-سحب-دفع-تسديد-تحويل أو استلام حوالتك في أي وقت.
             </p>
             </div>)
              :(<div dir='rtl' className={`container mx-auto `}>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                 
                 <SwiperSlide className=" ">
                  <div className='flex flex-col  lg:flex-row  '>
                    <div className='content-center lg:w-[50%] w-[100%] '>
                    <p dir='rtl ' className='lg:px-20 px-5 text-justify text-2xl'>	اضغط على "إنشاء ى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هحساب" بعد تحميل التطبيق على هاتفك.</p>
                    </div>
                  <motion.div
                  


                      className={`m-0 flex place-content-center relative text-center items-center self-center  p-2 lg:w-[50%] w-[100%] `}>
                       <img className='object-contain h-[70vh]'   alt='' src="prsanilImg/TM.png"></img>
                    </motion.div>
                  </div>
                 
              
                 
                 </SwiperSlide>
                 <SwiperSlide className=" ">
                  <div className='flex flex-col  lg:flex-row  '>
                    <div className='content-center lg:w-[50%] w-[100%] '>
                    <p dir='rtl ' className='lg:px-20 px-5 text-justify text-2xl'>	اضغط على "إنشاء ى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هى "إنشاء حساب" بعد تحميل التطبيق على هحساب" بعد تحميل التطبيق على هاتفك.</p>
                    </div>
                  <motion.div
                  


                      className={`m-0 flex place-content-center relative text-center items-center self-center  p-2 lg:w-[50%] w-[100%] `}>
                       <img className='object-contain h-[70vh]'   alt='' src="prsanilImg/TM.png"></img>
                    </motion.div>
                  </div>
                 
              
                 
                 </SwiperSlide>
               
               </Swiper>
             </div>) }
              
    
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

    </div>
   

        </>
  );
}


