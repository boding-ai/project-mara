import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import { Menu, MenuItem, ListItemIcon } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faUser } from '@fortawesome/free-solid-svg-icons'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Popup } from 'semantic-ui-react'

import { addMainArray } from '../../../../../redux/actions/add-array/add'

const Options = ({
    // Redux Actions
    addMainArray,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const addOwner = () => {
        addMainArray(0, 'addOwner', moment().format('DD/MM/YY HH:mm'))
    }

    const addPet = () => {
        addMainArray(0, 'addPet', moment().format('DD/MM/YY HH:mm'))
    }

    return (
        <>
            <div
                className="options_add"
                onClick={handleClick}
                style={{ width: '50%' }}
            >
                <Popup
                    trigger={
                        <div className="options_main_grid flex_middle">
                            <div className="icon">
                                <AddCircleOutlineIcon
                                    style={{ fontSize: 21 }}
                                />
                            </div>
                            <div className="writing">Profiles</div>
                        </div>
                    }
                    content="Add Owner or Pet Profile"
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
                        transform: 'translateX(-140px) translateY(-80px)',
                        borderRadius: '10px',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem style={{ fontSize: '1.1em' }} onClick={addOwner}>
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{
                                color: 'rgb(50, 190, 250)',
                                fontSize: 16,
                                marginLeft: '0.2em',
                            }}
                        />
                    </ListItemIcon>
                    Add Owner
                </MenuItem>
                <MenuItem style={{ fontSize: '1.1em' }} onClick={addPet}>
                    <ListItemIcon>
                        <FontAwesomeIcon
                            icon={faPaw}
                            style={{
                                color: 'rgb(50, 190, 250)',
                                fontSize: 16,
                                marginLeft: '0.2em',
                            }}
                        />
                    </ListItemIcon>
                    Add Pet
                </MenuItem>
            </Menu>
        </>
    )
}

Options.propTypes = {
    addMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapActionsToProps = {
    addMainArray,
}

export default connect(mapStateToProps, mapActionsToProps)(Options)
