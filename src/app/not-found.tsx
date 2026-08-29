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
    <div className="min-h-screen bg-paper text-ink flex items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-muted mb-4">
          Error 404
        </p>

        <h1 className="font-display text-[clamp(3rem,12vw,6rem)] leading-[0.9] tracking-[-0.02em] mb-6">
          Out of reach
        </h1>

        <hr className="rule-solid mb-6" />

        <p className="font-text text-[16.5px] leading-[1.7] text-ink-soft mb-8">
          This page does not exist, or it moved. The index has everything that does.
        </p>

        <Link
          href="/"
          className="inline-block font-mono text-[12px] font-bold tracking-[0.1em] uppercase px-4 py-2.5 border-2 border-ink bg-paper text-ink shadow-hard-sm press no-underline"
        >
          Back to the index
        </Link>
      </div>
    </div>
  );
}
