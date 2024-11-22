import React from 'react'

export default function Skills() {
  return (
    <div className='min-h-[100%] w-full bg-[#ebfeff] py-16 flex flex-col justify-center items-center'>

        <div className="text-center">
            <h2 className='text-[32px] text-[#457B9D] font-bold py-5 '>Skills</h2>
            <h1 className='text-[48px]  font-extrabold'>What I am capable of?</h1>
        </div>    

        <div className='flex flex-wrap justify-center items-center mt-9 gap-x-10 gap-y-8'>
            <img
            className='w-[120px] h-[120px] hover:scale-110 hover:ease-in-out hover:shadow-2xl shadow-black'
            src='/images/html.png'
            alt='html'/>

            <img
            className='w-[120px] h-[120px] hover:scale-110 hover:ease-in-out hover:shadow-2xl shadow-black '
            src='/images/css.png'
            alt='css'/>

            <img
            className='w-[100px] h-[100px] hover:scale-110 hover:ease-in-out hover:shadow-2xl shadow-black'
            src='/images/js.png'
            alt='javascript'/>

            <img
            className='w-[100px] h-[100px] hover:scale-110 hover:ease-in-out hover:shadow-2xl shadow-black '
            src='/images/ts.png'
            alt='typescript'/>

            <img
            className='w-[100px] h-[100px] hover:scale-110 hover:ease-in-out hover:shadow-2xl shadow-black '
            src='/images/tailwind.png'
            alt='tailwindcss'/>



        </div>

    </div>
  )
}
