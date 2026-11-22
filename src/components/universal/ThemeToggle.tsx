"use client"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {

  // boolean useState variable + function to determine if it's light or dark
  const [light, toggleLight] = useState(true)

  function toggleTheme() {
    // new variable for new version of light as current function call hasn't updated light value yet
    const newLight: boolean = !light

    // toggle light / dark
    document.documentElement.classList.toggle("dark", !newLight)

    // update boolean light / dark value
    toggleLight(!light)


    if (newLight) { localStorage.setItem("theme", "light") }
    else {localStorage.setItem("theme", "dark")}
  }

  useEffect(() => {
    // get theme if already exists
    const theme: string | null = localStorage.getItem("theme")

    // handle case of if theme isn't stored
    if (!theme) {
      // if theme is light, save as light
      if (light) { localStorage.setItem("theme", "light"); }


      // if theme is dark, save as dark
      else { localStorage.setItem("theme", "dark") }
    }

    // load theme that is stored
    const loadTheme: string | null = localStorage.getItem("theme")

    if (loadTheme == "dark") {
      if (light) {
        toggleTheme()
      }
    }
    else {
      if (!light) {
        toggleTheme()
        localStorage.setItem("theme", "light")
      }
    }


  }, [])

  return (
    <button className="relative flex items-center cursor-pointer" onClick={() => {
      toggleTheme()
      }
    }>
      {/* show the icon for the theme the button will toggle to */}
      <Moon className={`absolute transition-all duration-300 ease-in-out ${
        light ? "opacity-100 rotate-0 scale-100"
        : "opacity-0 scale-75 rotate-90"
        }`} />
      <Sun className={`absolute transition-all duration-300 ease-in-out ${
        light ? "opacity-0 scale-75 rotate-90"
        : "opacity-100 rotate-0 scale-100"
        }`} />
    </button>
  )
}
