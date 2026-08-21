import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type SettingsContextType = {
  accentColor: string
  setAccentColor: (color: string) => void

  cursorDesign: string
  setCursorDesign: (design: string) => void

  cursorSize: number
  setCursorSize: (size: number) => void

  cursorTrail: boolean
  setCursorTrail: (enabled: boolean) => void
}

const SettingsContext = createContext<
  SettingsContextType | undefined
>(undefined)

const accentColors: Record<
  string,
  {
    primary: string
    secondary: string
    glow: string
  }
> = {
  Purple: {
    primary: '#8b5cf6',
    secondary: '#ec4899',
    glow: 'rgba(139, 92, 246, 0.35)',
  },

  Pink: {
    primary: '#ec4899',
    secondary: '#f43f5e',
    glow: 'rgba(236, 72, 153, 0.35)',
  },

  Blue: {
    primary: '#3b82f6',
    secondary: '#06b6d4',
    glow: 'rgba(59, 130, 246, 0.35)',
  },

  Green: {
    primary: '#22c55e',
    secondary: '#14b8a6',
    glow: 'rgba(34, 197, 94, 0.35)',
  },

  Orange: {
    primary: '#f97316',
    secondary: '#eab308',
    glow: 'rgba(249, 115, 22, 0.35)',
  },
}

export function SettingsProvider({
  children,
}: {
  children: ReactNode
}) {
  // =====================================================
  // ACCENT COLOR
  // =====================================================

  const [accentColor, setAccentColor] =
    useState('Purple')

  // =====================================================
  // CURSOR DESIGN
  // =====================================================

  // Portfolio starts with Pikachu
  const [cursorDesign, setCursorDesign] =
    useState('Pikachu')

  // =====================================================
  // CURSOR SIZE
  // =====================================================

  // Portfolio starts at 0%
  const [cursorSize, setCursorSize] =
    useState(0)

  // =====================================================
  // CURSOR TRAIL
  // =====================================================

  // Trail is OFF by default
  const [cursorTrail, setCursorTrail] =
    useState(false)

  // =====================================================
  // ACCENT COLOR
  // =====================================================

  useEffect(() => {
    const selected =
      accentColors[accentColor]

    if (!selected) return

    document.documentElement.style.setProperty(
      '--accent',
      selected.primary,
    )

    document.documentElement.style.setProperty(
      '--accent-secondary',
      selected.secondary,
    )

    document.documentElement.style.setProperty(
      '--accent-glow',
      selected.glow,
    )
  }, [accentColor])

  // =====================================================
  // PROVIDER
  // =====================================================

  return (
    <SettingsContext.Provider
      value={{
        accentColor,
        setAccentColor,

        cursorDesign,
        setCursorDesign,

        cursorSize,
        setCursorSize,

        cursorTrail,
        setCursorTrail,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

// =======================================================
// HOOK
// =======================================================

export function useSettings() {
  const context =
    useContext(SettingsContext)

  if (!context) {
    throw new Error(
      'useSettings must be used inside SettingsProvider',
    )
  }

  return context
}