import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimeline } from '@fortawesome/free-solid-svg-icons'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import StoreIcon from '@mui/icons-material/Store'
import UpcomingIcon from '@mui/icons-material/Upcoming'
import ViewListIcon from '@mui/icons-material/ViewList'

import store from '../../../../../store'
import {
    MOUSE_ENTER,
    MOUSE_LEAVE,
    ENABLE_HOVER,
    DISABLE_HOVER,
    IS_MOUNTED_RIGHTBAR,
} from '../../../../../redux/actions/types'

import bodingaLogo from '../../../../../resources/images/logos/bodinga-logos/bodingaLogo.png'

const Sidebar = ({
    // Redux States
    sidebar: { hover, hoverDisabled },
    auth: { user }
}) => {

    const enableHover = () => {
        store.dispatch({
            type: MOUSE_LEAVE,
        })
        store.dispatch({
            type: ENABLE_HOVER
        })
    }

    const disableHover = () => {
        store.dispatch({
            type: DISABLE_HOVER
        })
    }

    const maximize = () => {
        if(!hoverDisabled){
            store.dispatch({
                type: MOUSE_ENTER,
            })
        }
    }

    const minimize = () => {
        if (!hoverDisabled) {
            store.dispatch({
                type: MOUSE_LEAVE,
            })
        }
    }

    return (
        <>
            {hover ? (
                <div
                    className={'sidebar_main_maximize'}
                    onMouseLeave={minimize}
                >
                    <div className="app">
                        <NavLink
                            to="/"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="app">
                                <div>
                                    <img src={bodingaLogo} alt="Bodinga Logo" />
                                </div>
                                <div
                                    className="writing"
                                    style={{ marginTop: '1em' }}
                                >
                                    Dr.{' '}
                                    {user.name.replace(
                                        /(^\w{1})|(\s+\w{1})/g,
                                        (letter) => letter.toUpperCase()
                                    )}
                                </div>
                                <div
                                    className="writing"
                                    style={{ marginTop: '0.5em' }}
                                >
                                    {user.email}
                                </div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/dashboard"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <DashboardIcon
                                        style={{
                                            marginRight: '0.5em',
                                            marginTop: '0.3em',
                                        }}
                                    />
                                </div>
                                <div
                                    className="writing"
                                    style={{ marginTop: '0.5em' }}
                                >
                                    Dashboard
                                </div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/cases"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <ViewListIcon
                                        style={{
                                            marginRight: '0.5em',
                                            marginTop: '0.3em',
                                        }}
                                    />
                                </div>
                                <div
                                    className="writing"
                                    style={{ marginTop: '0.5em' }}
                                >
                                    Cases
                                </div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/upcoming"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <UpcomingIcon
                                        style={{
                                            marginRight: '0.5em',
                                            fontSize: 24,
                                        }}
                                    />
                                </div>
                                <div className="writing">Upcoming</div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/clients"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <PeopleAltIcon
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                                <div className="writing">Clients</div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/business"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <StoreIcon
                                        style={{
                                            marginRight: '0.5em',
                                            fontSize: 24,
                                        }}
                                    />
                                </div>
                                <div className="writing">Business</div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/calendar"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <CalendarMonthIcon
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                                <div className="writing">Calendar</div>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/vets/timeline"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faTimeline}
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                                <div className="writing">Timeline</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="lock flex_middle">
                        <div
                            className="flex_middle"
                            onClick={hoverDisabled ? disableHover : enableHover}
                            style={{
                                borderRight: '1px solid rgb(240, 240, 240)',
                            }}
                        >
                            {hoverDisabled ? (
                                <LockIcon style={{ fontSize: 16 }} />
                            ) : (
                                <LockOpenIcon style={{ fontSize: 16 }} />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="sidebar_main"
                    onClick={maximize}
                    onMouseEnter={maximize}
                >
                    <div className="app">
                        <NavLink
                            to="/"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div
                                className="flex_between"
                                style={{ marginRight: '0.4em' }}
                            >
                                <img src={bodingaLogo} alt="Bodinga Logo" />
                            </div>
                        </NavLink>
                        {/* <NavLink
                            to="/vets/dashboard"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <DashboardIcon
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                            </div>
                        </NavLink> */}
                        <NavLink
                            to="/vets/cases"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <ViewListIcon
                                        style={{ marginRight: '0.3em', fontSize: 24 }}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        {/* <NavLink
                            to="/vets/upcoming"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <UpcomingIcon
                                        style={{
                                            marginRight: '0.3em',
                                            fontSize: 24,
                                        }}
                                    />
                                </div>
                            </div>
                        </NavLink> */}
                        <NavLink
                            to="/vets/clients"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <PeopleAltIcon
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                            </div>
                        </NavLink>
                        {/* <NavLink
                            to="/vets/business"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <StoreIcon
                                        style={{
                                            marginRight: '0.3em',
                                            fontSize: 24,
                                        }}
                                    />
                                </div>
                            </div>
                        </NavLink> */}
                        {/* <NavLink
                            to="/vets/calendar"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <CalendarMonthIcon
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                            </div>
                        </NavLink> */}
                        {/* <NavLink
                            to="/vets/timeline"
                            className={'element'}
                            activeStyle={{ color: '#ff6666' }}
                            exact
                            onClick={() =>
                                store.dispatch({
                                    type: IS_MOUNTED_RIGHTBAR,
                                    payload: false,
                                })
                            }
                        >
                            <div className="flex_between">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faTimeline}
                                        style={{ marginRight: '0.3em' }}
                                    />
                                </div>
                            </div>
                        </NavLink> */}
                    </div>
                    {hoverDisabled ? (
                        <div
                            className="lock flex_middle"
                            onClick={disableHover}
                        >
                            <LockIcon style={{ fontSize: 16 }} />
                        </div>
                    ) : (
                        <div className="lock flex_middle" onClick={enableHover}>
                            <LockOpenIcon style={{ fontSize: 16 }} />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

Sidebar.propTypes = {
    sidebar: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
    auth: state.auth
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(Sidebar)
