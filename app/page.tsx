
import Image from "next/image";
import { Radio_Canada, Noto_Sans} from "next/font/google";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <div className="max-w-2xl w-full">
    <div className="w-full">
    <div className="min-h-screen ">
      <div className="flex flex-row justify-between ">
        <p className="custom-text-18">laura chen</p>
        <Navbar />
      </div>

      <div className="font-bold pt-10 pb-5 text-mypink">
        WORK
      </div>
      <p>created a demo video and edited the landing page at <a href="https://swiftxr.io/" className="hover:underline">SwiftXR</a></p>
      <p className="text-mygray">SUMMER 2023 - react</p>

      <div className="font-bold pt-10 pb-5 text-mypink">
        PROJECTS
      </div>
      <div className="flex justify-between items-center">
      <p className="">threads clone</p>
      <div className="flex">
      <a href="https://threads-clone-ebon-eight.vercel.app/" className="ml-4 mr-2 hover:underline">live</a>
      <a href="https://github.com/laura-codess/threads-clone" className="hover:underline">github</a>
      </div>
      </div>
      <p className="text-mygray">next.js, mongodb, typescript, tailwind</p>

      <div className="flex justify-between items-center">
      <p className="pt-5">galaxy generator</p>
      <div className="flex">
      <a href="https://galaxy-generator-sooty-six.vercel.app/" className="ml-4 mr-2 hover:underline text-10 sm:text-16">live</a>
      <a href="https://github.com/laura-codess/galaxy-generator" className="hover:underline">github</a>
      </div>
      </div>
      <p className="text-mygray">react, three.js, webgl, html, css</p>

      <div className="font-bold pt-10 pb-5 text-mypink">
      LEADERSHIP
      </div>
      <div className="flex justify-between items-center">
      <p className="">math society</p>
      <div className="flex">
      <a href="https://wp.nyu.edu/nyumathsociety/" className="hover:underline">2022 - Present</a>
      </div>
      </div>
      <p className="text-mygray">role: president</p>

      <div className="flex justify-between items-center">
      <p className="pt-5">women in computing</p>
      <div className="flex">
      <a href="https://nyuwinc.org/" className="hover:underline">2024 - Present</a>
      </div>
      </div>
      <p className="text-mygray">role: marketing coordinator</p>


      <div className="font-bold pt-10 pb-5 text-mypink">
       HACKATHONS
      </div>
      <div className="flex justify-between items-center">
      <p className="">vimcat</p>
      <div className="flex">
      <a href="https://devpost.com/software/vimcat" className="hover:underline">devpost</a>
      </div>
      </div>
      <p className="text-mygray">#1 Track Winner @ HackNYU</p>

      <ul className="pt-10 flex flex-row">
      <a href="https://github.com/laura-codess" className="pr-5">
      <img src="/github.svg" alt="github" width={30} height={30}/>
      </a>

      <a href="https://twitter.com/laurathesimp" className="pr-5">
      <img src="/twitter.svg" alt="twitter" width={30} height={30}/>
      </a>

      <a href="https://www.linkedin.com/in/laura-chen-8a9a9625a/" className="pr-5">
      <img src="/linkedin.svg" alt="linkedin" width={30} height={30}/>
      </a>
      </ul>

      </div>

      

      
    </div>
    </div>
  );
}
