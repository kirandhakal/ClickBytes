'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Appointment {
  id: number
  doctor: string
  date: string
}

interface User {
  id: number
  fullName: string
  email: string
  phone: string
  role: 'User' | 'Doctor'
  gender: 'Male' | 'Female'
  address: string
  appointments: Appointment[]
}

// Dummy user data
const dummyUser: User = {
  id: 1,
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
  role: 'User',
  gender: 'Male',
  address: '123 Main St',
  appointments: [
    { id: 1, doctor: 'Dr. Smith', date: '2025-11-12' },
    { id: 2, doctor: 'Dr. Adams', date: '2025-11-14' },
  ],
}

// Dummy doctor list
const doctors = ['Dr. Smith', 'Dr. Adams', 'Dr. Johnson']

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [newAppointment, setNewAppointment] = useState({ doctor: '', date: '' })

  useEffect(() => {
    setUser(dummyUser)
  }, [])

  const handleAddAppointment = () => {
    if (!newAppointment.doctor || !newAppointment.date || !user) return

    const updatedAppointments = [
      ...user.appointments,
      { id: Date.now(), doctor: newAppointment.doctor, date: newAppointment.date },
    ]
    setUser({ ...user, appointments: updatedAppointments })
    setNewAppointment({ doctor: '', date: '' })
    setShowModal(false)
  }

  if (!user) return <div className="p-6 text-gray-500 text-lg">Loading...</div>

  return (
    <div className="p-8 max-w-4xl mx-auto">
       
      <h1 className="text-4xl font-bold text-blue-700 mb-8">User Dashboard</h1>
    

      {/* User Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Full Name</h2>
            <p className="text-gray-900 text-lg">{user.fullName}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Email</h2>
            <p className="text-gray-900 text-lg">{user.email}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Phone</h2>
            <p className="text-gray-900 text-lg">{user.phone}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Role</h2>
            <p className="text-gray-900 text-lg">{user.role}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Gender</h2>
            <p className="text-gray-900 text-lg">{user.gender}</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-700 text-lg">Address</h2>
            <p className="text-gray-900 text-lg">{user.address}</p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg font-semibold mt-4 "
          onClick={() => setShowModal(true)}
        >
          Book Appointment
        </button>
        <button
            className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition mx-4"
            onClick={() => window.location.href = '/'}
          >
            ← Back to Home
          </button>
      </motion.div>

      {/* Appointments List */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">My Appointments</h2>
        {user.appointments.length === 0 ? (
          <p className="text-green-500 text-lg">No appointments yet.</p>
        ) : (
          <ul className="space-y-3">
            {user.appointments.map(appt => (
              <motion.li
                key={appt.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border p-4 rounded-xl flex justify-between items-center hover:bg-green-50 transition text-lg text-black"
              >
                <span>
                  <strong>Doctor:</strong> {appt.doctor} | <strong>Date:</strong> {appt.date}
                </span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Booking */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Book Appointment</h2>
            <div className="flex flex-col gap-4">
              <select
                className="border border-gray-300 p-3 rounded-xl w-full text-gray-900 text-lg focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                value={newAppointment.doctor}
                onChange={e => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
              >
                <option value="">Select Doctor</option>
                {doctors.map(doc => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
              <input
                type="date"
                className="border border-gray-300 p-3 rounded-xl w-full text-gray-900 text-lg focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                value={newAppointment.date}
                onChange={e => setNewAppointment({ ...newAppointment, date: e.target.value })}
              />
            </div>
            <div className="flex justify-end mt-6 gap-4">
              <button
                className="bg-gray-300 px-6 py-2 rounded-xl hover:bg-gray-400 transition text-lg font-semibold"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition text-lg font-semibold"
                onClick={handleAddAppointment}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
