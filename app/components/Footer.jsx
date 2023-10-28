"use client";

import React from 'react'
import { gsap, Linear, Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from 'react';
import Image from 'next/image'

const Footer = () => {

    let logo = useRef(null);

    useEffect(() => {
        gsap.from(logo, {
            scale: 0,
            opacity: 0,
            rotate: 100,
            duration: 4.2,
            ease: "elastic.out(1.2, 0.3)",
            scrollTrigger: {
                trigger: logo,
                start: "top 80% ",
                toggleActions: "restart complete reverse reset"
            }
        })
    }, []);

    return (
        <div className='mt-20 '>
            <hr />
            <div className='mt-10 w-full gap-6 flex flex-col items-center justify-center'>
                <img ref={(el => { logo = el })} src={"/assets/header.jpg"} width={80} />
                <p className='mt-3 text-3xl font-bold text-[#6448D6]'>Ahead</p>
                <div className='flex gap-8'>
                    <div className='flex items-center justify-center'>

                        <img src={"/assets/location.png"}/>
                        <div className='p-2'>
                            October 27, 2023 Dehradun
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img src={"/assets/mail.png"} />
                        <div className='p-2'>
                            vinay_thapa@ahead-app.com
                        </div>
                    </div>
                </div>
                <Image className='' height={100} width={150} src={'/assets/Apple.png'} />
                <p>© 2023 Ahead app. All Right reserved</p>
            </div>
        </div>
    )
}

export default Footer
