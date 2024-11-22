import React from 'react'

export default function About() {
  return (
    <div className='min-h-[100%] mx-auto flex bg-white lg:px-20 py-20 px-6  md:px-36 md:flex-row gap-x-5 justify-between items-center flex-col-reverse'>

        <div className='lg:w-[40%] w-full py-5'>
            <img
            className='w-[400px] h-[400px] border-2 object-cover hover:scale-110 rounded mx-auto '
            src='/images/about.jpg'
            alt='aboutimage'/>
        </div>

        <div className=" lg:w-[60%] text-center lg:text-start w-full py-9 ">
            <h2 className='text-[#457B9D] text-[24px] font-bold py-4'>About</h2>
            <h1 className='text-[48px] text-black font-extrabold  '>About Me?</h1>
            <p className='text-[#457B9D]'>Assalamualaikum!
          I am Khazra Ayub.
          Alhamdulillah Telecom Engineer graduate from Mehran University of Engineering and Technology. 
          Want to enhance my knowledge and skills. My goal is to seeking and leverage knowledge in my field.
          Looking to utilize my technology and leadership skills in an esteemed organization. 
          Well versed with research-oriented marketing abilities and product analysis.
          I’m a dedicated front-end developer with expertise
          in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS.
          I enjoy transforming ideas into interactive, responsive, and 
          visually engaging digital experiences. With a keen eye for detail and a strong foundation
          in modern web technologies, I build projects that are both functional and user-friendly.</p>
        </div>

    </div>
  )
}
