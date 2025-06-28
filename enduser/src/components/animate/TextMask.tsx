"use client"
import { useRef } from 'react'
import { useInView, motion, Variants } from 'motion/react'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    phrases: (string | React.ReactNode)[],
    className?: string,
    tag?: keyof JSX.IntrinsicElements
}

export default function TextMask({ phrases, className, tag = 'p' }: Props) {
    const body = useRef(null)
    const isInView = useInView(body, { once: false, margin: '-2%' })

    const animation: Variants = {
        initial: { y: '100%' },
        enter: (i: number) => ({
            y: '0',
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    }

    return (
        <div ref={body} className="space-y-3">
            {phrases.map((phrase, index) => {
                const MotionTag = motion[tag as keyof typeof motion] as React.ElementType;

                return (
                    <div
                        key={index}
                        className={cn('overflow-hidden w-full h-full text-black !leading-relaxed', className)}
                    >
                        <MotionTag
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={isInView ? 'enter' : 'initial'}
                        >
                            {phrase}
                        </MotionTag>
                    </div>
                );
            })}
        </div>
    )
}
