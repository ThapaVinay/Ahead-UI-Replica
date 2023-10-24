"use client";

import React from 'react'
import Image from 'next/image'
import { gsap, Linear, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react';

export const Hero = () => {

    let leaf1 = useRef(null);
    let leaf2 = useRef(null);
    let circle1 = useRef(null);
    let circle2 = useRef(null);
    let banner = useRef(null);
    let div = useRef(null);
    let text = useRef(null);

    return (
        <div ref={(el) => div = el} className='bg-[#EFECFF] overflow-hidden p-12 relative mt-14 h-[700px] flex items-center  justify-around gap-10 rounded-3xl'>

            {/* Ahead Section */}
            <img ref={(el) => leaf1 = el} className='absolute top-[6rem] left-[26.5rem] rotate-45 ' width={50} src={"/assets/leaf.png"} />
            <img ref={(el) => leaf2 = el} className='absolute -top-[1rem] left-[4.5rem] -rotate-45 ' width={100} src={"/assets/leaf.png"} />
            <img ref={(el) => circle1 = el} className='absolute top-[8rem] left-[21.5rem]  ' width={50} src={"/assets/orange circle.png"} />
            <img ref={(el) => circle2 = el} className='absolute top-[3rem] left-[29.5rem]  ' width={20} src={"/assets/gola orange.png"} />
            <div className='flex gap-5 flex-col '>
                <p>Ahead app</p>
                <h1 ref={(el) => text = el} className='text-6xl leading-[60px]  font-bold'> Master Your Life <br /> by mastering <br />emotions</h1>
                <div className='flex mt-6 gap-6'>
                    <Image className='' height={100} width={150} src={'/assets/Apple.png'} />
                    <div>
                        <div className='flex'> ⭐⭐⭐⭐⭐</div>
                        <p>100+ AppStore reviews</p>
                    </div>
                </div>
            </div>

            {/* Sticker Section */}
            {/* circle one */}
            <div className='h-[500px] relative w-[500px]  rounded-full border-dashed border-white flex justify-center items-center  border-[7px] '>

                {/* circle two */}  
                <img src={"assets/blue chhotu.png"} width={35} id="small2" className='absolute bottom-[29.5rem] right-[12.25rem]'/>
                <img src={"assets/orange chhotu.png"} width={35} id="small5" className='absolute bottom-[0.25rem] right-[7.25rem]' />
                <img src={"assets/pink chhotu.png"} width={35} id="small6" className='absolute  bottom-[15.25] right-[29.25rem]' />
                
                <img width={150} className='absolute ' id="small4" height={200} src={"/assets/blue cutie.png"} />
                <img width={100} className='absolute ' id="small" height={200} src={"/assets/Pink cutie.png"} />
                <img width={150} className='absolute  ' id="small3" height={200} src={"/assets/orange cutie.png"} />
                
                <div className='h-[250px] bg-[#DDD6F8] rounded-full w-[250px] relative  flex justify-center items-center'>
                    <img ref={(el => { banner = el })} src={"assets/MObile surr.png "} className='absolute -left-16' height={50} width={120} />
                    <img width={150}  className="rounded-2xl" height={200} src={"/assets/Mobile Pic.png"} />
                </div>
            </div>
        </div>
    )
}

export default Hero
