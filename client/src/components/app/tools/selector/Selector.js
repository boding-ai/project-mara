import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import TimelineIcon from '@mui/icons-material/Timeline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faTimeline, faHistory, faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'

const Selector = ({ value, onClickOff, onClickOn, type, firstTitle, secondTitle }) => {
    const [firstIcon, setFirstIcon] = useState(faCalendarDays)
    const [secondIcon, setSecondIcon] = useState(faTimeline)

    useEffect(() => {
        if (type === 'events') {
            setFirstIcon(faCalendarDays)
            setSecondIcon(faTimeline)
        }
        if (type === 'inventory') {
            setFirstIcon(faBoxesStacked)
            setSecondIcon(faHistory)
        }
    }, [type])

    return (
        <>
            <div className="events-selector flex_evenly cursor_pointer">
                <Tooltip title={firstTitle} placement="bottom" enterDelay={650}>
                    <div
                        className="element flex_middle"
                        style={
                            value
                                ? {}
                                : {
                                      backgroundColor: 'rgb(255, 161, 161)',
                                      borderRadius: '0 0 0 10px',
                                  }
                        }
                        onClick={onClickOn}
                    >
                        <FontAwesomeIcon
                            icon={firstIcon}
                            style={{ fontSize: 18, marginTop: '0.1em', color: 'rgb(85, 85, 85)'}}
                        />
                    </div>
                </Tooltip>
                <Tooltip
                    title={secondTitle}
                    placement="bottom"
                    enterDelay={650}
                >
                    <div
                        className="element flex_middle"
                        style={
                            value
                                ? {
                                      backgroundColor: 'rgb(255, 161, 161)',
                                      borderRadius: '0 0 10px 0',
                                  }
                                : {}
                        }
                        onClick={onClickOff}
                    >
                        <FontAwesomeIcon
                            icon={secondIcon}
                            style={{ fontSize: 18, marginTop: '0.1em', color : 'rgb(85, 85, 85)' }}
                        />
                    </div>
                </Tooltip>
            </div>
        </>
    )
}

export default Selector
