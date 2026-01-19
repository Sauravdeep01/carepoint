import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const { aToken, backendUrl } = useContext(AdminContext)

    const getAllAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })
            if (data.success) {
                setAppointments(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (aToken) {
            getAllAppointments()
        }
    }, [aToken])

    return (
        <div className='w-full max-w-6xl m-5 md:m-10'>
            <p className='mb-6 text-2xl font-semibold text-gray-700'>All Appointments</p>

            <div className='bg-white border rounded-2xl shadow-sm overflow-hidden min-h-[60vh]'>
                <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 border-b bg-gray-50 text-gray-600 font-medium text-sm'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p>Actions</p>
                </div>

                <div className='divide-y divide-gray-100 max-h-[80vh] overflow-y-scroll'>
                    {appointments.map((item, index) => (
                        <div className='flex flex-wrap justify-between max-sm:gap-4 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-4 px-6 hover:bg-gray-50 transition-colors' key={index}>
                            <p className='max-sm:hidden font-medium text-gray-800'>{index + 1}</p>
                            <div className='flex items-center gap-3'>
                                <img className='w-10 h-10 rounded-full object-cover border' src={item.userData.image} alt="" />
                                <p className='font-medium text-gray-800'>{item.userData.name}</p>
                            </div>
                            <p className='max-sm:hidden'>{item.userData.age || 'N/A'}</p>
                            <p>{item.slotDate}, {item.slotTime}</p>
                            <div className='flex items-center gap-3'>
                                <img className='w-10 h-10 rounded-full bg-gray-100 object-cover border' src={item.docData.image} alt="" />
                                <p className='font-medium text-gray-800'>{item.docData.name}</p>
                            </div>
                            <p className='font-medium'>$ {item.docData.fees}</p>
                            {item.cancelled ? (
                                <p className='text-red-400 text-xs font-semibold border border-red-100 bg-red-50 px-3 py-1 rounded-full'>Cancelled</p>
                            ) : item.isCompleted ? (
                                <p className='text-green-500 text-xs font-semibold border border-green-100 bg-green-50 px-3 py-1 rounded-full'>Completed</p>
                            ) : (
                                <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllAppointments
