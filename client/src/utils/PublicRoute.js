import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../components/app/tools/spinner/Spinner'

const PublicRoute = ({
    component: Component,
    auth: { loading },
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) =>
            loading ? (
                <>
                    <div className="center-screen">
                        <Spinner />
                    </div>
                </>
            ) : (
                <Component {...props} />
            )
        }
    />
)

PublicRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(PublicRoute)
