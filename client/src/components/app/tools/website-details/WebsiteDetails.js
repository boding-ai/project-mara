import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InstagramIcon from '@mui/icons-material/Instagram'
import CachedIcon from '@mui/icons-material/Cached'

import { Modal, Fade, Box, Button } from '@mui/material'
import Warning from '../warnings/Warning'

import { checkWebsite } from '../../../../redux/actions/business/social'

const style = {
    position: 'fixed',
    top: '50%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 2,
    border: 'none',
    p: 4,
}

const WebsiteDetails = ({
    // Redux Actions 
    checkWebsite,
    // Redux States
    auth:{ user: { domain } },
    social: { websiteLive, websiteLiveLoading },
}) => {

    const [openDeleteWarning, setOpenDeleteWarning] = useState(false)

    useEffect(() => {
        checkWebsite(domain)
    },[domain])
    

    const closeDisconnectInsta = () => {
        setOpenDeleteWarning(false)
    }

    const disconnectIg = () => {
        console.log('Ig Disconnected')
    }

    return (
        <>
            <div className="website_details">
                <div className="title flex_middle">Your Connected Website</div>
                <div className="website_name flex_middle">
                    <a
                        href="https://aunsh.com"
                        target={'_blank'}
                        rel="noreferrer nofollow noopener"
                    >
                        {domain}
                    </a>
                </div>
                <div className="flex_evenly status">
                    <div>Status:</div>
                    {websiteLiveLoading ? (
                        <div style={{ color: 'grey', fontSize: '0.9em' }} >
                            Loading...
                        </div>
                    ) : (
                        <>
                            {websiteLive ? (
                                <div className="connected">Live</div>
                            ) : (
                                <div className="disconnected">Not Live</div>
                            )}
                        </>
                    )}
                    <div onClick={() => checkWebsite(domain)}>
                        <CachedIcon
                            className={
                                websiteLiveLoading
                                    ? 'cursor_pointer loader-active'
                                    : 'cursor_pointer loader'
                            }
                        />
                    </div>
                </div>
            </div>
            <Modal
                open={openDeleteWarning}
                onClose={closeDisconnectInsta}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={openDeleteWarning}>
                    <Box style={style}>
                        <Warning
                            close={closeDisconnectInsta}
                            primaryMessage={
                                'Are you sure you want to disconnect Instagram?'
                            }
                            secondaryMessage={
                                'By disconnecting Instagram, all data related to your profile will be deleted permanently. This also means no stories will be shown on your connected website.'
                            }
                            type={'delete'}
                            action={disconnectIg}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

WebsiteDetails.propTypes = {
    auth: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
    checkWebsite: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    social: state.social,
})

const mapStateToActions = {
    checkWebsite,
}

export default connect(mapStateToProps, mapStateToActions)(WebsiteDetails)