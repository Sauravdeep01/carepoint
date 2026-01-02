import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = () => {
    if (doctors && doctors.length > 0) {
      const foundDoctor = doctors.find(
        (doc) => String(doc._id) === String(docId)
      );
      setDocInfo(foundDoctor);
    }
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(0); 
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setHours(currentDate.getHours() + 1);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="flex flex-col items-center mt-10 mb-20 px-4">
        
        {/* --- Parent Container --- */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-5xl w-full items-start">
          
          {/* --- LEFT SIDE: Doctor Image --- */}
          <div className="bg-indigo-400 w-full sm:max-w-72 rounded-2xl overflow-hidden shadow-md shrink-0">
            <img className="w-full h-auto object-cover" src={docInfo.image} alt={docInfo.name} />
          </div>

          {/* --- RIGHT SIDE: Info + Booking --- */}
          <div className="flex-1 w-full flex flex-col gap-4">
            
            {/* Doctor Info Card */}
            <div className="border border-gray-200 rounded-2xl p-8 py-7 bg-white shadow-sm">
              <p className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
                {docInfo.name}
                <img className="w-5" src={assets.verified_icon} alt="" />
              </p>
              <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                <p>{docInfo.degree} - {docInfo.speciality}</p>
                <button className="py-0.5 px-2 border border-gray-300 text-xs rounded-full">{docInfo.experience}</button>
              </div>
              <div className="mt-6">
                <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                  About <img src={assets.info_icon} alt="" className="w-3" />
                </p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{docInfo.about}</p>
              </div>
              <p className="text-gray-500 font-medium mt-6">
                Appointment fee: <span className="text-gray-800 font-bold">${docInfo.fees || "50"}</span>
              </p>
            </div>

            {/* Booking Slots Section */}
            <div className="border border-gray-200 rounded-2xl p-8 py-7 bg-white shadow-sm font-medium text-gray-700">
              <p className="text-lg">Booking slots</p>
              
              {/* Day Selection Row */}
              <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2">
                {docSlots.length > 0 && docSlots.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSlotIndex(index)}
                    className={`text-center py-5 min-w-[64px] rounded-full cursor-pointer transition-all duration-300 ${slotIndex === index ? 'bg-indigo-600 text-white shadow-md' : 'border border-gray-200 hover:bg-gray-50'}`}
                  >
                    <p className="text-xs">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p className="text-lg font-bold">{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))}
              </div>

              {/* Time Selection Row - FIXED HEIGHT to prevent div jumping */}
              <div className="flex items-center gap-3 w-full overflow-x-auto mt-6 pb-2 min-h-[50px]">
                {docSlots.length > 0 && docSlots[slotIndex].length > 0 ? (
                  docSlots[slotIndex].map((item, index) => (
                    <p 
                      key={index}
                      onClick={() => setSlotTime(item.time)}
                      className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${item.time === slotTime ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-400 border border-gray-300 hover:bg-gray-50'}`}
                    >
                      {item.time.toLowerCase()}
                    </p>
                  ))
                ) : (
                   <p className="text-sm text-gray-400 font-light">No slots available for this day.</p>
                )}
              </div>

              <button className="w-full sm:w-auto bg-indigo-600 text-white text-sm font-light px-14 py-3 rounded-full mt-8 hover:bg-indigo-700 transition-all shadow-md active:scale-95">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointments;