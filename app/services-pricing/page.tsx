import React from 'react'
import { ServicesIntro } from '../components/ServicesPricing/ServicesIntro'
import { ServicesPackage } from '../components/ServicesPricing/ServicesPackage'
 
const Services = () => {
  return (
    <>
        <ServicesIntro />  
        <div className='border-b-1 border-gray-800 mb-10'></div>       
        <ServicesPackage />
    </>
  )
}

export default Services