'use client'

import { useEffect, useRef } from 'react'

const ASCII_ART = `   ,ooo                                                                                         ...                                                                                                                         
   ;//!                                                                                       ....                                                                                                           .....          
 .  Co+ .                                                                                    .....                                                                                                           .....          
 ::;;;,;:,                                                                                 ... ...                                                                                                           .....          
                                                                                          ........                                                                                                           .....          
                                                                                         .. ......                                                                                                           .....          
                                                                                       ...  .....                                                                                                            ......         
                                                                                      ... .......                                                                                                            ......         
                                                                                     ... .......                                                                                                            ...  ...        
                                                                                   .... .......                                                                                                            ... .. ...       
                                                                                  .... ........                                                                                                            ....... ...      
                                                                                ....  ..,.....                                                                                                            ... .,,.. ...     
                                                                              ....  ..,,,.....                                                                                                           ... ....,.. ...    
                                     ....                                  .....  ...,,,......                                                                                                        ......,,,...... ....  
                                   ........                             .....   ...,,,,,,.....                                                                                                      ...............,,,......
                                ....       ......                   .....    ....,,,,,,,,.....                                                                                               . ..........       ............
                              ...   .......   .. ....         ........   .....,,,,,,,,,,,.....                                                                                           ..   ........                   . .
                            .... . ..,,,,,....      ............  ...  ....,,,,,,,;;;,,,,......                                                         ...                        ................ .                       
                           ...  ..,,,,,,,.,,,,,,.                  ..,,,,,,,,,;;;::::,,,,... ..                                                         .............................    ...,....                           
                          ... ...,,,,,;;;;;,,,,.,,,,,,,,,,,,,,,,,,,,,,,,,,;;;;:::::::;,,,,... ..                                                       ...        ........           .....,...                              
                         .......,,,,;;:;:;:;;;;;,,,,,,,,,,,,,,,,,,,,;;;;;;;:;::::,,::;;,,,,... ..                                                     ... ...,,...        ..,,,,,,.........                                 
                        .... ..,,,,,:::::;:::::::;;;;;;;;;;;;;;;;;;;;:;::::::,;+:+;;:::;,,,,... ..                                                   ... ..,,,,,,,,,,,,,,,,,,,,,........                                    
                       ...  .,,,,,,;;:;;:;;,;,:::::::::::::::::::+::;:;,;;;:::..;::,:::;;,,,,... ...                                               .... ...,,,,,,,;,;,;,,,,,,,...,.,..                                      
                     .........,,,,,;;:;,::;;:::::;;;;;;;;;;;;;,;,;;:::::,;,,;;...;:+,::;:;,,,,...  ...                                           ....  ..,,,,,;;:;:;:;:;,,,,...,...                                         
                        ...,,...,,,,,;;:;,++,;;,,;;;,;,;,;,;,;,;,;,,;;;, . .::++.,;;+,:+:;;,,,,....  ...                                       ....  ...,,,,,;::+:+;:;;,,,,..,...                                           
                           ...,...,,,,;;:;,,:;;;                   ,+::+::::;;;:: ,,;:;,::;;,,,,,....  ....                                 .....  ....,,,,,;::;;,;;;;,,,.......                                            
                             ......,,,,,;;:;,::;; ::::::::::::::::::;;,,;,:+c+;::+  ,;:+;;+;;;,,,,,....   ....                            ....   ....,,,,,;;::;;;;:;;,,,,.....                                              
                               ......,,,,;;:;;+:;; ::;,;,,,,,,,,:++++c+++++++++;;::+ ,:;:;;;+;;;,,,,,,....   ...                      ....    ....,,,,,,;;::;,;,;;:;,,,......                                               
                                ......,,,,,;:;;:;;, ::;;++++++++++++++++++++c:;,,::::. ,:;:;;;+;;;,,,,,,,... .  ........       .........  . ...,,,,,,,;;::;;;:;;:;;,,,,.....                                                
                                 ......,,,,,;:,;:;;,.::;;++++++++++++++cc:;,;:::::   .,::;:;;;;;:;;;;,,.,,,,,.       ..............      ..,,,,,,,,;;::;;;;;:::;:;;,,,,.....                                                
                                  ......,,,,,;:;;:;,,.;;,;+++++++++++c:;;:;:::  ;;;;;::;;;;;:;;;:::::;;;,,,.,,,,,,..               ..,,,,,,,,,,;;;;::;::;;:::;:::;,,,......                                                 
                                   ......,,,,;::,:;;; ::;,+++++++c+c:;;;:+;..;,;;;;;;:::;,;,;::;;,;,;,;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;;;::;;::;,:+::;:;:;:;,,,.....                                                  
                                    ......,,,,;;,,:;;.,:;,;++++++:::;;::.,;,,;;:;::;;,;;:;;;;,;,;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;;;:;:;:::,,::::;;;:;,:;;,,,,.....                                                  
                                     .....,,,,;:;;:;;; ;;;,++++::;,;:;,;.,;;:+:,,,;:;;;,;,,,,,,.................,,,,,,,,,,,,;;;;,,,;;;;;;;;;;;;;;;:::;,,,::::;:;;,,,,.....                                                  
                                     ......,,,;;;,,:;; ;::;++::;,::;,;.:;:++,,;:;;;;,,,,.........,.,.,,,,,.,,,,.......,,,,,,;;;;;,,,,,,,,,,,,,,,,,,;;;;;;;:,,;:;;,,,,.....                                                  
                                     ......,,,;;::;:;; ;:;;:+;,:::;,.:;:+:,,::;;,,,,...........,......    .....,....,.....,,,,......................,,,,,,;;;;:;;,,,,.....                                                  
                                      .....,,,,;::;:;; ::;;,,;:::,.:;:+:,::;;;,,,,......,...                       ..........,..,.......................,,,,,,;;;;,,,.....                                                  
                                      .....,,,,;:;;:;; ::;;,;::..:;:+:,:;;;,,,,,....,...                              ................. ... ..............,.,,,,,,,,,... ..                                                 
                                      .....,,,,;::;:;; ::;:::+..:;;:,;;;;,,,,,.......                                    ......                    ...........,,,,,,,.......                                                
                                      .....,,,;;;;,;;; ;::;+. .:;+;;;:;;,,,,......                                                                      .........,,,,,,......                                               
                                      .....,,,;;;;;:;; ;:;+, .::;:;:;;,,,,,.....                                                                            .......,,,,,......                                              
                                      .....,,,;:;;::;. :;+. .:;:;;;::,,,....,.                                                                               ........,,,,.  ...                                             
                                      ....,,,,;:;;:;;  ;+,.,;:;:,:;;;,,,.....                                                                                   ..,....,,,.. ....                                           
                                      .....,,,;:;;:;;  :,.;:;:;;;:;,,,,......                                                                                    . .....,,,..  ...                                          
                                      ....,,,,;:;;:;;  , ;:;::,;:;,,,,......                                                                                       ......,,,,.. .....                                       
                                      ....,,,,;:;;:;,.. ::;:;;::;;,,,......                                                                                         ............   .....                                    
                                      ....,,,,;:;;:;;;::;:c;;:;;;,,,......                                                                                           ..,,,.,.,,,,,,......                                   
                                     .....,,,,;::;:;;;;;:;,:::,,,,,..,...                                                                                             ..             ...                                    
                                     ......,,,;::;::;::+;;::;;,,,,.....                                                                                                                                                     
                                    ... ..,,,,;::,;:+;,;;:;;;,,,......                                                                                                                                                      
                                   ..  ...,,,,;;:;;;;::;;:;,,,,.....                                                                                                                                                        
                                 . . ...,,,,,;;;;;;;;:::;;,,,......                                                                                                                                                         
                              ...    .,,,,,,;;;::;::;:;;,,,,......                                                                                                                                                          
                          ....   ..,,,,,,,;;;::::;::;::,,,,......                                                                                                                                                           
                       ....   ...,,,,,,,;;;::;:::;;;;;;,,,,......                                                                                                                                                           `

