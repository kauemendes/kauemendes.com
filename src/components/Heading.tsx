import { Source_Code_Pro } from "next/font/google"

export interface HeadingProps {
  children: React.ReactNode
}

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro'
})

export default function Heading({
  children
}: HeadingProps) {
  return (
    <h1 className={`font-bold pb-3 text-4xl font-roboto hover:text-gray-900 dark:hover:text-indigo-400 hover:cursor-none`}>
      {children}
    </h1>
  )
}
