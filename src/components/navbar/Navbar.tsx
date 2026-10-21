import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { usePortfolioContent } from '../../hooks/usePortfolioContent'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = usePortfolioContent()

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
          {data.site.resumeUrl && (
            <a href={data.site.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
          )}
        </div>

        <button className="nav-menu-button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-nav page-width">
          {links.map((link) => <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>)}
          {data.site.resumeUrl && (
            <a href={data.site.resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Résumé</a>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
