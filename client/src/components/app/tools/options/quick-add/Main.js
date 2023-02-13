import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tooltip } from '@mui/material'
import { Modal, Fade, Box } from '@mui/material'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'

import Options from './Options'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    p: 4,
}

const Main = () => {

    const [quickCard, setQuickCard] = useState(false)

    const quickCardOn = () => {
        setQuickCard(true)
    }

    const quickCardOff = () => {
        setQuickCard(false)
    }

    return (
        <>
            <div className="options_add" onClick={quickCardOn}>
                <Tooltip
                    title="Quick Add"
                    placement="bottom"
                >
                    <div className="icon" style={{ marginTop: '0.2em' }}>
                        <AddCircleOutline style={{ fontSize: 22 }} />
                    </div>
                </Tooltip>
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={quickCard}
                    onClose={quickCardOff}
                    closeAfterTransition
                    disableScrollLock={true}
                    BackdropProps={{
                        timeout: 500,
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        },
                    }}
                >
                    <Fade in={quickCard}>
                        <Box style={style}>
                            <Options close={quickCardOff} />
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

Main.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(Main)
