import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import randomstring from 'randomstring'

import {
    Modal,
    Fade,
    Box,
} from '@mui/material'

import Warning from '../Warning'

import {
    generateNewApiKeySettings,
    revokeApiKeySettings,
} from '../../../../../../redux/actions/settings/partner-website/partner-wesbite'

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

const Apikey = ({
    first,
    title,
    // Redux Actions 
    generateNewApiKeySettings,
    revokeApiKeySettings,
    // Redux State
    auth: { user: { apiKey } }
}) => {

    const [regenerateWarning, setRegenerateWarning] = useState(false)
    const [revokeWarning, setRevokeWarning] = useState(false)

    const regenerateOff = () => {
        setRegenerateWarning(false)
    }

    const revokeOff = () => {
        setRevokeWarning(false)
    }

    const regenerateKey = () => {
        setRegenerateWarning(false)
        let apiKeyNew = randomstring.generate({
            length: 64,
            charset: 'alphanumeric',
        })
        generateNewApiKeySettings(apiKey, apiKeyNew)
    }

    const revokeKey = () => {
        setRevokeWarning(false)
        revokeApiKeySettings(apiKey)
    }

    return (
        <>
            <div
                style={first ? { marginBottom: '80px' } : { margin: '80px 0' }}
            >
                <div className="name">
                    <div
                        className="flex_between"
                        style={{ padding: '0 2em 0 0', marginBottom: '1em' }}
                    >
                        <div className="title-type flex_left">{title}</div>
                        <div className="flex_middle">
                            <div
                                className="flex_right edit"
                                style={{ marginRight: '1.5em' }}
                                onClick={() => setRegenerateWarning(true)}
                            >
                                {apiKey ? 'Regenerate' : 'Generate'}
                            </div>
                            <div
                                className="flex_right edit"
                                style={{ borderColor: 'red', color: 'red' }}
                                onClick={() => setRevokeWarning(true)}
                            >
                                Revoke
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {apiKey ? apiKey : 'No API key generated.'}
                    </div>
                </div>
            </div>
            <Modal
                open={regenerateWarning}
                onClose={regenerateOff}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={regenerateWarning}>
                    <Box style={style}>
                        <Warning
                            close={regenerateOff}
                            primaryMessage={
                                'Are you sure you want to regenerate a new API key?'
                            }
                            secondaryMessage={
                                "You'll have to change the value of this key in the code base of your business website. "
                            }
                            type={'warning'}
                            action={regenerateKey}
                        />
                    </Box>
                </Fade>
            </Modal>
            <Modal
                open={revokeWarning}
                onClose={revokeOff}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={revokeWarning}>
                    <Box style={style}>
                        <Warning
                            close={revokeOff}
                            primaryMessage={
                                'Are you sure you want to revoke your API key?'
                            }
                            secondaryMessage={
                                "You won't have a way of communicating from your business website to Bodinga. The current API key will be invalid. "
                            }
                            type={'delete'}
                            action={revokeKey}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

Apikey.propTypes = {
    auth: PropTypes.object.isRequired,
    generateNewApiKeySettings: PropTypes.func.isRequired,
    revokeApiKeySettings: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
    generateNewApiKeySettings,
    revokeApiKeySettings,
}

export default connect(mapStateToProps, mapStateToActions)(Apikey)
