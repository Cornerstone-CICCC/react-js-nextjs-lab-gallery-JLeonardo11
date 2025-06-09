import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-3 bg-gray-700">
      <div className="logo">LOGO</div>
      <nav>
        <menu className="flex gap-3 items-center">
          <li className="underline">
            <Link href="/">Home</Link>
          </li>
          <li className = "underline">
            <Link href="/gallery"> Gallery</Link>

          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header