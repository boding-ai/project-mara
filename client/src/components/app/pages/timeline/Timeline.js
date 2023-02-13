import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BigTimeline from './pages/Timeline'

import Navbar from '../../tools/bars/navbar/Navbar'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import Alerts from '../../../common/alerts/Alerts'
import MetaTags from '../../../common/helmet/MetaTags'
import Rightbar from '../../tools/bars/rightbar/Rightbar'
import ArrayMin from '../../tools/add-array/ArrayMin'

const Timeline = ({
    // Redux States
    notifications: { notificationsCount },
}) => {
    return (
        <>
            <MetaTags
                defaultTitle={'Timeline | Bodinga - Digital Medical Platform'}
                twitterTitle={'Timeline | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'Timeline | Bodinga - Digital Medical Platform'
                }
                ogTitle={'Timeline | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Timeline | Bodinga &middot; Digital Medical Platform
                    </title>
                }
                link={'https://bodinga.com/vets/events/timeline'}
                ogUrl={'https://bodinga.com/vets/events/timeline'}
                description={
                    'Timeline for all activity performed and tasks scheduled.'
                }
                twitterDescription={
                    'Timeline for for all activity performed and tasks scheduled.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Events, Timeline, Software, Medical, Vets, Platform, Best, Free'
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
                    <BigTimeline />
                </div>
            </div>
            <Rightbar />
            <Alerts />
            <ArrayMin />
        </>
    )
}

Timeline.propTypes = {
    notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Timeline)
