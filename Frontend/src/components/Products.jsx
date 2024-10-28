import React from 'react';

import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Products = () => {
    const data = [
        {
            id: 1,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy OMNISTORE™",
            description: "The Foundation for Future Commerce. Unified. Ubiquitous. Intelligent."
        },
        {
            id: 2,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy ADD™",
            description: "Modern and open technology platforms for clinical research and drug development."
        },
        {
            id: 3,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy BaNCS™",
            description: "Growth and Transformation in Insurance Enabled by Intelligent, Digital Solutions."
        },
        {
            id: 4,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy BFSI Platforms",
            description: "Power the Banking, Financial Services, Insurance Customer Journey."
        },
        {
            id: 5,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Chroma™",
            description: "Harness talent, collaborative work culture, invisible HR."
        },
        {
            id: 6,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Customer Intelligence™",
            description: "Deliver personalized experiences to build loyalty and drive growth."
        },
        {
            id: 7,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy ERP on Cloud",
            description: "Rich experience, future-ready, agile and flexible, always connected."
        },
        {
            id: 8,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy HOBS™",
            description: "Innovate, create, and industry-leading digital experiences."
        },
        {
            id: 9,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "ignio™",
            description: "Autonomous Enterprise for improved resilience, assurance, and superior cx."
        },
        {
            id: 10,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Intelligent Urban Exchange™",
            description: "Deliver world-class sustainable citizen experiences, safe workplaces."
        },
        {
            id: 11,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Optumera™",
            description: "AI-Powered Strategic Retail Optimization, Merchandising. Pricing. Supply Chain."
        },
        {
            id: 12,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Tap™",
            description: "Agile sourcing, responsible buying, leaner a/c payable and superior experience."
        },
        {
            id: 13,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Mastercraft™",
            description: "Cognitive solutions for application development, modernization, and delivery."
        },
        {
            id: 14,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy Quartz",
            description: "Enable More Secure Transactions across Crypto and Digital Assets."
        },
        {
            id: 15,
            icon: <MdOutlineArrowOutward className='text-blue-700 transition-all duration-300' />,
            title: "Jile™",
            description: "Build something awesome today that your customers will love tomorrow."
        },
        {
            id: 16,
            icon: <MdOutlineArrowOutward className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy iON",
            description: "A strategic unit of Olcademy focused on Manufacturing Industries."
        },
        {
            id: 17,
            icon: <FaArrowRight className='text-blue-700 transition-all duration-300' />,
            title: "Olcademy TwinX™",
            description: "An enterprise digital twin platform."
        }
    ];

    return (
        <div className='xl:w-full w-[100dvw] px-10 pt-10 bg-white pb-8'>
            <p className='text-gray-700 font-bold uppercase tracking-[0.15em] text-[0.65rem]'>Products and Platforms</p>
            <h2 className='text-3xl mt-4 text-black'>Cutting edge solutions to power up your business.</h2>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-5 mt-8'>
                {data.map((item) => {
                    return (
                        <div className='group border-b-2 border-b-gray-400 hover:border-b-black transition-all duration-300' key={item.id}>
                            <div className='flex flex-col h-36 justify-center gap-3 relative py-3'>
                                <h5 className='text-2xl text-black'>{item.title}</h5>
                                <div className='flex items-end gap-5'>
                                    <p className='text-gray-600 font-[500]'>{item.description}</p>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;

