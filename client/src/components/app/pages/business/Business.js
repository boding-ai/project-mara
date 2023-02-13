import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Navbar from '../../tools/bars/navbar/Navbar'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import Alerts from '../../../common/alerts/Alerts'

// TODO: Convert to SBS vet services
// import {
//     checkInstaConnected
// } from '../../../redux/actions/business/social'

import Card from './tools/Card'

import { getStoreDetails } from '../../../../redux/actions/business/store'
import MetaTags from '../../../common/alerts/Alerts'
import ArrayMin from '../../tools/add-array/ArrayMin'
import Rightbar from '../../tools/bars/rightbar/Rightbar'

const Business = ({
    // Redux Actions
   getStoreDetails,
    // Redux States
    add: { addArrayMinimizeTabs },
    notifications: { notificationsCount },
    auth: {
        user: { domain },
    },
    store: { getStoreDetailsAllow },
}) => {
    useEffect(() => {
        if (getStoreDetailsAllow) {
            getStoreDetails()
        }
    }, [getStoreDetailsAllow])

    return (
        <>
            <MetaTags
                defaultTitle={'Business | Bodinga - Digital Medical Platform'}
                twitterTitle={'Business | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'Business | Bodinga - Digital Medical Platform'
                }
                ogTitle={'Business | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Business | Bodinga &middot; Digital Medical Platform
                    </title>
                }
                link={'https://bodinga.com/vets/business'}
                ogUrl={'https://bodinga.com/vets/business'}
                description={'Your business, stores and details including AI.'}
                twitterDescription={
                    'Your business, stores and details including AI.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Business, Profiles, Metrics, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            <Navbar />
            <Sidebar />

             <div
                className={
                        'main_container'
                }
            >
                <div className="business">
                    <Card />
                </div>
            </div>
            <Rightbar />
            <ArrayMin />
            <Alerts />
        </>
    )
}

Business.propTypes = {
    auth: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    add: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired,
    getStoreDetails: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    store: state.store,
    add: state.add,
    notifications: state.notifications,
})

const mapStateToActions = {
    // checkInstaConnected,
    getStoreDetails,
}

export default connect(mapStateToProps, mapStateToActions)(Business)