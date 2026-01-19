import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../Context/DoctorContext'
import { AppContext } from '../../Context/AppContext'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorAppointments = () => {
    const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment, setAppointments, backendUrl } = useContext(DoctorContext)
    const { calculateAge } = useContext(AppContext)

    const getDoctorAppointments = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dToken } })
            if (data.success) {
                setAppointments(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeDocAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dToken } })
            if (data.success) {
                toast.success(data.message)
                getDoctorAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelDocAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, { headers: { dToken } })
            if (data.success) {
                toast.success(data.message)
                getDoctorAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (dToken) {
            getDoctorAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full max-w-6xl m-5 md:m-10'>
            <p className='mb-6 text-2xl font-semibold text-gray-700'>All Appointments</p>

            <div className='bg-white border rounded-2xl shadow-sm overflow-hidden min-h-[60vh]'>
                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 border-b bg-gray-50 text-gray-600 font-medium text-sm'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>

                <div className='divide-y divide-gray-100 max-h-[80vh] overflow-y-scroll'>
                    {appointments.map((item, index) => (
                        <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:p-6 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] items-center text-gray-500 py-4 px-6 hover:bg-gray-50 transition-colors' key={index}>
                            <p className='max-sm:hidden font-medium text-gray-800'>{index + 1}</p>
                            <div className='flex items-center gap-3'>
                                <img className='w-10 h-10 rounded-full object-cover border' src={item.userData.image} alt="" />
                                <p className='font-medium text-gray-800'>{item.userData.name}</p>
                            </div>
                            <div className='px-2'>
                                <p className='inline-block border border-indigo-100 bg-indigo-50 text-indigo-600 text-xs rounded-full px-2 py-0.5 font-medium'>
                                    {item.payment ? 'Online' : 'CASH'}
                                </p>
                            </div>
                            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
                            <p>{item.slotDate}, {item.slotTime}</p>
                            <p className='font-medium'>$ {item.amount}</p>

                            <div className='flex gap-2'>
                                {item.cancelled ? (
                                    <p className='text-red-400 text-xs font-semibold border border-red-100 bg-red-50 px-3 py-1 rounded-full'>Cancelled</p>
                                ) : item.isCompleted ? (
                                    <p className='text-green-500 text-xs font-semibold border border-green-100 bg-green-50 px-3 py-1 rounded-full'>Completed</p>
                                ) : (
                                    <div className='flex gap-2'>
                                        <img onClick={() => cancelDocAppointment(item._id)} className='w-10 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="" />
                                        <img onClick={() => completeDocAppointment(item._id)} className='w-10 cursor-pointer hover:scale-110 transition-transform' src={assets.tick_icon} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoctorAppointments
