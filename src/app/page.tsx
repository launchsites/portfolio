import Navbar from "@/components/universal/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {

  return (

    <div className="flex h-screen flex-col">
      <Navbar />

      <div className="bg-primary flex-1 px-[clamp(1rem,5vw,6rem)]">
        <Hero></Hero>
      </div>
    </div>


  )

}
