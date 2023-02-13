import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCheck
} from '@fortawesome/free-solid-svg-icons'

import { Modal, Fade, Box } from '@mui/material'

import Verified from './Verified'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
        border: 'none',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'none',
            fontSize: '0.9em',
        },
    },
    border: 'transparent',
}))

const useStyles = makeStyles(() => ({
    noBorder: {
        border: 'none',
    },
}))

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

const ConnectWebsite = ({
    editOn,
    save,
    setElementEdit,
    element,
    elementNew,
    onChange,
    setFormData,
    formData,
    title,
    textFieldName,
    error,
    details,
    first,
    errorMessage,
    allSmall,
    placeholder,
    domainVerified,
    verify,
    verifyLoading,
}) => {
    const textAttitude = useStyles()

    const [verifyModal, setVerifyModal] = useState(false)

    const verifyModalOff = () => {
        setVerifyModal(false)
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
                        {editOn ? (
                            <>
                                <div
                                    className="flex_evenly special-buttons"
                                    style={{ marginBottom: '5px' }}
                                >
                                    <div style={{ marginRight: '1.3em' }}>
                                        <button
                                            className="button-yes flex_middle"
                                            onClick={save}
                                            style={{
                                                padding: '0.3em 0.6em',
                                                borderRadius: '10px',
                                                fontSize: '0.9em',
                                            }}
                                        >
                                            <div className="flex_middle">
                                                <div>Save</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className="button-no"
                                            onClick={() => {
                                                setElementEdit(false)
                                                setFormData({
                                                    ...formData,
                                                    [textFieldName]: element,
                                                })
                                            }}
                                            style={{
                                                padding: '0.3em 0.6em',
                                                borderRadius: '10px',
                                                fontSize: '0.9em',
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex_middle">
                                {domainVerified ? (
                                    <div
                                        className="flex_right edit"
                                        style={
                                            domainVerified
                                                ? {
                                                      marginRight: '1.5em',
                                                      borderColor: '#7ed957',
                                                  }
                                                : { marginRight: '1.5em' }
                                        }
                                    >
                                        <div style={{ marginRight: '0.5em' }}>
                                            Verified
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                style={{ color: '#7ed957' }}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="flex_right edit"
                                        onClick={() => setVerifyModal(true)}
                                        style={{ marginRight: '1.5em' }}
                                    >
                                        Verify
                                    </div>
                                )}
                                <div
                                    className="flex_right edit"
                                    onClick={() => setElementEdit(true)}
                                >
                                    Edit
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="content">
                        {editOn ? (
                            <CssTextField
                                autoFocus
                                fullWidth
                                placeholder={placeholder}
                                inputProps={{
                                    style: {
                                        fontSize: '1em',
                                        height: '20px',
                                        padding: 0,
                                        fontFamily: 'Segoe UI, serif',
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                        notchedOutline: textAttitude.noBorder,
                                    },
                                }}
                                style={{
                                    border: 'none',
                                }}
                                name={textFieldName}
                                value={elementNew}
                                onChange={onChange}
                                error={elementNew.length < 1}
                            />
                        ) : element ? (
                            element.toLowerCase()
                        ) : (
                            ''
                        )}
                    </div>
                    {error ? (
                        <div className="details" style={{ color: 'red' }}>
                            {errorMessage}
                        </div>
                    ) : (
                        <div className="details">{details}</div>
                    )}
                </div>
            </div>
            <Modal
                open={verifyModal}
                onClose={verifyModalOff}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={verifyModal}>
                    <Box style={style}>
                        <Verified
                            close={verifyModalOff}
                            verify={verify}
                            verifyLoading={verifyLoading}
                            domainVerified={domainVerified}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ConnectWebsite
