import { Image } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 text-center'>
        <div className='col-span-12'>          
          {/* Title */}
          <h1 className='text-4xl font-bold mb-3 text-white'>Contact Us</h1>
          <p className='text-base text-gray-300 leading-relaxed mb-5'>Need a WordPress website, landing page, or frontend development
            help? <br />Feel free to contact me and let's discuss your project.</p>
        </div>
      </section>

        {/* Form */}
        <div className='text-center'>
          <h4 className='text-2xl font-bold mb-3 text-white'>Get In Touch</h4>
        </div>

    </>
  )
}

export default ContactPage