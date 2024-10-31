"use client";

import Image from "next/image";
import { Radio_Canada, Noto_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const TOTAL = 20;
    const petalArray = [];

    const petalImg = new window.Image();
    petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";

    let mouseX = 0;
    function touchHandler(e) {
      mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
    }
    window.addEventListener("mousemove", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Petal {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 15 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();
        this.xSpeed = 1.5 + Math.random() * 2;
        this.ySpeed = 1 + Math.random() * 1;
        this.flipSpeed = Math.random() * 0.03;
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
          this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
        );
      }

      animate() {
        this.x += this.xSpeed + mouseX * 5;
        this.y += this.ySpeed + mouseX * 2;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    };

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((petal) => petal.animate());
      requestAnimationFrame(render);
    }
  }, []);

  return (
    <div className="max-w-2xl w-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-screen -z-10"
      />
      <div className="w-full bg-white bg-opacity-50">
        <div className="min-h-screen ">
          <div className="flex flex-row justify-between ">
            <p className="custom-text-18">laura chen</p>
            <Navbar />
          </div>
          <div className="font-bold pt-10 pb-5 text-mypink">WORK</div>{" "}
          <p>
            incoming software engineer intern {" "}
            <a href="https://www.vrindainc.com/" className="underline">
              Salesforce
            </a>
          </p>
          <p className="text-mygray">summer 2025 - data cloud</p>
          <br></br>

          <p>
            built an ai powered internal tool at {" "}
            <a href="https://www.vrindainc.com/" className="underline">
              Vrinda
            </a>
          </p>
          <p className="text-mygray">summer 2024 - next.js, express, react, sql, numpys, openai sdk</p>
          <br></br>
          <p>
            selected to participate in the accelerate program at{" "}
            <a href="https://www.ibm.com/us-en" className="underline">
              IBM
            </a>
          </p>
          <p className="text-mygray">summer 2024 - cloud computing, AI</p>
          <br></br>
          <p>
            created a demo video and edited the landing page at{" "}
            <a href="https://swiftxr.io/" className="underline">
              SwiftXR
            </a>
          </p>
          <p className="text-mygray">summer 2023 - react</p>
          <div className="font-bold pt-10 pb-5 text-mypink">PROJECTS</div>
          <div className="flex justify-between items-center">
            <p className="">cloudchat</p>

            <div className="flex">
              <a
                href="https://threads-clone-ebon-eight.vercel.app/"
                className="ml-4 mr-2 hover:underline"
              >
                live
              </a>
              <a
                href="https://github.com/laura-codess/threads-clone"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">next.js, mongodb, typescript, tailwind</p>
          <div className="flex justify-between items-center">
            <p className="pt-5">galaxy generator</p>
            <div className="flex">
              <a
                href="https://galaxy-generator-sooty-six.vercel.app/"
                className="ml-4 mr-2 hover:underline text-10 sm:text-16"
              >
                live
              </a>
              <a
                href="https://github.com/laura-codess/galaxy-generator"
                className="hover:underline"
              >
                github
              </a>
            </div>
          </div>
          <p className="text-mygray">react, three.js, webgl, html, css</p>
          <div className="font-bold pt-10 pb-5 text-mypink">LEADERSHIP</div>
          <div className="flex justify-between items-center">
            <p className="">math society @ nyu</p>
            <div className="flex">
              <a
                href="https://wp.nyu.edu/nyumathsociety/"
                className="hover:underline"
              >
                2023 - Present
              </a>
            </div>
          </div>
          <p className="text-mygray">president</p>
          <br></br>
          <div className="flex justify-between items-center">
            <p className="">hackNYU</p>
            <div className="flex">
              <a
                href="https://wp.nyu.edu/nyumathsociety/"
                className="hover:underline"
              >
                2024 - Present
              </a>
            </div>
          </div>
          <p className="text-mygray">developer on tech team</p>
          <div className="flex justify-between items-center">
            <p className="pt-5">women in computing @ nyu</p>
            <div className="flex">
              <a href="https://nyuwinc.org/" className="hover:underline">
                2024 - Present
              </a>
            </div>
          </div>
          <p className="text-mygray">marketing coordinator</p>
          <div className="font-bold pt-10 pb-5 text-mypink">HACKATHONS</div>
          <div className="flex justify-between items-center">
            <p className="">vimcat</p>
            <div className="flex">
              <a
                href="https://devpost.com/software/vimcat"
                className="hover:underline"
              >
                devpost
              </a>
            </div>
          </div>
          <p className="text-mygray">#1 @ hackNYU</p>
          <ul className="pt-10 flex flex-row">
            <a href="https://github.com/laura-codess" className="pr-5">
              <img src="/github.svg" alt="github" width={30} height={30} />
            </a>

            <a href="https://twitter.com/laurathesimp" className="pr-5">
              <img src="/twitter.svg" alt="twitter" width={30} height={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/laura-chen-8a9a9625a/"
              className="pr-5"
            >
              <img src="/linkedin.svg" alt="linkedin" width={30} height={30} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
