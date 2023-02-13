import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import DoneIcon from '@mui/icons-material/Done'
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt'

const StatusRectangle = ({ input }) => {

    // TODO: Connect to DB
    return (
        <>
            {(() => {
                switch (input) {
                    case 'active':
                        return (
                            <div className={`status_rectangle_recent_${input}`}>
                                <ArrowLeftIcon
                                    style={{
                                        fontSize: 14,
                                    }}
                                />
                                <div>
                                    <div>{input.toUpperCase()}</div>
                                </div>
                                <ArrowRightIcon
                                    style={{
                                        fontSize: 14,
                                    }}
                                />
                            </div>
                        )

                    case 'resolved':
                        return (
                            <div className={`status_rectangle_recent_${input}`}>
                                <DoneIcon
                                    style={{
                                        fontSize: 13,
                                    }}
                                />
                                <div>
                                    <div>{input.toUpperCase()}</div>
                                </div>
                            </div>
                        )

                    case 'unresolved':
                        return (
                            <div className={`status_rectangle_recent_${input}`}>
                                <DoNotDisturbAltIcon
                                    style={{
                                        fontSize: 13,
                                    }}
                                />
                                <div>
                                    <div>{input.toUpperCase()}</div>
                                </div>
                            </div>
                        )

                    case 'old':
                        return (
                            <div
                                className={`status_rectangle_recent_${input}`}
                            >
                            </div>
                        )

                    default:
                        return null
                }
            })()}
            
        </>
    )
}


StatusRectangle.propTypes = {

}

export default StatusRectangle
