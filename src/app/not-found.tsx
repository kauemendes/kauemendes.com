import { Heading } from '@/components';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Ops Not Found! - Kaue Code',
  keywords: 'kaue freitas, kaue mendes, developer, devops, software engineer, tech enthusiast, software engineer, full-stack developer, web developer, cloud engineer, cloud architect, cloud consultant',
  description:
    'kauecode.com: Coding - the art, the science, and the passion.',
};

export default function NotFoundPage() {
  return (
    <>
      <div className="">
        <Heading>404</Heading>
        <p className="text-stone-600 font-semibold font-mono">🛑 Out of reach 🪐</p>
      </div>
    </>
  );
}
