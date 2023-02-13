import React from 'react'

import { Popup } from 'semantic-ui-react'

import CheckIcon from '@mui/icons-material/Check'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import CancelIcon from '@mui/icons-material/Cancel'
import SnackbarContent from '@mui/material/SnackbarContent'

import catIcon from '../../../resources/images/cat-09-edited-bw.png'

function AlertsInfo({ handleClose, message, type }) {
    return (
        <>
            <SnackbarContent
                className={`snackbar_alert_${type}`}
                message={
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                width: '20px',
                            }}
                        >
                            {type === 'info' && (
                                <img
                                    src={catIcon}
                                    alt="Left Icon"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            )}
                            {type === 'success' && (
                                <CheckIcon
                                    style={{
                                        fontSize: 25,
                                    }}
                                />
                            )}
                            {type === 'danger' && (
                                <PriorityHighIcon
                                    style={{
                                        fontSize: 25,
                                    }}
                                />
                            )}
                        </div>
                        <div>
                            <span
                                id="client-snackbar"
                                className={`snackbar_message`}
                                style={{ margin: '0.24em 0em 0em 0.6em' }}
                            >
                                {message}
                            </span>
                        </div>
                    </div>
                }
                action={
                    <Popup
                        trigger={
                            <CancelIcon
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '15px',
                                }}
                                className="cancel_icon_snackbar"
                                onClick={handleClose}
                            />
                        }
                        style={{
                            height: '7px',
                            padding: '1px 5px 16px 5px',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            marginBottom: '1.2em',
                            background: '#000',
                        }}
                        basic
                        content="close"
                        position="top center"
                        inverted
                    />
                }
            ></SnackbarContent>
        </>
    )
}

export default AlertsInfo
