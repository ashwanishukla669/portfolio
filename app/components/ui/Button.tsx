import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    icon?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ 
    children, 
    variant = "primary",
    className = "",
    icon,
    ...props
    }) => {

    const baseStyles = "w-[auto] inline-block items-center justify-center rounded-md px-4 py-2 font-semibold transition cursor-pointer";
    const variants = {
        primary: "bg-emerald-500 hover:bg-emerald-400 text-white",
        secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    }

  return (
   <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <div className='flex gap-2 items-center justify-center'>
        {icon && <span>{icon}</span>}
        {children}
      </div>
    </button>
  )
}
