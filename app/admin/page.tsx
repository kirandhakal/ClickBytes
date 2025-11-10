'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface User {
  id: number
  fullName: string
  email: string
  phone: string
  role: 'User' | 'Doctor'
  gender: 'Male' | 'Female'
  address: string
  appointmentTime: string
  assignedDoctor: string
}

export default function AdminUserPage() {
  // Dummy data
  const initialUsers: User[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      role: 'User',
      gender: 'Male',
      address: '123 Main St',
      appointmentTime: '10:00',
      assignedDoctor: 'Dr. Smith',
    },
    {
      id: 2,
      fullName: 'Jane Roe',
      email: 'jane@example.com',
      phone: '987-654-3210',
      role: 'Doctor',
      gender: 'Female',
      address: '456 Park Ave',
      appointmentTime: '11:30',
      assignedDoctor: 'Dr. Adams',
    },
    {
      id: 3,
      fullName: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '555-123-4567',
      role: 'User',
      gender: 'Female',
      address: '789 Elm St',
      appointmentTime: '14:00',
      assignedDoctor: 'Dr. Smith',
    },
  ]

  const [users, setUsers] = useState<User[]>(initialUsers)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState<Omit<User, 'id'>>({
    fullName: '',
    email: '',
    phone: '',
    role: 'User',
    gender: 'Male',
    address: '',
    appointmentTime: '',
    assignedDoctor: '',
  })

  // Add new user
  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(),
      ...form,
    }
    setUsers([...users, newUser])
    setForm({
      fullName: '',
      email: '',
      phone: '',
      role: 'User',
      gender: 'Male',
      address: '',
      appointmentTime: '',
      assignedDoctor: '',
    })
    setShowModal(false)
  }

  // Delete user
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Edit user inline
  const handleEditUser = (id: number, key: keyof User, value: string) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, [key]: value } : user))
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin – User List</h1>

      {/* Add New User Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-700 transition"
        onClick={() => setShowModal(true)}
      >
        Add New User
      </button>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Add New User</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />
              <select
                className="border border-gray-300 p-2 rounded-md text-gray-900 w-full"
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value as 'User' | 'Doctor' })}
              >
                <option value="User">User</option>
                <option value="Doctor">Doctor</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded-md text-gray-900 w-full"
                value={form.gender}
                onChange={e => setForm({ ...form, gender: e.target.value as 'Male' | 'Female' })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
              />
              <input
                type="time"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.appointmentTime}
                onChange={e => setForm({ ...form, appointmentTime: e.target.value })}
              />
              <input
                type="text"
                placeholder="Assigned Doctor"
                className="border border-gray-300 p-2 rounded-md w-full text-gray-900"
                value={form.assignedDoctor}
                onChange={e => setForm({ ...form, assignedDoctor: e.target.value })}
              />
            </div>
            <div className="flex justify-end mt-4 gap-3">
              <button
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full min-w-[900px] text-left border-collapse text-gray-800">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Appointment Time</th>
              <th className="py-2 px-4">Assigned Doctor</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {users.map(user => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {(['fullName','email','phone','role','gender','address','appointmentTime','assignedDoctor'] as (keyof User)[]).map(key => (
                    <td key={key} className="py-2 px-2">
                      {key === 'role' ? (
                        <select
                          value={user.role}
                          onChange={e => handleEditUser(user.id, key, e.target.value)}
                          className="border border-gray-300 p-1 rounded-md w-full text-gray-900 focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                        >
                          <option value="User">User</option>
                          <option value="Doctor">Doctor</option>
                        </select>
                      ) : key === 'gender' ? (
                        <select
                          value={user.gender}
                          onChange={e => handleEditUser(user.id, key, e.target.value)}
                          className="border border-gray-300 p-1 rounded-md w-full text-gray-900 focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      ) : key === 'appointmentTime' ? (
                        <input
                          type="time"
                          value={user.appointmentTime}
                          onChange={e => handleEditUser(user.id, key, e.target.value)}
                          className="border border-gray-300 p-1 rounded-md w-full text-gray-900 focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                        />
                      ) : (
                        <input
                          type="text"
                          value={user[key]}
                          onChange={e => handleEditUser(user.id, key, e.target.value)}
                          className="border border-gray-300 p-1 rounded-md w-full text-gray-900 focus:outline-blue-500 focus:ring-1 focus:ring-blue-400"
                        />
                      )}
                    </td>
                  ))}
                  <td className="py-2 px-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>

            {users.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
