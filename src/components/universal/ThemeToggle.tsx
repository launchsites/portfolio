"use client"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

export default function ThemeToggle() {

  const [light, toggleLight] = useState(true)

  return (
    <button onClick={() => {
      document.documentElement.classList.toggle("dark")
      toggleLight(!light)
    }
    }>{ light ? <Moon/> : <Sun/>}</button>
  )
}
