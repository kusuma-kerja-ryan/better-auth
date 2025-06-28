'use client';
import Lenis from 'lenis';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
    assetPhotography01,
    assetPhotography02,
    assetPhotography03,
    assetPhotography04,
    assetPhotography05,
    assetPhotography06,
    assetPhotography07,
    assetPhotography08,
    assetPhotography09,
    assetPhotography10,
    assetPhotography11,
    assetPhotography12,
} from "@/assets/webp"

const images = [
    assetPhotography01,
    assetPhotography02,
    assetPhotography03,
    assetPhotography04,
    assetPhotography05,
    assetPhotography06,
    assetPhotography07,
    assetPhotography08,
    assetPhotography09,
    assetPhotography10,
    assetPhotography11,
    assetPhotography12
];


export default function ParallaxGalleries() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    });

    const { height } = dimension;

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.4]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.3]);

    useEffect(() => {
        const lenis = new Lenis();

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', resize);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className='py-12 md:pt-20'>
            <div className="h-[125vh] overflow-hidden bg-white w-full" ref={gallery}>
                <div className="relative w-full -top-[32.5vh] space-x-5 h-[200vh] overflow-hidden flex">
                    <Column images={images.slice(0, 3)} y={y} />
                    <Column images={images.slice(3, 6)} y={y2} />
                    <Column images={images.slice(6, 9)} y={y3} />
                    <Column images={images.slice(9, 12)} y={y4} />
                </div>
            </div>
        </div>
    );
}

const Column = ({ images, y }: { images: string[] | StaticImageData[]; y: MotionValue<number> }) => {
    return (
        <motion.ul
            style={{ y }}
            className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap"
        >
            {images.map((src, i) => (
                <li
                    key={i}
                    className="relative h-1/3 md:h-1/3 w-full flex flex-col gap-[2vw] whitespace-nowrap rounded-[1vw] overflow-hidden"
                >
                    <div className="absolute w-full h-full">
                        <Image
                            src={src}
                            alt="image"
                            className="object-cover w-full h-full bg-gray-700"
                            fill
                        />
                    </div>
                </li>
            ))}
        </motion.ul>
    );
};
