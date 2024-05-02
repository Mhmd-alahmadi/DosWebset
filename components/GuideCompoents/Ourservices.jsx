"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import "./Ourservices.css";

// Demo styles, see 'Styles' section below for some notes on use.

export default function CollapseDefault() {
  const data = [
    {
      title: "التحويل إلى مشترك",
      value: "trancfrm",
      src: "./SVG/ic_transfers.svg",
      srcimg: [
        {
          description:
            "اضغط على أيقونة 'التحويلات المالية' من القائمة الرئيسية.",
          src: "prsanilImg/TM.png",
        },
        {
          description: ".ستظهر قائمة التحويلات اضغط على التحويل إلى مشترك",
          src: "prsanilImg/TM.png",
        },
        {
          description:
            "قم بإدخال رقم هاتفك أو الرقم البديل أو قم بمسح QR CODE واضغط على استمرار",
          src: "prsanilImg/TM.png",
        },
        {
          description: "تأكد من المعلومات قبل الضغط على زر التنفيذ",
          src: "prsanilImg/TM.png",
        },
        {
          description:
            "أدخل رمز التأكيد الخاص بك أو قم باستخدام البصمة، ثم اضغط على تأكيد",
          src: "prsanilImg/TM.png",
        },
        {
          description:
            "تمت العملية بنجاح، ويمكنك حفظ إيصال العملية أو مشاركتها مع الشخص المرسل إليه.",
          src: "prsanilImg/TM.png",
        },
      ],
    },

    {
      title: "حزمي تحويل",
      value: "trancfrmHazmi",
      description:
        "تقدر ترسل وتصرف حوالتك (حزمي تحويل) عبر محفظة جيب بكل سهولة وفي أي وقت. وتستفسر عن الحوالة أو تلغيها.",
      src: "./SVG/ic_hazmi.svg",
      srcimg: [
        {
          description:
            "يمكن لأي شخص مشترك في محفظة جيب يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، من خلال مسح QR Code أو إدخال رقم نقطة البيع.",
          src: "prsanilImg/TM.png",
        },

        {
          description:
            "يمكن لأي شخص مشترك في محفظة جيب يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، من خلال مسح QR Code أو إدخال رقم نقطة البيع.",
          src: "prsanilImg/TM.png",
        },
      ],
    },

    {
      title: "شحن و سداد",
      value: "shakanAndSadad",
      src: "./SVG/ic_services.svg",
      srcimg: [
        {
          title: "سداد الفواتير",
          description: "اضغط على أيقونة 'سداد الفواتير' من القائمة الرئيسية.",
          src: "prsanilImg/TM.png",
        },
        {
          title: "سداد الفواتير",
          description:
            "بتلاحظ ظهور قائمة الخدمات، اختر الخدمة التي تريد تسديدها (الإنترنت/ الهاتف الثابت).",
          src: "prsanilImg/TM.png",
        },
        {
          title: "سداد الفواتير",
          description:
            "أدخل رقم الهاتف والمبلغ المطلوب لسداد الخدمة التي تريدها.",
          src: "prsanilImg/TM.png",
        },
        ,
        {
          title: "سداد الفواتير",
          description: "لازم تكون متأكد من المعلومات قبل الضغط على زر استمرار.",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description: "اضغط على أيقونة 'شحن رصيد' من القائمة الرئيسية.",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description:
            ".	ستظهر قائمة شحن رصيد اضغط على شبكة الاتصالات التي تريد الشحن منها ونوع الرصيد أو الباقة التي تريدها.",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description:
            ".	أدخل رقم هاتفك أو هاتف من تريد الشحن له، واضغط على استمرار.",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description: ".تأكد من المعلومات قبل الضغط على زر التنفيذ",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description:
            "أدخل رمز التأكيد الخاص بك أو قم باستخدام البصمة، ثم اضغط على تأكيد",
          src: "prsanilImg/TM.png",
        },
        {
          title: "شحن الرصيد",
          description: "تمت العملية بنجاح، ويمكنك حفظ إيصال العملية.",
          src: "prsanilImg/TM.png",
        },
      ],
    },

    {
      title: "دفع المشتريات",
      value: "mashtrant",
      description:
        "يمكن لأي شخص مشترك في محفظة جيب يستبدل الدفع الكاش بالدفع الإلكتروني عبر محفظة جيب لكل مشترياته من المحلات التجارية والخدمية والمطاعم والكافيهات بسهولة وراحة، من خلال مسح QR Code أو إدخال رقم نقطة البيع.",
      src: "./SVG/ic_purchases.svg",
      srcimg: [
        {
          description: "	اضغط على أيقونة 'دفع المشتريات' من القائمة الرئيسية.",
          src: "prsanilImg/TM.png",
        },
        {
          description:
            "أدخل رقم نقطة البيع أو قم بمسح QR CODE الخاص بنقطة البيع، وأدخل المبلغ واضغط على استمرار.",
          src: "prsanilImg/TM.png",
        },
        {
          description: "لازم تكون متأكد من المعلومات قبل الضغط على زر التنفيذ",
          src: "prsanilImg/TM.png",
        },
        {
          description:
            "أدخل رمز التأكيد الخاص بك أو قم باستخدام البصمة، ثم اضغط على تأكيد.",
          src: "prsanilImg/TM.png",
        },
        {
          description: "تمت العملية بنجاح، ويمكنك حفظ إيصال العملية",
          src: "prsanilImg/TM.png",
        },
      ],
    },

    {
      title: "الإيداع و السحب النقدي",
      value: "cashin",
      src: "./SVG/ic_cash_out.svg",
      srcimg: [
        {
          description:"اضغط على أيقونة 'السحب النقدي' من القائمة الرئيسية.",
           src: "prsanilImg/TM.png",
        },
        {
          description:"أدخل المبلغ المراد سحبه." ,
          src: "prsanilImg/TM.png",
        },
        {
          description: "أدخل رمز التأكيد الخاص بك أو قم باستخدام البصمة، ثم اضغط على تأكيد.",
          src: "prsanilImg/TM.png",
        },
        {
          description: "تمت العملية بنجاح، وسيظهر رقم طلب السحب، يمكنك سحب المبلغ من أقرب وكيل لك.",
          src: "prsanilImg/TM.png",
        },
      ],
    },
    {
      title: "شراء أونلاين",
      value: "cashin",
      src: "./SVG/ic_onlie.svg",
      srcimg: [
        {
          description:"اضغط على أيقونة 'شراء اونلاين' من القائمة الرئيسية.",
           src: "prsanilImg/TM.png",
        },
        {
          description:"	بتلاحظ ظهور أيقونة (كود شراء)" ,
          src: "prsanilImg/TM.png",
        },
        {
          description: "أدخل رمز التأكيد الخاص بك أو قم باستخدام البصمة، ثم اضغط على تأكيد.",
          src: "prsanilImg/TM.png",
        },
        {
          description: "تمت العملية بنجاح، وسيظهر رقم طلب السحب، يمكنك سحب المبلغ من أقرب وكيل لك.",
          src: "prsanilImg/TM.png",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  // define an onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  const TabScreen = ({ activeTab, idx, title, srcimg, ...props }) => {
    return (
      <div
        dir="rtl"
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === idx && (
          <div className="container mt-5 mx-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper "
            >
              {srcimg.map((dataItem) => (
                <SwiperSlide className=" ">
                  <div className="flex flex-col  lg:flex-row  ">
                    <div className="content-center lg:w-[50%] w-[100%]">
                      <h1>{dataItem.title}</h1>
                      <p
                        dir="rtl "
                        className="lg:px-20 px-5    text-justify text-2xl"
                      >
                        {dataItem.description}
                      </p>
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
                      className={`m-0 flex place-content-center relative text-center items-center self-center  p-2 lg:w-[50%] w-[100%]  `}
                    >
                      <img
                        className="object-contain h-[70vh]"
                        alt=""
                        src={dataItem.src}
                      ></img>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    );
  };
  return (
    <div dir="rtl" className="container-fluid lg:mx-auto px-5">
      <Tabs
        className="bg-black justify-center justify-items-center"
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {data.map((dataItem, index) => (
          <Tab className=" rounded-lg bg-gray-400 shadow-lg " key={index}>
            <div className="flex justify-center items-center w-fit ">
                <img
                  alt="ايقونة جيب"
                  className="w-24 object-contain h-10"
                  src={dataItem.src}
                ></img>
              <h1 className="text-2xl   ">{dataItem.title}</h1>
            </div>
          </Tab>
        ))}
      </Tabs>
      {data.map((dataItem2, index) => (
        <TabScreen
          activeTab={activeTab}
          srcimg={dataItem2.srcimg}
          title={dataItem2.title}
          idx={index}
          key={index}
        >
          Page {dataItem2}
        </TabScreen>
      ))}
    </div>
  );
}
