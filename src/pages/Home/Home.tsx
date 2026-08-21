import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Gen-Shin-Shibu Portfolio</p>

      {/* Bottom Floating Dock */}
      <div className="home-dock">

        {/* 1. About Me */}
        <button
          className="dock-item"
          type="button"
          aria-label="About Me"
          onClick={() => navigate('/about')}
        >
          <span className="dock-icon app-icon contacts-icon">
            <span className="contacts-head" />
            <span className="contacts-body" />
          </span>

          <span>About Me</span>
        </button>

        {/* 2. Browser */}
        <button
          className="dock-item"
          type="button"
          aria-label="Browser"
          onClick={() => navigate('/browser')}
        >
          <span className="dock-icon app-icon safari-icon">
            <span className="safari-ring" />
            <span className="safari-needle" />
          </span>

          <span>Browser</span>
        </button>

        {/* 3. Resume */}
        <button
          className="dock-item"
          type="button"
          aria-label="Resume"
          onClick={() => navigate('/resume')}
        >
          <span className="dock-icon app-icon resume-icon">
            <span className="resume-fold" />
            <span className="resume-line line-one" />
            <span className="resume-line line-two" />
            <span className="resume-line line-three" />
          </span>

          <span>Resume</span>
        </button>

        {/* 4. Settings */}
        <button
          className="dock-item"
          type="button"
          aria-label="Settings"
          onClick={() => navigate('/settings')}
        >
          <span className="dock-icon app-icon settings-icon">
            <span className="gear">⚙</span>
          </span>

          <span>Settings</span>
        </button>

        {/* 5. Direct Chat */}
        <button
          className="dock-item"
          type="button"
          aria-label="Direct Chat"
          onClick={() => navigate('/chat')}
        >
          <span className="dock-icon app-icon messages-icon">
            <span className="message-bubble">
              <span className="message-dot" />
              <span className="message-dot" />
              <span className="message-dot" />
            </span>
          </span>

          <span>Direct Chat</span>
        </button>

        {/* 6. Ask Me */}
        <button
          className="dock-ask"
          type="button"
          aria-label="Ask Me"
          onClick={() => navigate('/ask-me')}
        >
          <span className="gemini-icon">✦</span>

          <span>Ask Me</span>

          <span className="gemini-small">✦</span>
        </button>

      </div>
    </div>
  )
}

export default Home