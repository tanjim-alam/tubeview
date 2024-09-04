import React from 'react';
import { IoIosStar } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";

function ReviewCard() {
    return (
        <div className='flex flex-col gap-6 lg:w-[320px] w-[300px] border rounded-md px-6 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.15)]'>
            <div className='flex justify-between items-center'>
                <div className='flex  gap-1'>
                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                    <span className=' text-white bg-secondary p-1'><IoIosStar /></span>
                    <span className=' text-white bg-secondary p-1'><IoIosStarHalf /></span>
                </div>
                <div>
                    <p className=' text-slate-500'>Fab 22, 2024</p>
                </div>
            </div>
            <div>
                <h4 className='text-lg font-semibold'>Thanks</h4>
                <p className='text-slate-500 text-sm'>
                    Tubeviews has promoted a number of my YouTube videos and always delivers the results I need..!! my YouTube videos and always delivers the results I need..!!
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                    <span className='text-2xl'><CgProfile /></span>
                    <h6 className=' font-medium text-lg'>Robin</h6>
                </div>
                <div className='flex gap-1 items-center'>
                    <p className='text-sm'>Verified Purchase</p>
                    <span className='text-md text-blue-700'><MdVerified /></span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard