import React, { useState } from 'react'
import PropTypes from 'prop-types'


import WebsiteDetails from '../../../tools/website-details/WebsiteDetails'
import ChangeType from './ChangeType'

import InfoBottom from '../../../tools/info-bottom/InfoBottom'
import Settings from '../../../tools/stores/Stores'

const Rightbar = ({
    showSocial,
    setShowSocial,
    showStats,
    setShowStats,
    showAppointments,
    setShowAppointments,
}) => {
    const [isClosed, setIsClosed] = useState(false)

    const closeMastiAIClientSidebar = () => {
        setIsClosed(true)
    }
    return (
        <div className="right_bar-dashboard">
            <div
                style={isClosed ? {} : { marginTop: '2em' }}
                className="flex_middle"
            >
                <ChangeType
                    showSocial={showSocial}
                    setShowSocial={setShowSocial}
                    showStats={showStats}
                    setShowStats={setShowStats}
                    showAppointments={showAppointments}
                    setShowAppointments={setShowAppointments}
                />
            </div>
            {showAppointments && (
                <div
                    className="flex_middle"
                    style={{ marginTop: '2em' }}
                >
                    <Settings />
                </div>
            )}
            <div style={{ marginTop: '2em' }}>
                <WebsiteDetails />
            </div>
            <div style={{ marginTop: '1em' }}>
                <InfoBottom />
            </div>
        </div>
    )
}

Rightbar.propTypes = {}

export default Rightbar
