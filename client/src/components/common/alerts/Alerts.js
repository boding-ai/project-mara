import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import MuiAlert from '@mui/material/Alert'


function SlideTransitionLeft(props) {
    return <Slide {...props} direction="right" />
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />
})


const Alerts = ({snackbar: { message, type, key  }}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
    }

    return (
        <>
            <Snackbar
                open={message.length > 0}
                handleClose={handleClose}
                TransitionComponent={SlideTransitionLeft}
                key={key}
            >
                <Alert severity={type} variant="filled" color={type}>
                    {message}
                </Alert>
            </Snackbar>

        </>
    )
}

Alerts.propTypes = {
    snackbar: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    snackbar: state.snackbar
})

export default connect(mapStateToProps)(Alerts)
