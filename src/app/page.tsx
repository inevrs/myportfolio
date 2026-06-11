'use client'

import { useEffect, useState } from 'react'
import AsciiBackground from '@/components/AsciiBackground'
import SoundtrackPlayer from '@/components/SoundtrackPlayer'
import Navbar from '@/components/Navbar'

interface Skill {
  name: string
}

interface Project {
  name: string
  desc: string
  tags: string[]
  link: string
}

const SKILLS_DATA: Skill[] = [
  { name: 'HTML / PHP / CSS' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Git / GitHub' },
  { name: 'MySQL' },
]

const PROJECTS_DATA: Project[] = [
  {
    name: 'project_01',
    desc: 'Desc.',
    tags: ['tag1', 'tag2'],
    link: '#',
  },
  {
    name: 'project_02',
    desc: 'Desc.',
    tags: ['tag1', 'tag2'],
    link: '#',
  },
  {
    name: 'project_03',
    desc: 'Desc.',
    tags: ['tag1', 'tag2'],
    link: '#',
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('')
  const currentYear = new Date().getFullYear()

  // Scroll section observer
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handleScroll = () => {
      let current = ''
      sections.forEach(s => {
        const el = s as HTMLElement
        if (window.scrollY >= el.offsetTop - 200) current = el.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Skill fill animation observer
  useEffect(() => {
    const skillFills = document.querySelectorAll('.skill-fill')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.animation = 'fillBar 1.5s ease forwards'
        }
      })
    }, { threshold: 0.1 })
    skillFills.forEach(el => {
      ;(el as HTMLElement).style.animation = 'none'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const getNavLinkStyle = (id: string) => {
    return activeSection === id
      ? { color: '#f0f3f8', textShadow: '0 0 8px rgba(240, 243, 248, 0.78)' }
      : {}
  }

  return (
    <>
      {/* ASCII FIGURE BACKGROUND */}
      <AsciiBackground />

      {/* SOUNDTRACK PLAYER */}
      <SoundtrackPlayer />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div className="hero-inner">
          <pre className="hero-ascii-art">
{`⣿⠛⠛⠛⠛⠻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠛⢛⣿⠋⢀⡾⠃⠀⠀⠀⠀⢀⣤⣤⠤⠤⣤⣤⣀⣀⣀⣠⠶⡶⣤⣀⣠⠾⡷⣦⣀⣤⣤⡤⠤⠦⢤⣤⣄⡀⠀⢠⡶⢶⡄⠀⠀
  ⢠⡟⠁⣴⣿⢤⡄⣴⢶⠶⡆⠈⢷⡀⠀⠀⠀⠀⢀⣭⣫⠵⠥⠽⣄⣝⠵⢍⣘⣄⠳⣤⣀⠀⠀⢀⡤⠊⣽⠁⠀⠸⣇⠀⢿⠀⠀
  ⠸⢷⣴⣤⡤⠾⠇⣽⠋⠼⣷⠀⠈⢷⡄⢀⣤⡶⠋⠀⣀⡄⠤⠀⡲⡆⠀⠀⠈⠙⡄⠘⢮⢳⡴⠯⣀⢠⡏⠀⠀⠀⢻⠀⢸⠇⠀
  ⠀⠀⠀⠀⠀⠀⠀ ⠙⠛⠋⠉⢀⣴⠟⠉⢯⡞⡠⢲⠉⣼⠀⠀⡰⠁⡇⢀⢷⠀⣄⢵⠀⠈⡟⢄⠀⠀⠙⢷⣤⣤⣤⡿⢢⡿⠀⠀
⠀⠀   ⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠑⠊⠁⡼⣌⢠⢿⢸⢸⡀⢰⠁⡸⡇⡸⣸⢰⢈⠘⡄⠀⢸⠀⢣⡀⠀⠈⢮⢢⣏⣤⡾⠃⠀⠀
⠀⠀⠀⠀⠀  ⠀⠀⠀⠀⢰⣯⣴⠞⡠⣼⠁⡘⣾⠏⣿⢇⣳⣸⣞⣀⢱⣧⣋⣞⡜⢳⡇⠀⢸⠀⢆⢧⠀⠰⣄⢏⢧⣾⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠈⢹⡏⢰⠁⡻⠀⡟⡏⠉⠀⣀⠀⠀⠀⠀⣀⠁⠀⠉⠛⢽⠇⠀⣼⡆⠈⡆⠃⠀⡏⠻⣾⣽⣇⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⢸⠁⡇⠀⡇⡄⣿⠷⠿⠿⠛⠀⠀⠀⠀⠛⠻⠿⠿⠿⡜⢀⡴⡟⢸⣸⡼⠀⠀⡇⠀⡞⡆⢻⠙⢦⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⢸⡶⢀⣼⣿⣬⣽⠧⠬⠇⠀⠀⠀⠀⠀⠀⢞⣯⣭⢺⣔⣪⣾⣤⠺⡇⢳⠀⢠⣧⡾⠛⠛⠻⠶⠞⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠘⠷⢿⠟⠉⡀⠈⢦⡀⠀⠀⣠⠖⠒⠒⢤⡀⠀⢀⡼⠿⢇⡣⢬⣶⠷⢿⣤⡾⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠘⠷⠾⠷⠖⠛⠛⠲⠶⠿⠤⣤⠤⠤⢷⣶⠋⠀⠀⠀⣱⠞⠁⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠓⠒⠚⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
          </pre>
          <div className="hero-name chrome-text cursor-blink">Welcome
          </div>
          <div className="hero-sub">// portfolio . projects . contact</div>
          <div className="hero-tagline contact-card">
            [Mostly self-taught developer who enjoys creating projects, solving problems, and learning new technologies.]<br />
          </div>
          <div className="scroll-hint">▼ scroll ▼</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">// 01</div>
        <h2 className="section-title">about_me</h2>
        <div className="divider"></div>
        <div className="about-grid contact-card">
          <div className="about-text">
            <p>
              Hi — I&apos;m <span>Isyraf</span>. I was born in 2006, My interest in technology started at around 15, when I was using my father&apos;s laptop and allegedly accidentally installed a virus while trying to download free games and web exploits.
            </p>
            <p>
              Seeing the computer execute exactly what that malware dictated was a revelation. It taught me a profound lesson: you are in complete control of the systems you build (most of the time lol). Ever since that incident, I&apos;ve been driven to learn coding.
            </p>
            <p style={{ color: '#444', fontSize: '0.7rem' }}>
              &gt; currently available for work / collaborations
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num chrome-text">00+</div>
              <div className="stat-label">projects completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-num chrome-text">hobbies</div>
              <div className="stat-label" style={{ textTransform: 'lowercase' }}>archery · hiking · web design</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">// 02</div>
        <h2 className="section-title">skills</h2>
        <div className="divider"></div>
        <div className="skills-grid">
          {SKILLS_DATA.map((skill, index) => (
            <div key={index} className="skill-cell">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-fill" />
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.65rem', color: '#333', marginTop: '1rem', letterSpacing: '0.1em' }}>
          &gt; edit skills in src/app/page.tsx
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">// 03</div>
        <h2 className="section-title">projects</h2>
        <div className="divider"></div>
        <div className="projects-list">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="project-item">
              <div>
                <div className="project-name">{project.name}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link">view →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">// 04</div>
        <h2 className="section-title">contact</h2>
        <div className="divider"></div>
        <div className="contact-inner">
          <p>Open to opportunities, collabs, or just a conversation. Reach out {'><'}.</p>
          <div className="contact-links">
            <div className="contact-card">
              <div className="contact-row">
                <span className="contact-key">email</span>
                <a href="mailto:isyrafnasruddin9@email.com" className="contact-val">
                  isyrafnasruddin9@email.com
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-key">github</span>
                <a href="https://github.com/inevrs" target="_blank" rel="noopener noreferrer" className="contact-val">
                  github.com/inevrs
                </a>
              </div>
              <div className="contact-row">
                <span className="contact-key">discord</span>
                <a href="#" className="contact-val">@invertedivine</a>
              </div>
              <div className="contact-row">
                <span className="contact-key">instagram</span>
                <a href="https://instagram.com/isyvrns" target="_blank" rel="noopener noreferrer" className="contact-val">
                  @isyvrns
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span style={{ color: '#222' }}>//</span> Isyraf &nbsp;·&nbsp; More to come soon &nbsp;·&nbsp;{' '}
        <span>{19}</span>
      </footer>
    </>
  )
}
