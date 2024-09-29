import Link from 'next/link'
import React from 'react'

function TopBar() {
    return (
        <div className='bg-primary text-center p-1 hidden lg:block'>
            <Link href={"/buy-50000-youtube-views"} className='text-center text-white text-sm underline '>Buy 50000/50k YouTube Views on 50%</Link>
        </div>
    )
}

export default TopBar