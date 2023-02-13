import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Rightbar from '../../tools/bars/rightbar/Rightbar'
import ArrayMin from '../../tools/add-array/ArrayMin'
import Alerts from '../../../common/alerts/Alerts'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import Navbar from '../../tools/bars/navbar/Navbar'
import MetaTags from '../../../common/helmet/MetaTags'
import PaneClientMain from './main/pane/PaneClientMain'
import Record from './record/Record'

const Cases = ({
    // Redux States
    notifications: { notificationsCount },
}) => {
    return (
        <>
            <MetaTags
                defaultTitle={'Cases | Bodinga - Digital Medical Platform'}
                twitterTitle={'Cases | Bodinga - Digital Medical Platform'}
                twitterImageAlt={
                    'Cases | Bodinga - Digital Medical Platform'
                }
                ogTitle={'Cases | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Cases &middot; Patient Records
                    </title>
                }
                link={'https://bodinga.com/vets/cases'}
                ogUrl={'https://bodinga.com/vets/cases'}
                description={
                    'Cases, records, prescriptions in one place!'
                }
                twitterDescription={
                    'Cases, records, prescriptions in one place!'
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
            <div className={'main_container'}>
                <div className="app">
                    <PaneClientMain />
                    <div className='cases app'>
                        <Record />
                    </div>
                </div>
            </div>
            <Rightbar />
            <ArrayMin />
            <Alerts />
        </>
    )
}

Cases.propTypes = {
    notifications: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    notifications: state.notifications,
})

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Cases)
