import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'
import { connect } from 'react-redux'

import {
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    clientsListCheckMakeActive,
} from '../../../../../../redux/actions/clients/clients'
 
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

const Filter = ({
    // Redux Actions
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    clientsListCheckMakeActive,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isHovering, setIsHovering] = useState(false)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setIsHovering(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setIsHovering(false)
    }

    const getAllClients = () => {
        clientsListCheckMakeActive()
        getClientsListAll()
    }

    const getOwnersAsClientsOnly = () => {
        clientsListCheckMakeActive()
        getOwnersOnlyFromClientsList()
    }

    const getPetsAsClientsOnly = () => {
        clientsListCheckMakeActive()
        getPetsOnlyFromClientsList()
    }

    return (
        <>
            <div className="fiter_records cur-ptr">
                <Popup
                    trigger={
                        <FilterAltIcon
                            fontSize="medium"
                            className={
                                isHovering ? 'filterIconActive' : 'filterIcon'
                            }
                            onClick={handleClick}
                            aria-controls="fade-menu"
                        />
                    }
                    basic
                    content={'Filter'}
                    size="mini"
                    position="bottom center"
                />
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    disableScrollLock
                    open={open}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 30,
                                height: 30,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 7,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{
                        horizontal: 'right',
                        vertical: 'top',
                    }}
                    anchorOrigin={{
                        horizontal: 'right',
                        vertical: 'bottom',
                    }}
                >
                    <MenuItem className="heading_menuitem_filter">
                        <div className="settings_link_singlerecord">
                            <h6>Filter</h6>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={getAllClients}>
                        <div className="settings_link_singlerecord">
                            <p>All</p>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={getPetsAsClientsOnly}>
                        <div className="settings_link_singlerecord">
                            <p>Pets</p>
                        </div>
                    </MenuItem>
                    <MenuItem onClick={getOwnersAsClientsOnly}>
                        <div className="settings_link_singlerecord">
                            <p>Owners</p>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}

Filter.propTypes = {
    getOwnersOnlyFromClientsList: PropTypes.func.isRequired,
    getPetsOnlyFromClientsList: PropTypes.func.isRequired,
    getClientsListAll: PropTypes.func.isRequired,
    clientsListCheckMakeActive: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({

})

const mapStateToActions = {
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    clientsListCheckMakeActive,
}

export default connect(mapStateToProps, mapStateToActions)(Filter)
