'use client'

import { useState, useRef } from 'react'

export default function SoundtrackPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) return
    setErrorMsg('')
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log('Audio play blocked:', err)
          setErrorMsg(err.toString())
          setIsPlaying(false)
        })
    }
  }

  return (
    <div className="soundtrack-player" style={{ zIndex: 9999 }}>
      <audio ref={audioRef} preload="auto" loop>
        <source src="/myportfolio/lofi-soundtrack.mp3?v=2" type="audio/mpeg" />
      </audio>
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <div className="track-info">
        <span className="track-status">
          {errorMsg ? 'ERROR' : (isPlaying ? 'NOW PLAYING' : 'SOUNDTRACK')}
        </span>
        <span className={`track-title ${isPlaying ? 'scroll-text' : ''}`}>
          {errorMsg ? errorMsg : 'Lofi · Soundtrack'}
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
