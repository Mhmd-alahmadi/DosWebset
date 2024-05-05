"use client";
import Image from 'next/image'
import {useState , useEffect} from "react"
import { ThemeProvider } from "@material-tailwind/react";
import {NavbarWithMegaMenu} from "../components/LayoutComponents/NavBarCustams";
import {FooterWithSocialLinks} from "../components/LayoutComponents/FooterWithSocialLinks";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Template from "./template";

export { ThemeProvider };
import './globals.css'

import localFont from 'next/font/local'
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: 'local-font/Linaround-Bold.otf',
  display: 'swap',
  variable:'--mhmd-font',
})



export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <html lang="en">
      <title> محفظة جيب الالكترونية </title>
      <SpeedInsights/>
      <body className={`${myFont.variable} bg-jabiBg`  } >

      {isLoading &&
 <div className="containerloding">
<div className='item'>
<Image
 id='breathing-button'
src="./SVG/logo.svg"
alt="Landscape picture"
fill
/>
<h1>الرجاء الانتظار يتم الان تحميل الموقع </h1>
</div>
 

 </div>

      }

      <ThemeProvider>
      <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <NavbarWithMegaMenu />
      </motion.nav>
      <Template>{children}</Template>
      {/* <FooterWithSocialLinks  /> */}
          <FooterWithSocialLinks/>
        </ThemeProvider>
        
        
        </body>
       
        </html>
  )
}
