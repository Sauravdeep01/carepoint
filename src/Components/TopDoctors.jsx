import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

export default function TopDoctors() {

  const navigate = useNavigate();
<<<<<<< HEAD
  const {doctors} = useContext(AppContext)

  return (
    <div className="px-6 py-16 bg-gray-50 text-gray-800">
      
=======
  const { doctors } = useContext(AppContext)

  return (
    <div className="px-6 py-16 bg-gray-50 text-gray-800">

>>>>>>> main
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Pick Our Top Doctors
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Consult with experienced doctors who are highly rated by patients.
        </p>
      </div>

      {/* Doctors Grid */}
<<<<<<< HEAD
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={()=>navigate(`/appointments/${item._id}`)}
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
=======
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointments/${item._id}`)}
            key={index}
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
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
=======
              <p className="text-sm md:text-lg font-medium text-gray-900 leading-tight">{item.name}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">{item.speciality}</p>
>>>>>>> main
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-12">
        <button
<<<<<<< HEAD
        onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          View More Doctors
        </button>
      </div> 
=======
          onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          View More Doctors
        </button>
      </div>
>>>>>>> main
    </div>
  )
}
