import Heading from "@/components/Heading"
import DoubleQuotes from "@/components/DoubleQuotes"

export default function Home() {
  return (
    <>
      <Heading>kauemendes.com</Heading>
      <div className="flex mb-4">
        <div className="w-auto m-auto h-12 font-bold flex-col">
          <DoubleQuotes />
          <p className="text-center m-4">
            Coding the Future, Soaring with DevOps: Cloud-Ready, Developer-Driven Excellence
          </p>
        </div>
      </div>
    </>
  )
}
