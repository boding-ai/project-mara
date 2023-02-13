import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { Popup } from 'semantic-ui-react'

import EditMenuClientList from '../../../../tools/edit_menus/clients/EditMenuClientList'

import LoadingButton from '@mui/lab/LoadingButton'

const LoadingListCard = ({
}) => {

    return (
        <>
            <div className="clients_list_card_loading">
                <div className="clients_list_card_grid_loading">
                    <div className="petName flex_left">
                        <div className="skeleton skeleton_text"></div>
                    </div>
                    <div className="ownerName flex_left">
                        <div className="skeleton skeleton skeleton_text"></div>
                    </div>
                    <div className="species flex_left">
                        <div className="skeleton skeleton_text"></div>
                    </div>
                    <div className="flex_middle">
                        <div className="skeleton skeleton_text"></div>
                    </div>
                    <div className="flex_left">
                        <div className="skeleton skeleton_text"></div>
                    </div>
                    <div className="gotToProfile flex_middle">
                        <Popup
                            trigger={
                                <LoadingButton
                                    loading={true}
                                    disabled={true}
                                    loadingPosition="middle"
                                    variant="outlined"
                                    style={{
                                        fontSize: 10,
                                        padding: '1em 0.25em',
                                    }}
                                >
                                </LoadingButton>
                            }
                            inverted
                            basic
                            position="top center"
                            style={{ fontSize: 9 }}
                            content="Go To Profile"
                        />
                    </div>
                    <div className="flex_middle">
                        <EditMenuClientList
                            listID={''}
                            listStatus={''}
                            listType={'owner'}
                            index={''}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

LoadingListCard.propTypes = {
    clients: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(LoadingListCard)
