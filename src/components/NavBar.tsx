import DarkModeButton from './DarkModeButton'
import NavLink from './NavLink'

export default function NavBar() {
  return (
    <nav>
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
