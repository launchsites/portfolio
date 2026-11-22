"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ThemeToggle from "@/components/universal/ThemeToggle";
import { siteData } from "@/data/site";
import { Equal, X } from "lucide-react"
import { useState } from "react";
import MobileMenu from "./MobileMenu";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

  <div>
    {/*desktop navbar container*/}
    <div className="hidden md:flex w-full bg-primary h-[clamp(4rem,6vw,6rem)] text-2xl text-secondary items-center justify-between gap-3 px-[clamp(1rem,5vw,6rem)]">

        {/*logo ish thing*/}
        <a className="font-medium text-3xl" href={`${siteData.domain}`}>Jamie Randell</a>

        {/*menu items container*/}
        <div className="gap-10 flex">
          {siteData.menuItems.map((menuItem) => {
            return <a key={menuItem.path} href={menuItem.path} className="px-2 py-1 rounded-xl hover:bg-highlight ease-in-out duration-400 cursor-pointer hover:text-primary transition">{menuItem.title}</a>
        })}
        {/*toggle light / dark mode button*/}
        <ThemeToggle></ThemeToggle>
        </div>

        {/*linkedin / github buttons container */}
        <div className="flex gap-4">

          {/* for each platform icon make an anchor with the href and icon */}
          {siteData.platformIcons.map((platformIcon) => {
            const Icon = platformIcon.icon
            return <a key={platformIcon.name} href={platformIcon.path}>
              <Icon className="h-10 w-10 duration-400 ease-in-out text-highlight hover:text-secondary transition"></Icon>
            </a>
          })}
        </div>
      </div>



    {/*mobile navbar container*/}
    <div className="h-screen bg-primary md:hidden flex flex-col">
      <div className="h-[clamp(4rem,6vw,6rem)] w-full bg-primary text-3xl text-secondary items-center justify-between gap-3 px-[clamp(1rem,5vw,6rem)] flex">
        {/*logo ish thing*/}
        <a className="font-medium" href={`${siteData.domain}`}>Jamie Randell</a>

        <div className="flex items-center gap-4">

          {/*<div className="flex justify-center items-center h-10 w-10">
            <ThemeToggle></ThemeToggle>
          </div>*/}


          <button className="" onClick={()=> setMenuOpen(!menuOpen)}>
              <div className="bg-highlight rounded-2xl h-14 w-14 items-center justify-center flex">{menuOpen ? <X size={43} strokeWidth={1} /> : <Equal strokeWidth={1} size={50} />}</div>
          </button>
        </div>
      </div>

        {!menuOpen ? "" :
          <div className="flex-1 h-full"><MobileMenu></MobileMenu></div>
        }
    </div>

    </div>
  )
}
