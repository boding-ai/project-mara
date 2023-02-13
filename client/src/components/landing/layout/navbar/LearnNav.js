import React  from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    faBlog,
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DashboardIcon from '@mui/icons-material/Dashboard'

import bodingaLearnLogo from '../../../../resources/images/logos/bodinga-logos/learnLogo.png'
import logoBlog from '../../../../resources/images/logos/bodinga-logos/blogLogo.png'

const LearnNav = () => {
    return (
        <div
            className="navbar_landing flex_between"
            style={{ backgroundColor: '#fff' }}
        >
            {window.location.pathname.split('/')[1] === 'learn' ? (
                <div className="left3">
                    <NavLink to="/">
                        <div className="img2">
                            <img src={bodingaLearnLogo} alt="logo" />
                        </div>
                    </NavLink>
                </div>
            ) : (
                <div className="left2">
                    <NavLink to="/">
                        <div className="img2">
                            <img src={logoBlog} alt="logo" />
                        </div>
                    </NavLink>
                </div>
            )}
            <div className="right flex_evenly">
                <div>
                    <NavLink
                        activeStyle={{
                            color: '#ce3d3d',
                        }}
                        to="/blog"
                        className="element"
                    >
                        <FontAwesomeIcon
                            icon={faBlog}
                            style={{ marginTop: '0.1em' }}
                        />
                        <span style={{ marginLeft: '0.35em' }}>Blog</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        activeStyle={{
                            color: '#ce3d3d',
                        }}
                        to="/learn"
                        className="element"
                    >
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            style={{ marginTop: '0.1em' }}
                        />
                        <span style={{ marginLeft: '0.35em' }}>Learn</span>
                    </NavLink>
                </div>
                <div>
                    <Link
                        exact
                        to={
                           '/vets/dashboard'
                        }
                    >
                        <div className="flex_middle element-login">
                            <div style={{ marginRight: '0.4em' }}>
                                Dashboard
                            </div>
                            <DashboardIcon style={{ fontSize: 15 }} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(LearnNav)
