import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../../../resources/images/logos/bodinga-logos/bodingaLogoLong.png'
import whiteLogo from '../../../../resources/images/logos/bodinga-logos/whiteLogoLong.png'

const SeamlessNav = ({ isActive }) => {

    return (
        <div
            className="navbar_landing flex_between"
            style={
                isActive
                    ? {
                          backgroundColor: '#fff',
                          boxShadow: '0 3px 6px -3px rgba(0,0,0,.2)',
                      }
                    : {
                          backgroundColor: `transparent`,
                          boxShadow: 'none',
                      }
            }
        >
            <div className="left">
                <NavLink to="/">
                    <div className="img2">
                        <img src={isActive ? logo : whiteLogo} alt="logo" />
                    </div>
                </NavLink>
            </div>
            <div className="right flex_evenly">
                <div>
                    <NavLink
                        exact
                        activeStyle={
                            isActive
                                ? {
                                      color: '#ce3d3d',
                                  }
                                : {
                                      color: '#ff6666',
                                  }
                        }
                        className={isActive ? 'element' : 'element-light'}
                        to="/"
                    >
                        Platform
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={
                            isActive
                                ? {
                                      color: '#ce3d3d',
                                  }
                                : {
                                      color: '#ff6666',
                                  }
                        }
                        className={isActive ? 'element' : 'element-light'}
                    >
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        to="/sign-in"
                        activeStyle={
                            isActive
                                ? {
                                      color: '#ce3d3d',
                                  }
                                : {
                                      color: '#ff6666',
                                  }
                        }
                        className={
                            isActive
                                ? 'element-register'
                                : 'element-special-light'
                        }
                    >
                        Get Started
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        exact
                        to="/sign-in"
                        className={
                            isActive 
                            ? 'element-login' : 'element-special-light'
                        }
                        style={{ marginRight: '0' }}
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

SeamlessNav.propTypes = {}

const mapStateToProps = (state) => ({})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(SeamlessNav)
