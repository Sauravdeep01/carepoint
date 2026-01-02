import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {

    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();
    
    const [relDoc, setRelDoc] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDoc(doctorsData);
        }
    }, [doctors, docId, speciality])

    return (
        /* The outermost div centers everything on the screen */
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 w-full px-5">
            
            {/* Header Section - Changed text-left to text-center */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-medium">Related Doctors</h1>
                <p className="text-sm text-gray-600 mt-2">
                    Simply browse through our extensive list of trusted doctors.
                </p>
            </div>

            {/* Horizontal Container - Changed justify-start to justify-center */}
            <div className="flex flex-wrap justify-center w-full gap-5">
                {relDoc.slice(0, 5).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }}
                        className="w-[200px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500 bg-white shadow-sm shrink-0"
                    >
                        <div className="bg-blue-50 w-full">
                            <img
                                className="w-full h-48 object-cover"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <p className="text-[10px] font-medium uppercase tracking-wider">Available Now</p>
                            </div>
                            <p className="text-gray-900 text-lg font-semibold truncate">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button - centered by the parent flex-col items-center */}
            <button
                onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }}
                className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all font-medium"
            >
                more
            </button>
        </div>
    )
}

export default RelatedDoctors