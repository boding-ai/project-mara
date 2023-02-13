import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import sidebarbackground from '../../../../../resources/images/clients-individual/sidebar/profileBackground.jpg'

import { NavLink } from 'react-router-dom'

const client = {
    photoUrl: '',
    email: 'client@gmail.com',
    fullName: 'Client Murthymadan',
    mobileNo: '8888610238',
}

const ClientInfo = ({
    onToggleMetricsInMiddle,
    onToggleEventsInMiddle,
    isMetricsOpen,
}) => {

    return (
        <>
            <div
                style={{
                    width: '280px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: '50px 0 0 5px',
                    height: 'auto',
                }}
                className="app"
            >
                <div className="clients_sidebar_bottom">
                    <div className="clients_sidebar_top">
                        <img src={sidebarbackground} alt="cover pics" />
                        <h3>{client.fullName}</h3>
                        <h4>{client.email}</h4>
                        <h4>{client.mobileNo}</h4>
                    </div>
                    <div style={{ margin: 0, padding: 0 }}>
                        <Divider style={{ margin: 0, padding: 0 }} />
                    </div>
                    <div className="clients_sidebar_link">
                        <p>
                            <div
                                className={
                                    isMetricsOpen
                                        ? 'clients_sidebar_link_style'
                                        : 'clients_sidebar_link_active'
                                }
                                onClick={onToggleEventsInMiddle}
                            >
                                <PermIdentityIcon className="clients_sidebar_link_icon" />
                                Details
                            </div>
                        </p>
                    </div>
                    <div className="clients_sidebar_link">
                        <p>
                            <NavLink to="/clients">
                                <div className="clients_sidebar_link_style">
                                    <ArrowBackIcon className="clients_sidebar_link_icon" />
                                    Go Back
                                </div>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

ClientInfo.propTypes = {}

export default ClientInfo
