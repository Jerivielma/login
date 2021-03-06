import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ForgotPassword() {

  // const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(email)
      setMessage('Revisa tu bandeja de entrada y sigue las instrucciones')
    } catch {
      setError('Fallo al restaurar tu password')
    }

    setLoading(false)
  }

  return (
    <div>
      <section className="login">
        <div className="loginContainer">
          <h1>Recuperar contraseña</h1>
          { error && <h1>{error}</h1> }
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type='email'
              autoFocus
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="btnContainer">
              <button type='submit' disabled={loading}>Restaurar password</button>
              <p><Link to='/login'><span>Regresear</span></Link></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
