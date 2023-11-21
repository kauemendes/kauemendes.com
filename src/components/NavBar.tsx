import Link from 'next/link'
export default function NavBar() {
  return (
    <nav>
      <ul className="flex flex-row-reverse gap-2 font-sourceCodePro">
        <li>
          <Link href="/"
          className="text-rose-400 hover:hue-rotate-180">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}
          className="text-rose-400 hover:hue-rotate-180">
            About
          </Link>
        </li>
        <li>
          <Link href="/info"
          className="text-rose-400 hover:hue-rotate-180">
            Curriculum
          </Link>
        </li>
      </ul>
    </nav>
  )
}
