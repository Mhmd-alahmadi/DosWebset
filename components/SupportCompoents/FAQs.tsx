"use client";
import Script from "next/script";
import React, { useState, useRef, useEffect } from "react";
import "./FAQs.css";
 // Import your CSS file
const data = [
  { question: "من اللي بإمكانه يفتح حساب في محفظة جيب؟",
   answer: "يمكن لأي شخص سواءً كان مقيمًا في الجمهورية اليمنية أو خارجها استخدام محفظة جيب، بشرط أن تتم جميع المعاملات المالية الخاصة بالمحفظة من خلال وكلاء ونقاط بيع وخدمة المحفظة المتوفرة في بادئ الأمر داخل الجمهورية اليمنية." 
  },
  { question: "أيش الخطوات لفتح حساب محفظة جيب؟",
   answer: <ul>
    <li>اضغط على "إنشاء حساب" بعد تحميل التطبيق على هاتفك.</li>
    <li>قم بإدخال اسمك الرباعي ورقم هاتفك مع تحديد الجنس ومن ثم الضغط على "إنشاء حساب".</li>
    <li>أدخل رمز التفعيل الذي سيصل إلى هاتفك ومن ثم قم بإنشاء كلمة مرور خاصة بك. </li>
    <li>لقد أتممت عملية التسجيل بنجاح، قم بتسجيل الدخول بإدخال رقم هاتفك وكلمة المرور التي قمت بإنشائها مسبقًا. </li>
   </ul>
  },
  { question: "هل باستطاعتي استخدام خدمات جيب في التطبيق عند تحميلي وتثبيت التطبيق على الجوال؟", answer: "نعم، نحن نتيح لك عزيزي العميل عند تسجيل حسابك استخدام بعض الخدمات المتاحة كشحن رصيد وسداد بعض الخدمات، إلا أنه لا يمكنك الاستمتاع بكل المزايا والخدمات إلا عند تفعيل الحساب والانضمام إلى مجتمع جيب وإدارة أموالك بكل الطرق المتاحة." },
  { question: "كيف يتم تفعيل حساب في محفظة جيب؟",
   answer: <><p>يمكنك تفعيل حسابك بكل سهولة من خلال الآتي: </p> <ul>
    <li>يمكنك تسجيل الدخول إلى حسابك بعد إنشاءه في المرحلة الأولى ومن ثم الضغط "اضغط هنا لتأكيد محفظتك" في أعلى واجهة التطبيق.</li>
    <li>قم بتعبئة البيانات الشخصية المطلوبة.</li>
    <li>قم برفع هويتك الشخصية مع أخذ صورة سلفي مع الهوية المرفوعة.</li>
    <li>سيتم مراجعة طلبك وسيصلك إشعارًا بنجاح تفعيل الحساب.</li>
   </ul>
   <p>
   * أو يمكنك زيارة أقرب وكيل لتفعيل حسابك مصطحبًا معك هويتك الشخصية. 
    </p></>},
  // Add more questions and answers here
];
export default function FAQs() {
  
  // JavaScript to toggle the answers and rotate the arrows
  return (
          
<>

<div dir="rtl" className="container mx-auto">
      {data.map((dataItem, index) => (
 <div className="bg-white text-black  rounded-3xl shadow-lg my-5">
 <div className="question font-semibold	 items-center cursor-pointer	 relative flex px-14 py-7 text-2xl  after:content-['\002B'] after:bg-[url('/svg/ic_bottom.svg')] after:bg-no-repeat after:bg-center	 after:bg-contain	 after:transition after:delay-100 after:text-transparent after:text-5xl after:left-6 after:absolute ">
<p>
{dataItem.question}
</p>

 </div>
 <div className="answercont max-h-0 overflow-hidden  ease-out duration-300 ">
   <div className="answer px-14 pb-8 text-2xl Jaibfont">
   {dataItem.answer}
   </div>
   </div>
 </div>
 ))};
       
        </div>
        <Script async defer    src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></Script>
              <Script>
              {`var question = document.querySelectorAll(".question");

              question.forEach(question => {
                question.addEventListener("click", event => {
                  const active = document.querySelector(".question.active");
                  if(active && active !== question ) {
                    active.classList.toggle("active");
                    active.nextElementSibling.style.maxHeight = 0;
                  
                  }
                  question.classList.toggle("active");
                  const answer = question.nextElementSibling;
                  if(question.classList.contains("active")){
                    answer.style.maxHeight = answer.scrollHeight + "px";
                  } else {
                    answer.style.maxHeight = 0;
                  }
                })
              })`}
              </Script> 
              </>
              
          
            );
}