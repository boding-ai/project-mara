import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Navbar from '../../../tools/bars/navbar/Navbar'
import Sidebar from '../../../tools/bars/sidebar/Sidebar'
import InfoBottom from '../../../tools/info-bottom/InfoBottom'
import Alerts from '../../../../common/alerts/Alerts'

import Profile from './profile/Profile'

import System from './system/System'
import Business from './business/Business'
// import Website from './website/Website'

import {
    loadUser
} from '../../../../../redux/actions/auth/auth'

const Settings = ({
    // Redux Actions
    loadUser,
}) => {
    // useEffect(() => {
    //     loadUser()
    // }, [])

    let goProfile = useRef()
    let goSystem = useRef()
    let goBusiness = useRef()
    let goWebsite = useRef()

    const goToProfile = () => {
        goProfile.current.scrollIntoView({ behavior: 'smooth' })
    }

    const goToSystem = () => {
        goSystem.current.scrollIntoView({ behavior: 'smooth' })
    }

    const goToBusiness = () => {
        goBusiness.current.scrollIntoView({ behavior: 'smooth' })
    }

    const goToWebsite = () => {
        goWebsite.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="app">
                <div className="container settings">
                    <div className="navigation">
                        <div className="internal">
                            <div className="element-title">Settings</div>
                            <div
                                className="element flex_left"
                                onClick={goToProfile}
                            >
                                Profile
                            </div>
                            <div
                                className="element flex_left"
                                onClick={goToBusiness}
                            >
                                Business
                            </div>
                            <div
                                className="element flex_left"
                                onClick={goToWebsite}
                            >
                                Website
                            </div>
                            <div
                                className="element flex_left"
                                onClick={goToSystem}
                            >
                                System
                            </div>
                        </div>
                        <div style={{ margin: '1.5em 0 0 0' }}>
                            <InfoBottom />
                        </div>
                    </div>
                    <div className="changes">
                        <Profile innerRef={goProfile} />
                        <Business innerRef={goBusiness} />
                        {/* <Website innerRef={goWebsite} /> */}
                        <System innerRef={goSystem} />
                    </div>
                </div>
            </div>
            <Alerts />
        </>
    )
}

Settings.propTypes = {
    loadUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    loadUser,
}

export default connect(mapStateToProps, mapStateToActions)(Settings)