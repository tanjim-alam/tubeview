import Link from 'next/link'
import React from 'react'

function TopBar() {
    return (
        <div className='bg-primary text-center p-1 hidden lg:block'>
            <Link href={"#"} className='text-center text-white text-sm underline '>Buy Our Instagram Followers</Link>
        </div>
    )
}

export default TopBar