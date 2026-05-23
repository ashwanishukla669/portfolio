import React from 'react'
import { Button } from '../ui/Button'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

export const ServicesIntro = () => {
    return (
        <section className='pt-14'>
            <div className='text-center mb-10 flex flex-col gap-4'>
                <h1 className='text-3xl text-white font-[700]'>Services & Pricing</h1>
                <p className='text-base text-gray-300'>I'm a Frontend Developer with over 10 years of experience crafting modern, responsive, and high-performance web applications. I specialize in building scalable user interfaces using technologies like React, Next.js, WordPress, and Shopify. You can explore my <Link className='text-emerald-500 hover:underline' href="/portfolio">portfolio</Link> and <Link className='text-emerald-500 hover:underline' href="#">resume</Link> to learn more about my technical expertise and project experience. I'm currently available for freelance projects and long-term collaborations. Feel free to reach out for a custom quote — I also offer structured development packages with transparent pricing.</p>                

                {/* Buttons */}
                <div className='flex justify-center gap-4'>
                    <Button icon={<FaLocationArrow size={18} />}>
                        <div className='text-center'>Hire Me</div>
                    </Button>
                </div>
            </div>                    

        </section>
    )
}
