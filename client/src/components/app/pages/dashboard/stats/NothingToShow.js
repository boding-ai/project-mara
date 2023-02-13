import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons'

const NothingToShow = ({ primaryMessage, secondaryMessage }) => {
    return (
        <div className="empty_timeline app ">
            <div className="flex_middle" style={{ marginBottom: '1em' }}>
                <div>
                    <FontAwesomeIcon
                        icon={faBatteryEmpty}
                        style={{
                            color: 'gray',
                            fontSize: 25,
                            marginRight: '0.5em',
                            marginTop: '0.1em'
                        }}
                    />
                </div>
                <div style={{ color: 'gray', fontSize: '1.2em' }}> {primaryMessage}</div>
            </div>
            <div style={{ color: 'gray' }}>{secondaryMessage}</div>
        </div>
    )
}

NothingToShow.propTypes = {}

export default NothingToShow
