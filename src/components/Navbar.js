
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  return (
    <div className='p-2  z-10 w-full bg-white backdrop-blur-md ' >
      <Link href={`/`} style={{textDecoration: "none"}} >
       <h1 className='font-bold text-3xl text-center'>
       دوك<span className='text-blue-500'>ه</span>ب
       </h1>
      </Link>
    </div>
  )
}
