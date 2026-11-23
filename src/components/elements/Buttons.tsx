import { ReactNode } from "react";


export function HighlightButton({ children }: {children: ReactNode}) {
  return (
    <div className="bg-highlight md:px-6 md:py-4 px-3 py-2 text-primary hover:text-secondary border-highlight border-2 hover:border-secondary rounded-3xl cursor-pointer transition ease-in-out duration-300">{children}</div>
  )
}

export function SecondaryButton({ children }: {children: ReactNode}) {
  return (
    <div className="bg-secondary md:px-6 md:py-4 px-3 py-2 text-primary hover:text-highlight rounded-3xl cursor-pointer transition ease-in-out duration-300 border-2 border-secondary hover:border-highlight">{children}</div>
  )
}
