import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import PaneClientMain from './pane/PaneClientMain'

import Rightbar from '../../tools/bars/rightbar/Rightbar'
import Navbar from '../../tools/bars/navbar/Navbar'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import ArrayMin from '../../tools/add-array/ArrayMin'

import MetaTags from '../../../common/helmet/MetaTags'
import Alerts from '../../../common/alerts/Alerts'

import DragList from './drag/DragList'

const Upcoming = ({
    // Redux States
    notifications: { notificationsCount },
}) => {
    return (
        <>
            <MetaTags
                defaultTitle={'Upcoming | Bodinga - Digital Medical Platform'}
                twitterTitle={'Upcoming | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'Upcoming | Bodinga - Digital Medical Platform'
                }
                ogTitle={'Upcoming | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Upcoming | Bodinga &middot; Digital Medical Platform
                    </title>
                }
                link={'https://bodinga.com/vets/bookings'}
                ogUrl={'https://bodinga.com/vets/bookings'}
                description={
                    'All your bookings, appointments, events and records in one place.'
                }
                twitterDescription={
                    'All your bookings, appointments, events and records in one place.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Clients, Profiles, Metrics, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            <Navbar />
            <Sidebar />
            <div
                className={'main_container'}
            >
                <div className="app">
                    <DragList />
                </div>
            </div>
            <Rightbar />
            <ArrayMin />
            <Alerts />
        </>
    )
}

Upcoming.propTypes = {
    notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Upcoming)
