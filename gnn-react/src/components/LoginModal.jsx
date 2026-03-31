import { useState, useEffect } from 'react'

export default function LoginModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const open = () => setShow(true)
    document.addEventListener('openLogin', open)
    return () => document.removeEventListener('openLogin', open)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const user = e.target.username.value.trim()
    const pass = e.target.password.value.trim()
    if (user && pass) {
      alert(`Logged in as ${user}`)
      setShow(false)
    } else {
      alert('Please enter both username and password.')
    }
  }

  if (!show) return null

  return (
    <div
      className="login-modal show"
      aria-hidden={!show}
      onClick={(e) => { if (e.target === e.currentTarget) setShow(false) }}
    >
      <div className="modal-content">
        <span className="close-btn" aria-label="Close" onClick={() => setShow(false)}>&times;</span>
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit" className="btn-login">Submit</button>
        </form>
      </div>
    </div>
  )
}
