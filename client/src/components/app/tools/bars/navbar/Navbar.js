import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useInterval from 'use-interval'

import {
    Menu,
    MenuItem,
    ListItemIcon,
    Tooltip,
    Drawer,
    Modal,
    Box,
    Fade
} from '@mui/material'

import {
    faChalkboardTeacher,
    faTimeline,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SettingsIcon from '@mui/icons-material/Settings'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import HelpIcon from '@mui/icons-material/Help'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import NotificationsSidebar from '../notifications/NotificationsSidebar'

import SendWhatsapp from '../../communication/whatsapp/SendWhatsapp'

import QuickAdd from '../../options/quick-add/Main'

import { logout } from '../../../../../redux/actions/auth/auth'
import { getNotifications } from '../../../../../redux/actions/notifications/notifications'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    p: 4,
}

const Navbar = ({
    logout,
    // Redux Actions
    getNotifications,
    // Redux States
    notifications: { notifications, notificationsLoading, notificationsCount },
    auth: { user: { customerType } },
    sidebar: { expandRightbar }
}) => {
    useInterval(() => {
        // Get notifications 
        getNotifications(false)
    }, 120000)

    const [anchorEl, setAnchorEl] = useState(null)
    const [isHovering, setIsHovering] = useState(false)
    const [notificationsOn, setNotificationsOn] = useState(false)
    const [whatsappOn, setWhatsappOn] = useState(false)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setIsHovering(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setIsHovering(false)
    }

    const handleLogout = () => {
        logout()
    }

    const closeNotifications = () => {
        setNotificationsOn(false)
    }

    const openNotifications = () => {
        setNotificationsOn(true)
    }

    const closeWhatsapp = () => {
        setWhatsappOn(false)
    }

    const openWhatsapp = () => {
        setWhatsappOn(true)
    }

    return (
        <>
            <div
                className={'navbar'}
                style={
                    (window.location.pathname === '/vets/events' ||
                    window.location.pathname === '/vets/events/timeline')
                        ? { width: '340px' }
                        : {}
                }
            >
                <div className="navbar_float">
                    <div
                        className="navbar-option"
                        style={{ marginTop: '1.2em' }}
                    >
                        <QuickAdd />
                    </div>
                    <Tooltip title="Send Whatsapp Message" placement="bottom">
                        <div
                            className="navbar-option navbar-option-whatsapp"
                            onClick={openWhatsapp}
                        >
                            <WhatsAppIcon className="navbar-option__icon" />
                        </div>
                    </Tooltip>
                    <Tooltip title="Notifications" placement="bottom">
                        <div
                            className={
                                notificationsLoading
                                    ? 'navbar-option notification_loading_active notif-icon'
                                    : 'navbar-option notif-icon'
                            }
                            onClick={openNotifications}
                        >
                            <NotificationsIcon className="navbar-option__icon" />
                            {notificationsCount > 0 && (
                                <div className="badge flex_middle">
                                    {notificationsCount > 9
                                        ? '9+'
                                        : notificationsCount}
                                </div>
                            )}
                        </div>
                    </Tooltip>
                    <SettingsIcon
                        className={
                            isHovering
                                ? 'navbar-option navbar-option__right__icon isHoveringNavbar'
                                : 'navbar-option navbar-option__right__icon'
                        }
                        onClick={handleClick}
                        aria-controls="fade-menu"
                    />
                    <Menu
                        disableScrollLock={true}
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    left: 66,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                            style: {
                                transform: 'translateX(-12px) translateY(-1px)',
                            },
                        }}
                        transformOrigin={{
                            horizontal: 'center',
                            vertical: 'top',
                        }}
                        anchorOrigin={{
                            horizontal: 'center',
                            vertical: 'bottom',
                        }}
                    >
                        <MenuItem>
                            <NavLink
                                to="/me/settings"
                                className="settings_link flex_middle"
                                style={{ color: 'gray' }}
                            >
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                to="/me/help"
                                className="settings_link flex_middle"
                                style={{ color: 'gray' }}
                            >
                                <ListItemIcon>
                                    <HelpIcon fontSize="small" />
                                </ListItemIcon>
                                Help
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                to="/learn"
                                className="settings_link flex_middle"
                                style={{ color: 'gray' }}
                            >
                                <ListItemIcon>
                                    <FontAwesomeIcon
                                        icon={faChalkboardTeacher}
                                        fontSize="small"
                                    />
                                </ListItemIcon>
                                Learn
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink
                                to="/blog"
                                className="settings_link flex_middle"
                                style={{ color: 'gray' }}
                            >
                                <ListItemIcon>
                                    <LibraryBooksIcon fontSize="small" />
                                </ListItemIcon>
                                Blog
                            </NavLink>
                        </MenuItem>
                        <MenuItem
                            onClick={handleLogout}
                            className="settings_link flex_middle"
                            style={{ color: 'gray' }}
                        >
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                    {(window.location.pathname === '/vets/events' ||
                        window.location.pathname ===
                            '/vets/events/timeline') && (
                            <>
                                <div
                                    style={{
                                        border: '1px solid grey',
                                        margin: '0 0.5em',
                                    }}
                                ></div>
                                <Tooltip
                                    title={'Products'}
                                    placement="bottom"
                                    enterDelay={650}
                                >
                                    <NavLink
                                        to="/vets/events"
                                        className="navbar-option"
                                        activeStyle={{ color: '#ff6666' }}
                                        exact
                                    >
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            style={{
                                                fontSize: 18,
                                            }}
                                        />
                                    </NavLink>
                                </Tooltip>
                                <Tooltip
                                    title={'History'}
                                    placement="bottom"
                                    enterDelay={650}
                                >
                                    <NavLink
                                        to="/vets/events/timeline"
                                        className="navbar-option"
                                        activeStyle={{ color: '#ff6666' }}
                                        exact
                                    >
                                        <FontAwesomeIcon
                                            icon={faTimeline}
                                            style={{
                                                fontSize: 18,
                                            }}
                                        />
                                    </NavLink>
                                </Tooltip>
                            </>
                        )}
                </div>
            </div>
            <Drawer
                anchor={'right'}
                open={notificationsOn}
                onClose={closeNotifications}
                className="sidebar_nav-right"
                disableScrollLock={true}
            >
                <NotificationsSidebar
                    close={closeNotifications}
                    notifications={notifications}
                    notificationsLoading={notificationsLoading}
                />
            </Drawer>
            <Modal
                open={whatsappOn}
                onClose={!whatsappOn}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={whatsappOn}>
                    <Box style={style}>
                        <SendWhatsapp close={closeWhatsapp} />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

Navbar.propTypes = {
    sidebar: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired,
    getNotifications: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    sidebar: state.sidebar,
    notifications: state.notifications,
})

const mapStateToActions = {
    logout,
    getNotifications
}

export default connect(mapStateToProps, mapStateToActions)(Navbar)
