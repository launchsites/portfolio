"use client"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

export default function ThemeToggle() {

  // boolean useState variable + function to determine if it's light or dark
  const [light, toggleLight] = useState(true)

  return (
    <button onClick={() => {

      // toggle light / dark
      document.documentElement.classList.toggle("dark")

      // update boolean light / dark value
      toggleLight(!light)
      }
    }>
      {/* show the icon for the theme the button will toggle to */}
      {light ? <Moon /> : <Sun />}</button>
  )
}
