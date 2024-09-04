import React from 'react';
import Accordion from "./Accordion"

function FaqSection({ heading, subHeading, faqData = [] }) {
    return (
        <div className="bg-white">
            <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                <div className='lg:w-[70%] w-[90%] '>
                    <h2 className='lg:text-[2rem] text-xl font-semibold text-center'>{heading}</h2>
                    <p className='text-center'>
                        {subHeading}
                    </p>
                </div>
            </div>
            <div className='lg:w-[80%] w-[90%] py-7 m-auto'>
                <div className='flex flex-col gap-2'>
                    {faqData.map((item, index) => (
                        <Accordion key={index} title={item.question} content={item.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection