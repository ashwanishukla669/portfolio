"use client"

import React from 'react'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';
import Image from 'next/image';

export default function Hero() {

  const router = useRouter();

  return (
    <section className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10'>
      <div className='col-span-7'>
        {/* Title */}
        <h1 className='text-4xl font-bold mb-2 text-white'>Ashwani Shukla</h1>
        <h3 className='text-3xl text-gray-400 font-light mb-4'>Senior Front-End Engineer</h3>
        
        {/* About us */}
        <p className='text-gray-400 leading-relaxed mb-5'>I build scalable, high-performance web applications with a focus on seamless user experiences. Specializing in modern frontend architectures and robust backend integration, I transform complex requirements into elegant digital solutions. Explore my latest projects or view my technical roadmap in my resume.</p>

        {/* Buttons */}
        <div className='flex gap-4'>
          <Button icon={<FaArrowAltCircleRight size={18} />} onClick={() => router.push('/portfolio')} variant="primary">View Portfolio</Button>
          <Button icon={<FaFileLines size={18} />} onClick={()=> window.open('/pdf/cv.pdf', '_blank')} variant="secondary">View Resume</Button>
        </div>
      </div>

       {/* Image */}
       <div className='col-span-5 flex justify-center lg:justify-end'>
          <div className='relative w-full max-w-[380px] aspect-square'>
            <Image 
              src="/profile-pic.jpg" 
              width={500} 
              height={100} 
              alt='About Ashwani Shukla'
              className='object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl' 
            />    
          </div>
       </div>      
    </section>
  )
}
