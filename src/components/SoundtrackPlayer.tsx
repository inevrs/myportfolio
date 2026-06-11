'use client'

import { useState, useRef } from 'react'

export default function SoundtrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log('Audio play blocked:', err)
          setIsPlaying(true)
        })
    }
  }

  return (
    <div className="soundtrack-player" style={{ zIndex: 9999 }}>
      <audio ref={audioRef} src="https://stream.zeno.fm/0r0xa792kwzuv" preload="none" />
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <div className="track-info">
        <span className="track-status">{isPlaying ? 'NOW PLAYING' : 'SOUNDTRACK'}</span>
        <span className={`track-title ${isPlaying ? 'scroll-text' : ''}`}>
          lofi beats · study / relax radio
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
