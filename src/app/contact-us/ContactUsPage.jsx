"use client"
import React, { useState } from 'react'
import { IoMdDoneAll } from 'react-icons/io';

function ContactUsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [resMessage, setResMessage] = useState("")
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        orderId: "",
        message: ""
    });

    function handleOnChange(e) {
        const { name, value } = e.target;
        setContactDetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        console.log(contactDetails);
        setIsLoading(true)
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ contactDetails }),
            });

            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            setIsLoading(false)
            const data = await res.json(); // Assuming the response is JSON
            setResMessage(data?.message)
            console.log(data);
            setContactDetails({
                name: "",
                email: "",
                orderId: "",
                message: ""
            })
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    return (
        <div className='bg-white py-20'>
            <div className='lg:w-[80%] w-[90%] m-auto'>
                <div>
                    <h2 className='text-4xl font-bold text-center'>Contact Us</h2>
                    <p className='text-lg text-slate-700 mt-7'>
                        TubeVIews.co is Unique Social Media Company. They Providing Real and Active Video Views, Subscribers, Comments
                        Likes, Followers, and More. You can Buy cheap Social Media Services.We are a dedicated company that strives to
                        make your social media marketing easy and convenient. This we do by selling you followers and likes, which form
                        the standards as far as social media marketing is concerned.
                    </p>
                </div>

                <div className='lg:w-[60%] w-[100%] m-auto py-10 lg:py-10'>
                    <div className='mb-5'>
                        {resMessage ? <div className='flex justify-between mt-4 items-center gap-2 p-2 text-slate-600 bg-green-200 rounded'>
                            <p className='text-black'>
                                {resMessage}
                            </p>
                            <span><IoMdDoneAll /></span>
                        </div> : null}
                    </div>

                    <form
                        onSubmit={handleFormSubmit}
                        className=' w-full flex flex-col gap-4 p-4 lg:p-16 bg-white lg:rounded-3xl rounded-md' style={{ boxShadow: "0 6px 6px rgba(0, 0, 0, .04), 0 0 42px rgba(0, 0, 0, .04)" }}>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black font-medium'>Name <span className='text-orange-600'>*</span></label>
                            <input
                                type="text"
                                placeholder='First name'
                                name='name'
                                className='border p-3 outline-none w-full rounded text-black'
                                value={contactDetails.name}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black font-medium'>Email<span className='text-orange-600'>*</span></label>
                            <input
                                type="email"
                                placeholder='Email address'
                                name='email'
                                className='border p-3 outline-none w-full rounded text-black'
                                value={contactDetails.email}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[15px] text-black font-medium'>Order ID</label>
                            <input
                                type="text"
                                placeholder='Order Id (optinal)'
                                name='orderId'
                                className='border p-3 outline-none w-full rounded text-black'
                                value={contactDetails.orderId}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <label className='text-[15px] text-black font-medium'>Message</label>
                            <textarea
                                name="message"
                                placeholder='Additional Information'
                                className='border p-3 outline-none w-full rounded text-black'
                                value={contactDetails.message}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <button

                                className=' bg-secondary w-full text-lg p-2 font-semibold rounded text-white'
                            >
                                {isLoading ? "Sending" : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage