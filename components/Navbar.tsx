"use client"
'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#E5A8B7"
}

function Navbar() {
    const pathname = usePathname();
    console.log(pathname)

    const [hovered, setHovered] = useState<string>();

    return (
    <ul className="flex flex-col justify-end gap-1" onMouseLeave={() => setHovered(undefined)}>
      <li className={`relative text-right ${pathname === '/' ? 'text-mypink' : 'text-black'}`}
        onMouseEnter={() => setHovered("experience")}
        style={hovered === "experience" ? hoverStyle : undefined}
      >
        <a href="/">experience</a>
      </li>
      <li className={`text-right ${pathname === '/about' ? 'text-mypink' : 'text-black'}`}
        onMouseEnter={() => setHovered("about")}
        style={hovered === "about" ? hoverStyle : undefined}
      >
        <a href="/about">about</a>
      </li>
      <li className={`text-right ${pathname === '/contact' ? 'text-mypink' : 'text-black'}`}
        onMouseEnter={() => setHovered("contact")}
        style={hovered === "contact" ? hoverStyle : undefined}
      >
        <a href="mailto:lc5065@nyu.edu">contact</a>
      </li>
      <li 
  className={`flex flex-row items-center ${pathname === '/resume' ? 'text-mypink' : 'text-mygray'} hover:text-black`}
  onMouseEnter={() => setHovered("resume")}
  style={hovered === "resume" ? hoverStyle : undefined}
>
  <a href="/githubresume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
    <p className="text-right pr-1">resume</p>
    <img src="/resume.svg" alt="Download resume" className="w-5 h-5" style={{ filter: hovered === "resume" ? 'none' : 'grayscale(100%) brightness(0) invert(0.7)' }} />
  </a>
</li>

    </ul>
  );
}

export default Navbar;