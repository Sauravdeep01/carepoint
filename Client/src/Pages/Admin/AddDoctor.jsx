import React, { useContext, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!docImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()
            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setEmail('')
                setPassword('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 md:m-10 w-full'>
            <p className='mb-6 text-2xl font-semibold text-gray-700'>Add New Doctor</p>

            <div className='bg-white px-8 py-8 border rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-y-scroll shadow-sm'>
                <div className='flex items-center gap-6 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-24 h-24 bg-gray-100 rounded-full cursor-pointer object-cover border-4 border-gray-50 hover:border-indigo-100 transition-all' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p className='text-sm'>Upload doctor <br /> picture</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600 font-medium'>
                    <div className='w-full lg:flex-1 flex flex-col gap-5'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Doctor name</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Doctor Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Doctor Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Experience</p>
                            <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm'>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Fees</p>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="number" placeholder='Fees' required />
                        </div>
                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-5'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Speciality</p>
                            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm'>
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Education</p>
                            <input onChange={(e) => setDegree(e.target.value)} value={degree} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="text" placeholder='Education' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm mb-1'>Address</p>
                            <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm mb-2' type="text" placeholder='Address 1' required />
                            <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded-lg px-3 py-2.5 outline-indigo-500 md:text-sm' type="text" placeholder='Address 2' required />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='mb-2 text-gray-600 font-medium'>About Doctor</p>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded-lg outline-indigo-500 md:text-sm font-light' placeholder='Write about doctor' rows={5} required />
                </div>

                <button type='submit' className='bg-indigo-600 px-10 py-3 mt-8 text-white rounded-full font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95'>Add doctor</button>
            </div>
        </form>
    )
}

export default AddDoctor
