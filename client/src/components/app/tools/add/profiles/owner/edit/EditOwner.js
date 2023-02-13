import React from 'react'
import { connect } from 'react-redux'

import { Modal, Fade, Box } from '@mui/material'

import EditOwnerMax from './cards/Max'

const style = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    p: 4,
}

let editOwnerOpen = true

const EditOwner = ({
    close,
}) => {

    return (
        <>
            <Modal
                disableScrollLock={false}
                open={editOwnerOpen}
                onClose={!editOwnerOpen}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={editOwnerOpen}>
                    <Box style={style}>
                        <EditOwnerMax close={close} />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(EditOwner)
