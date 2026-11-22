import type { IconType } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

interface menuItem {
  title: string,
  path: string
}

interface platformIcon {
  name: string,
  icon: IconType,
  path: string,
  color?: string
}

interface siteData {
  domain: string,
  menuItems: menuItem[],
  platformIcons: platformIcon[]
}

export const siteData: siteData = {
  // domain: "https://jamierandell.com"
  domain: "/",
  menuItems: [
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Hire Me", path: "/contact"}
  ],
  platformIcons: [
    { name: "Github", icon: FaGithub, path: "https://github.com/launchsites"},
    { name: "LinkedIn", icon: FaLinkedin, path: "https://linkedin.com", color: "#0A66C2"}
  ]
}
