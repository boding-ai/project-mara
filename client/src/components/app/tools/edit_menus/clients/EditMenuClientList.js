import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    hideClientListCard,
    deleteClientOwnerProfile,
    clientsMainArray,
    loadDetailsForEditing,
} from '../../../../../redux/actions/clients/clients'

import { Menu, Collapse, IconButton, MenuItem, CardContent } from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { makeStyles } from '@mui/styles'
import { Modal, Icon, Popup } from 'semantic-ui-react'
import LoadingButton from '@mui/lab/LoadingButton'

import { styled } from '@mui/material/styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    width: '1em',
    height: '1em',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const saveRecordIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#1686f0',
            border: '1px solid #1686f0',
        },
    },
})

function EditMenuClientList({
    listID,
    listStatus,
    listType,
    index,
    hideClientListCard,
    deleteClientOwnerProfile,
    clientsMainArray,
    loadDetailsForEditing,
    disabled,
    clients: { profileDeletingLoading },
}) {
    const [anchorEl, setAnchorEl] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const saveIconStyle = saveRecordIconButtonStyle()

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        if(!disabled){
            setAnchorEl(event.currentTarget)
        }
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const showDelete = () => {
        setDialogOpen(true)
    }

    const confirmDelete = (listID, listType) => {
        console.log('clicked')
        deleteClientOwnerProfile(listID, listType)
        // setDialogOpen(false)
    }

    const hideListCard = (listID, index) => {
        hideClientListCard(index)
    }

    const showEditOptions = async (listID, listType) => {
        if (listType === 'owner') {
            await loadDetailsForEditing(listID, listType)
            clientsMainArray('addOwnerEdit')
        }
        if (listType === 'pet') {
            await loadDetailsForEditing(listID, listType)
            clientsMainArray('addPetEdit')
        }
    }

    return (
        <>
            <div className="">
                <div className="navbarhome__right">
                    <MoreVertIcon
                        onClick={handleClick}
                        aria-controls="fade-menu"
                        className="cursor_pointer"
                        style={{ marginTop: '0.25em', color: 'grey' }}
                    />
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClick={handleClose}
                        disableScrollLock={true}
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
                            style: {
                                transform: 'translateX(19px) translateY(-1px)',
                            },
                        }}
                        transformOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        anchorOrigin={{
                            horizontal: 'left',
                            vertical: 'bottom',
                        }}
                    >
                        <MenuItem
                            onClick={() => showEditOptions(listID, listType)}
                        >
                            <div className="settings_link_singlerecord">
                                <ModeEditIcon fontSize="tiny" />
                                <p>Edit</p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={() => hideListCard(listID, index)}>
                            <div className="settings_link_singlerecord">
                                <VisibilityOffIcon fontSize="tiny" />
                                <p>Hide</p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={showDelete}>
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
                <div>
                    <Modal
                        size="tiny"
                        open={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                    >
                        <Modal.Content style={{ fontSize: '15px' }}>
                            <div>
                                <div>
                                    <Icon name="warning" color="red" />
                                    <span
                                        style={{
                                            color: 'red',
                                            fontWeight: '600',
                                        }}
                                    >
                                        Warning!{' '}
                                    </span>
                                    {`Are you sure you want to delete ${listStatus}'s profile?`}
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        margin: '10px 0px 0px 20px',
                                    }}
                                >
                                    <u>
                                        Once a profile is deleted all the data
                                        related to it will be deleted.
                                    </u>
                                    <span>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <Popup
                                                trigger={<ExpandMoreIcon />}
                                                inverted
                                                content="Expand More"
                                                size="mini"
                                                position="top center"
                                                basic
                                                style={{
                                                    height: '7px',
                                                    padding: '1px 5px 16px 5px',
                                                    fontSize: '10px',
                                                    fontWeight: 'bold',
                                                    borderRadius: '5px',
                                                    marginBottom: '1em',
                                                    background: '#000',
                                                }}
                                            />
                                        </ExpandMore>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <Collapse
                                    in={expanded}
                                    timeout="auto"
                                    unmountOnExit
                                    style={{
                                        backgroundColor: '#fff',
                                        padding: 0,
                                    }}
                                >
                                    <CardContent>
                                        {listType === 'owner' && (
                                            <div style={{ fontSize: '14px' }}>
                                                All pet profiles, metrics, owner
                                                history, suggestions and/or all
                                                data related to the owner and
                                                it's relatives as stated above
                                                will be lost forever. It is
                                                advisable to edit owner data
                                                instead of deleting it.
                                            </div>
                                        )}
                                        {listType === 'pet' && (
                                            <div style={{ fontSize: '14px' }}>
                                                The pet profile, metrics, pet
                                                history, suggestions and/or all
                                                data related to the pet and it's
                                                relatives as stated above will
                                                be lost forever.
                                            </div>
                                        )}
                                    </CardContent>
                                </Collapse>
                            </div>
                        </Modal.Content>
                        <Modal.Actions
                            style={{ height: '40px', padding: '7px 30px 0x 0' }}
                            className="flex_end_everything"
                        >
                            <div
                                style={{
                                    marginRight: '2em',
                                }}
                            >
                                <LoadingButton
                                    inverted
                                    size="small"
                                    className={saveIconStyle.root}
                                    onClick={() => setDialogOpen(false)}
                                    style={{
                                        border: '2px solid #e33630',
                                        padding: 2,
                                    }}
                                >
                                    <div
                                        style={{
                                            color: '#e33630',
                                            fontSize: 10,
                                        }}
                                    >
                                        <Icon name="remove" /> No
                                    </div>
                                </LoadingButton>
                            </div>
                            <div>
                                <LoadingButton
                                    loading={profileDeletingLoading}
                                    disabled={profileDeletingLoading}
                                    inverted
                                    size="small"
                                    className={saveIconStyle.root}
                                    onClick={() =>
                                        confirmDelete(listID, listType)
                                    }
                                    style={{
                                        border: '2px solid #31d663',
                                        padding: 2,
                                    }}
                                >
                                    {!profileDeletingLoading && (
                                        <div
                                            style={{
                                                color: '#31d663',
                                                fontSize: 10,
                                            }}
                                        >
                                            <Icon name="check" />
                                            Yes
                                        </div>
                                    )}
                                    {profileDeletingLoading && (
                                        <div
                                            style={{
                                                color: '#fff',
                                                fontSize: 10,
                                            }}
                                        >
                                            Yes
                                        </div>
                                    )}
                                </LoadingButton>
                            </div>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        </>
    )
}
EditMenuClientList.propTypes = {
    clients: PropTypes.object.isRequired,
    hideClientListCard: PropTypes.func.isRequired,
    deleteClientOwnerProfile: PropTypes.func.isRequired,
    clientsMainArray: PropTypes.func.isRequired,
    loadDetailsForEditing: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients
})

export default connect(mapStateToProps, {
    hideClientListCard,
    deleteClientOwnerProfile,
    clientsMainArray,
    loadDetailsForEditing,
})(EditMenuClientList)
