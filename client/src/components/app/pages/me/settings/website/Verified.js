import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import LoadingButton from '@mui/lab/LoadingButton'

const Warning = ({ close, verify, verifyLoading, domainVerified }) => {
    let url = 'localhost:3000/blog/tutorials/dns-record-update'
    return (
        <>
            <div className="disconnect-ig-warning" style={{ padding: '1.5em' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 3fr 1fr',
                        marginBottom: '0.5em',
                    }}
                >
                    <div></div>
                    <div className="message flex_middle">
                        <div>Verify Your Domain</div>
                    </div>
                    <div
                        className="flex_right"
                        style={{ paddingBottom: '20px' }}
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="closing cursor_pointer"
                            onClick={close}
                        />
                    </div>
                </div>
                <div className="warning">
                    Before clicking on 'Verify' please update the DNS records of
                    your website first. If you've not done so, go to this{' '}
                    <span>
                        {' '}
                        <a href={url} target="_blank" rel="noreferrer nofollow">
                            {' '}
                            tutorial{' '}
                        </a>{' '}
                    </span>{' '}
                    for the same.
                </div>
                <div
                    className="warning flex_middle"
                    style={{ marginTop: '1em' }}
                >
                    If you've updated your DNS records then click on 'Verify'.
                </div>
                <div
                    className="flex_middle special-buttons"
                    style={{ marginTop: '1.5em' }}
                >
                    {domainVerified ? (
                        <LoadingButton
                            size="small"
                            disabled={true}
                            loadingPosition="end"
                            endIcon={
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{
                                        color: '#7ed957',
                                    }}
                                />
                            }
                            variant="outlined"
                        >
                            <div
                                style={{
                                    margin: '0em 0.5em 0em 0em',
                                }}
                            >
                                Verified
                            </div>
                        </LoadingButton>
                    ) : (
                        <LoadingButton
                            size="small"
                            loading={verifyLoading}
                            loadingPosition="end"
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        fontSize: 12,
                                    }}
                                />
                            }
                            variant="outlined"
                            onClick={verify}
                        >
                            <div
                                style={{
                                    margin: '0em 0.5em 0em 0em',
                                }}
                            >
                                Verify
                            </div>
                        </LoadingButton>
                    )}
                </div>
            </div>
        </>
    )
}

Warning.propTypes = {}

export default Warning
