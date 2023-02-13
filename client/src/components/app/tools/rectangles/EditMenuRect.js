import React, { useState } from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Settings from '@mui/icons-material/Settings'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

function EditMenuSingleRecord() {
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div className="cur-ptr">
                <div className="navbarhome__right">
                    <MoreVertIcon
                        onClick={handleClick}
                        aria-controls="fade-menu"
                    />
                    <Menu
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
                        <MenuItem>
                            <div className="settings_link_singlerecord">
                                <VisibilityOffIcon fontSize="tiny" />
                                <p>Hide</p>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="settings_link_singlerecord">
                                <ModeEditIcon fontSize="tiny" />
                                <p>Edit</p>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="settings_link_singlerecord">
                                <DeleteIcon
                                    fontSize="tiny"
                                    style={{ color: 'red' }}
                                />
                                <p>Delete</p>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    )
}

export default EditMenuSingleRecord
