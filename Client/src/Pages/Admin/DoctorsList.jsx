import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([])
    const { aToken, backendUrl } = useContext(AdminContext)

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (aToken) {
            getAllDoctors()
        }
    }, [aToken])

    return (
        <div className='m-5 md:m-10 max-h-[90vh] overflow-y-scroll'>
            <h1 className='text-2xl font-semibold text-gray-700 mb-6'>All Doctors</h1>
            <div className='w-full flex flex-wrap gap-6'>
                {doctors.map((item, index) => (
                    <div className='border border-gray-100 bg-white rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 max-w-56' key={index}>
                        <img className='bg-indigo-50 group-hover:bg-indigo-600 transition-colors duration-500 w-full h-48 object-cover' src={item.image} alt="" />
                        <div className='p-4'>
                            <p className='text-gray-800 text-lg font-semibold'>{item.name}</p>
                            <p className='text-indigo-600 text-sm font-medium'>{item.speciality}</p>
                            <div className='mt-3 flex items-center gap-2 text-sm'>
                                <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} className='w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500' />
                                <p className={item.available ? 'text-green-500 font-medium' : 'text-gray-400'}>{item.available ? 'Available' : 'Unavailable'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsList
