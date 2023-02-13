import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 
import moment from 'moment'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarCheck,
    faSyringe,
    faCartPlus,
    faCartArrowDown,
    faFileMedical
} from '@fortawesome/free-solid-svg-icons'
import StorageIcon from '@mui/icons-material/Storage'
import { makeStyles } from '@mui/styles'

import { Tooltip } from '@mui/material'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'

import { addMainArray } from '../../../../../redux/actions/add-array/add'


const useStyles = makeStyles({
    popperDisablePortal: {
        position: 'relative',
    },
})

const OptionsSmall = ({
    // Redux Actions
    addMainArray,
    // Redux State
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

    const classes = useStyles()

    const [xAxis, setXaxis] = useState('64px')

    useEffect(() => {
        if (window.location.pathname === '/records') {
            setXaxis('43px')
        }
    }, [])

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

      const addAppointment = () => {
          addMainArray(0, 'addAppointment', moment().format('DD/MM/YY HH:mm'))
      }

      const addVaccination = () => {
          addMainArray(0, 'addVaccination', moment().format('DD/MM/YY HH:mm'))
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
                <Tooltip
                    title="Add Sale, Purchase, Report, Appointment and more..."
                    placement="bottom"
                >
                    <div className="icon" style={{ marginTop: '0.2em' }}>
                        <AddCircleOutline style={{ fontSize: 22 }} />
                    </div>
                </Tooltip>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                classes={classes}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 5,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(2px 2px 6px -3px rgba(15, 15, 15, 0.75))',
                    },
                    style: {
                        transform: `translateX(${xAxis}) translateY(0px)`,
                        height: '13m0px',
                        width: '160px',
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

OptionsSmall.propTypes = {
    auth: PropTypes.object.isRequired,
    addMainArray: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapActionsToProps = {
    addMainArray,
}

export default connect(mapStateToProps, mapActionsToProps)(OptionsSmall)
