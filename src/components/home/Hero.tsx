import Image from "next/image"

export default function Hero() {

  const HeroImage = <Image
    alt="Jamie Randell speaking at TN Card event"
    src="/images/jamie.jpeg"
    width={600}
    height={600}
    className="w-full aspect-[4/5] object-cover object-[35%_00%] rounded-2xl"
  />

  return (

    <div className="w-full md:flex flex-col lg:flex-row h-full items-center py-5 md:py-0">
      <div className="md:flex-6 lg:flex-4">
        <div className="overflow-hidden">
          {HeroImage}
        </div>
      </div>
      <div className="lg:flex-5 md:flex-3 flex-col flex md:gap-10 gap-2 md:ml-30">
        <h1 className="md:text-6xl text-3xl leading-tight py-5 text-left">I make things<br></br>
        that make things <br className="sm:hidden lg:flex flex"></br><a className="text-secondary px-1 font-bold md:text-9xl text-6xl items-center border-highlight md:border-b-6 border-b-4">easier</a></h1>

        <div className="flex md:text-3xl text-xl md:gap-8 gap-2">
          <div className="bg-highlight md:px-6 md:py-4 px-3 py-2 text-primary hover:text-secondary border-highlight border-2 hover:border-secondary rounded-3xl cursor-pointer transition ease-in-out duration-300">My Projects</div>
          <div className="bg-secondary md:px-6 md:py-4 px-3 py-2 text-primary hover:text-highlight rounded-3xl cursor-pointer transition ease-in-out duration-300 border-2 border-secondary hover:border-highlight">Hire Me</div>
        </div>
      </div>
    </div>

  )
}
