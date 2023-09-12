import Image from 'next/image'
import React from 'react'

export default function HomePageStage({text,image}) {
  return (
   <a href='/primaire' className='bg-[#f0f0f0] shadow-3xl  backdrop-blur-lg rounded-xl w-fit cursor-pointer transition hover:-translate-y-1'>
    <Image src={image} width={500} height={300}  className='cover rounded-t-xl'/>
     <div className='bg-[#213555] text-white rounded-b-xl p-4 text-center font-bold'>
            <h1>{text}</h1>
    </div>
   </a>
  )
}
