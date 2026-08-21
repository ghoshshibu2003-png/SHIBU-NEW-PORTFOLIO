import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useSettings } from '../../context/SettingsContext'
import './CustomCursor.css'

function CustomCursor() {
  const {
    cursorDesign,
    cursorGlow,
    cursorSize,
    cursorTrail,
    magneticHover,
  } = useSettings()

  const cursorRef = useRef<HTMLDivElement>(null)

  const trailRefs = useRef<(HTMLDivElement | null)[]>([])

  const mouseRef = useRef({
    x: 0,
    y: 0,
  })

  const positionRef = useRef({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    // =====================================================
    // DEFAULT = REAL BROWSER CURSOR
    // =====================================================

    if (cursorDesign === 'Default') {
      document.body.classList.remove(
        'custom-cursor-active',
      )

      return
    }

    let animationFrame = 0

    // =====================================================
    // MOUSE MOVE
    // =====================================================

    const moveCursor = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX
      mouseRef.current.y = event.clientY

      document.body.classList.add(
        'custom-cursor-active',
      )
    }

    // =====================================================
    // HIDE CURSOR
    // =====================================================

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }

      trailRefs.current.forEach((trail) => {
        if (trail) {
          trail.style.opacity = '0'
        }
      })

      document.body.classList.remove(
        'custom-cursor-active',
      )
    }

    // =====================================================
    // ANIMATION
    // =====================================================

    const animate = () => {
      const cursor = cursorRef.current

      if (!cursor) {
        animationFrame =
          requestAnimationFrame(animate)

        return
      }

      let targetX = mouseRef.current.x
      let targetY = mouseRef.current.y

      // ===================================================
      // MAGNETIC HOVER
      // ===================================================

      if (magneticHover) {
        const element =
          document.elementFromPoint(
            mouseRef.current.x,
            mouseRef.current.y,
          ) as HTMLElement | null

        const interactive =
          element?.closest(
            'button, a, input, select, textarea, [role="button"], [data-magnetic]',
          ) as HTMLElement | null

        if (interactive) {
          const rect =
            interactive.getBoundingClientRect()

          const centerX =
            rect.left + rect.width / 2

          const centerY =
            rect.top + rect.height / 2

          const distanceX =
            centerX - mouseRef.current.x

          const distanceY =
            centerY - mouseRef.current.y

          const distance = Math.sqrt(
            distanceX * distanceX +
              distanceY * distanceY,
          )

          const maxDistance = 120

          if (distance < maxDistance) {
            const strength =
              1 - distance / maxDistance

            const magneticStrength =
              0.25 * strength

            targetX =
              mouseRef.current.x +
              distanceX *
                magneticStrength

            targetY =
              mouseRef.current.y +
              distanceY *
                magneticStrength
          }
        }
      }

      // ===================================================
      // SMOOTH POSITION
      // ===================================================

      positionRef.current.x +=
        (targetX - positionRef.current.x) *
        0.35

      positionRef.current.y +=
        (targetY - positionRef.current.y) *
        0.35

      const x = positionRef.current.x
      const y = positionRef.current.y

      cursor.style.left = `${x}px`
      cursor.style.top = `${y}px`
      cursor.style.opacity = '1'

      // ===================================================
      // CURSOR TRAIL
      // ===================================================

      if (cursorTrail) {
        trailRefs.current.forEach(
          (trail, index) => {
            if (!trail) return

            const delay =
              0.18 + index * 0.08

            const trailX =
              x +
              (mouseRef.current.x - x) *
                delay

            const trailY =
              y +
              (mouseRef.current.y - y) *
                delay

            trail.style.left =
              `${trailX}px`

            trail.style.top =
              `${trailY}px`

            trail.style.opacity =
              `${Math.max(
                0.04,
                0.24 - index * 0.04,
              )}`
          },
        )
      } else {
        trailRefs.current.forEach(
          (trail) => {
            if (trail) {
              trail.style.opacity = '0'
            }
          },
        )
      }

      animationFrame =
        requestAnimationFrame(animate)
    }

    // =====================================================
    // EVENTS
    // =====================================================

    document.addEventListener(
      'mousemove',
      moveCursor,
      {
        passive: true,
      },
    )

    document.documentElement.addEventListener(
      'mouseleave',
      hideCursor,
    )

    window.addEventListener(
      'blur',
      hideCursor,
    )

    animationFrame =
      requestAnimationFrame(animate)

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      document.removeEventListener(
        'mousemove',
        moveCursor,
      )

      document.documentElement.removeEventListener(
        'mouseleave',
        hideCursor,
      )

      window.removeEventListener(
        'blur',
        hideCursor,
      )

      cancelAnimationFrame(
        animationFrame,
      )

      document.body.classList.remove(
        'custom-cursor-active',
      )
    }
  }, [
    cursorDesign,
    cursorTrail,
    magneticHover,
  ])

  // =====================================================
  // DEFAULT
  // =====================================================

  if (cursorDesign === 'Default') {
    return null
  }

  // =====================================================
  // CURSOR GLOW
  // =====================================================

  const glow = Math.max(
    0,
    Math.min(100, cursorGlow),
  )

  // =====================================================
  // CURSOR SIZE
  // =====================================================

  const size = Math.max(
    0,
    Math.min(100, cursorSize),
  )

  /*
    0%   = 12%
    25%  = 16.5%
    50%  = 21%
    75%  = 25.5%
    100% = 30%

    Keeps the cursor small and clickable.
  */

  const sizeScale =
    0.12 + (size / 100) * 0.18

  // =====================================================
  // CURSOR IMAGES
  // =====================================================

  const cursorImages: Record<
    string,
    string
  > = {
    Pikachu:
      '/cursors/pikachu.png',

    Ryuk:
      '/cursors/ryuk.png',

    'Death Note Apple':
      '/cursors/death-note-apple.png',

    'Pikachu Arrow':
      '/cursors/pikachu-arrow.png',
  }

  const imageSrc =
    cursorImages[cursorDesign]

  // =====================================================
  // CURSOR
  // =====================================================

  const cursor = (
    <>
      {/* =================================================
          CURSOR TRAIL
      ================================================= */}

      {cursorTrail &&
        imageSrc &&
        Array.from({ length: 5 }).map(
          (_, index) => (
            <div
              key={`cursor-trail-${index}`}
              ref={(element) => {
                trailRefs.current[index] =
                  element
              }}
              className="custom-cursor-trail"
              aria-hidden="true"
            >
              <img
                src={imageSrc}
                alt=""
                draggable={false}
              />
            </div>
          ),
        )}

      {/* =================================================
          MAIN CURSOR
      ================================================= */}

      <div
        ref={cursorRef}
        className="custom-cursor"
        style={
          {
            '--cursor-glow':
              glow / 100,

            '--cursor-size-scale':
              sizeScale,
          } as React.CSSProperties
        }
        aria-hidden="true"
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            className="cursor-image"
            draggable={false}
          />
        )}
      </div>
    </>
  )

  return createPortal(
    cursor,
    document.body,
  )
}

export default CustomCursor