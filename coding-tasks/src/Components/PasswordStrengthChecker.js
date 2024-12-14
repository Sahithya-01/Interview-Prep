import React, { useState } from 'react'

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')

  const handleTextChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    checkPasswordStrength(newPassword)
  }

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      setStrength('Weak')
    } else if (password.length <= 12) {
      setStrength('Medium')
    } else {
      setStrength('Strong')
    }
  }

  return (
    <div>
      <p>Enter Password:</p>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={handleTextChange}
      />
      <p>Password Strength: {strength}</p>
    </div>
  )
}

export default PasswordStrengthChecker
