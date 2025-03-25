import Link from 'next/link'
import React from 'react'

function ReturnsAndRefundsPolicyPage() {
    return (
        <div className='bg-white lg:py-20 py-10'>
            <div className='lg:w-[80%] w-[90%] m-auto'>
                <div>
                    <h1 className='lg:text-4xl text-3xl text-center lg:text-start font-bold text-black'>Returns and Refunds Policy</h1>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-7'>
                                Thank you for shopping at GoFamy.com.
                            </p>
                        </div>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-3'>
                                Please read this policy carefully. This is the Return and Refund Policy of GoFamy.com .
                            </p>
                        </div>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-3'>
                                Digital products
                            </p>
                            <p className='leading-relaxed text-slate-600 mt-1'>
                                We do not issue refunds for digital products once the order is confirmed and the product is sent.
                            </p>
                        </div>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-3'>
                                We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
                            </p>
                        </div>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-3'>
                                Contact us
                            </p>
                            <p className='leading-relaxed text-slate-600 mt-1'>
                                If you have any questions about our Returns and Refunds Policy, please contact us:
                            </p>
                        </div>
                        <div>
                            <p className='leading-relaxed text-slate-600 mt-3'>
                                By email: <b>support@gofamy.com</b> or <b>Live Chat</b> with Us
                            </p>
                            <p className='leading-relaxed text-slate-600 mt-1'>
                                By visiting this page on our website:https://www.gofamy.com/contact-us/
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReturnsAndRefundsPolicyPage