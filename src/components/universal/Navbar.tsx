"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ThemeToggle from "@/components/universal/ThemeToggle";
import { siteData } from "@/data/site";


export default function Navbar() {


  return (

// navbar container
  <div className="w-full bg-primary h-[clamp(4rem,6vw,6rem)] text-2xl flex text-secondary items-center justify-between gap-3 px-[clamp(1rem,5vw,6rem)]">

      {/*logo ish thing*/}
      <a className="font-medium" href={`${siteData.domain}`}>Jamie Randell</a>

      {/*menu items container*/}
    <div className="gap-10 flex">
      <a className="cursor-pointer hover:text-highlight transition">About</a>
      <a className="cursor-pointer hover:text-highlight transition">Projects</a>
      <a className="cursor-pointer hover:text-highlight transition">Hire Me</a>
      {/*toggle light / dark mode button*/}
      <ThemeToggle></ThemeToggle>
      </div>

      {/*linkedin / github buttons container */}
    <div className="flex gap-4">
      <a href="linkedin.com">
        <FaLinkedin className="h-10 w-10 text-highlight hover:text-secondary transition"/>
      </a>
      <a href="github.com/launchsites">
        <FaGithub className="h-10 w-10 text-highlight hover:text-secondary transition"/>
      </a>
    </div>
    </div>

  )

}
