import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Kaue Code - Info',
  description: 'Kaue Code - Personal and Professional Info',
  keywords: ['Kaue Mendes', 'Kaue Mendes de Freitas', 'Kaue Mendes Profile', 'Kaue Mendes Personal Website', 'Profile'],
  publisher: 'Kaue Mendes',
  creator: 'Kaue Mendes',
}

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gradient-brand">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-ink mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">About</span> me
          </h1>
        </div>

        {/* Intro */}
        <div className="bg-surface-raised/80 backdrop-blur border border-edge rounded-xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="flex flex-wrap w-full space-y-4 md:flex-nowrap md:space-x-8">
            <div className="text-left">
              <p className="text-ink font-bold text-6xl font-poppins">
                <span className="inline-block text-accent hover:-translate-y-1 hover:scale-110 hover:text-accent-strong duration-300">Hi,</span> I&apos;m Kauê
              </p>
              <p className="text-justify font-semi text-lg tracking-tight text-ink-muted">
                I am a software developer with a passion for making developers lives easier. I&apos;ve been in the software development game for over 15 years, and let me tell you, I&apos;ve seen more code than a coffee machine sees coffee beans!
              </p>
              <p className="text-justify font-semi text-lg tracking-tight text-ink-muted">
                Currently, I&apos;m working as a DevOps Engineer, and I&apos;m thrilled by the magic of automation and the endless possibilities it brings. From frontend to backend, I&apos;ve had my hands on a plethora of technologies, always eager to learn and innovate.
              </p>
              <p className="text-right font-semibold tracking-wide text-ink hover:scale-150 hover:text-accent duration-300">
                Passion for the future
              </p>
              <p className="text-right font-semibold tracking-wide text-ink hover:scale-150 hover:text-accent duration-300">
                Geostationary orbit @ Lisbon
              </p>
            </div>
            <div className="text-left">
              <Image
                src="/images/hero_3.jpg"
                width={640}
                height={640}
                className="align-middle m-auto rounded-full shadow-md hover:shadow-lg"
                alt="Kaue faces posing with black shirt and blueish background"
              />
            </div>
          </div>
        </div>

        {/* Profiles */}
        <div className="flex flex-row m-auto border-t border-edge text-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold font-poppins text-ink text-center pt-8 pb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Profiles</span>
          </h2>
        </div>
        <div className="flex flex-row w-auto m-auto pb-16">
          <ul className="flex flex-wrap w-fit m-auto grow gap-3">
            <li className="bg-surface-raised/80 backdrop-blur border border-edge rounded-xl w-32 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300">
              <Link href="/about/personal" className="group block">
                <Image src="/images/avatar_vermelho.png" width={140} height={140} className="bg-brand-secondary" alt="Kaue with a smile in gray scale in a navy background" />
                <h2 className="py-1 text-center text-ink group-hover:text-accent transition-colors">Personal</h2>
              </Link>
            </li>
            <li className="bg-surface-raised/80 backdrop-blur border border-edge rounded-xl w-32 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300">
              <Link href="/about/professional" className="group block">
                <Image src="/images/avatars/avatar.png" width={140} height={140} className="bg-accent" alt="Kaue in gray scale in a green background" />
                <h2 className="py-1 text-center text-ink group-hover:text-accent transition-colors">Professional</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
