import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Tooltip } from '@mui/material'

import PeopleIcon from '@mui/icons-material/People'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import ClientsSearch from '../../../tools/search/ClientsSearch'

import AddIconMenu from '../../../tools/options/clients/OptionsSmall'
import Filter from './Filter'

const MainPaneClient = ({
    // Redux States
    clients: { clientsType, clientsList },
}) => {
    return (
        <div className="events_client flex_middle">
            <div className="client_pane_main">
                <div className="one flex_left">
                    {clientsType === 'all' && (
                        <Tooltip
                            title="Pets and Owners Combined List"
                            placement="top"
                        >
                            <div className="flex_middle">
                                <div style={{ marginRight: '0.3em' }}>
                                    <PeopleIcon style={{ fontSize: 23 }} />
                                </div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faPaw}
                                        style={{
                                            fontSize: 18,
                                            marginBottom: '0.1em',
                                            marginRight: '0.45em',
                                        }}
                                    />
                                </div>
                                <div
                                    className="number"
                                    style={{ fontSize: '0.65em' }}
                                >
                                    {clientsList.length > 0 ? (
                                        <>({clientsList.length})</>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </Tooltip>
                    )}
                    {clientsType === 'none' && (
                        <div className="flex_middle vanish">
                            <div style={{ marginRight: '0.3em' }}>
                                <PeopleIcon style={{ fontSize: 23 }} />
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faPaw}
                                    style={{
                                        fontSize: 18,
                                        marginBottom: '0em',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {clientsType === 'pets' && (
                        <Tooltip title="Pets only list" placement="top">
                            <div className="flex_middle">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faPaw}
                                        style={{
                                            fontSize: 18,
                                            marginBottom: '0.1em',
                                            marginRight: '0.45em',
                                        }}
                                    />
                                </div>
                                <div
                                    className="number"
                                    style={{ fontSize: '0.65em' }}
                                >
                                    {clientsList.length > 0 ? (
                                        <>({clientsList.length})</>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </Tooltip>
                    )}
                    {clientsType === 'owners' && (
                        <Tooltip title="Owners only list" placement="top">
                            <div className="flex_middle">
                                <div>
                                    <PeopleIcon
                                        style={{
                                            fontSize: 23,
                                            marginRight: '0.45em',
                                        }}
                                    />
                                </div>
                                <div
                                    className="number"
                                    style={{ fontSize: '0.65em' }}
                                >
                                    {clientsList.length > 0 ? (
                                        <>({clientsList.length})</>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </Tooltip>
                    )}
                </div>
                <ClientsSearch />
                <div
                    className="feed_filter_records flex_right"
                    style={{ marginTop: '0.1em' }}
                >
                    <Filter />
                </div>
                <div className="feed_add_new_client_main flex_right">
                    <AddIconMenu />
                </div>
            </div>
        </div>
    )
}

MainPaneClient.propTypes = {
    searchClients: PropTypes.func.isRequired,
    stopLoadingSearchClients: PropTypes.func.isRequired,
    getClientsListAll: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    clients: state.clients
})

const mapStateToActions = {

}

export default connect(mapStateToProps, mapStateToActions)(MainPaneClient)
