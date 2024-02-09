"use client"
'use client'

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

function Navbar() {

    const pathname = usePathname();
    console.log(pathname)

    return (
    <ul className="flex flex-col justify-end">
      <li className={`text-right ${pathname === '/' ? 'text-mypink' : 'text-black'}`}>
        <a href="/">experience</a>
      </li>
      <li className={`text-right ${pathname === '/about' ? 'text-mypink' : 'text-black'}`}>
        <a href="/about">about</a>
      </li>
      <li className={`text-right ${pathname === '/contact' ? 'text-mypink' : 'text-black'}`}>
        <a href="mailto:lc5065@nyu.edu">contact</a>
      </li>
    </ul>
  );
}

export default Navbar;