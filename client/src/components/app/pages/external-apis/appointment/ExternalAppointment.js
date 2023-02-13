import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ExternalAppointment = () => {
    const location = useLocation()
    const [key, setKey] = useState('')
    const [businessDetails, setBusinessDetails] = useState({
        name: '',
        id: '',
        locations: [],
        imageUrl: '',
        timings: '',
        days: '',
        doctors: ''
    })

    const { name, id, locations, imageUrl, timings, days, doctors } = businessDetails

    useEffect(() => {
        let keyArray = location.pathname.split('/')
        setKey(keyArray[keyArray.length - 1])
    }, [])

  return (
    <div>ExternalAppointment</div>
  )
}

export default ExternalAppointment