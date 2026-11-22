"use client"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

export default function ThemeToggle() {

  // boolean useState variable + function to determine if it's light or dark
  const [light, toggleLight] = useState(true)

  return (
    <button className="relative flex items-center cursor-pointer" onClick={() => {

      // toggle light / dark
      document.documentElement.classList.toggle("dark")

      // update boolean light / dark value
      toggleLight(!light)
      }
    }>
      {/* show the icon for the theme the button will toggle to */}
      <Moon className={`absolute transition-all duration-300 ease-in-out ${
        light ? "opacity-100 rotate-0 scale 100"
        : "opacity-0 scale-75 rotate-90"
        }`} />
      <Sun className={`absolute transition-all duration-300 ease-in-out ${
        light ? "opacity-0 scale-75 rotate-90"
        : "opacity-100 rotate-0 scale 100"
        }`} />
    </button>
  )
}
