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
    let blue_cutie = useRef(null);
    let pink_cutie = useRef(null);
    let orange_cutie = useRef(null);
    let blue_chhotu = useRef(null);
    let pink_chhotu = useRef(null);
    let orange_chhotu = useRef(null);
    let banner = useRef(null);
    let text = useRef(null);

    const t1 = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger);

    function createOrbitAnimation(element, radius, duration) {
        gsap.to(element, {
            duration: duration,
            x: 200,
            y: 0,
            ease: 'linear',
            transformOrigin: 'center center',
            rotation: 360,
            repeat: -1,

            onUpdate: () => {
                const angle = gsap.getProperty(element, 'rotation');
                const radians = (angle * Math.PI) / 180;
                const newX = Math.cos(radians) * radius;
                const newY = Math.sin(radians) * radius;
                gsap.set(element, { x: newX, y: newY });
            },
        });
    }

    useEffect(() => {

        gsap.fromTo(text, {
            duration: 1,
            opacity: 0,
            x: -300
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            repeat: 0,
            ease: "Power3.out",
        });

        gsap.to(leaf1, {
            rotation: 3000,
            duration: 3,
            repeat: -1
        });

        gsap.to(circle1, {
            rotation: 3000,
            duration: 6,
            repeat: -1
        });

        gsap.to(leaf2, {
            duration: 1,
            ease: "power3.inOut",
            rotation: 1410,
            x: 20,
            y: 60,
            repeat: -1,
        });

        gsap.to(circle2, {

            scale: 0.3,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        });

        createOrbitAnimation(blue_cutie, 250, 3);
        createOrbitAnimation(pink_cutie, 250, 6);
        createOrbitAnimation(orange_cutie, 250, 20);

        createOrbitAnimation(blue_chhotu, 250, 3);
        createOrbitAnimation(pink_chhotu, 250, 6);
        createOrbitAnimation(orange_chhotu, 250, 20);

    }, [])



    return (
        <div className='bg-[#EFECFF] overflow-hidden p-12 relative mt-14 h-[700px] flex items-center  justify-around gap-10 rounded-3xl'>

            {/* Ahead Section */}
            <img ref={(el) => leaf1 = el} className='absolute top-[6rem] left-[26.5rem] rotate-45 ' width={50} src={"/assets/leaf.png"} />
            <img ref={(el) => leaf2 = el} className='absolute -top-[1rem] left-[4.5rem] -rotate-45 ' width={100} src={"/assets/leaf.png"} />
            <img ref={(el) => circle1 = el} className='absolute top-[8rem] left-[21.5rem]  ' width={50} src={"/assets/orange circle.png"} />
            <img ref={(el) => circle2 = el} className='absolute top-[3rem] left-[29.5rem]  ' width={20} src={"/assets/gola orange.png"} />
            <div className='flex gap-5 mx-auto flex-col '>
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
                <img ref={(el) => blue_chhotu = el} src={"assets/blue chhotu.png"} width={35} id="small2" className='absolute bottom-[29.5rem] right-[12.25rem]' />
                <img ref={(el) => orange_chhotu = el} src={"assets/orange chhotu.png"} width={35} id="small5" className='absolute bottom-[0.25rem] right-[7.25rem]' />
                <img ref={(el) => pink_chhotu = el} src={"assets/pink chhotu.png"} width={35} id="small6" className='absolute  bottom-[15.25] right-[29.25rem]' />

                <img ref={(el) => blue_cutie = el} width={150} className='absolute ' id="small4" height={200} src={"/assets/blue cutie.png"} />
                <img ref={(el) => pink_cutie = el} width={100} className='absolute ' id="small" height={200} src={"/assets/Pink cutie.png"} />
                <img ref={(el) => orange_cutie = el} width={150} className='absolute  ' id="small3" height={200} src={"/assets/orange cutie.png"} />

                <div className='h-[250px] bg-[#DDD6F8] rounded-full w-[250px] relative  flex justify-center items-center'>
                    <img ref={(el) => banner = el} src={"assets/MObile surr.png "} className='absolute -left-16' height={50} width={120} />
                    <img width={150} className="rounded-2xl" height={200} src={"/assets/Mobile Pic.png"} />
                </div>
            </div>
        </div>
    )
}

export default Hero