interface Ripple {
  x: number
  y: number
  radius: number
  strength: number
  speed: number
  decay: number
  wavelength: number
}

const SHIMMER_CHARS = ' .,;:+cCoxwkI?HO!/'
const ART_ROWS = ASCII_ART.split('\n')
const NUM_ROWS = ART_ROWS.length
const NUM_COLS = Math.max(...ART_ROWS.map(r => r.length))

// Pre-build the original grid once at module level
const ORIGINAL_GRID: string[][] = ART_ROWS.map(r => r.padEnd(NUM_COLS, ' ').split(''))

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture as non-null for use inside nested functions
    const context = ctx
    const cvs = canvas

    // --- State ---
    let cellW = 0
    let cellH = 0
    let fontSize = 0
    let animFrameId = 0
    let isRunningLoop = false
    let lastMove = 0

    const shimmerOffsets = new Int8Array(NUM_ROWS * NUM_COLS)
    const sparkleOffsets = new Uint8Array(NUM_ROWS * NUM_COLS)
    // display grid — what's currently shown; used for dirty checking
    const displayGrid: string[][] = ORIGINAL_GRID.map(r => [...r])
    // prev grid — what was drawn last frame
    const prevGrid: string[][] = ORIGINAL_GRID.map(r => [...r])
    let ripples: Ripple[] = []

    // --- Sizing ---
    function computeSize() {
      const testSize = 16
      context.font = `${testSize}px 'Share Tech Mono', monospace`
      const metrics = context.measureText('M')
      const charW = metrics.width
      // Use actual measured height: ascent + descent
      const charH = testSize * 1.2

      const scaleX = window.innerWidth  / (NUM_COLS * charW  / testSize)
      const scaleY = window.innerHeight / (NUM_ROWS * charH  / testSize)
      fontSize = Math.min(scaleX, scaleY)
      cellW = fontSize * (charW / testSize)
      cellH = fontSize * 1.2

      cvs.width  = Math.ceil(NUM_COLS * cellW)
      cvs.height = Math.ceil(NUM_ROWS * cellH)

      // After resize, force full redraw
      for (let r = 0; r < NUM_ROWS; r++)
        for (let c = 0; c < NUM_COLS; c++)
          prevGrid[r][c] = ''
    }

    // --- Draw only changed cells ---
    function flushDirty() {
      context.font = `${fontSize}px 'Share Tech Mono', monospace`
      context.textBaseline = 'top'

      for (let r = 0; r < NUM_ROWS; r++) {
        for (let c = 0; c < NUM_COLS; c++) {
          const ch = displayGrid[r][c]
          if (ch === prevGrid[r][c]) continue   // skip unchanged
          prevGrid[r][c] = ch

          const x = c * cellW
          const y = r * cellH

          // Erase old cell
          context.clearRect(x, y, cellW + 1, cellH + 1)

          if (ch === ' ') continue

          // Moonlight glow layers
          context.fillStyle = 'rgba(150,190,255,0.15)'
          context.fillText(ch, x, y)
          context.fillStyle = 'rgba(180,210,255,0.35)'
          context.fillText(ch, x, y)
          context.fillStyle = 'rgba(232,240,255,0.70)'
          context.fillText(ch, x, y)
        }
      }
    }

    // --- Build display from state, then flush dirty ---
    function buildAndFlush() {
      for (let r = 0; r < NUM_ROWS; r++) {
        for (let c = 0; c < NUM_COLS; c++) {
          const idx = r * NUM_COLS + c
          const orig = ORIGINAL_GRID[r][c]

          if (sparkleOffsets[idx] > 0) {
            displayGrid[r][c] = sparkleOffsets[idx] > 2 ? 'O' : (orig === ' ' ? '.' : orig.toUpperCase())
            continue
          }

          if (orig === ' ') {
            displayGrid[r][c] = ' '
            continue
          }

          const offset = shimmerOffsets[idx]
          if (offset !== 0) {
            const i = SHIMMER_CHARS.indexOf(orig)
            if (i !== -1) {
              const ni = Math.max(0, Math.min(SHIMMER_CHARS.length - 1, i + offset))
              displayGrid[r][c] = SHIMMER_CHARS[ni]
              continue
            }
          }

          displayGrid[r][c] = orig
        }
      }
      flushDirty()
    }

    // --- Ripple loop ---
    function runRippleLoop() {
      if (ripples.length === 0) {
        isRunningLoop = false
        buildAndFlush()
        return
      }
      isRunningLoop = true

      // Reset display to base + shimmer first
      for (let r = 0; r < NUM_ROWS; r++) {
        for (let c = 0; c < NUM_COLS; c++) {
          const idx = r * NUM_COLS + c
          const orig = ORIGINAL_GRID[r][c]
          if (sparkleOffsets[idx] > 0) {
            displayGrid[r][c] = sparkleOffsets[idx] > 2 ? 'O' : (orig === ' ' ? '.' : orig.toUpperCase())
          } else if (orig === ' ') {
            displayGrid[r][c] = ' '
          } else {
            const offset = shimmerOffsets[idx]
            if (offset !== 0) {
              const i = SHIMMER_CHARS.indexOf(orig)
              displayGrid[r][c] = i !== -1
                ? SHIMMER_CHARS[Math.max(0, Math.min(SHIMMER_CHARS.length - 1, i + offset))]
                : orig
            } else {
              displayGrid[r][c] = orig
            }
          }
        }
      }

      // Apply ripples
      ripples = ripples.filter(ripple => {
        ripple.radius += ripple.speed
        ripple.strength *= ripple.decay
        return ripple.strength > 0.03
      })

      for (const ripple of ripples) {
        for (let r = 0; r < NUM_ROWS; r++) {
          for (let c = 0; c < NUM_COLS; c++) {
            const dr = (r - ripple.y) * 2.1
            const dc = c - ripple.x
            const dist = Math.sqrt(dr * dr + dc * dc)
            const wave = Math.sin((dist - ripple.radius) * (Math.PI / ripple.wavelength))
            const envelope = ripple.strength * Math.exp(-Math.abs(dist - ripple.radius) * 0.4)
            const effect = wave * envelope
            if (Math.abs(effect) < 0.05) continue

            const idx = r * NUM_COLS + c
            if (sparkleOffsets[idx] > 0) continue

            const orig = ORIGINAL_GRID[r][c]
            const baseIdx = orig === ' ' ? 0 : Math.max(0, SHIMMER_CHARS.indexOf(orig))
            const shift = Math.round(effect * (SHIMMER_CHARS.length - 1) * 0.5)
            const newIdx = Math.max(0, Math.min(SHIMMER_CHARS.length - 1, baseIdx + shift))
            displayGrid[r][c] = SHIMMER_CHARS[newIdx]
          }
        }
      }

      flushDirty()
      animFrameId = requestAnimationFrame(runRippleLoop)
    }

    function addRipple(x: number, y: number, opts: Partial<Ripple> = {}) {
      ripples.push({
        x, y,
        radius: 0,
        strength: opts.strength ?? 0.6,
        speed:    opts.speed    ?? 0.8,
        decay:    opts.decay    ?? 0.94,
        wavelength: opts.wavelength ?? 4,
      })
    }

    // --- Event handlers ---
    const handleMouseMove = (e: MouseEvent) => {
      const rect = cvs.getBoundingClientRect()
      const scaleX = cvs.width  / rect.width
      const scaleY = cvs.height / rect.height
      const px = (e.clientX - rect.left) * scaleX
      const py = (e.clientY - rect.top)  * scaleY
      const col = Math.floor(px / cellW)
      const row = Math.floor(py / cellH)
      if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
        addRipple(col, row, { strength: 0.5, speed: 0.7, decay: 0.96, wavelength: 3 })
        if (!isRunningLoop) runRippleLoop()
      }
    }

    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMove > 50) { lastMove = now; handleMouseMove(e) }
    }

    const handleClick = (e: MouseEvent) => {
      const rect = cvs.getBoundingClientRect()
      const scaleX = cvs.width  / rect.width
      const scaleY = cvs.height / rect.height
      const px = (e.clientX - rect.left) * scaleX
      const py = (e.clientY - rect.top)  * scaleY
      const col = Math.floor(px / cellW)
      const row = Math.floor(py / cellH)
      if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
        addRipple(col, row, { strength: 1.0, speed: 1.2, decay: 0.90, wavelength: 6 })
        if (!isRunningLoop) runRippleLoop()
      }
    }

    const handleResize = () => {
      computeSize()
      buildAndFlush()
    }

    // --- Shimmer / sparkle intervals ---
    const shimmerInterval = setInterval(() => {
      for (let i = 0; i < sparkleOffsets.length; i++)
        if (sparkleOffsets[i] > 0) sparkleOffsets[i]--

      const numSparkles = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < numSparkles; i++) {
        const r = Math.floor(Math.random() * NUM_ROWS)
        const c = Math.floor(Math.random() * NUM_COLS)
        const idx = r * NUM_COLS + c
        const orig = ORIGINAL_GRID[r][c]
        sparkleOffsets[idx] = orig === ' '
          ? (Math.random() < 0.12 ? Math.floor(Math.random() * 3) + 2 : 0)
          : Math.floor(Math.random() * 4) + 3
      }

      const numChanges = Math.floor(Math.random() * 6) + 2
      for (let i = 0; i < numChanges; i++) {
        const r = Math.floor(Math.random() * NUM_ROWS)
        const c = Math.floor(Math.random() * NUM_COLS)
        if (ORIGINAL_GRID[r][c] === ' ') continue
        shimmerOffsets[r * NUM_COLS + c] = (Math.floor(Math.random() * 3) - 1) as -1 | 0 | 1
      }

      if (!isRunningLoop) buildAndFlush()
    }, 70)

    const resetInterval = setInterval(() => {
      shimmerOffsets.fill(0)
      sparkleOffsets.fill(0)
      if (!isRunningLoop) buildAndFlush()
    }, 5000)

    // --- Init ---
    computeSize()
    document.fonts.ready.then(() => {
      computeSize()
      buildAndFlush()
    })
    buildAndFlush()

    window.addEventListener('mousemove', throttledMouseMove)
    window.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      clearInterval(shimmerInterval)
      clearInterval(resetInterval)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <div id="ascii-bg" className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ imageRendering: 'pixelated', pointerEvents: 'auto' }}
      />
    </div>
  )
}
