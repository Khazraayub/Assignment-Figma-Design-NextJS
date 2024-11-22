import React from 'react'
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import  {FaInstagram} from "react-icons/fa";

export default function Footer () {
  return (
    <div className='bg-[#ebfeff] md:px-16 md:py-9 px-5 py-8 '>
        <h1 className='text-[28px] text-[#457B9D] font-semibold'>Contacts</h1>
        <h1 className='font-bold text-[40px] text-black '>Get in touch</h1>
        <p className='text-[20px] text-black'>khazrashaikh@gmail.com</p>
        <div className='text-[#457B9D] flex justify-start items-center gap-x-4 py-4 text-[30px]'>
            <Link
                className=" rounded-xl"
                target="_blank"
                href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}
              >
                <FaLinkedin />
            </Link>
            
           
            <Link
                className="rounded-xl"
                target="_blank"
                href={"https://github.com/Khazraayub"}
              >
                <FaGithub />
            </Link>

            <Link
                className="rounded-xl"
                target="_blank"
                href={"/"}
              >
                <FaInstagram/>
            </Link>

        </div>

        <p className='text-[18px] text-black pt-11'>Copyright © 2023. Develop & Designed by Khazra Shaikh</p>
    </div>
  )
}
