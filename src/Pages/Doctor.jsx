import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

export default function Doctors() {

  const { speciality } = useParams()
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

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
    <div className="px-6 md:px-10 py-14 bg-gray-50 text-gray-800">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Find Doctors by Speciality
        </h1>
        <p className="text-gray-600">
          Browse through our experienced doctors and book appointments easily.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-3 sticky top-24">
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
                onClick={() =>
                  navigate(`/doctors/${encodeURIComponent(item)}`)
                }
                className={`cursor-pointer px-4 py-2 rounded-lg transition
                  ${
                    decodedSpeciality === item
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-blue-50'
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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {filterDoc.map(item => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/appointments/${item._id}`)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Doctor Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />

                  {/* Doctor Info */}
                  <div className="p-4">

                    {/* Availability */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <p className="text-sm text-green-600 font-medium">
                        Available Now
                      </p>
                    </div>

                    <p className="text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.speciality}
                    </p>

                    <button className="mt-4 w-full py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                      Book Appointment
                    </button>

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
