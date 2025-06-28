'use client'
import Lenis from 'lenis';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';
const Picture1 = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
const Picture2 = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
const Picture3 = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"


export default function TextParallax({pharases} : {pharases: string[]}) {
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const Slide = ({src, direction, left, progress}: { src: StaticImageData | string, direction: 'left' | 'right', left: string, progress: MotionValue<number> }) => {
        const directions = direction == 'left' ? -1 : 1;
        const translateX = useTransform(progress, [0, 1], [150 * directions, -150 * directions])

        return (
            <motion.div style={{ x: translateX, left}} className="relative flex whitespace-nowrap">
                {
                    pharases.map((phrase, index) => (
                        <Phrase key={index} src={src} title={phrase}/>
                    ))
                }
            </motion.div>
        )
    }

    const Phrase = ({ src, title }: { src: StaticImageData | string, title: string }) => {
        return (
            <div className={'px-1 md:px-5 py-2 md:py-3 flex gap-2 md:gap-4 items-center'}>
                <p className='text-base md:text-xl'>{title}</p>
                <span className="relative h-8 md:h-12 aspect-[4/2] rounded-full overflow-hidden">
                    <Image className='object-contain w-fit h-full' src={src} alt="image" width={500} height={500} />
                </span>
            </div>
        )
    }

    return (
        <main className='overflow-hidden py-16 md:pt-52 md:pb-36'>
            <div ref={container}>
                <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} />
                <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} />
                <Slide src={Picture3} direction={'left'} left={"-75%"} progress={scrollYProgress} />
            </div>
        </main>
    );


}