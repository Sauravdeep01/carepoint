import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'


const Appointments = () => {

  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    console.log("Doctors list:", doctors);
    console.log("Looking for ID:", docId);
    console.log("Found:", docInfo);

    setDocInfo(docInfo)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  if (!docInfo) {
    return <div className="text-center py-10 text-xl font-bold">Loading doctor info... (ID: {docId})</div>
  }

  return (
    <div>

      {/* Doctor Details */}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Appointments
