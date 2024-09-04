import React from 'react';
import Image from 'next/image';

function ContentSection1({ heading, subHeading, contents }) {
    return (
        <div className='bg-white'>
            <div className='bg-[#f5f7fe] py-5 px-4 lg:px-0 flex flex-col gap-3 justify-center items-center'>
                <h2 className='text-xl lg:text-[2rem] text-center font-semibold text-black'>{heading}</h2>
                <p className='text-center text-black'>
                    {subHeading}
                </p>
            </div>
            <div className='lg:w-[80%] w-[90%] m-auto lg:py-14 py-5'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                    <div dangerouslySetInnerHTML={{ __html: contents || "" }} />

                    <Image
                        className='rounded-full'
                        width={400}
                        height={400}
                        src="https://viplikes.net/uploads/Buy-youtube-promotion-packages.webp"
                        alt="Content Image"
                    />
                </div>
            </div>
        </div>
    );
}

export default ContentSection1;