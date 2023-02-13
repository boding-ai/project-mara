import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'
import { faPaw, faUser } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popup } from 'semantic-ui-react';

import { addMainArray } from '../../../../../redux/actions/add-array/add'

const AddIconMenu = ({
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
            <Popup
                trigger={
                    <AddCircleOutlineIcon
                        className="zo"
                        onClick={handleClick}
                        style={{
                            fontSize: 22,
                        }}
                    />
                }
                content="Add Pet or Client"
                basic
                position="bottom center"
                style={{
                    fontSize: 11,
                }}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                disableScrollLock={true}
                PaperProps={{
                    elevation: 6,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(2px 2px 6px -3px rgba(15, 15, 15, 0.75))',
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
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                    style: {
                        transform: 'translateX(7px) translateY(-1px)',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div
                    onClick={addOwner}
                    className="clients_menu_selection flex_middle"
                >
                    <div>
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{
                                paddingRight: '0.3em',
                                margin: '0px 1px 1px 1px',
                                fontSize: 19,
                            }}
                        />
                    </div>
                    <div>Add Owner</div>
                </div>
                <div
                    onClick={addPet}
                    className="clients_menu_selection flex_middle"
                >
                    <FontAwesomeIcon
                        icon={faPaw}
                        style={{
                            paddingRight: '0.3em',
                            margin: '0px 1px 1px 1px',
                            fontSize: 19,
                        }}
                    />
                    <div>Add Pet</div>
                </div>
            </Menu>
        </>
    )
}

AddIconMenu.propTypes = {
    addMainArray: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    addMainArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddIconMenu)
