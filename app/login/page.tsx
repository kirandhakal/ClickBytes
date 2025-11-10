'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('User')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate async login (replace with actual API call in production)
    const dummyUsers = [
      { email: 'admin@gmail.com', password: 'admin', role: 'Admin' },
      { email: 'doctor@gmail.com', password: 'doctor', role: 'Doctor' },
      { email: 'user@gmail.com', password: 'user', role: 'User' },
    ]

    const matchedUser = dummyUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    )

    setTimeout(() => {
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
        }
      } else {
        setError('Invalid email, password, or role!')
        setIsLoading(false)
      }
    }, 1000) // Simulate network delay
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center tracking-tight">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to access your personalized dashboard
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 text-red-600 p-3 rounded-lg mb-6 text-sm text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
              aria-required="true"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
              aria-required="true"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              aria-required="true"
            >
              <option value="User">User</option>
              <option value="Doctor">Doctor</option>
              <option value="Admin">Admin</option>
            </select>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-200 flex items-center justify-center ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Don’t have an account?{' '}
          <Link
            href="/signup"
            className="text-blue-600 font-semibold hover:underline transition"
          >
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </section>
  )
}