import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../Context/DoctorContext'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {
    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext)
    const { currency } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)

    const getDocProfile = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/profile', { headers: { dToken } })
            if (data.success) {
                setProfileData(data.profileData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getDocProfile()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        if (dToken) {
            getDocProfile()
        }
    }, [dToken])

    return profileData && (
        <div className='flex flex-col gap-6 p-6 sm:p-10 m-5 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-2xl'>

            <div className='flex gap-4 items-center'>
                <div className='w-24 sm:w-32 bg-indigo-50 rounded-2xl overflow-hidden'>
                    <img className='w-full object-cover' src={profileData.image} alt="" />
                </div>

                <div className='flex-1'>
                    <p className='text-3xl font-bold text-gray-800'>{profileData.name}</p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{profileData.degree} - {profileData.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full bg-gray-50'>{profileData.experience}</button>
                    </div>
                </div>
            </div>

            <div>
                <p className='flex items-center gap-1 font-medium text-gray-800 mt-3'>About :</p>
                <p className='text-sm text-gray-600 mt-1 max-w-[700px] leading-relaxed'>{profileData.about}</p>
            </div>

            <div className='text-gray-600 font-medium mt-4'>
                <p>Appointment fee: <span className='text-gray-800 ml-2'>
                    {isEdit ? <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} className='bg-gray-100 px-2 py-1 rounded w-20 outline-indigo-500' /> : `$ ${profileData.fees}`}
                </span></p>
            </div>

            <div className='flex gap-2 py-2'>
                <p className='text-gray-800 font-medium'>Address:</p>
                <div className='text-sm'>
                    {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} className='bg-gray-100 w-full mb-2 px-2 py-1 rounded outline-indigo-500' /> : <p>{profileData.address.line1}</p>}
                    {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} className='bg-gray-100 w-full px-2 py-1 rounded outline-indigo-500' /> : <p>{profileData.address.line2}</p>}
                </div>
            </div>

            <div className='flex items-center gap-1 mt-2 mb-4'>
                <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" id="" className='w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500' />
                <label className='text-gray-600 font-medium cursor-pointer'>Available</label>
            </div>

            {isEdit
                ? <button onClick={updateProfile} className='px-10 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95 w-max'>Save information</button>
                : <button onClick={() => setIsEdit(true)} className='px-10 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 hover:shadow transition-all active:scale-95 w-max'>Edit Profile</button>
            }

        </div>
    )
}

export default DoctorProfile
