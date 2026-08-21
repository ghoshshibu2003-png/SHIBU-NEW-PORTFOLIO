import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current

      document.body.classList.toggle('light-theme', !next)

      return next
    })
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Shibu<span>.</span>
      </div>

      <div className="liquid-nav">
        <div className="glass-shine" />

        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname === item.path

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="nav-item"
            >
              {isActive && (
                <motion.span
                  className="active-pill"
                  layoutId="active-pill"
                  transition={{
                    type: 'spring',
                    stiffness: 650,
                    damping: 42,
                    mass: 0.45,
                  }}
                />
              )}

              <span className={isActive ? 'nav-text active-text' : 'nav-text'}>
                {item.name}
              </span>
            </NavLink>
          )
        })}

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <motion.span
            animate={{
              rotate: darkMode ? 0 : 180,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 20,
            }}
          >
            {darkMode ? '☾' : '☀'}
          </motion.span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar