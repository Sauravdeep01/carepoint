import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const AdminDashboard = () => {
    const { aToken, backendUrl } = useContext(AdminContext)
    const [dashData, setDashData] = useState(false)

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (aToken) {
            getDashData()
        }
    }, [aToken])

    return dashData && (
        <div className='m-5 md:m-10'>

            {/* Stats Cards */}
            <div className='flex flex-wrap gap-5'>
                <div className='flex-1 min-w-52 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group'>
                    <div className='w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors'>
                        <img className='w-8' src={assets.doctor_icon} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-800'>{dashData.doctors}</p>
                        <p className='text-gray-400 font-medium'>Doctors</p>
                    </div>
                </div>

                <div className='flex-1 min-w-52 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group'>
                    <div className='w-16 h-16 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors'>
                        <img className='w-8' src={assets.appointments_icon} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-800'>{dashData.appointments}</p>
                        <p className='text-gray-400 font-medium'>Appointments</p>
                    </div>
                </div>

                <div className='flex-1 min-w-52 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group'>
                    <div className='w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors'>
                        <img className='w-8' src={assets.patients_icon} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-800'>{dashData.patients}</p>
                        <p className='text-gray-400 font-medium'>Patients</p>
                    </div>
                </div>
            </div>

            {/* Latest Bookings */}
            <div className='bg-white mt-10 rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
                <div className='flex items-center gap-3 px-6 py-5 border-b border-gray-100 bg-gray-50'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-semibold text-lg text-gray-700'>Latest Bookings</p>
                </div>

                <div className='divide-y divide-gray-100'>
                    {dashData.latestAppointments.map((item, index) => (
                        <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-colors' key={index}>
                            <img className='rounded-full w-12 h-12 object-cover border border-gray-200' src={item.docData.image} alt="" />
                            <div className='flex-1'>
                                <p className='text-gray-800 font-semibold'>{item.docData.name}</p>
                                <p className='text-gray-500 text-sm'>{item.slotDate}</p>
                            </div>
                            {item.cancelled ? (
                                <span className='px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold'>Cancelled</span>
                            ) : item.isCompleted ? (
                                <span className='px-3 py-1 rounded-full bg-green-50 text-green-500 text-xs font-semibold'>Completed</span>
                            ) : (
                                <span className='px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-semibold'>Pending</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
