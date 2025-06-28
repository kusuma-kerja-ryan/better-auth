"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import Image, { StaticImageData } from "next/image"

type Props = {
  side?: "left" | "right"
  slides: string[] | StaticImageData[]
}

const EmblaCarousel: React.FC<Props> = ({ side = "right", slides}) => {
  const direction: "ltr" | "rtl" = side === "left" ? "rtl" : "ltr"

  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  )

  return (
    <div className="w-full mx-auto relative">
      <div className="bg-transparent h-full w-full absolute z-10" />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={`flex -ml-4 ${side === "left" ? "flex-row-reverse" : ""}`}>
          {slides.map((d, i) => (
            <div key={i}
              className="flex-none w-[50%] lg:w-[30%] min-w-0 pl-7 transform-gpu"
            >
              <Image src={d} alt={`mock-phone${i + 1}`} width={1920} height={1080} quality={100} className="object-cover h-[40vh] w-full self-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
