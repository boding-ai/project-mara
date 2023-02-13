import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Modal, Fade, Box } from '@mui/material'

import EditPetMax from './cards/Max'

import {
    closeClientsMainArray,
    resetDetailsForEditingPet,
} from '../../../../../../../redux/actions/clients/clients'

import { addNewPetWindowClosed } from '../../../../../../../redux/actions/profiles/profiles'

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    p: 4,
}

let editPetOpen = true

const EditPet = ({
    close,
    // Redux States
    addNewPetWindowClosed,
    closeClientsMainArray,
}) => {

        const [showAddNewOwner, setShowAddNewOwner] = useState(false)
        const [isPetPhysicalFeaturesActive, setIsPetPhysicalFeaturesActive] =
            useState(false)
        const [input, setInput] = useState('')
        const [changeValues, setChangeValue] = useState(true)
        const [showSearchValues, setShowSearchValues] = useState(true)
        const [isSelected, setIsSelected] = useState(false)
        const [isNewOwner, setIsNewOwner] = useState(false)

    const onWindowClose = () => {
        closeClientsMainArray(close)
        addNewPetWindowClosed()
    }

    return (
        <>
            <Modal
                disableScrollLock={true}
                open={editPetOpen}
                onClose={!editPetOpen}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={editPetOpen}>
                    <Box style={style}>
                        <EditPetMax
                            close={onWindowClose}
                            showAddNewOwner={showAddNewOwner}
                            setShowAddNewOwner={setShowAddNewOwner}
                            isPetPhysicalFeaturesActive={
                                isPetPhysicalFeaturesActive
                            }
                            setIsPetPhysicalFeaturesActive={
                                setIsPetPhysicalFeaturesActive
                            }
                            input={input}
                            setInput={setInput}
                            changeValues={changeValues}
                            showSearchValues={showSearchValues}
                            isSelected={isSelected}
                            setChangeValue={setChangeValue}
                            setShowSearchValues={setShowSearchValues}
                            setIsSelected={setIsSelected}
                            isNewOwner={isNewOwner}
                            setIsNewOwner={setIsNewOwner}
                            addNewPetWindowClosed={addNewPetWindowClosed}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

EditPet.propTypes = {
    addNewPetWindowClosed: PropTypes.func.isRequired,
    closeClientsMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({})

const mapStateToActions = {
    addNewPetWindowClosed,
    closeClientsMainArray,
}

export default connect(mapStateToProps, mapStateToActions)(EditPet)
