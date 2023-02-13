import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    unHideClientListCard,
    getPetDetails,
} from '../../../../../../redux/actions/clients/clients'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faMobile,
    faEnvelope,
    faEllipsisH,
    faPaw
} from '@fortawesome/free-solid-svg-icons'

import { Popup } from 'semantic-ui-react'

import {
    Button,
    Collapse,
    IconButton,
    styled,
} from '@mui/material'

import ForwardIcon from '@mui/icons-material/Forward'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import EditMenuClientList from '../../../../tools/edit_menus/clients/EditMenuClientList'

import PetDetails from './PetDetails'
import NoPets from './NoPets'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const OwnerListCard = ({
    ownerName,
    emailID,
    mobileNo,
    ownerID,
    index,

    // Redux States
    clients: { showListCard },

    // Redux Actions
    unHideClientListCard,
    getPetDetails
}) => {

    const [petDetails, setPetDetails] = useState([])
    const [petDetailsLoading, setPetDetailsLoading] = useState(false)

     useEffect(() => {
         async function getPet() {
             setPetDetailsLoading(true)
             let res = await getPetDetails(ownerID)
             setPetDetailsLoading(false)
             setPetDetails(res)
         }

         getPet()
     }, [])

    const [expanded, setExpanded] = useState(false)

        const handleExpandClick = () => {
            setExpanded(!expanded)
        }

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
                    <div className="clients_list_card_grid">
                        <div className="petName flex_left">
                            <span>
                                <Popup
                                    trigger={<FontAwesomeIcon icon={faUser} />}
                                    inverted
                                    basic
                                    position="top center"
                                    style={{ fontSize: 9 }}
                                    content="Pet Name"
                                />
                            </span>
                            {ownerName.replace(
                                /(^\w{1})|(\s+\w{1})/g,
                                (letter) => letter.toUpperCase()
                            )}
                        </div>
                        <div className="ownerName flex_left">
                            <span>
                                <Popup
                                    trigger={
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    }
                                    inverted
                                    basic
                                    position="top center"
                                    style={{ fontSize: 9 }}
                                    content="Owner Name"
                                />
                            </span>
                            {emailID}
                        </div>
                        <div className="species flex_left">
                            <span>
                                <Popup
                                    trigger={
                                        <FontAwesomeIcon icon={faMobile} />
                                    }
                                    inverted
                                    basic
                                    position="top center"
                                    style={{ fontSize: 9 }}
                                    content="Pet Species"
                                />
                            </span>
                            {mobileNo}
                        </div>
                        <div className="flex_middle">
                            <div className="flex_middle">
                                {petDetailsLoading ? (
                                    <FontAwesomeIcon
                                        icon={faPaw}
                                        style={{
                                            marginRight: '0.4em',
                                            color: 'grey',
                                        }}
                                        className="paw"
                                    />
                                ) : (
                                    <Popup
                                        trigger={
                                            <div className="flex_middle cursor_pointer" onClick={handleExpandClick} >
                                                <FontAwesomeIcon
                                                    icon={faPaw}
                                                    style={{
                                                        marginRight: '0.4em',
                                                        color: 'grey',
                                                    }}
                                                />
                                                <div>{petDetails.length}</div>
                                            </div>
                                        }
                                        inverted
                                        basic
                                        position="top center"
                                        style={{ fontSize: 9 }}
                                        content="Number of Pets"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex_left">
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </div>
                        <div className="gotToProfile flex_middle">
                            <Popup
                                trigger={
                                    <a
                                        href={`/clients/individual/owner/${ownerID}`}
                                    >
                                        <Button
                                            variant="outlined"
                                            style={{
                                                fontSize: 10,
                                                padding: '0em 0.25em',
                                            }}
                                            endIcon={
                                                <ForwardIcon
                                                    style={{ fontSize: 15 }}
                                                />
                                            }
                                        >
                                            Profile
                                        </Button>
                                    </a>
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
                                listID={ownerID}
                                listStatus={
                                    ownerName.charAt(0).toUpperCase() +
                                    ownerName.slice(1)
                                }
                                listType={'owner'}
                                index={index}
                            />
                        </div>
                    </div>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div
                            className=""
                            style={{ width: '100%', margin: '1em 0' }}
                        >
                            {petDetailsLoading ? (
                                <div className="flex_middle">Loading...</div>
                            ) : (
                                <>
                                    {petDetails.length > 0 ? (
                                        <PetDetails details={petDetails} />
                                    ) : (
                                        <div className="flex_middle">
                                            <NoPets />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </Collapse>
                </div>
            )}
        </>
    )
}

OwnerListCard.propTypes = {
    clients: PropTypes.object.isRequired,
    unHideClientListCard: PropTypes.func.isRequired,
    getPetDetails: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients
})

const mapStateToActions = {
    unHideClientListCard,
    getPetDetails,
}

export default connect(mapStateToProps, mapStateToActions)(OwnerListCard)
