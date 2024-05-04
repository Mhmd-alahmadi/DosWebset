import React from 'react'
import { Button } from "@material-tailwind/react";


function ContactUs() {
  // Basic usage

  return (
    <div dir='rtl' className='container flex justify-center mx-auto'>
   <div className='lg:w-[50%] w-full p-5'>
        <div className="flex items-center justify-between border-jabi border-2 py-2 px-3 rounded-2xl mb-4">
          <input className="text-3xl  caret-jabi  bg-transparent pl-2 placeholder-black outline-none border-none text-black" type="text" name="" id="" placeholder="الاسم" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-jabi h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
        <div className="flex  border-jabi items-center justify-between border-2 py-2 px-3 rounded-2xl mb-4">
          <input type="number" className="text-3xl  caret-jabi  bg-transparent pl-2 placeholder-black outline-none border-none text-black" name="" id="" placeholder="الهاتف" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  text-jabi h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        </div>
        <div className="flex  border-jabi items-center justify-between border-2 py-2 px-3 rounded-2xl mb-4">
          <input type="email" className="text-3xl caret-jabi w-full bg-transparent placeholder-black pl-2 outline-none border-none" name="" id="" placeholder="الايميل" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  text-jabi h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
          </svg>
        </div>
        <div className="flex  border-jabi border-2 py-2 px-3 rounded-2xl mb-4">
          <textarea rows={5} className=" caret-jabi bg-transparent w-full placeholder-black  text-black  outline-none border-none text-3xl" name="" id="" placeholder="الرسالة" />
        </div>
        <div className="flex justify-end  mb-4">
          <Button className='text-3xl w-[25%]' >ارسال</Button>;
        </div>
        </div>
      </div>

  )
}

export default ContactUs