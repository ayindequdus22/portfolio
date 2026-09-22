import { useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { data } = usePortfolioContent()
  const isHome = location.pathname === '/'

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="nav-wrap">
      <nav className="nav page-width" aria-label="Primary navigation">
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Return home">
          <span className="brand-mark">{data.site.monogram}</span>
          <span className="brand-name">{data.site.name}</span>
        </Link>

        <div className="nav-desktop-links">
          {links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
        </div>

        <a className="nav-contact" href={isHome ? '#contact' : '/#contact'}>
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </a>

        <button className="nav-menu-button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-nav page-width">
          {links.map((link) => <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>)}
          <a href={isHome ? '#contact' : '/#contact'} onClick={closeMenu}>Let&apos;s talk</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
