import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendUrl = 'http://192.168.1.11:4000'
    const [doctorsList, setDoctorsList] = useState(doctors)
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)

    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                // If DB has data, use it. Otherwise fall back to static data.
                if (data.doctors.length > 0) {
                    setDoctorsList(data.doctors)
                }
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getDoctorsData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    const value = {
        doctors: doctorsList, getDoctorsData,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider