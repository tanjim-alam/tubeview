import Image from 'next/image'
import React from 'react'

function AboutPage() {
    return (
        <div className='bg-white lg:py-20 py-10'>
            <div className='lg:w-[80%] w-[90%] m-auto'>
                <div>
                    <h1 className='text-4xl font-bold text-black text-center'>About Us</h1>
                    <p className='leading-relaxed text-slate-600 mt-7'>
                        TubeVIews.co is Unique Social Media Company. They Providing Real and Active Video Views, Subscribers, Comments
                        Likes, Followers, and More. You can Buy cheap Social Media Services.We are a dedicated company that strives to
                        make your social media marketing easy and convenient. This we do by selling you followers and likes, which form
                        the standards as far as social media marketing is concerned.
                    </p>
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <Image src={"/tubeviews-aobutus.webp"}
                        width={1200}
                        height={600}
                        alt='TubeViews-aboutus'
                    />
                </div>
                <div className='mt-12'>
                    <h2 className='lg:text-4xl text-2xl text-center lg:text-start text-black font-bold'>Why Choose us ?</h2>
                    <p className='leading-relaxed text-slate-600 mt-5'>
                        We believe in result-oriented and transparent services which make us a professional and trusted company.
                        Our solutions and services are available for all types of business sizes and categories.
                    </p>
                    <ul className='flex flex-col gap-3 list-disc list-inside'>
                        <li className='leading-relaxed text-slate-600'>
                            We have over 10,000+ satisfied customers who think so.
                            You can read what they say about us in the review section. Here are a few things that set us apart.
                        </li>
                        <li className='leading-relaxed text-slate-600'>
                            Our Team Never need Your Social media Platform Details or Password
                        </li>
                        <li className='leading-relaxed text-slate-600'>
                            We offer a 100% Money Back Guarantee if we are unable to complete your order.
                        </li>
                        <li className='leading-relaxed text-slate-600'>
                            Our services include a Retention Guarantee, to ensure results are long-term
                        </li>
                    </ul>
                    <p className='leading-relaxed text-slate-600'>
                        If you need anything. you simply say in chat/Mail or WhatsApp. We will get Back instantly
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage