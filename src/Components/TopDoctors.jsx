import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

export default function TopDoctors() {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext)

  return (
    <div className="px-6 py-16 bg-gray-50 text-gray-800">
      
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
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={()=>navigate(`/appointments/${item._id}`)}
            key={index}
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

              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-12">
        <button
        onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          View More Doctors
        </button>
      </div> 
    </div>
  )
}
