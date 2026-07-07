import Link from 'next/link';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Ops Not Found! - Kaue Code',
  keywords: 'kaue freitas, kaue mendes, developer, devops, software engineer, tech enthusiast, software engineer, full-stack developer, web developer, cloud engineer, cloud architect, cloud consultant',
  description:
    'kauecode.com: Coding - the art, the science, and the passion.',
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-brand flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-7xl md:text-8xl font-bold font-poppins mb-8">
          <span className="bg-gradient-accent bg-clip-text text-transparent">404</span>
        </h1>

        <div className="bg-surface-raised/80 backdrop-blur border border-edge rounded-xl p-6 text-left shadow-lg mb-8">
          <p className="font-sourceCodePro text-ink-muted">
            with root in kauecode.com ¤ main ➜{' '}
            <span className="text-ink font-semibold">🛑 Out of reach 🪐</span>{' '}
            <span className="text-accent font-bold animate-pulse">_</span>
          </p>
        </div>

        <Link
          href="/"
          className="font-sourceCodePro text-accent hover:text-accent-strong transition-colors duration-300"
        >
          cd ~/ &rarr; back to home
        </Link>
      </div>
    </div>
  );
}
