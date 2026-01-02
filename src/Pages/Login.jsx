import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'>
      {/* Main Container: Split Design */}
      <div className='flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100'>
        
        {/* Left Side: Welcome Panel (Gradient) */}
        <div className='md:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 p-12 flex flex-col justify-center items-center text-white text-center gap-4'>
          <h2 className='text-4xl font-bold'>Welcome to Sign Up!</h2>
          <p className='text-indigo-100 text-lg'>Your journey to better health starts here.</p>
          <div className='w-24 h-1 bg-white/30 rounded-full mt-4'></div>
        </div>

        {/* Right Side: Form Panel */}
        <form onSubmit={onSubmitHandler} className='md:w-1/2 p-10 sm:p-14 flex flex-col gap-4 bg-white'>
          <div className='mb-2'>
            <h3 className='text-2xl font-bold text-gray-800'>Create Account</h3>
            <p className='text-gray-500 text-sm'>Please sign up to book appointment</p>
          </div>
          
          {state === "Sign Up" && (
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
            {state === 'Sign Up' ? "Create account" : "Login"}
          </button>

          <div className='text-center mt-2'>
            {state === "Sign Up" 
              ? <p className='text-gray-500'>Already have an account? <span onClick={() => setState('Login')} className='text-indigo-600 font-semibold cursor-pointer hover:underline'>Login here</span></p>
              : <p className='text-gray-500'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-indigo-600 font-semibold cursor-pointer hover:underline'>Click here</span></p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login