"use client"
import { siteData } from "@/data/site"

export default function MobileMenu() {
  return (
    <div className="md:hidden flex h-[clamp(4rem,6vw,6rem)] py-[25%] w-full bg-primary h-full text-4xl text-secondary items-center flex-col gap-8 px-[clamp(1rem,5vw,6rem)]">
      <div className="flex-1 flex flex-col gap-8 justify-center items-center">
      {siteData.menuItems.map((menuItem) => {
        return <a key={menuItem.path} href={menuItem.path} className="cursor-pointer hover:text-highlight transition">{menuItem.title}</a>
      })}
      </div>

      <div className="flex gap-4">
      {siteData.platformIcons.map((platformIcon) => {
        const Icon = platformIcon.icon
        return <a key={platformIcon.name} href={platformIcon.path}>
          <Icon className="h-14 w-14 text-highlight hover:text-secondary transition"></Icon>
        </a>
      })}
      </div>
    </div>
  )

}
