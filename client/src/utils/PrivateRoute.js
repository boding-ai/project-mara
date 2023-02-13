import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../components/app/tools/spinner/Spinner'


const PrivateRoute = ({
    component: Component,
    auth: { isAuthenticated, loading },
    ...rest
}) => (
    <Route
        {...rest}
        render={(props) => (
            loading ? (
            <>
                <div className="center-screen">
                    <Spinner />
                </div>
            </>
            ) : 
            isAuthenticated ? (
            <Component {...props} />
            ) : (
            <Redirect to="/" />)
            
        )}
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(PrivateRoute)