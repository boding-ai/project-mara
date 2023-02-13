import React from 'react'
import { NavLink } from 'react-router-dom'

import BarChartIcon from '@mui/icons-material/BarChart'
import InterestsIcon from '@mui/icons-material/Interests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const ChangeType = ({
    showSocial,
    setShowSocial,
    showStats,
    setShowStats,
    showAppointments,
    setShowAppointments,
}) => {
    const appointmentsPageOn = () => {
        setShowStats(false)
        setShowSocial(false)

        setShowAppointments(true)
    }

    const statsPageOn = () => {
        setShowAppointments(false)
        setShowSocial(false)

        setShowStats(true)
    }

    const socialPageOn = () => {
        setShowAppointments(false)
        setShowStats(false)

        setShowSocial(true)
    }

    return (
        <>
            <div className="website-linker flex_evenly">
                <div
                    className="element flex_middle"
                    style={
                        showAppointments
                            ? {
                                  backgroundColor: 'rgb(255, 161, 161)',
                                  borderRadius: '10px 0 0 10px',
                              }
                            : { borderRadius: '10px 0 0 10px' }
                    }
                    onClick={appointmentsPageOn}
                >
                    <FontAwesomeIcon
                        icon={faCalendarCheck}
                        style={{ fontSize: 18, marginTop: '0.1em' }}
                    />
                </div>
                <div
                    className="element flex_middle"
                    style={
                        showStats ? { backgroundColor: 'rgb(255, 161, 161)', borderRadius: 0 } : {}
                    }
                    onClick={statsPageOn}
                >
                    <BarChartIcon
                        style={{ fontSize: 26, marginTop: '0.1em' }}
                    />
                </div>
                <div
                    className="element flex_middle"
                    style={
                        showSocial
                            ? {
                                  backgroundColor: 'rgb(255, 161, 161)',
                                  borderRadius: '0 10px 10px 0',
                              }
                            : { borderRadius: '0 10px 10px 0' }
                    }
                    onClick={socialPageOn}
                >
                    <InterestsIcon
                        style={{ fontSize: 24, marginTop: '0.2em' }}
                    />
                </div>
            </div>
        </>
    )
}

export default ChangeType