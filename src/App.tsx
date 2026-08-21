import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SettingsProvider } from './context/SettingsContext'

import CustomCursor from './components/CustomCursor/CustomCursor'

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'

import Browser from './pages/Browser/Browser'
import Resume from './pages/Resume/Resume'
import Settings from './pages/Settings/Settings'
import DirectChat from './pages/DirectChat/DirectChat'
import AskMe from './pages/AskMe/AskMe'

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>

        {/* Global Custom Cursor */}
        <CustomCursor />

        <Navbar />

        <Routes>

          {/* Navbar Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          {/* Home Dock Pages */}
          <Route path="/browser" element={<Browser />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat" element={<DirectChat />} />
          <Route path="/ask-me" element={<AskMe />} />

        </Routes>

      </BrowserRouter>
    </SettingsProvider>
  )
}

export default App