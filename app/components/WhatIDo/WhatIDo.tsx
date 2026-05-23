"use client"

import React from 'react'
import { skills } from './skillsData'
import SkillCard from './SkillCard'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

export const WhatIDO = () => {

  const router = useRouter();

  return (
    <>
      <section className='mt-10 flex flex-col gap-4'>        
        <h2 className='text-3xl font-bold flex items-center gap-5 text-white'>
          <span className='w-1 h-10 bg-green-400 inline-block' /> What I Do
        </h2>
        <p className='text-gray-400 leading-relaxed'>I'm a senior frontend developer with 10+ years of experience delivering scalable, high-performance web solutions for global clients. My expertise lies in modern frontend technologies, responsive design systems, and building intuitive user experiences. Explore my <Link className='text-emerald-500 hover:underline' href="/resume">resume</Link> and <Link className='text-emerald-500 hover:underline' href="/portfolio">portfolio</Link> to see how I turn ideas into polished digital products.</p>
      </section>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10'>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      
      {/* Button */}
      {/* <div className='flex justify-center mb-10'>
        <Button icon={<FaArrowAltCircleRight size={18} />} onClick={() => router.push('/services-pricing')} variant="primary">Services & Pricing</Button>
      </div> */}
    </>
  )
}
