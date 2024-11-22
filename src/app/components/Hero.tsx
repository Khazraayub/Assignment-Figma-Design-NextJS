import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen py-20 bg-[#ebfeff] w-full lg:flex-row  flex-col flex lg:justify-between justify-center  items-center lg:gap-x-14 lg:gap-y-0 lg:px-20  sm:px-14 gap-y-10 px-5 lg:text-start text-center">
      <div className="lg:w-[60%] w-full  mx-auto">
        <h2 className="text-[#457B9D] text-[24px]">
          Hi Everyone, I'am
        </h2>
        <h1 className="text-black font-bold  text-[48px]">Khazra Shaikh</h1>
        <p className=" md:text-[18px] text-black text-[14px]">
          Assalamualaikum! I’m a Khazra Shaikh Telecom Engineer and a love for
          crafting efficient and visually compelling digital experiences. I
          specialize in building responsive, user-centered websites and
          applications that look great on any device, and I'm currently
          exploring advanced tools like Next.js and Tailwind CSS to take my
          projects to the next level.
        </p>

        <button className=" bg-[#457B9D] md:py-3 md:px-9 sm:px-5 sm:py-2 px-3 py-3 my-3 mr-3 rounded-[5px] shadow-md shadow-[#272727be] text-white inline-flex items-center gap-x-4 hover:transition-all hover:translate-y-[-4px] hover:ease-linear">
          Download CV <IoCloudDownloadOutline />
        </button>

        <button className="bg-[#daf1f5] border-[1px]  border-[#457B9D] rounded-[5px] md:py-3 md:px-9 sm:px-5 sm:py-2 px-3 py-3 my-3 mr-3 text-[rgb(92,173,223)]  hover:bg-[#457b9d] hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110">
            Explore More
        </button>
        </div>


        <div className="lg:w-[40%] w-full  ">
        <img
          className="md:h-[400px] md:w-[400px] h-[390px] w-[479px] mx-auto rounded object-cover hover:scale-110 border-2"
          src="/images/image.png"
          alt="image"
          
        />
      
      </div>
    </div>
  );
}
