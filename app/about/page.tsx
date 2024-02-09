
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
        <Navbar/>
      </div>

      <div className="font-bold pt-10 pb-3 text-mypink tracking-widest text-lg">
        hi, 你好
      </div>
      <p>[ she/her ]</p>

      <p className="pt-10">i'm currently a computer science & mathematics double major at new york university. i have a passion for coding, learning and building.</p>
      <p className="pt-10">when i'm not programming you can catch me lounging around, trying new restaurants, and staring at other people's dogs. </p>

  <p className="pt-10">i still have much more to learn, and i'm always open to exploring new opportunities,  <span className="font-bold"><a href="mailto:lc5065@nyu.edu">connect with me here.</a></span></p>

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
