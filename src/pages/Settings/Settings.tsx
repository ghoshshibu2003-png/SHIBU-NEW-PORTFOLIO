import { useState } from 'react'
import { useSettings } from '../../context/SettingsContext'
import './Settings.css'

type ToggleProps = {
  enabled: boolean
  onChange: () => void
}

function Toggle({
  enabled,
  onChange,
}: ToggleProps) {
  return (
    <button
      type="button"
      className={`setting-toggle ${
        enabled ? 'active' : ''
      }`}
      onClick={onChange}
      aria-pressed={enabled}
    >
      <span />
    </button>
  )
}

type SelectProps = {
  value: string
  options: string[]
  onChange: (value: string) => void
}

function SettingSelect({
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <select
      className="setting-select"
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}

function Settings() {
  const {
    accentColor,
    setAccentColor,

    cursorDesign,
    setCursorDesign,

    cursorSize,
    setCursorSize,

    cursorTrail,
    setCursorTrail,
  } = useSettings()

  // =====================================================
  // AI EXPERIENCE
  // =====================================================

  const [responseStyle, setResponseStyle] =
    useState('Professional')

  const [responseLength, setResponseLength] =
    useState('Balanced')

  const [aiLanguage, setAiLanguage] =
    useState('Auto')

  const [typingAnimation, setTypingAnimation] =
    useState(true)

  const [aiSuggestions, setAiSuggestions] =
    useState(true)

  const [conversationMemory, setConversationMemory] =
    useState(true)

  // =====================================================
  // MOTION
  // =====================================================

  const [animationLevel, setAnimationLevel] =
    useState('Full')

  const [pageTransitions, setPageTransitions] =
    useState(true)

  const [elementAnimations, setElementAnimations] =
    useState(true)

  const [hoverAnimations, setHoverAnimations] =
    useState(true)

  const [scrollAnimations, setScrollAnimations] =
    useState(true)

  // =====================================================
  // TYPOGRAPHY
  // =====================================================

  const [fontFamily, setFontFamily] =
    useState('System')

  const [fontSize, setFontSize] =
    useState('Default')

  const [textSpacing, setTextSpacing] =
    useState('Normal')

  // =====================================================
  // LANGUAGE
  // =====================================================

  const [interfaceLanguage, setInterfaceLanguage] =
    useState('English')

  // =====================================================
  // PERFORMANCE
  // =====================================================

  const [performanceMode, setPerformanceMode] =
    useState(false)

  const [reduceHeavyEffects, setReduceHeavyEffects] =
    useState(false)

  const [disableHeavyAnimations, setDisableHeavyAnimations] =
    useState(false)

  // =====================================================
  // PREFERENCES
  // =====================================================

  const [savePreferences, setSavePreferences] =
    useState(true)

  const [rememberAiPreferences, setRememberAiPreferences] =
    useState(true)

  // =====================================================
  // RESET
  // =====================================================

  const handleReset = () => {
    // Appearance
    setAccentColor('Purple')

    // AI
    setResponseStyle('Professional')
    setResponseLength('Balanced')
    setAiLanguage('Auto')

    setTypingAnimation(true)
    setAiSuggestions(true)
    setConversationMemory(true)

    // Cursor
    setCursorDesign('Pikachu')
    setCursorSize(0)
    setCursorTrail(false)

    // Motion
    setAnimationLevel('Full')
    setPageTransitions(true)
    setElementAnimations(true)
    setHoverAnimations(true)
    setScrollAnimations(true)

    // Typography
    setFontFamily('System')
    setFontSize('Default')
    setTextSpacing('Normal')

    // Language
    setInterfaceLanguage('English')

    // Performance
    setPerformanceMode(false)
    setReduceHeavyEffects(false)
    setDisableHeavyAnimations(false)

    // Preferences
    setSavePreferences(true)
    setRememberAiPreferences(true)
  }

  return (
    <div className="settings-page">
      <div className="settings-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="settings-header">
          <div>
            <span className="settings-eyebrow">
              PERSONALIZATION
            </span>

            <h1>Settings</h1>

            <p>
              Personalize your AI portfolio experience.
            </p>
          </div>
        </header>

        {/* =================================================
            AI EXPERIENCE
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ✦
            </div>

            <div>
              <h2>AI Experience</h2>

              <p>
                Customize how the AI assistant interacts
                with you.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* RESPONSE STYLE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Response Style</h3>

                <p>
                  Choose the personality of AI responses.
                </p>
              </div>

              <SettingSelect
                value={responseStyle}
                options={[
                  'Professional',
                  'Friendly',
                  'Casual',
                ]}
                onChange={setResponseStyle}
              />
            </div>

            {/* RESPONSE LENGTH */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Response Length</h3>

                <p>
                  Control how detailed AI responses
                  should be.
                </p>
              </div>

              <SettingSelect
                value={responseLength}
                options={[
                  'Short',
                  'Balanced',
                  'Detailed',
                ]}
                onChange={setResponseLength}
              />
            </div>

            {/* AI LANGUAGE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>AI Language</h3>

                <p>
                  Select the preferred language for AI
                  responses.
                </p>
              </div>

              <SettingSelect
                value={aiLanguage}
                options={[
                  'Auto',
                  'English',
                  'Hindi',
                  'Odia',
                ]}
                onChange={setAiLanguage}
              />
            </div>

            {/* TYPING ANIMATION */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Typing Animation</h3>

                <p>
                  Show a typing effect while AI generates
                  responses.
                </p>
              </div>

              <Toggle
                enabled={typingAnimation}
                onChange={() =>
                  setTypingAnimation(
                    !typingAnimation,
                  )
                }
              />
            </div>

            {/* AI SUGGESTIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>AI Suggestions</h3>

                <p>
                  Show suggested prompts and questions.
                </p>
              </div>

              <Toggle
                enabled={aiSuggestions}
                onChange={() =>
                  setAiSuggestions(
                    !aiSuggestions,
                  )
                }
              />
            </div>

            {/* CONVERSATION MEMORY */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Conversation Memory</h3>

                <p>
                  Allow the assistant to remember the
                  current conversation.
                </p>
              </div>

              <Toggle
                enabled={conversationMemory}
                onChange={() =>
                  setConversationMemory(
                    !conversationMemory,
                  )
                }
              />
            </div>

          </div>
        </section>

        {/* =================================================
            APPEARANCE
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ◈
            </div>

            <div>
              <h2>Appearance</h2>

              <p>
                Customize the visual personality
                of the portfolio.
              </p>
            </div>
          </div>

          <div className="settings-list">

            <div className="setting-row">
              <div className="setting-info">
                <h3>Accent Color</h3>

                <p>
                  Choose the primary accent used
                  throughout the interface.
                </p>
              </div>

              <SettingSelect
                value={accentColor}
                options={[
                  'Purple',
                  'Pink',
                  'Blue',
                  'Green',
                  'Orange',
                ]}
                onChange={setAccentColor}
              />
            </div>

          </div>
        </section>

        {/* =================================================
            CURSOR & INTERACTION
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ⌁
            </div>

            <div>
              <h2>Cursor & Interaction</h2>

              <p>
                Customize the desktop-style pointer
                experience.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* CURSOR DESIGN */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Cursor Design</h3>

                <p>
                  Choose your preferred cursor style.
                </p>
              </div>

              <SettingSelect
                value={cursorDesign}
                options={[
                  'Default',
                  'Pikachu',
                  'Ryuk',
                  'Death Note Apple',
                  'Pikachu Arrow',
                ]}
                onChange={setCursorDesign}
              />
            </div>

            {/* CURSOR SIZE */}

            <div className="setting-row cursor-size-row">

              <div className="setting-info">
                <h3>Cursor Size</h3>

                <p>
                  Adjust the size of the custom cursor.
                </p>
              </div>

              <div className="range-control">

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={cursorSize}
                  onChange={(event) =>
                    setCursorSize(
                      Number(event.target.value),
                    )
                  }
                  className="setting-range"
                  style={{
                    '--range-progress':
                      `${cursorSize}%`,
                  } as React.CSSProperties}
                  aria-label="Cursor size"
                />

                <span className="range-value">
                  {cursorSize}%
                </span>

              </div>
            </div>

            {/* CURSOR TRAIL */}

            <div className="setting-row">

              <div className="setting-info">
                <h3>Cursor Trail</h3>

                <p>
                  Display a subtle trail while moving
                  the cursor.
                </p>
              </div>

              <Toggle
                enabled={cursorTrail}
                onChange={() =>
                  setCursorTrail(!cursorTrail)
                }
              />

            </div>

          </div>
        </section>

        {/* =================================================
            MOTION & ANIMATION
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ✧
            </div>

            <div>
              <h2>Motion & Animation</h2>

              <p>
                Control movement and transitions
                across the portfolio.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* ANIMATION LEVEL */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Animation Level</h3>

                <p>
                  Choose the overall animation intensity.
                </p>
              </div>

              <SettingSelect
                value={animationLevel}
                options={[
                  'Full',
                  'Reduced',
                  'Off',
                ]}
                onChange={setAnimationLevel}
              />
            </div>

            {/* PAGE TRANSITIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Page Transitions</h3>

                <p>
                  Animate transitions between
                  portfolio pages.
                </p>
              </div>

              <Toggle
                enabled={pageTransitions}
                onChange={() =>
                  setPageTransitions(
                    !pageTransitions,
                  )
                }
              />
            </div>

            {/* ELEMENT ANIMATIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Element Animations</h3>

                <p>
                  Animate interface elements when
                  they appear.
                </p>
              </div>

              <Toggle
                enabled={elementAnimations}
                onChange={() =>
                  setElementAnimations(
                    !elementAnimations,
                  )
                }
              />
            </div>

            {/* HOVER ANIMATIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Hover Animations</h3>

                <p>
                  Enable animated hover interactions.
                </p>
              </div>

              <Toggle
                enabled={hoverAnimations}
                onChange={() =>
                  setHoverAnimations(
                    !hoverAnimations,
                  )
                }
              />
            </div>

            {/* SCROLL ANIMATIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Scroll Animations</h3>

                <p>
                  Animate sections as they enter
                  the viewport.
                </p>
              </div>

              <Toggle
                enabled={scrollAnimations}
                onChange={() =>
                  setScrollAnimations(
                    !scrollAnimations,
                  )
                }
              />
            </div>

          </div>
        </section>

        {/* =================================================
            TYPOGRAPHY
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              Aa
            </div>

            <div>
              <h2>Typography</h2>

              <p>
                Personalize the reading experience.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* FONT FAMILY */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Font Family</h3>

                <p>
                  Choose the typography style used
                  by the portfolio.
                </p>
              </div>

              <SettingSelect
                value={fontFamily}
                options={[
                  'System',
                  'Inter',
                  'Poppins',
                  'Space Grotesk',
                  'JetBrains Mono',
                ]}
                onChange={setFontFamily}
              />
            </div>

            {/* FONT SIZE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Font Size</h3>

                <p>
                  Adjust the overall text scale.
                </p>
              </div>

              <SettingSelect
                value={fontSize}
                options={[
                  'Small',
                  'Default',
                  'Large',
                ]}
                onChange={setFontSize}
              />
            </div>

            {/* TEXT SPACING */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Text Spacing</h3>

                <p>
                  Adjust the spacing between text
                  elements.
                </p>
              </div>

              <SettingSelect
                value={textSpacing}
                options={[
                  'Compact',
                  'Normal',
                  'Comfortable',
                ]}
                onChange={setTextSpacing}
              />
            </div>

          </div>
        </section>

        {/* =================================================
            LANGUAGE
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              文
            </div>

            <div>
              <h2>Language</h2>

              <p>
                Choose how the portfolio communicates
                with you.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* INTERFACE LANGUAGE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Interface Language</h3>

                <p>
                  Choose the language used by the
                  portfolio interface.
                </p>
              </div>

              <SettingSelect
                value={interfaceLanguage}
                options={[
                  'English',
                  'Hindi',
                  'Odia',
                ]}
                onChange={setInterfaceLanguage}
              />
            </div>

            {/* AI RESPONSE LANGUAGE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>AI Response Language</h3>

                <p>
                  Choose the preferred language for
                  AI responses.
                </p>
              </div>

              <SettingSelect
                value={aiLanguage}
                options={[
                  'Auto',
                  'English',
                  'Hindi',
                  'Odia',
                ]}
                onChange={setAiLanguage}
              />
            </div>

          </div>
        </section>

        {/* =================================================
            PERFORMANCE
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ⚡
            </div>

            <div>
              <h2>Performance</h2>

              <p>
                Optimize visual effects for smoother
                performance.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* PERFORMANCE MODE */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Performance Mode</h3>

                <p>
                  Reduce visual processing for a
                  lighter experience.
                </p>
              </div>

              <Toggle
                enabled={performanceMode}
                onChange={() =>
                  setPerformanceMode(
                    !performanceMode,
                  )
                }
              />
            </div>

            {/* REDUCE HEAVY EFFECTS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Reduce Heavy Effects</h3>

                <p>
                  Reduce resource-intensive
                  background effects.
                </p>
              </div>

              <Toggle
                enabled={reduceHeavyEffects}
                onChange={() =>
                  setReduceHeavyEffects(
                    !reduceHeavyEffects,
                  )
                }
              />
            </div>

            {/* DISABLE HEAVY ANIMATIONS */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Disable Heavy Animations</h3>

                <p>
                  Disable animations that require
                  more processing.
                </p>
              </div>

              <Toggle
                enabled={disableHeavyAnimations}
                onChange={() =>
                  setDisableHeavyAnimations(
                    !disableHeavyAnimations,
                  )
                }
              />
            </div>

          </div>
        </section>

        {/* =================================================
            PREFERENCES & DATA
        ================================================= */}

        <section className="settings-section">

          <div className="section-heading">
            <div className="section-icon">
              ◌
            </div>

            <div>
              <h2>Preferences & Data</h2>

              <p>
                Manage your portfolio and AI
                preferences.
              </p>
            </div>
          </div>

          <div className="settings-list">

            {/* SAVE PREFERENCES */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Save Preferences</h3>

                <p>
                  Remember your selected portfolio
                  settings.
                </p>
              </div>

              <Toggle
                enabled={savePreferences}
                onChange={() =>
                  setSavePreferences(
                    !savePreferences,
                  )
                }
              />
            </div>

            {/* REMEMBER AI PREFERENCES */}

            <div className="setting-row">
              <div className="setting-info">
                <h3>Remember AI Preferences</h3>

                <p>
                  Remember your preferred AI
                  interaction settings.
                </p>
              </div>

              <Toggle
                enabled={rememberAiPreferences}
                onChange={() =>
                  setRememberAiPreferences(
                    !rememberAiPreferences,
                  )
                }
              />
            </div>
            

            {/* RESET */}

            <div className="setting-row reset-row">
              <div className="setting-info">
                <h3>Reset All Settings</h3>

                <p>
                  Restore every setting to its
                  default value.
                </p>
              </div>

              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Settings