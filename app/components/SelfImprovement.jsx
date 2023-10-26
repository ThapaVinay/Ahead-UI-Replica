"use client";

import { gsap, Linear, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react';
import { useState } from "react";

const SelfImprovement = () => {

    let text1 = useRef(null);
    let text2 = useRef(null);
    let blue = useRef(null);
    const [num, setNum] = useState(1);
    function clickHandler(num) {
        setNum(num);
    }

    useEffect(() => {

        gsap.fromTo(text1, {
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
                trigger: text1,
                start: "top 80% ",
                start: "bottom 50%",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.fromTo(text2, {
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
                trigger: text2,
                start: "top 80% ",
                start: "bottom 50%",
                toggleActions: "restart complete reverse reset"
            }
        });

        gsap.to(blue, {
            x: -300,
            y: -80,
            duration: 2,
            ease: "Power3.out",
            scrollTrigger: {
                trigger: text2,
                start: "top 80% ",
                toggleActions: "restart complete reverse reset"
            }
        });

    }, [])

    return (
        <div className='mt-64 relative w-full'>
            <p ref={(el) => { text1 = el }} className='text-lg font-bold mb-4'>Wrong with self-improvement and how we&apos;re fixing it.</p>
            <h1 ref={(el) => { text2 = el }} className='text-4xl font-bold'>Self-improvement. Ugh.</h1>
            <img ref={(el) => { blue = el }} className='absolute top-[2rem] left-[50.5rem]' width={105} src={"/assets/blue cutie.png"} />

            <div className='w-full mt-11 transition-all duration-1000 flex flex-col items-center justify-center h-[400px] overflow-y-auto no-scrollbar'>

                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} onMouseEnter={() => clickHandler(i + 1)} className={`flex relative mt-${i === 0 ? 96 : 8} cursor-default right-2 top-2 justify-center items-center`}>
                        <div className={`h-[40px] w-[40px] ${(num === i + 1) ? "bg-blue-200" : "bg-white"} right-4 relative z-30 rounded-full flex items-center justify-center`}>
                            <div className='w-1 bg-blue-800 h-32 mt-3'>
                                <div className='h-[20px] w-[20px] rounded-full relative top-12 right-2 bg-blue-950' />
                            </div>
                        </div>
                        <div className={`${(num === i + 1) ? "opacity-100" : "opacity-50"}`}>
                            <div className='text-lg font-bold'>
                                It&apos;s not easy as 1-2-3...
                            </div>
                            <div className='text-lg font-medium'>
                                The journey of change may be long, but our sessions are quick. We get <br /> to the point and tell you what you want to know (and nothing else).
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default SelfImprovement
