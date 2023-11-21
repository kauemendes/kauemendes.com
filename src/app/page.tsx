import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"

export default function Home() {
  return (
    <>
      <Heading>kauemendes.com</Heading>
      <div className="flex mb-4 ">
        <div className="w-1/3 h-12"></div>
        <div className="w-1/3 h-12 font-bold"><DoubleQuotes />Coding the Future, Soaring with DevOps: Cloud-Ready, Developer-Driven Excellence</div>
        <div className="w-1/3 h-12"></div>
      </div>
    </>
  )
}
