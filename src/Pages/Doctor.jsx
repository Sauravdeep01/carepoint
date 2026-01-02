import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

export default function Doctors() {

  const { speciality } = useParams()
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

<<<<<<< HEAD
=======
  const [showFilter, setShowFilter] = useState(false)
>>>>>>> main
  const [filterDoc, setFilterDoc] = useState([])

  const decodedSpeciality = speciality
    ? decodeURIComponent(speciality)
    : ''

  // ================= FILTER LOGIC =================
  useEffect(() => {
    if (!decodedSpeciality) {
      setFilterDoc(doctors)
    } else {
      setFilterDoc(
        doctors.filter(
          doc =>
            doc.speciality.toLowerCase().trim() ===
            decodedSpeciality.toLowerCase().trim()
        )
      )
    }
  }, [doctors, decodedSpeciality])

  return (
<<<<<<< HEAD
    <div className="px-6 md:px-10 py-14 bg-gray-50 text-gray-800">
=======
    <div className="px-3 md:px-10 py-10 bg-gray-50 text-gray-800">
>>>>>>> main

      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Find Doctors by Speciality
        </h1>
        <p className="text-gray-600">
          Browse through our experienced doctors and book appointments easily.
        </p>
      </div>

<<<<<<< HEAD
      <div className="flex flex-col md:flex-row gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-3 sticky top-24">
=======
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">

        {/* ================= LEFT SIDE (FILTERS) ================= */}
        <div className="md:w-1/4">

          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`px-6 py-2 rounded mb-4 font-medium md:hidden transition-all duration-300 ${showFilter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 shadow'}`}>
            Filters <span className="ml-2 text-xs">▼</span>
          </button>

          <div className={`${showFilter ? 'flex' : 'hidden'} md:flex flex-col bg-white rounded-2xl shadow-md p-5 space-y-3 sticky top-24 transition-all duration-500`}>
>>>>>>> main
            {[
              'General physician',
              'Gynecologist',
              'Dermatologist',
              'Pediatricians',
              'Neurologist',
              'Gastroenterologist'
            ].map(item => (
              <p
                key={item}
<<<<<<< HEAD
                onClick={() =>
                  navigate(`/doctors/${encodeURIComponent(item)}`)
                }
                className={`cursor-pointer px-4 py-2 rounded-lg transition
                  ${
                    decodedSpeciality === item
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-blue-50'
=======
                onClick={() => {
                  navigate(`/doctors/${encodeURIComponent(item)}`)
                  setShowFilter(false)
                }
                }
                className={`cursor-pointer px-4 py-2 rounded-lg transition
                  ${decodedSpeciality === item
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-blue-50'
>>>>>>> main
                  }
                `}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="md:w-3/4">

          {filterDoc.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              No doctors available for this speciality.
            </p>
          ) : (
<<<<<<< HEAD
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
=======
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
>>>>>>> main

              {filterDoc.map(item => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/appointments/${item._id}`)}
<<<<<<< HEAD
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
=======
                  className="bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
>>>>>>> main
                >
                  {/* Doctor Image */}
                  <img
                    src={item.image}
                    alt={item.name}
<<<<<<< HEAD
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />

                  {/* Doctor Info */}
                  <div className="p-4">
=======
                    className="w-full h-40 sm:h-48 object-cover bg-blue-50"
                  />

                  {/* Doctor Info */}
                  <div className="p-3">
>>>>>>> main

                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
<<<<<<< HEAD
                      <p className="text-sm text-green-600 font-medium">
=======
                      <p className="text-xs md:text-sm text-green-600 font-medium">
>>>>>>> main
                        Available Now
                      </p>
                    </div>

<<<<<<< HEAD
                    <p className="text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.speciality}
                    </p>

                    <button className="mt-4 w-full py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                      Book Appointment
                    </button>
=======
                    <p className="text-sm md:text-lg font-medium text-gray-900 leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {item.speciality}
                    </p>

                    {/* <button className="mt-3 w-full py-2 text-xs md:text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                      Book Appointment
                    </button> */} {/* User asked to decrease size, maybe removing button or making it implicit helps? No, I will keep it clean. Actually previous cards had it. I'll restore it if needed, or keeping it clean is better for "smaller size". */}
                    {/* The user said "looks clean and clear". The button takes up a lot of space. I'll leave it OUT for the "clean" smaller card look, or make it very small. The logic above just clicks the div. */}
>>>>>>> main

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  )
}
