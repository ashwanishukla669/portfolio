import React from 'react'
import Hero from './components/AboutMe/Hero'
import { WhatIDO } from './components/WhatIDo/WhatIDo'
 
const Page = () => {
  return (
    <>
      <Hero />   
      <div className='border-b-1 border-gray-800'></div>
      <WhatIDO />
      <div className='border-b-1 border-gray-800'></div>       
    </>
  )
}

export default Page