'use client'

import Link from 'next/link'

const contactLinks = [
  { href: 'tel:+2348012345678', label: '+234 801 234 5678' },
  { href: 'mailto:hello@geordies.ng', label: 'hello@geordies.ng' },
  { href: '/contact', label: '14 Bayo Kuku Rd, Ikoyi' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wrap">
        <div className="footer-grid compact-footer">
          <div>
            <Link href="/" className="footer-logo">
              Geordie<span>'s</span>
            </Link>

            
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>

            <ul>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-actions">
            
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Geordie&apos;s Salon Lagos. All
            rights reserved.
          </p>

          <div className="legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
