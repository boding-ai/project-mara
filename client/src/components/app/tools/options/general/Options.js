import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { Menu, MenuItem, ListItemIcon } from '@mui/material'

import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import StorageIcon from '@mui/icons-material/Storage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarCheck,
    faSyringe,
    faCartPlus,
    faCartArrowDown,
    faFileMedical,
} from '@fortawesome/free-solid-svg-icons'

import { Popup } from 'semantic-ui-react'

import { addMainArray } from '../../../../../redux/actions/add-array/add'


const Options = ({
    // Redux Actions 
    addMainArray,
    // Redux States
    auth: {
        user: { id },
    },
}) => {
    let saying = [
        'o-my-my',
        'three-legged-cartoon',
        'sunset-and-sunrise',
        'ice-cream-sandwich',
        'cushy-mushy-potato',
        'local-disco-king',
        'eagle-has-landed',
    ]

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const addAppointment = () => {
        addMainArray(0, 'addAppointment',moment().format('DD/MM/YY HH:mm'))
    }

    const addVaccination = () => {
        addMainArray(0, 'addVaccination',moment().format('DD/MM/YY HH:mm'))
    }

    const addSale = () => {
        addMainArray(0, 'addSale', moment().format('DD/MM/YY HH:mm'))
    }

    const addPurchase = () => {
        addMainArray(0, 'addPurchase', moment().format('DD/MM/YY HH:mm'))
    }

    const addReport = () => {
        addMainArray(0, 'addReport', moment().format('DD/MM/YY HH:mm'))
    }

    return (
        <>
            <div className="options_add" onClick={handleClick}>
                <Popup
                    trigger={
                        <div className="options_main_grid center_everything">
                            <div className="icon">
                                <AddCircleOutline style={{ fontSize: 21 }} />
                            </div>
                            <div className="writing">Add</div>
                        </div>
                    }
                    content="Add Sale, Purchase, Report, Appointment and more..."
                    position="left center"
                    style={{
                        fontSize: 11,
                    }}
                />
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 5,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(2px 2px 6px -3px rgba(15, 15, 15, 0.75))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 100,
                            height: 100,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 50,
                            right: 0,
                            width: 10,
                            height: 20,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                    style: {
                        transform: 'translateX(-100px) translateY(-80px)',
                        borderRadius: '10px',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link
                    to={`/${
                        saying[Math.floor(Math.random() * saying.length)]
                    }/${id}/record-add/${moment().unix()}/main`}
                    target={'_blank'}
                    rel="noreferrer nofollow"
                    style={{ color: 'black' }}
                >
                    <MenuItem style={{ fontSize: '0.85em', margin: '0.5em 0' }}>
                        <ListItemIcon>
                            <StorageIcon
                                style={{
                                    color: 'rgb(250, 91, 104)',
                                    fontSize: 16,
                                }}
                            />
                        </ListItemIcon>
                        Add Record
                    </MenuItem>
                </Link>
                <MenuItem
                    style={{ fontSize: '0.85em', margin: '0.5em 0' }}
                    onClick={addAppointment}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            style={{ color: '#f7bf45', fontSize: 16 }}
                        />
                    </ListItemIcon>
                    Add Appointment
                </MenuItem>
                <MenuItem
                    style={{ fontSize: '0.85em', margin: '0.5em 0' }}
                    onClick={addVaccination}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faSyringe}
                            style={{ color: '#5d8ef0', fontSize: 16 }}
                        />
                    </ListItemIcon>
                    Add Vaccination
                </MenuItem>
                <MenuItem
                    style={{ fontSize: '0.85em', margin: '0.5em 0' }}
                    onClick={addReport}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faFileMedical}
                            style={{ color: '#ce73f0', fontSize: 16 }}
                        />
                    </ListItemIcon>
                    Add Report
                </MenuItem>
                <MenuItem
                    style={{ fontSize: '0.85em', margin: '0.5em 0' }}
                    onClick={addSale}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faCartPlus}
                            style={{ color: 'rgb(23, 211, 23)', fontSize: 16 }}
                        />
                    </ListItemIcon>
                    Add Sale
                </MenuItem>
                <MenuItem
                    style={{ fontSize: '0.85em', margin: '0.5em 0' }}
                    onClick={addPurchase}
                >
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faCartArrowDown}
                            style={{ color: '#f23f48', fontSize: 16 }}
                        />
                    </ListItemIcon>
                    Add Purchase
                </MenuItem>
            </Menu>
        </>
    )
}

Options.propTypes = {
    auth: PropTypes.object.isRequired,
    addMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapActionsToProps = {
    addMainArray
}

export default connect(mapStateToProps, mapActionsToProps)(Options)
