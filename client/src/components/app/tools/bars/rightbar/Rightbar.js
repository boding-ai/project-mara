import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@mui/material'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Scrollbars from 'react-custom-scrollbars'
import { style } from '@mui/system'

import UpdateMain from '../../upcoming/UpdateMain'
import InfoBottom from '../../info-bottom/InfoBottom'
import WebsiteDetails from '../../website-details/WebsiteDetails'

import AppsIcon from '@mui/icons-material/Apps'
import LanguageIcon from '@mui/icons-material/Language'
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info'

import store from '../../../../../store'
import {
    EXPAND_RIGHTBAR,
    DEFLATE_RIGHTBAR,
    IS_MOUNTED_RIGHTBAR,
} from '../../../../../redux/actions/types'

const AppsIconGradient = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="linearColorsFour" x1={1} y1={0} x2={1} y2={1}>
                <stop offset={0.25} stopColor="rgba(82, 172, 255, 0.8)" />
                <stop offset={1} stopColor="rgba(255, 227, 44, 1)" />
            </linearGradient>
        </svg>
        <AppsIcon sx={{ fill: 'url(#linearColorsFour)' }} />
    </>
)

const SchoolIconGradient = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="linearColorsThree" x1={1} y1={0} x2={1} y2={1}>
                <stop offset={0} stopColor="rgba(244, 208, 63, 0.8)" />
                <stop offset={1} stopColor="rgba(22, 160, 133, 1)" />
            </linearGradient>
        </svg>
        <SchoolIcon sx={{ fill: 'url(#linearColorsThree)' }} />
    </>
)

const InfoIconGradient = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="linearColorsFour" x1={1} y1={0} x2={1} y2={1}>
                <stop
                    offset={0}
                    stopColor="rgba(130,148,248,0.9697012594100141)"
                />
                <stop offset={0.43} stopColor="rgba(255,199,54,1)" />
            </linearGradient>
        </svg>
        <InfoIcon sx={{ fill: 'url(#linearColorsFour)' }} />
    </>
)

const LanguageIconGradient = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="linearColorsFive" x1={1} y1={0} x2={1} y2={1}>
                <stop
                    offset={0}
                    stopColor="rgba(130,148,248,0.9697012594100141)"
                />
                <stop offset={0.43} stopColor="rgba(255,199,54,1)" />
            </linearGradient>
        </svg>
        <LanguageIcon sx={{ fill: 'url(#linearColorsFive)' }} />
    </>
)

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        width: 0,
        marginRight: 0,
    }
    return <div style={{ ...style, ...thumbStyle, marginRight: 0, }} {...props} />
}

const CustomScrollbars = (props) => (
    <Scrollbars
        renderView={(props) => (
            <div
                {...props}
                className="view"
                style={{
                    ...style,
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    overflowY: 'scroll',
                    marginRight: '-18px',
                    marginBottom: '-17px !important',
                }}
            />
        )}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
)


const Rightbar = ({
    // Redux States
    sidebar: { expandRightbar, isMountedRightbar },
}) => {

    const maximize = () => {
        store.dispatch({
            type: IS_MOUNTED_RIGHTBAR,
            payload: true
        })
        store.dispatch({
            type: EXPAND_RIGHTBAR,
        })
    }

    const minimize = () => {
        store.dispatch({
            type: IS_MOUNTED_RIGHTBAR,
            payload: true,
        })
        store.dispatch({
            type: DEFLATE_RIGHTBAR,
        })
    }

    let infoBottomRef = useRef()

    const goToInfoBottomMain = () => {
        maximize()
        setTimeout(() =>
            infoBottomRef.current.scrollIntoView({ behavior: 'smooth' })
        , 1000)
    }

    let tutorialsRef = useRef()

    const goToTutorials = () => {
        maximize()
        setTimeout(
            () => tutorialsRef.current.scrollIntoView({ behavior: 'smooth' }),
            1000
        )
    }

    let websiteRef = useRef()

    const goToYourWebsite = () => {
        maximize()
        setTimeout(
            () => websiteRef.current.scrollIntoView({ behavior: 'smooth' }),
            1000
        )
    }


    return (
        <>
            {expandRightbar ? (
                <div
                    className={`rightbar_main_maximize`}
                >
                    <div className="body">
                        <CustomScrollbars
                            autoHide
                            autoHideTimeout={500}
                            autoHideDuration={200}
                        >
                            <div
                                className="element flex_middle element-title"
                                data-aos="fade-in"
                                data-aos-delay={250}
                            >
                                <Tooltip
                                    title="Apps"
                                    placement="left"
                                    enterDelay={650}
                                >
                                    <div
                                        className="flex_middle"
                                        style={{
                                            borderRadius: '10px',
                                            padding: '0.2em 0.5em',
                                            border: '1px solid grey',
                                            cursor: 'context-menu',
                                        }}
                                    >
                                        <div style={{ marginRight: '0.3em' }}>
                                            <AppsIconGradient />
                                        </div>
                                        <div
                                            style={{
                                                fontSize: '1.1em',
                                                marginBottom: '0.2em',
                                            }}
                                        >
                                            Apps
                                        </div>
                                    </div>
                                </Tooltip>
                            </div>
                            <div
                                className={'marginT-1'}
                                style={{
                                    margin: '0 0 3em 0'
                                }}
                                ref={websiteRef}
                            >
                                <WebsiteDetails />
                            </div>
                            <div
                                style={{ margin: '1em 0 0em 0' }}
                                className="flex_middle"
                                ref={infoBottomRef}
                            >
                                <InfoBottom />
                            </div>
                        </CustomScrollbars>
                    </div>
                    <div className="lock" onClick={minimize}>
                        <div
                            style={{
                                position: 'fixed',
                                right: '140px',
                                bottom: '7px',
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ fontSize: 15 }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`rightbar_main`}
                >
                    <div className="app">
                        <div className="element flex_middle cursor_pointer">
                            <Tooltip
                                title="Apps"
                                placement="left"
                                enterDelay={650}
                            >
                                <div style={{ marginRight: '0.5em' }}>
                                    <AppsIconGradient />
                                </div>
                            </Tooltip>
                        </div>
                        <div className="element flex_middle cursor_pointer">
                            <Tooltip
                                title="Top Tutorials"
                                placement="left"
                                enterDelay={650}
                                onClick={goToTutorials}
                            >
                                <div style={{ marginRight: '0.5em' }}>
                                    <SchoolIconGradient />
                                </div>
                            </Tooltip>
                        </div>
                        <div className="element flex_middle cursor_pointer">
                            <Tooltip
                                title="Your Connected Website"
                                placement="left"
                                enterDelay={650}
                                onClick={goToYourWebsite}
                            >
                                <div style={{ marginRight: '0.5em' }}>
                                    <LanguageIconGradient />
                                </div>
                            </Tooltip>
                        </div>
                        <div className="element flex_middle cursor_pointer">
                            <Tooltip
                                title="Info"
                                placement="left"
                                enterDelay={650}
                                onClick={goToInfoBottomMain}
                            >
                                <div style={{ marginRight: '0.5em' }}>
                                    <InfoIconGradient />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="lock" onClick={maximize}>
                        <div
                            style={{
                                position: 'fixed',
                                right: '18px',
                                bottom: '7px',
                            }}
                            data-aos="fade-in"
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                style={{ fontSize: 15 }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Rightbar.propTypes = {
    sidebar: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(Rightbar)
