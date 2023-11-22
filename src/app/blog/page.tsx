import Heading from "@/components/Heading";

export default function AboutPage() {
  return (
    <>
      <div className="border-b">
        <Heading>Personal Blog</Heading>
      </div>
      <div className="flex mb-4 pt-4">
        <div className="w-1/4 h-12"></div>
        <div className="w-1/4 h-12 text-right pr-4">
          <p className="text-stone-500 font-bold">
            Post 1
          </p>
          <p className="text-stone-500 font-bold">
            Post 2
          </p>
          <p className="text-stone-500 font-bold">
            Post 3
          </p>
        </div>
        <div className="w-1/4 h-12"></div>
        <div className="w-1/4 h-12"></div>
      </div>
    </>
  );
}
