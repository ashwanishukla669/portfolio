import React from 'react' 
import { Button } from '../components/ui/Button';
import { FaLocationArrow } from 'react-icons/fa';
import PortfolioCards from '../components/Portfolio/PortfolioCards';
 
export default function PortfolioPage() { 
    return (
        <section className='py-14'>
            <div className='text-center md:w-[80%] mx-auto mb-10 flex flex-col gap-4'>
                <h1 className='text-3xl text-white font-[700]'>Portfolio</h1>
                <p className='text-base text-gray-300'>Helping businesses grow with fast, responsive, and user-friendly websites. From landing pages to full-scale web apps, I turn ideas into digital reality.</p>

                {/* Buttons */}
                <div className='flex justify-center gap-4'>
                    <Button icon={<FaLocationArrow size={18} />}>
                        <div className='text-center'>Hire Me</div>
                    </Button>
                </div>
            </div>

            <div className='border-b-1 border-gray-800 mb-10'></div>

            <PortfolioCards />                

        </section>
    )
}
