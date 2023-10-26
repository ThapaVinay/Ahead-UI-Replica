"use client";

import { gsap, Linear, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react';
import React from 'react'


const ScrollBox = () => {

    let text = useRef(null);
    let orange = useRef(null);
    const t1 = gsap.timeline();
    let sec = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.fromTo(text, {
            duration: 1,
            opacity: 0,
            x: -100
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            repeat: 0,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text,
                start: "top 80% ",
                start: "bottom 50%",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.to(orange, {
            x: -350,
            y: -100,
            duration: 2,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text,
                start: "top 80% ",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.to(sec, {
            x: -20,
            duration: 2,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text,
                start: "top 80% ",
                toggleActions: "restart complete reverse reset"
            }
        });

    }, [])

    return (
        <div className=' relative mlt mt-36 z-0'>
            <h1 ref={(el) => { text = el }} className='text-4xl font-bold'>Does this sound familiar...</h1>
            <img src={"/assets/orange cutie.png"} ref={(el) => { orange = el }} width={100} className='absolute top-[2rem] -rotate-[30deg] left-[50.5rem]' />
            <div ref={(el) => { sec = el }} className='mt-9   h-[350px]  gap-12  relative whitespace-nowrap  no-scrollbar overflow-x-auto'>
                <div className=' translate-y-6 rounded-3xl mr-12 inline-block  gap-2  p-9 py-2 bg-[#D9F2FF] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm flex '>
                            You get angry and defensive, <br /> instead of
                            staying open and working<br /> towards
                            common ground.
                        </div>

                    </div>
                </div>

                <div className=' rounded-3xl ml-12 mr-12 inline-block gap-2 translate-y-6 p-9 py-2 bg-[#EFECFF] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>
                <div className=' rounded-3xl -rotate-[6deg] relative z-50 translate-y-6 overflow-y-visible ml-12 mr-12 inline-block gap-2  p-9 py-2 bg-[#6441EF] h-[260px] w-[320px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>
                <div className=' rounded-3xl ml-12 mr-12 inline-block gap-2 translate-y-6  p-9 py-2 bg-[#FEF0D6] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>
                <div className=' rounded-3xl ml-12 mr-12 inline-block gap-2 translate-y-6  p-9 py-2 bg-[#D9F2FF] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>
                <div className=' rounded-3xl ml-12 mr-12 inline-block gap-2 translate-y-6 p-9 py-2 bg-[#EFECFF] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>
                <div className=' rounded-3xl ml-12 mr-12 inline-block gap-2 translate-y-6 p-9 py-2 bg-[#6441EF] h-[250px] w-[300px]'>
                    <img className='' width={60} height={100} src={"/assets/emoji heart.png"} />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-lg font-bold'>You argue with a colleague</h1>
                        <div className='text-sm'>
                            You get angry and defensive, instead <br /> of

                            staying open and working towards
                            <br />
                            common ground.
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default ScrollBox
