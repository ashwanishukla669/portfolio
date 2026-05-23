import React from 'react'
import { IconType } from 'react-icons';

type SkillCardProps = {
    title: string;
    description: string;
    icon: IconType[];
}

export default function SkillCard({ title, description, icon }: SkillCardProps ) {
  return (
    <>
        <div className='flex flex-col gap-3 p-5 rounded-2xl border-1 border-gray-800'>
          <div className='flex gap-2 text-emerald-500 text-3xl shrink-0'>
            {icon.map((Icon, index) =>(
              <Icon key={index} size={22} />
            ))}
          </div>

          <div>
            <h4 className='font-semibold text-lg mb-1 text-white'>
              {title}
            </h4>
            <p className='text-gray-400 text-sm leading-relaxed'>
              {description}
            </p>
          </div>
            
        </div>
    </>
  )
}
