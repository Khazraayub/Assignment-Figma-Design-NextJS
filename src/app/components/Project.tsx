import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <div className="min-h-[100%] w-full bg-white flex flex-col my-16 justify-center items-center">
      <div className="text-center">
        <h2 className="text-[32px] text-[#457B9D] font-bold py-5 ">Projects</h2>
        <h1 className="text-[48px]  font-extrabold">What I have made?</h1>
      </div>
      
      

      <div className="w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3  gap-x-7 gap-y-4">
        {/* 1st project */}
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project1.JPG"
            width={2000}
            height={2000}
            alt={"1st project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
              Hello World Project In Next.JS
            </h3>
            <p className="text-[13px] pt-2">
              This is my first project using Tailwind CSS in Next.JS.
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://hello-world-in-next-js-sigma.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/HelloWorld-In-Next.JS.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
        
        



        {/* 2nd project */}

      
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project2.JPG"
            width={2000}
            height={2000}
            alt={" 2nd project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
            Login-Signup Page In Nex.JS
            </h3>
            <p className="text-[13px] pt-2">
            This is a Login & SignUp Page. It is design by me using Tailwind CSS in Next.JS.
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://login-signup-page-using-next-js.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/login-signup-page-using-Next.js.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
          </div>


           {/* 3rd project */}

      
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project3.JPG"
            width={2000}
            height={2000}
            alt={" 3rd project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
            My GIAIC Id-Card In Nex.JS
            </h3>
            <p className="text-[13px] pt-2">
            This is a Student Id Card Project using Tailwind CSS in Next.JS. I design mine.
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://my-giaic-id-card-in-next-js.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/My-GIAIC-Id-Card-in-Next.js.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
        </div>


        {/* 4th project */}

      
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project4.JPG"
            width={2000}
            height={2000}
            alt={" 4th project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
            Pizza House Website In Nex.JS
            </h3>
            <p className="text-[13px] pt-2">
            This is a Pizza House Food Website using Tailwind CSS in Next.JS.
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://milestone-2-assignment-food-website-nextjs.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/milestone-2-Assignment-FoodWebsite-Nextjs.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* 5th project */}

      
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project5.JPG"
            width={2000}
            height={2000}
            alt={" 5th project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
            CountDown Timer In Nex.JS
            </h3>
            <p className="text-[13px] pt-2">
            This is a Count Down timer Project using Tailwind CSS in Next.JS.
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://my-countdown-timer-in-next-js.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/my-countdown-timer-in-next.js.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* 6th project */}

      
        <div className=" pt-0 pb-4 m-1  shadow-lg shadow-black rounded-lg hover:scale-110   ">
          <img
            src="/images/project6.JPG"
            width={2000}
            height={2000}
            alt={" 6th project"}
            className="w-full pb-3 rounded-lg cursor-pointer "
          />
          <div className="px-3">
            <h3 className="font-bold text-[20px]">
            Todo App In Nex.JS
            </h3>
            <p className="text-[13px] pt-2">
            This is a Todo app Project using Tailwind CSS in Next.JS. 
            </p>
            <div className="pt-4 flex justify-start items-center gap-x-9">
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://my-todo-app-in-next-js-delta.vercel.app/"}
                target="_blank"
              >
                Live view
              </Link>
              <Link
                className="text-[#457B9D] font-semibold"
                href={"https://github.com/Khazraayub/my-todo-app-in-Next.js.git"}
                target="_blank"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
   
  );
}
