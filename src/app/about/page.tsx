import Heading from "@/components/Heading";

export default function AboutPage() {
  return (
    <>
      <div className="border-b">
        <Heading>About Page</Heading>
      </div>
      <div className="flex mb-4 pt-4">
        <div className="w-1/4 h-12"></div>
        <div className="w-1/4 h-12 text-right pr-4">
          <p className="text-stone-500 font-bold">
            Kauê Mendes de Freitas
          </p>
          <p className='font-semibold'>
            34y
          </p>
          <p className='font-semibold'>
            Developer
          </p>
          <p className='font-semibold'>
            Passion for the future
          </p>
          <p className='font-semibold'>
            Stationary orbit @ Lisbon
          </p>
        </div>
        <div className="w-1/4 h-12"><img src="/images/hero_1.png" width={300} height={300} className='mb-4 rounded shadow-md hover:shadow-lg' alt='Kaue faces posing with black shirt and blueish background'/></div>
        <div className="w-1/4 h-12"></div>
      </div>
    </>
  );
}
