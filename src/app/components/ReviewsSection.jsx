"use client";
import React, { useEffect, useRef, useState } from 'react';
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import "../../app/globals.css";
import 'swiper/css';

function ReviewsSection({ reviewsData }) {
    return (
        <div className='bg-white'>
            <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                <h4 className='lg:text-[2rem] text-xl text-center font-semibold text-black'>🥇 Voices of Victory: Our Clients Speak Their Success!</h4>
                <p className='text-center text-black'>
                    At TubeViews, your satisfaction is our priority. Experience unparalleled customer service and watch your social media soar!
                </p>
            </div>
            <div className='lg:w-[80%] w-[90%] m-auto lg:py-10 py-5'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[FreeMode, Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        700: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="flex flex-col"
                >

                    {reviewsData?.map((review, i) => (
                        <SwiperSlide key={i} className=" min-w-[320px] max-w-[330px]  mb-5">
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}


export default ReviewsSection