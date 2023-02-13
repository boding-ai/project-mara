import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import BookIcon from '@mui/icons-material/Book'
import LensBlurIcon from '@mui/icons-material/LensBlur'

import { setNotificationStatusToFalse } from '../../../../../redux/actions/notifications/notifications'
import { connect } from 'react-redux'

const Card = ({
    id,
    type,
    info,
    special,
    status,
    createdAt,
    // Redux Actions
    setNotificationStatusToFalse,
}) => {
    const [typeIcon, setTypeIcon] = useState('general')

    useEffect(() => {
        if (type === 'system') {
            setTypeIcon('system')
        }
        if (type === 'reminder') {
            setTypeIcon('reminder')
        }

        if (type === 'appointment') {
            setTypeIcon('appointment')
        }

        if (type === 'social') {
            setTypeIcon('social')
        }
        if (type === 'general') {
            setTypeIcon('general')
        }

    }, [status])

    const changeNotificationStatus = () => {
       if(status){
            setNotificationStatusToFalse(id)
       }
    }

    return (
        <>
            <div
                className={'notif-card'}
                style={status ? { border: '1px solid #7ed957' } : {}}
                onClick={changeNotificationStatus}
            >
                <div className="triple_grid header ">
                    <div className="flex_left">
                        {typeIcon === 'general' && (
                            <LensBlurIcon
                                style={{ color: 'pink', fontSize: 15 }}
                            />
                        )}
                        {typeIcon === 'system' && (
                            <SmartToyIcon
                                style={{ color: 'grey', fontSize: 15 }}
                            />
                        )}
                        {typeIcon === 'reminder' && (
                            <AccessTimeIcon
                                style={{ color: '#23abd9', fontSize: 15 }}
                            />
                        )}
                        {typeIcon === 'appointment' && (
                            <CalendarTodayIcon
                                style={{ color: '#d9d923', fontSize: 15 }}
                            />
                        )}
                        {typeIcon === 'social' && (
                            <BookIcon
                                style={{ color: '#d923c4', fontSize: 15 }}
                            />
                        )}
                        {status && <div className="new flex_middle">NEW</div>}
                    </div>
                    <div className="title flex_middle">
                        {typeIcon.charAt(0).toUpperCase() + typeIcon.slice(1)}
                    </div>
                    <div className="flex_right">
                        <div className="time">
                            {moment(createdAt).fromNow()}
                        </div>
                    </div>
                </div>
                <div className="details">
                    {info} <span className="ft-bold">{special}</span>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    setNotificationStatusToFalse: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

const mapStateToActions = {
    setNotificationStatusToFalse,
}

export default connect(mapStateToProps, mapStateToActions)(Card)