"use client";
import Mobile3D from "./Mobile3D";
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  navVariantForBottomText,
  navVariantForTopText,
} from "../../utils/motion";

export function DownloedDiv() {
  return (
    <>
      <div className="container mx-auto w-full ">
      <div className='grid lg:grid-cols-2 md:grid-cols-1' >
        <div className="grid lg:mt-0 self-center mt-24 justify-items-center h-[50%]  lg:m-0  items-end lg:px-5 px-10   lg:grid-rows-3">
          <motion.div
            style={{
              direction: "rtl",
            }}
            variants={navVariantForTopText}
            className="self-center"
            initial="hidden"
            whileInView="show"
          >
            <h1 className="lg:mt-10 mb-3  lg:text-6xl  text-5xl font-black text-jabi">
              حمِّل تطبيق جيب
            </h1>
          </motion.div>
          <motion.div
            className="self-center"
            style={{
              direction: "rtl",
            }}
            variants={navVariantForBottomText}
            initial="hidden"
            whileInView="show"
          >

            <p className="text-4xl lg:px-5 px-0 text-center  mx-0 ">
              تخلَّص من عناء الدفع النقدي، وسهِّل تعاملاتك المالية المختلفة بأمان كامل.
            </p>
          </motion.div>
          <div className="flex justify-center self-center">
            <a  rel="noopener" target="_blank" href="https://play.google.com/store/apps/details?id=com.ahd.jaib&pcampaignid=web_share">
              <Image alt="" width={20} height={ 20} className="lg:w-[20vw]  w-[40vw] px-5 " src={"./SVG/google.svg"}></Image>
            </a>
            <a rel="noopener" target="_blank" href="https://apps.apple.com/us/app/jaib-digital-wallet/id6472856710">
              <Image alt="" width={20} height={ 20} className="lg:w-[20vw]  w-[40vw] px-5" src={"./SVG/apple.svg"}></Image>
            </a>
          </div>
        </div>
        <Mobile3D></Mobile3D>

      </div>
      </div>
    </>
  )

}