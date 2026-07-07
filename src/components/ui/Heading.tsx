export interface HeadingProps {
  children: React.ReactNode
}

export default function Heading({
  children
}: HeadingProps) {
  return (
    <h1 className="font-bold pb-3 text-4xl font-poppins text-ink hover:text-accent transition-colors">
      {children}
    </h1>
  )
}
