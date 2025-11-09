'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('User') // default role

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // static login----
    const dummyUsers = [
      { email: 'admin@gnail.com', password: 'admin', role: 'Admin' },
      { email: 'doctor@gmail.com', password: 'doctor', role: 'Doctor' },
      { email: 'user@gmail.com', password: 'user', role: 'User' },
    ]

    const matchedUser = dummyUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    )

    if (matchedUser) {
      
      switch (matchedUser.role) {
        case 'Admin':
          router.push('/admin')
          break
        case 'Doctor':
          router.push('/doctor')
          break
        case 'User':
          router.push('/user')
          break
        default:
          router.push('/')
      }
    } else {
      alert('Invalid credentials or role!')
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>User</option>
              <option>Doctor</option>
              <option>Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
}
