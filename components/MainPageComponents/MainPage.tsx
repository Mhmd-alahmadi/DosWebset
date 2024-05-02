"use client";
import  CarouselMain  from './CarouselMain';
import MainServices from "./MainServices";
import {DownloedDiv} from "./DownloedDiv";
import CardCarouselInMain from "./CardCarouselInMain";
import TipsPayment from "./TipsPayment";



export function MainPage() {
  return (
    <>
    <CarouselMain  />
    <CardCarouselInMain></CardCarouselInMain>
    <DownloedDiv/>
    <MainServices ></MainServices>
    <TipsPayment/>
    </>

  );

    };