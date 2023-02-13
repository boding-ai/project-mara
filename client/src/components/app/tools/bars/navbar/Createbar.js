import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    Box,
    Fade,
    Modal,
    Tooltip,
} from '@mui/material'

import Cancel from '@mui/icons-material/Cancel'
import Save from '@mui/icons-material/Save'
import Warning from '../../warnings/Warning'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    p: 4,
}

const Navbar = () => {

    const [openReportWarning, setOpenReportWarning] = useState(false)

    const saveReport = () => {
        console.log('Save Report')
        setOpenReportWarning(false)
    }

    const closeReportWarning = () => {
        setOpenReportWarning(false)
    }

    return (
        <>
            <div className={'navbar'}>
                <div className="navbar_float">
                    <Tooltip title="Cancel Report" placement="bottom">
                        <div className="navbar-option">
                            <Cancel
                                className=""
                                style={{ fontSize: 18 }}
                                onClick={() => setOpenReportWarning(true)}
                            />
                        </div>
                    </Tooltip>
                    <div
                        className="navbar-option"
                        style={{ marginTop: '1em', fontSize: '1.1em' }}
                    >
                        New Report
                    </div>
                    <Tooltip title="Save Report" placement="bottom">
                        <div className="navbar-option navbar-option-whatsapp">
                            <Save className="" style={{ fontSize: 18 }} />
                        </div>
                    </Tooltip>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openReportWarning}
                onClose={closeReportWarning}
                closeAfterTransition
                disableScrollLock={true}
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={openReportWarning}>
                    <Box style={style}>
                        <Warning
                            close={closeReportWarning}
                            primaryMessage={'Close Report'}
                            type={'warning'}
                            action={saveReport}
                            secondaryMessage={
                                'Are you sure you want to close this report?'
                            }
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

Navbar.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Navbar)
