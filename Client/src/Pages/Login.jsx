import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { AdminContext } from '../Context/AdminContext'
import { DoctorContext } from '../Context/DoctorContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const { setAToken } = useContext(AdminContext)
  const { setDToken } = useContext(DoctorContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [role, setRole] = useState('User')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (role === 'User') {
        if (state === 'Sign Up') {
          const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
          if (data.success) {
            localStorage.setItem('token', data.token)
            setToken(data.token)
          } else {
            toast.error(data.message)
          }
        } else {
          const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
          if (data.success) {
            localStorage.setItem('token', data.token)
            setToken(data.token)
          } else {
            toast.error(data.message)
          }
        }
      } else if (role === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          localStorage.setItem('atoken', data.token)
          setAToken(data.token)
          navigate('/admin/dashboard')
        } else {
          toast.error(data.message)
        }
      } else if (role === 'Doctor') {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
        if (data.success) {
          localStorage.setItem('dToken', data.token)
          setDToken(data.token)
          navigate('/doctor/dashboard')
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'>
      <div className='flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100'>

        <div className='md:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 p-12 flex flex-col justify-center items-center text-white text-center gap-4'>
          <h2 className='text-4xl font-bold'>Welcome {role !== 'User' ? role : ''}!</h2>
          <p className='text-indigo-100 text-lg'>
            {role === 'Admin' ? 'Manage the system.' : role === 'Doctor' ? 'Check your appointments.' : 'Your journey to better health starts here.'}
          </p>
          <div className='w-24 h-1 bg-white/30 rounded-full mt-4'></div>
        </div>

        <form onSubmit={onSubmitHandler} className='md:w-1/2 p-10 sm:p-14 flex flex-col gap-4 bg-white'>
          <div className='mb-2'>
            <h3 className='text-2xl font-bold text-gray-800'>
              {role === 'User' ? (state === 'Sign Up' ? "Create Account" : "Login") : `${role} Login`}
            </h3>
            <p className='text-gray-500 text-sm'>Please {state === 'Sign Up' && role === 'User' ? "sign up" : "login"} to continue</p>
          </div>

          {state === "Sign Up" && role === 'User' && (
            <div className='w-full'>
              <p className='text-gray-600 font-medium ml-1'>Full Name</p>
              <input
                className='border border-gray-200 rounded-lg w-full p-3 mt-1 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div className='w-full'>
            <p className='text-gray-600 font-medium ml-1'>Email</p>
            <input
              className='border border-gray-200 rounded-lg w-full p-3 mt-1 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className='w-full'>
            <p className='text-gray-600 font-medium ml-1'>Password</p>
            <input
              className='border border-gray-200 rounded-lg w-full p-3 mt-1 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button type='submit' className='bg-indigo-600 text-white w-full py-3 rounded-lg text-lg font-semibold mt-4 hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95'>
            {state === 'Sign Up' && role === 'User' ? "Create account" : "Login"}
          </button>

          <div className='flex justify-between text-sm mt-2 text-gray-500'>
            {role === 'User' && state === 'Login' && (
              <p>Not a User? <span className='text-indigo-600 cursor-pointer underline' onClick={() => setRole('Admin')}>Admin Login</span></p>
            )}

            {role === 'Admin' && (
              <p>Not an Admin? <span className='text-indigo-600 cursor-pointer underline' onClick={() => { setRole('Doctor'); setEmail(''); setPassword('') }}>Doctor Login</span> | <span className='text-indigo-600 cursor-pointer underline' onClick={() => { setRole('User'); setState('Login'); setEmail(''); setPassword('') }}>User Login</span></p>
            )}

            {role === 'Doctor' && (
              <p>Not a Doctor? <span className='text-indigo-600 cursor-pointer underline' onClick={() => { setRole('User'); setState('Login'); setEmail(''); setPassword('') }}>User Login</span></p>
            )}
          </div>

          <div className='text-center mt-2'>
            {role === 'User' && (
              state === "Sign Up"
                ? <p className='text-gray-500'>Already have an account? <span onClick={() => setState('Login')} className='text-indigo-600 font-semibold cursor-pointer hover:underline'>Login here</span></p>
                : <p className='text-gray-500'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-indigo-600 font-semibold cursor-pointer hover:underline'>Click here</span></p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login