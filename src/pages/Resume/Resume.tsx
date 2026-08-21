import './Resume.css'

import {
  Download,
  ExternalLink,
  FileText,
} from 'lucide-react'

function Resume() {
  const resumePath = '/resume.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')

    link.href = resumePath
    link.download = 'Shibu_Kumar_Ghosh_Resume.pdf'

    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const handleOpen = () => {
    window.open(resumePath, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="resume-page">

      <div className="resume-window">

        {/* ================================
            HEADER
        ================================= */}

        <div className="resume-topbar">

          <div className="resume-window-title">
            <FileText size={16} />
            <span>Resume</span>
          </div>

          <div className="resume-actions">

            <button
              type="button"
              onClick={handleOpen}
            >
              <ExternalLink size={15} />
              <span>Open PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
            >
              <Download size={15} />
              <span>Download</span>
            </button>

          </div>

        </div>


        {/* ================================
            FILE BAR
        ================================= */}

        <div className="resume-toolbar">

          <div className="resume-file-info">

            <FileText size={15} />

            <span className="resume-file-name">
              Shibu_Kumar_Ghosh_Resume.pdf
            </span>

            <span className="resume-file-type">
              PDF
            </span>

          </div>

          <button
            type="button"
            className="resume-toolbar-open"
            onClick={handleOpen}
            aria-label="Open PDF"
          >
            <ExternalLink size={14} />
          </button>

        </div>


        {/* ================================
            REAL PDF
        ================================= */}

        <div className="resume-content">

          <iframe
            src={resumePath}
            title="Shibu Kumar Ghosh Resume"
            className="resume-pdf"
          />

        </div>

      </div>

    </div>
  )
}

export default Resume