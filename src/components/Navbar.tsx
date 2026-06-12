'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

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
    color: activeSection === id ? '#f0f3f8' : '#555555',
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
          <li>
            <a
              href="/Resume - MUHAMMAD ISYRAF NASRUDDIN.pdf"
              download
              className="resume-btn"
            >
              Resume ↓
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <div className="nav-right-mobile">
          <ThemeToggle />
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${menuOpen ? 'open-1' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open-2' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open-3' : ''}`} />
          </button>
        </div>
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
          <a
            href="/Resume - MUHAMMAD ISYRAF NASRUDDIN.pdf"
            download
            className="resume-btn"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↓
          </a>
        </div>
      )}
    </>
  )
}
