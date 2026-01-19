import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AllAppointments from '../Pages/Admin/AllAppointments'
import AddDoctor from '../Pages/Admin/AddDoctor'
import DoctorsList from '../Pages/Admin/DoctorsList'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'

const AdminLayout = () => {
    const { aToken } = useContext(AdminContext)

    return aToken ? (
        <div className='bg-[#F8F9FD]'>
            <AdminNavbar />
            <div className='flex items-start'>
                <AdminSidebar />
                <div className='w-full'>
                    <Routes>
                        <Route path='/dashboard' element={<AdminDashboard />} />
                        <Route path='/all-appointments' element={<AllAppointments />} />
                        <Route path='/add-doctor' element={<AddDoctor />} />
                        <Route path='/doctor-list' element={<DoctorsList />} />
                        <Route path='*' element={<Navigate to='/admin/dashboard' />} />
                    </Routes>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default AdminLayout
