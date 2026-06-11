'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(id => document.getElementById(id))
      let current = ''
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = section.id
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close)
    return () => window.removeEventListener('scroll', close)
  }, [])

  const getLinkStyle = (id: string) => ({
    color: activeSection === id ? '#f0f3f8' : '#aaaaaa',
    textShadow: activeSection === id ? '0 0 8px rgba(240,243,248,0.6)' : 'none',
  })

  return (
    <>
      <nav>
        <div className="nav-logo">
          Welcome to isyraf&apos;s personal webpage <span style={{ color: '#333' }}>{'><'}</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(id => (
            <li key={id}>
              <a href={`#${id}`} style={getLinkStyle(id)}>{id}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line ${menuOpen ? 'open-1' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-2' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-3' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="mobile-menu-link"
              style={getLinkStyle(id)}
              onClick={() => setMenuOpen(false)}
            >
              {id}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
