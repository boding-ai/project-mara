import React, { useEffect }  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import { Fade, Modal } from '@mui/material'
import { Box } from '@mui/system'

import NumberOfVisitors from './stats/graphs/number-of-visits/NumberOfVisitors'
import NUmberOfAppointments from './stats/graphs/records/NumberOfAppointments'
import TypeOfVisits from './stats/graphs/type-of-visit/TypeOfVisit'
import TotalRevenue from './stats/blocks/income/TotalRevenue'

import NavbarHome from '../../tools/bars/navbar/Navbar'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import Rightbar from '../../tools/bars/rightbar/Rightbar'

import MetaTags from '../../../common/helmet/MetaTags'
import ArrayMin from '../../tools/add-array/ArrayMin'
import Alerts from '../../../common/alerts/Alerts'
import Welcome from '../../tools/first-time-user/Welcome'


import {
    loadUser
} from '../../../../redux/actions/auth/auth'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    p: 4,
    outline: 'none',
}


const Dashboard = ({
    // Redux Actions
    loadUser,
    // Redux States
    add: { addArrayMinimizeTabs },
    notifications: { notificationsCount },
    auth: {
        user: { isNew, name },
    },
}) => {
    useEffect(() => {
        // loadUser()
    }, [])

    const welcomeCardClose = () => {
        console.log('Close')
    }

    return (
        <>
            <MetaTags
                defaultTitle={'Dashboard | bodinga.com'}
                twitterTitle={'Dashboard | bodinga.com'}
                twitterImageAlt={'Dashboard | bodinga.com'}
                ogTitle={'Dashboard | bodinga.com'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Dashboard &middot; Bodinga
                    </title>
                }
                link={'https://bodinga.com/vets/dashboard'}
                ogUrl={'https://bodinga.com/vets/dashboard'}
                description={
                    'Checkout metrics and statistics of your business, customers and clients on this interactive dashboard.'
                }
                twitterDescription={
                    'Checkout metrics and statistics of your business, customers and clients on this interactive dashboard.'
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
            <NavbarHome />
            <div className="">
                <Sidebar />
                <motion.div>
                    <div className={'main_container'}>
                        <div className={'one'}>
                            <div style={{}}>
                                <NumberOfVisitors />
                            </div>
                            <div
                                style={{
                                    justifyContent: 'space-around',
                                    alignItems: '',
                                }}
                                className="app"
                            >
                                <div className="flex_evenly">
                                    <div style={{ marginRight: '3em' }}>
                                        <TotalRevenue />
                                    </div>
                                    <div>
                                        <TotalRevenue />
                                    </div>
                                </div>
                                <div className="flex_evenly">
                                    <div style={{ marginRight: '3em' }}>
                                        <TotalRevenue />
                                    </div>
                                    <div>
                                        <TotalRevenue />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="one">
                            <div style={{}}>
                                <NUmberOfAppointments />
                            </div>
                            <div style={{}}>
                                <TypeOfVisits />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Rightbar />
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isNew}
                onClose={welcomeCardClose}
                closeAfterTransition
                disableScrollLock={true}
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={isNew}>
                    <Box style={style}>
                        <Welcome close={welcomeCardClose} name={name} />
                    </Box>
                </Fade>
            </Modal>
            <Alerts />
            <ArrayMin />
        </>
    )
}

Dashboard.propTypes = {
    add: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    notifications: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    add: state.add,
    notifications: state.notifications,
    auth: state.auth,
})

const mapActionsToProps = {
    loadUser,
}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard)
