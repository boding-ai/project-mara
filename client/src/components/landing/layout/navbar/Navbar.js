import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../../../resources/images/logos/bodinga-logos/bodingaLogoLong.png'

const Navbar = ({ isActive, page,

}) => {

    return (
        <div
            className="navbar_landing flex_between"
            style={
                isActive
                    ? {
                          backgroundColor: '#fff',
                          boxShadow: '0 3px 6px -3px rgba(0,0,0,.2)',
                          border: 'none',
                      }
                    : {
                          backgroundColor: `#fff`,
                          boxShadow: 'none',
                          border: '1px solid #f0efed',
                      }
            }
        >
            <div className="left">
                <NavLink to="/">
                    <div className="img2">
                        <img src={logo} alt="logo" />
                    </div>
                </NavLink>
            </div>
            <div className="right flex_evenly">
                <div>
                    <NavLink
                        exact
                        activeStyle={{
                            color: '#ce3d3d',
                        }}
                        to="/"
                        className="element"
                    >
                        Platform
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        activeStyle={{
                            color: '#ce3d3d',
                        }}
                        to="/about"
                        className="element"
                    >
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        activeStyle={{
                            border:'1px solid #ce3d3d',
                            color:'#ce3d3d',
                            backgroundColor: 'transparent',
                            boxShadow: 'none'
                        }}
                        to="/sign-in"
                        className="element-register"
                    >
                        Get Started
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        activeStyle={{
                            color: '#ce3d3d',
                        }}
                        to="/sign-in"
                        className="element-login"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Navbar)
