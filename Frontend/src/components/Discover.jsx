import React from 'react';
import { CiDollar } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { RiRadarFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiRobotGrab } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuPlane } from "react-icons/lu";

const Discover = () => {
    const data = [
        { id: 1, icon: <LuCircleDollarSign className='text-3xl text-blue-500 font-extrabold' />, title: 'Banking' },
        { id: 2, icon: <PiChartLineUpBold className='text-3xl text-blue-500 font-extrabold' />, title: 'Capital Markets' },
        { id: 3, icon: <RiRadarFill className='text-3xl text-blue-500 font-extrabold' />, title: 'Communications, Media, and Information Services' },
        { id: 4, icon: <BsCart3 className='text-3xl text-blue-500 font-extrabold' />, title: 'Consumer Goods and Distribution' },
        { id: 5, icon: <FaChalkboardTeacher className='text-3xl text-blue-500 font-extrabold' />, title: 'Education' },
        { id: 6, icon: <RiRadarFill className='text-3xl text-blue-500 font-extrabold' />, title: 'Energy, Resources, and Utilities' },
        { id: 7, icon: <MdOutlineHealthAndSafety className='text-3xl text-blue-500 font-extrabold' />, title: 'Healthcare' },
        { id: 8, icon: <GiRobotGrab className='text-3xl text-blue-500 font-extrabold' />, title: 'High Tech' },
        { id: 9, icon: <LuCircleDollarSign className='text-3xl text-blue-500 font-extrabold' />, title: 'Insurance' },
        { id: 10, icon: <GiDna2 className='text-3xl text-blue-500 font-extrabold' />, title: 'Life Science' },
        { id: 11, icon: <GiRobotGrab className='text-3xl text-blue-500 font-extrabold' />, title: 'Manufacturing' },
        { id: 12, icon: <FaHandHoldingHeart className='text-3xl text-blue-500 font-extrabold' />, title: 'Public Services' },
        { id: 13, icon: <BsCart3 className='text-3xl text-blue-500 font-extrabold' />, title: 'Retail' },
        { id: 14, icon: <LuPlane className='text-3xl text-blue-500 font-extrabold' />, title: 'Travel and Logistics' },
    ];

    return (
        <div className='xl:w-full w-full px-10 bg-white'>
            <h2 className='text-3xl pt-5 text-black'></h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 pt-8'>
                {data.map((item) => (
                    <div className='group' key={item.id}>
                        <div className='flex gap-3 items-center xl:w-full relative py-3 border-b-2 border-b-gray-600 group-hover:border-b-black transition-all duration-300'>
                            {item.icon}
                            <p className='font-[500] text-black'> {item.title} </p>
                            <FaArrowRight className='text-black absolute right-5 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Discover;

