import Link from 'next/link'
const Header = () => {
  return (
   <nav>
    <ul>
        <li>
     <Link href="/">Home</Link>
        </li>
        <li>
     <Link href="/resume">Resume</Link>
        </li>
        <li>
     <Link href="/projects">Projects</Link>
        </li>
        <li>
     <Link href="/contact">Contacts</Link>
        </li>
    </ul>
   </nav>
  )
}

export default Header