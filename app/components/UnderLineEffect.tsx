import React from "react"

interface Props{

    className?: string;
    label:string;

}

export default function UnderlineEffect({label,className}:Props) {
  return (
    <div className='hidden lg:block text-slate-600 hover:text-sky-700 group transition duration-300'>
        <p className={className}>{label}</p>
        <p className='block max-w-0 mx-auto  gap-x-10 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500'>

        </p>
    </div>
  )
}
