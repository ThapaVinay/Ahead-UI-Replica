"use client";

import { gsap, Linear, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react';
import React from 'react'
import Image from 'next/image';

const Anonymous = () => {

    let text1 = useRef(null);
    let text2 = useRef(null);
    let text3 = useRef(null);
    let text4 = useRef(null);
    let text5 = useRef(null);
    let rank1 = useRef(null);
    let rank2 = useRef(null);
    let rank3 = useRef(null);
    let assignmen1 = useRef(null);
    let assignmen2 = useRef(null);
    let assignmen3 = useRef(null);
    let assignmen4 = useRef(null);

    useEffect(() => {

        gsap.fromTo(text1, {
            duration: 1,
            opacity: 0,
            y: -50,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            repeat: 0,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text1,
                start: "top 80% ",
                start: "bottom 50%",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.fromTo(text2, {
            duration: 1,
            opacity: 0,
            y: -50,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            repeat: 0,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text2,
                start: "top 80% ",
                start: "bottom 50%",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.to(rank1, {
            scale: 1,
            opacity: 1,
            rotation: 1080,
            duration: 3,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }

        });

        gsap.to(rank2, {
            scale: 1,
            opacity: 1,
            delay: 0.4,
            duration: 3,
            rotation: 1080,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(rank3, {
            scale: 1,
            opacity: 1,
            delay: 0.6,
            rotation: 1080,
            duration: 3,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: text1,
                start: "top 80% ",
                toggleActions: "restart  complete  "
            }
        });

        gsap.to(text3, {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: text1,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(text4, {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: text4,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(text5, {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: text5,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(assignmen1, {
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: assignmen1,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(assignmen2, {
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: assignmen2,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(assignmen3, {
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: assignmen3,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });

        gsap.to(assignmen4, {
            opacity: 1,
            rotate: 0,
            duration: 1.2,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: assignmen4,
                start: "top 80% ",
                toggleActions: "restart complete  "
            }
        });


    }, [])


    return (
        <div className='bg-[#EEF8FE] rounded-3xl h-[750px] p-12 mt-40 flex flex-col  items-center'>
            <p ref={(el => { text1 = el })} className='text-lg font-semibold'>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
            <p ref={(el => { text2 = el })} className='text-5xl  font-bold mt-5'>Ever wondered what others think of you?</p>

            <div className='border-dashed mt-20  border-[#EAC57D] border-[2px] w-[70%] border-collapse'>  </div>

            <div className='flex relative bottom-7 w-full justify-between gap-10'>
                <div className='flex flex-col  items-center'>
                    <Image ref={(el => { rank1 = el })} className="scale-0" src={"/assets/1 rank.png"} width={60} height={60} />
                    <p ref={(el => { text3 = el })} className='text-sm scale-0'>Answer questions on your social skills</p>
                </div>
                <div className='flex flex-col  items-center'>
                    <img ref={(el => { rank2 = el })} className="scale-0 " src={"/assets/2 sign.png"} width={60} />
                    <p ref={(el => { text4 = el })} className='text-sm text-center scale-0'>Let others anonymously answer the same <br /> question about you</p>
                </div>
                <div className='flex flex-col  items-center'>
                    <img ref={(el => { rank3 = el })} className="scale-0 " src={"/assets/3 sign.png"} width={50} />
                    <p ref={(el => { text5 = el })} className='text-sm text-center scale-0'>Find out where you and others see things <br /> the same way - and where not!</p>
                </div>
            </div>

            <div className='bg-white items-center flex-col justify-center rounded-3xl flex  mt-20 w-[700px] h-[250px]' >
                <div className='w-[80%] mt-12 h-1 rounded-3xl border-[2px] border-gray-400' ></div>
                <div className='flex  justify-between w-full align-baseline items-center'>
                    <div className='relative bottom-[4.7rem] left-[1rem]'>
                        <div ref={(el => { assignmen1 = el })} className='bg-[#6441EF] rounded-2xl p-4 px-6 rotate-90'>Naruto</div>
                        <div className=' relative left-12 mt-2 h-[20px] w-[20px] rounded-full bg-[#6441EF]' ></div>
                    </div>
                    <div className='relative bottom-[0.67rem] '>
                        <div className='h-[20px] w-[20px] mb-2 rounded-full bg-[#40C2FD]' ></div>
                        <div ref={(el => { assignmen2 = el })} className='bg-[#40C2FD] w-full rounded-2xl p-4 rotate-90'>One Piece</div>
                    </div>

                    <div className='bottom-[4.7rem]  relative'>
                        <div ref={(el => { assignmen3 = el })} className='bg-[#FDB438] mb-2 w-full rounded-2xl p-4 rotate-90'>Hunter x Hunter</div>
                        <div className='h-[20px] w-[20px] rounded-full bg-[#FDB438]' ></div>
                    </div>

                    <div className='bottom-[0.85rem] relative right-[1rem]'>
                        <div className='h-[20px] mb-2 w-[20px] relative left-20 rounded-full bg-[#57C897]' ></div>
                        <div ref={(el => { assignmen4 = el })} className='bg-[#57C897] w-full rounded-2xl p-4 rotate-90'>Attack on Titan</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Anonymous
