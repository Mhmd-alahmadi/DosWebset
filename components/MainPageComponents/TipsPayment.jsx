"use client";
import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import {TipsPaymentCard} from '../../constants'
import SwipeLottie from "../LottieComponents/SwipeLottie"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

function CardMain(props) {
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.9, y: 90, opacity: 0.5 }
    };

    function handleDragEnd(_, info) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
              width: "90%",
                height:"90%",
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >


            <motion.div
            className="bg-jabi"
                style={{
                    width: "100%",
                    height:"90%",
                    borderRadius: 30,
                    scale
                }}
            >
                <Card
      shadow={false}
      className="relative grid h-full z-10 w-full  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ 
            background: `url(${props.src})`
          }}
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-700/80 via-gray-700/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">

        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        > 
          {props.description}
        </Typography>

        <div className="w-20 flex justify-center">
        <SwipeLottie/>
            
        </div>
      
      </CardBody>
      </Card>
            </motion.div>
                                        
        </motion.div>
    );
}

export function TipsPayment() {
    let [index, setIndex] = useState(0);
  if (index >TipsPaymentCard.length-1) {
    index = 0 ;
  
  }
        
    return (
      <div className="lg:container h-screen container-fluid grid grid-cols-1  mx-auto ">
      <div className="relative w-auto  p-5">

        <motion.div className="flex justify-center " style={{ width: "100%", height: "100%", position: "relative" }}>
            <AnimatePresence initial={false}>  
            <CardMain src={index == TipsPaymentCard.length-1  ? TipsPaymentCard[0].src  :  TipsPaymentCard[index+1].src}  key={index == TipsPaymentCard.length-1  ? 0  :  index+1 }  description={index == TipsPaymentCard.length-1  ? TipsPaymentCard[0].description  :  TipsPaymentCard[index+1].description } frontCard={false} />
            <CardMain
                key={index}
                frontCard={true}
                index={index}
                description={TipsPaymentCard[index].description}
                src={TipsPaymentCard[index].src}
                setIndex={setIndex}
                drag="x"
            >
            </CardMain>

           
</AnimatePresence>
        </motion.div>
        </div>
        </div>
    );
}
export default TipsPayment;
