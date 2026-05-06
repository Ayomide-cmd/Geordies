'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          Geordie<span>'s</span>
        </Link>

        <nav className="links">
          <Link href="/">Home</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/#products" className="nav-cta">
          Shop Products <span className="arrow">↗</span>
        </Link>
      </div>

      <nav className="mobile-links">
        <Link href="/">Home</Link>
        <Link href="/about">Our Story</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
