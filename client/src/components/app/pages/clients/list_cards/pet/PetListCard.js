import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popup } from 'semantic-ui-react'
import { connect } from 'react-redux'

import {
    unHideClientListCard,
    getOwnerName,
} from '../../../../../../redux/actions/clients/clients'

import {
    faPaw,
    faUser,
    faMobile,
    faStarOfLife,
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'

import { Button } from '@mui/material'

import EditMenuClientList from '../../../../tools/edit_menus/clients/EditMenuClientList'
import TypeRectangle from '../../../../tools/peripherals/TypeRectangle'

import ForwardIcon from '@mui/icons-material/Forward'

const PetListCard = ({
    petID,
    petName,
    ownerID,
    petSpecies,
    index,
    // Redux Actions
    getOwnerName,
    unHideClientListCard,
    // Redux States
    clients: { showListCard },
}) => {
    const [ownerName, setOwnerName] = useState('Loading...')

    useEffect(() => {
        async function getOwner() {
            let res = await getOwnerName(ownerID)

            setOwnerName(res)
        }

        getOwner()
    }, [])

    return (
        <>
            {showListCard.includes(index) ? (
                <div style={{ margin: '0.6em 0em 0em 0em' }}>
                    <div onClick={() => unHideClientListCard(index)}>
                        <Popup
                            trigger={
                                <FontAwesomeIcon
                                    icon={faEllipsisH}
                                    style={{
                                        fontSize: 12,
                                        cursor: 'pointer',
                                        color: 'gray',
                                    }}
                                />
                            }
                            content="Unhide Profile"
                            inverted
                            basic
                            position="top center"
                            style={{
                                fontSize: 9,
                                padding: 5,
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div className="clients_list_card">
                    <div className="petName">
                        <span>
                            <Popup
                                trigger={<FontAwesomeIcon icon={faPaw} />}
                                inverted
                                basic
                                position="top center"
                                style={{ fontSize: 9 }}
                                content="Pet Name"
                            />
                        </span>
                        {petName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                            letter.toUpperCase()
                        )}
                    </div>
                    <div className="ownerName">
                        <span>
                            <Popup
                                trigger={<FontAwesomeIcon icon={faUser} />}
                                inverted
                                basic
                                position="top center"
                                style={{ fontSize: 9 }}
                                content="Owner Name"
                            />
                        </span>
                        {ownerName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                            letter.toUpperCase()
                        )}
                    </div>
                    <div className="species">
                        <span>
                            <Popup
                                trigger={
                                    <FontAwesomeIcon icon={faStarOfLife} />
                                }
                                inverted
                                basic
                                position="top center"
                                style={{ fontSize: 9 }}
                                content="Pet Species"
                            />
                        </span>
                        {petSpecies.toUpperCase()}
                    </div>
                    <div className="ownerPhoneNumber">
                        <span>
                            <Popup
                                trigger={<FontAwesomeIcon icon={faMobile} />}
                                inverted
                                basic
                                position="top center"
                                style={{ fontSize: 9 }}
                                content="Mobile Number"
                            />
                        </span>
                        8888610237
                    </div>
                    <div className="">
                        <Popup
                            trigger={
                                <div>
                                    <TypeRectangle
                                        input={'ownerPatient'}
                                        value={'Pet'}
                                    />
                                </div>
                            }
                            content="Pet Profile"
                            basic
                            inverted
                            position="top center"
                            style={{
                                fontSize: 10,
                            }}
                        />
                    </div>
                    <div className="gotToProfile center_everything">
                        <Popup
                            trigger={
                                <Button
                                    variant="outlined"
                                    style={{
                                        fontSize: 10,
                                        padding: '0em 0.25em',
                                    }}
                                    endIcon={
                                        <ForwardIcon style={{ fontSize: 15 }} />
                                    }
                                >
                                    Profile
                                </Button>
                            }
                            inverted
                            basic
                            position="top center"
                            style={{ fontSize: 9 }}
                            content="Go To Profile"
                        />
                    </div>
                    <div className="edit">
                        <EditMenuClientList
                            listID={petID}
                            listStatus={
                                petName.charAt(0).toUpperCase() +
                                petName.slice(1)
                            }
                            listType={'pet'}
                            index={index}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

PetListCard.propTypes = {
    clients: PropTypes.object.isRequired,
    unHideClientListCard: PropTypes.func.isRequired,
    getOwnerName: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients
})

const mapStateToActions = {
    getOwnerName,
    unHideClientListCard,
}

export default connect(mapStateToProps, mapStateToActions)(PetListCard)

