import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/fy2025.jpeg';
import img2 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import img3 from "../assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg";
import img4 from "../assets/ai-study.jpeg";
import img5 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const data = [
    {
        title: "Olcademy Starts FY2025 on a Strong Note",
        subtitle: "A strong start with broad-based growth across industries and markets",
        button: "Know More",
        image: img
    },
    {
        title: "Olcademy Signs Title Partnership with Sydney Marathon",
        subtitle: "A 5-year Partnership with Australia's largest and most iconic race",
        button: "Read More",
        image: img2
    },
    {
        title: "Olcademy AI WisdomNext is here",
        subtitle: "An industry-first GenAI aggregation platform from TCS",
        button: "Read More",
        image: img3
    },
    {
        title: "The Olcademy AI for Business Study",
        subtitle: "From potential to performance by design",
        button: "Read the study",
        image: img4
    },
    {
        title: "Olcademy Talks Tech - Tune in to our podcast",
        subtitle: "Explore how GenAI is transforming customer experiences",
        button: "Listen Now",
        image: img5
    }
];

export default function HeroBigCarousel() {
    return (
        <div className="h-[80vh]"> {/* Set height for the carousel */}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={100}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                pagination={true}
                autoplay={{
                    delay: 3000, // time in milliseconds for each slide
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='text-white slide-content'>
                            <div className='relative flex flex-col mt-10 items-center'>
                                <div className='relative group'>
                                    <img src={item.image} className='h-[70vh] w-full' alt={item.title} />
                                    <div className='absolute -top-20 left-0 z-20'>
                                        <h2 className='m-4 text-4xl'>{item.title}</h2>
                                        <p className='ml-4 text-2xl text-gray-300 hidden group-hover:block'>{item.subtitle}</p>
                                        <button className='bg-blue-600 w-[150px] h-16 mt-10 ml-4 rounded-3xl hidden group-hover:block'>{item.button}</button>
                                    </div>
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent hover:bg-black hover:bg-opacity-60 transition-all duration-200'></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
