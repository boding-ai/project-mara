import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkInstaConnected } from '../../../../../redux/actions/business/social'

import Spinner from './connected/Spinner'
import NotConnected from './not-connected/NotConnected'
import Main from './connected/Main'

const Social = ({
    // Redux Actions
    checkInstaConnected,
    // Redux States
    social: { checkInstaConnectedLoading, refreshToken, instaID },
}) => {

    return (
        <>
            {checkInstaConnectedLoading ? (
                <Spinner />
            ) : (
                <div className="website-social">
                    {refreshToken ? (
                        <Main />
                    ) : (
                        <div className="flex_middle">
                            <NotConnected />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

Social.propTypes = {
    social: PropTypes.object.isRequired,
    checkInstaConnected: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  social: state.social
})

const mapStateToActions = {
    checkInstaConnected,
}

export default connect(mapStateToProps, mapStateToActions)(Social)