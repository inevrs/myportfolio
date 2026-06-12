'use client'

import { useState, useRef } from 'react'

export default function SoundtrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Force the audio to play and instantly update the UI
        audioRef.current.play().catch(() => {}) 
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="soundtrack-player" style={{ zIndex: 9999 }}>
      {/* We use /myportfolio/ prefix because of your next.config.ts basePath */}
      <audio ref={audioRef} src="/myportfolio/lofi_soundtrack.mp3" loop />
      
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
      
      <div className="track-info">
        <span className="track-status">{isPlaying ? 'NOW PLAYING' : 'SOUNDTRACK'}</span>
        <span className={`track-title ${isPlaying ? 'scroll-text' : ''}`}>
          Lofi · Soundtrack
        </span>
      </div>
      
      {isPlaying && (
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </div>
  )
}
