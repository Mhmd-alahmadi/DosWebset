"use client";

import CardsOffers from "./CardsOffers";
function OffersMain(){
return(
    <div id="second-section" className=" sm:mt-32 pt-16 grid grid-cols-1 place-content-center container-fluid border-r-8 h-screen w-auto">
    <div className="grid  justify-items-center  ">
    <h1 className="text-5xl">عروضنا</h1>
    <p className="text-3xl myFirstFont ">عروض محفظة جيب عروض حصرية و قيمة </p>
     </div> 
     <CardsOffers></CardsOffers>
   </div> 
)
}
export default OffersMain;