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

export default function AsciiBackground() {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const pre = preRef.current
    if (!pre) return

    const rows = ASCII_ART.split('\n')
    const numRows = rows.length
    const numCols = Math.max(...rows.map(r => r.length))
    const shimmerChars = ' .,;:+cCoxwkI?HO!/'

    const originalGrid: string[][] = rows.map(r => r.padEnd(numCols, ' ').split(''))
    const shimmerOffsets: number[] = new Array(numRows * numCols).fill(0)
    const sparkleOffsets: number[] = new Array(numRows * numCols).fill(0)

    let ripples: Ripple[] = []
    let isRunningLoop = false
    let animFrameId: number

    function addRipple(x: number, y: number, opts: Partial<Ripple> = {}) {
      ripples.push({
        x, y,
        radius: 0,
        strength: opts.strength ?? 0.6,
        speed: opts.speed ?? 0.8,
        decay: opts.decay ?? 0.94,
        wavelength: opts.wavelength ?? 4,
      })
    }

    function renderStaticWithShimmer() {
      const displayGrid: string[][] = originalGrid.map(r => [...r])
      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const idx = r * numCols + c
          const orig = originalGrid[r][c]
          if (sparkleOffsets[idx] > 0) {
            displayGrid[r][c] = sparkleOffsets[idx] > 2 ? 'O' : (orig === ' ' ? '.' : orig.toUpperCase())
            continue
          }
          if (orig === ' ') continue
          const offset = shimmerOffsets[idx]
          if (offset !== 0) {
            const i = shimmerChars.indexOf(orig)
            if (i !== -1) {
              const ni = Math.max(0, Math.min(shimmerChars.length - 1, i + offset))
              displayGrid[r][c] = shimmerChars[ni]
            }
          }
        }
      }
      pre.textContent = displayGrid.map(r => r.join('')).join('\n')
    }

    function runRippleLoop() {
      if (ripples.length === 0) {
        isRunningLoop = false
        renderStaticWithShimmer()
        return
      }
      isRunningLoop = true
      const displayGrid: string[][] = originalGrid.map(r => [...r])

      ripples = ripples.filter(ripple => {
        ripple.radius += ripple.speed
        ripple.strength *= ripple.decay
        return ripple.strength > 0.03
      })

      for (const ripple of ripples) {
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numCols; c++) {
            const dr = (r - ripple.y) * 2.1
            const dc = c - ripple.x
            const dist = Math.sqrt(dr * dr + dc * dc)
            const wave = Math.sin((dist - ripple.radius) * (Math.PI / ripple.wavelength))
            const envelope = ripple.strength * Math.exp(-Math.abs(dist - ripple.radius) * 0.4)
            const effect = wave * envelope

            if (Math.abs(effect) < 0.05) continue

            const orig = originalGrid[r][c]
            const idx = r * numCols + c
            if (sparkleOffsets[idx] > 0) continue

            const baseIdx = orig === ' ' ? 0 : Math.max(0, shimmerChars.indexOf(orig))
            const shift = Math.round(effect * (shimmerChars.length - 1) * 0.5)
            const newIdx = Math.max(0, Math.min(shimmerChars.length - 1, baseIdx + shift))
            displayGrid[r][c] = shimmerChars[newIdx]
          }
        }
      }

      // Apply sparkles on top
      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const idx = r * numCols + c
          if (sparkleOffsets[idx] > 0) {
            const orig = originalGrid[r][c]
            displayGrid[r][c] = sparkleOffsets[idx] > 2 ? 'O' : (orig === ' ' ? '.' : orig.toUpperCase())
          }
        }
      }

      pre.textContent = displayGrid.map(r => r.join('')).join('\n')
      animFrameId = requestAnimationFrame(runRippleLoop)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = pre.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const col = Math.floor(((e.clientX - rect.left) / rect.width) * numCols)
      const row = Math.floor(((e.clientY - rect.top) / rect.height) * numRows)
      if (col >= 0 && col < numCols && row >= 0 && row < numRows) {
        addRipple(col, row, { strength: 0.5, speed: 0.7, decay: 0.96, wavelength: 3 })
        if (!isRunningLoop) runRippleLoop()
      }
    }

    const handleClick = (e: MouseEvent) => {
      const rect = pre.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const col = Math.floor(((e.clientX - rect.left) / rect.width) * numCols)
      const row = Math.floor(((e.clientY - rect.top) / rect.height) * numRows)
      if (col >= 0 && col < numCols && row >= 0 && row < numRows) {
        addRipple(col, row, { strength: 1.0, speed: 1.2, decay: 0.90, wavelength: 6 })
        if (!isRunningLoop) runRippleLoop()
      }
    }

    let lastMove = 0
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMove > 50) { lastMove = now; handleMouseMove(e) }
    }

    window.addEventListener('mousemove', throttledMouseMove)
    window.addEventListener('click', handleClick)

    const shimmerInterval = setInterval(() => {
      for (let i = 0; i < sparkleOffsets.length; i++) {
        if (sparkleOffsets[i] > 0) sparkleOffsets[i] -= 1
      }
      const numSparkles = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < numSparkles; i++) {
        const r = Math.floor(Math.random() * numRows)
        const c = Math.floor(Math.random() * numCols)
        const idx = r * numCols + c
        const origChar = originalGrid[r]?.[c] ?? ' '
        if (origChar === ' ') {
          if (Math.random() < 0.12) sparkleOffsets[idx] = Math.floor(Math.random() * 3) + 2
        } else {
          sparkleOffsets[idx] = Math.floor(Math.random() * 4) + 3
        }
      }
      const numChanges = Math.floor(Math.random() * 6) + 2
      for (let i = 0; i < numChanges; i++) {
        const r = Math.floor(Math.random() * numRows)
        const c = Math.floor(Math.random() * numCols)
        const origChar = originalGrid[r]?.[c] ?? ' '
        if (origChar === ' ') continue
        const idx = r * numCols + c
        shimmerOffsets[idx] = Math.floor(Math.random() * 3) - 1
      }
      if (!isRunningLoop) renderStaticWithShimmer()
    }, 70)

    const resetInterval = setInterval(() => {
      shimmerOffsets.fill(0)
      sparkleOffsets.fill(0)
      if (!isRunningLoop) pre.textContent = ASCII_ART
    }, 5000)

    renderStaticWithShimmer()

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      window.removeEventListener('click', handleClick)
      clearInterval(shimmerInterval)
      clearInterval(resetInterval)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <div id="ascii-bg">
      <pre ref={preRef} id="ascii-figure" />
    </div>
  )
}
