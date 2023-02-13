import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BigCalendar from './pages/calendar/Main'

import Navbar from '../../tools/bars/navbar/Navbar'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import Alerts from '../../../common/alerts/Alerts'
import MetaTags from '../../../common/helmet/MetaTags'
import Rightbar from '../../tools/bars/rightbar/Rightbar'
import ArrayMin from '../../tools/add-array/ArrayMin'

const Calendar = ({
    // Redux States
    notifications: { notificationsCount },
}) => {
    return (
        <>
            <MetaTags
                defaultTitle={'Calendar | Bodinga - Digital Medical Platform'}
                twitterTitle={'Calendar | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'Calendar | Bodinga - Digital Medical Platform'
                }
                ogTitle={'Calendar | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Calendar | Bodinga &middot; Digital Medical Platform
                    </title>
                }
                link={'https://bodinga.com/vets/events'}
                ogUrl={'https://bodinga.com/vets/events'}
                description={
                    'Events calendar for all activity performed and tasks scheduled.'
                }
                twitterDescription={
                    'Events calendar for all activity performed and tasks scheduled.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Events, Calendar, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            <Navbar />
            <Sidebar />
            <div
                className={
                        'main_container'
                }
            >
                <div>
                    <BigCalendar />
                </div>
            </div>
            <Rightbar />
            <Alerts />
            <ArrayMin />
        </>
    )
}

Calendar.propTypes = {
    notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(Calendar)