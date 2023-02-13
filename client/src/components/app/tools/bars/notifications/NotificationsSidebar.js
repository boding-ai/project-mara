import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LinearProgress from '@mui/material/LinearProgress'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { makeStyles } from '@mui/styles'

import CloseIcon from '@mui/icons-material/Close'
import Card from './Card'

const useStyles = makeStyles((theme) => ({
    customTooltip: {
        backgroundColor: 'rgb(245, 245, 245)',
        boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        color: 'rgb(72, 72, 72)',
    },
}))

const NotificationsSidebar = ({
    close,
    notifications,
    notificationsLoading,
}) => {
    const classes = useStyles()

    return (
        <div className="notifications-sidebar">
            {notificationsLoading && <LinearProgress color="success" />}
            <div className="title flex_around">
                <div></div>
                <div className="text">Notifications</div>
                <div className="icon cursor_pointer flex_middle">
                    <CloseIcon
                        style={{ fontSize: 18, marginBottom: '0.5em' }}
                        className="cancel"
                        onClick={close}
                    />
                </div>
            </div>
            <div className="body app">
                {notifications.length > 0 ? (
                    notifications.map((element, index) => (
                        <Card
                            type={element.type}
                            info={element.title}
                            special={''}
                            status={element.status}
                            key={index}
                            id={element.id}
                            createdAt={element.created_at}
                        />
                    ))
                ) : (
                    <div className="flex_middle" style={{ color: 'grey' }}>
                        <ChatBubbleOutlineIcon style={{ marginTop: '0.1em' }} />
                        <div style={{ marginLeft: '0.4em' }}>
                            Nothing to show
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

NotificationsSidebar.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(NotificationsSidebar)
