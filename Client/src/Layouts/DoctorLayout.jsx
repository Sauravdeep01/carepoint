import React, { useContext } from 'react'
import { DoctorContext } from '../Context/DoctorContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import DoctorDashboard from '../Pages/Doctor/DoctorDashboard'
import DoctorAppointments from '../Pages/Doctor/DoctorAppointments'
import DoctorProfile from '../Pages/Doctor/DoctorProfile'
import DoctorNavbar from '../Components/DoctorNavbar'
import DoctorSidebar from '../Components/DoctorSidebar'

const DoctorLayout = () => {
    const { dToken } = useContext(DoctorContext)

    return dToken ? (
        <div className='bg-[#F8F9FD]'>
            <DoctorNavbar />
            <div className='flex items-start'>
                <DoctorSidebar />
                <div className='w-full'>
                    <Routes>
                        <Route path='/dashboard' element={<DoctorDashboard />} />
                        <Route path='/appointments' element={<DoctorAppointments />} />
                        <Route path='/profile' element={<DoctorProfile />} />
                        <Route path='*' element={<Navigate to='/doctor/dashboard' />} />
                    </Routes>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default DoctorLayout
