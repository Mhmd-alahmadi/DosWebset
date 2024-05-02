"use client"
import {projects} from '../../constants'
import React from 'react'

import { useRef } from 'react'

import { motion,useScroll, useTransform } from 'framer-motion'


const Card = ({i,title, description, icon, link, color,postion, range, targetScale, progress}) => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  //const imageScale = useTransform(scrollYProgress,[1,],[2,1])//image zoom out animation
  const scale = useTransform(progress, range, [1, targetScale])//stacking effect
  return (
    <div ref={container} className='cardContainer h-screen flex items-center justify-center sticky top-0'>
      <motion.div className='card flex flex-col relative h-[50rem]  w-full rounded-3xl p-12 shadow-2xl bg-white' style={{scale,  top:`calc(-5vh + ${i * 25}px); `}}>
    
        <div  className='lg:flex grid grid-rows-2  h-full lg:mt-12 lg:gap-12'>
          
          <div className={`imgContainer ${postion}  relative lg:w-[60%] w-[100%] h-full rounded-3xl overflow-hidden`}>
            {/* remove this att for diseble antm style={{scale:imageScale}} */}
            <motion.div  className='w-full h-full'>
            { icon}
            </motion.div>
          </div>
          <div style={{ direction:"rtl" }} className=' desc lg:w-[40%] w-[100%]  justify-center content-center  relative '>
          <h2 className='text-center mb-20 text-5xl m-0 '>{title}</h2>
            <p className='text-center text-3xl'>{description}</p>
          
          </div>
        </div>
      </motion.div>
    </div>
  )
}




const CardCarouselInMain = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  


  
  return (
    <>
     <div id='second-section'  className="container mx-auto pt-16 grid grid-cols-1 place-content-center   ">
    {
      
     projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05)
          return <Card key={index} i={index} {...project} icon={project.icon} postion={project.postion} progress={scrollYProgress} range={[index*0.25, 1]} targetScale={targetScale}/>
        })
      }
      </div>
    </>
    )
  }
  
  export default CardCarouselInMain ;

