import Link from 'next/link'
export default function NavBar() {
  return (
    <nav>
      <ul className="flex flex-row-reverse gap-2 font-sourceCodePro">
        <li>
          <Link href="/"
          className="text-stone-400 hover:text-sky-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}
          className="text-stone-400 hover:text-sky-500 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/info"
          className="text-stone-400 hover:text-sky-500 hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/projects"
          className="text-stone-400 hover:text-sky-500 hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog"
          className="text-stone-400 hover:text-sky-500 hover:underline">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
