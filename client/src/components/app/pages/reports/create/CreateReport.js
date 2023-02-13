import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NavbarHome from '../../../tools/bars/navbar/Navbar'

import MetaTags from '../../../../common/helmet/MetaTags'
import Alerts from '../../../../common/alerts/Alerts'
import Createbar from '../../../tools/bars/navbar/Createbar'

const Reports = ({
    // Redux Actions
    // Redux States
    notifications: { notificationsCount },
}) => {
    return (
        <>
            <MetaTags
                defaultTitle={'New Report | Bodinga - Digital Medical Platform'}
                twitterTitle={'New Report | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'New Report | Bodinga - Digital Medical Platform'
                }
                ogTitle={'New Report | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        New Report | Bodinga &middot; Digital Medical Platform
                    </title>
                }
                link={'https://bodinga.com/vets/report/new'}
                ogUrl={'https://bodinga.com/vets/report/new'}
                description={
                    'Create a new report.'
                }
                twitterDescription={
                    'Create a new report.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Dashboard, Metrics, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            <Createbar />
            <div className="">
                    <div className={'main_container'}>
                        Reports
                    </div>
            </div>
            <Alerts />
        </>
    )
}

Reports.propTypes = {
    notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(Reports)
