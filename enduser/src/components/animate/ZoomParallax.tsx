"use client"
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import {
    assetPhotography20,
    assetPhotography21,
    assetPhotography22,
    assetPhotography23,
    assetPhotography24,
    assetPhotography25
} from "@/assets/webp"

export default function ZoomParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: assetPhotography20,
            scale: scale4
        },
        {
            src: assetPhotography21,
            scale: scale5
        },
        {
            src: assetPhotography22,
            scale: scale6
        },
        {
            src: assetPhotography23,
            scale: scale7
        },
        {
            src: assetPhotography24,
            scale: scale8
        },
        {
            src: assetPhotography25,
            scale: scale9
        },
        {
            src: assetPhotography25,
            scale: scale7
        },
    ]

    function getImageStyle(index: number) {
  switch (index) {
    case 0:
      return "top-[-30vh] left-[5vw] w-[35vw] h-[30vh]";
    case 1:
      return "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]";
    case 2:
      return "left-[27.5vw] w-[25vw] h-[25vh]";
    case 3:
      return "top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]";
    case 4:
      return "top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]";
    case 5:
      return "top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]";
    default:
      return "w-[25vw] h-[25vh]";
  }
}


    return (
        <div ref={container} className={`h-[300vh] relative`}>
            <div className={`sticky overflow-hidden top-0 h-screen`}>
                {
                    pictures.map(({ src, scale }, index) => (
                        <motion.div key={index} style={{ scale }} className={`w-full h-full top-0 absolute flex items-center justify-center`}>
                            <div className={`relative ${getImageStyle(index)}`}>
                                <Image
                                    src={src}
                                    fill
                                    quality={100}
                                    alt="image"
                                    className='object-cover'
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}