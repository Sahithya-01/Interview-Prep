import React, { useState,useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      console.log('Sound is playing')
      clearInterval(timer)
      setIsRunning(false)
    }

    return () => clearInterval(timer)
  }, [isRunning, timeLeft])

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(60)
  }

  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }
  return (
    <div>
      <p>Time Left:{timeLeft}</p>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CountdownTimer
