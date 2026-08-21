import './Browser.css'

import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaLock,
  FaSearch,
  FaExternalLinkAlt,
} from 'react-icons/fa'

function Browser() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const query = search.trim()

  if (!query) return

  window.location.href = query.match(/^https?:\/\//)
    ? query
    : `https://www.google.com/search?q=${encodeURIComponent(query)}`
}

  return (
    <div className="browser-page">

      <div className="browser-window">

        {/* ================================
            BROWSER HEADER
        ================================= */}

        <div className="browser-topbar">

          <div className="browser-title">
            <span className="browser-title-accent">
              DIGITAL BROWSER
            </span>
          </div>

          <div className="browser-status">
            <span className="status-dot" />
            <span>ONLINE</span>
          </div>

        </div>


        {/* ================================
            SEARCH / ADDRESS BAR
        ================================= */}

        <div className="browser-toolbar">

          <form
            className="browser-address"
            onSubmit={handleSearch}
          >

            <FaLock className="address-lock" />

            <span className="address-text">
              shibu.digital
            </span>

            <span className="address-divider" />

            <FaSearch className="address-search" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search my portfolio..."
              className="address-input"
              aria-label="Search portfolio"
            />

          </form>

        </div>


        {/* ================================
            MAIN CONTENT
        ================================= */}

        <div className="browser-content">

          <div className="digital-orbit orbit-one" />
          <div className="digital-orbit orbit-two" />


          {/* INTRO */}

          <div className="browser-intro">

            <span className="intro-badge">
              <span className="intro-badge-dot" />
              CONNECT WITH ME
            </span>

            <h1>
              Shibu's Internet
            </h1>

            <p>
              Find me across the internet
            </p>

          </div>


          {/* ================================
              SOCIAL LINKS
          ================================= */}

          <div className="social-grid">

            {/* GitHub */}

            <a
              href="https://github.com/ghoshshibu2003-png"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card github"
            >
              <div className="social-card-icon">
                <FaGithub />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  GitHub
                </span>

                <span className="social-card-description">
                  My code & projects
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/shibu-ghosh-6101b733b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card linkedin"
            >
              <div className="social-card-icon">
                <FaLinkedinIn />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  LinkedIn
                </span>

                <span className="social-card-description">
                  Professional profile
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>


            {/* Instagram */}

            <a
              href="https://www.instagram.com/ghosh.shibu_?igsh=MXJwaWVlZjljZzU4OQ==&igsi=MXJwaWVlZjljZzU4OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-card instagram"
            >
              <div className="social-card-icon">
                <FaInstagram />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  Instagram
                </span>

                <span className="social-card-description">
                  Photos & moments
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>


            {/* Facebook */}

            <a
              href="https://www.facebook.com/share/1MMQqv43TM/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card facebook"
            >
              <div className="social-card-icon">
                <FaFacebookF />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  Facebook
                </span>

                <span className="social-card-description">
                  Connect with me
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/918093863923"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card whatsapp"
            >
              <div className="social-card-icon">
                <FaWhatsapp />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  WhatsApp
                </span>

                <span className="social-card-description">
                  Direct conversation
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>


            {/* Email */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ghoshshibu2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card email"
            >
              <div className="social-card-icon">
                <FaEnvelope />
              </div>

              <div className="social-card-info">
                <span className="social-card-name">
                  Email
                </span>

                <span className="social-card-description">
                  Send me an email
                </span>
              </div>

              <FaExternalLinkAlt className="social-arrow" />
            </a>

          </div>


          {/* ================================
              FOOTER
          ================================= */}

          <div className="browser-footer">

            <span>
              <FaLock />
              Secure connection
            </span>

            <span className="footer-divider" />

            <span>
              6 social destinations
            </span>

            <span className="footer-divider" />

            <span>
              Shibu Digital Portfolio
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Browser