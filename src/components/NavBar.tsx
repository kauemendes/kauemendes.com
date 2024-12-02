import DarkModeButton from './DarkModeButton'
import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav className='fixed bg-gray-200 w-full py-5 top-0 left-0 pr-4 shadow dark:bg-gray-950'>
      <ul className="flex flex-row-reverse gap-2 font-mono">
        <li className='font-bold font-sourceCodePro'>
          <NavLink href="/">
            kauecode.com
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink href="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
  )
}
