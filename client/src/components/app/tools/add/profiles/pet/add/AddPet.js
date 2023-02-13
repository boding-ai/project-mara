import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

import {
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
} from '../../../../../../../redux/actions/add-array/add'

import { addNewPetWindowClosed } from '../../../../../../../redux/actions/profiles/profiles'

import AddPetMax from './cards/Max'
import AddPetMin from './cards/Min'

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

const AddPet = ({
    close,
    element,
    index,

    // Redux Actions
    closeAddMainArray,
    addNewPetWindowClosed,
    clearElementInArray,
    changeValuesOfElementInArray,
}) => {

    const [isMaximizedOpenAddPet, setIsMaximizedOpenAddPet] = useState(false)
    const [showAddNewOwner, setShowAddNewOwner] = useState(false)
    const [isPetPhysicalFeaturesActive, setIsPetPhysicalFeaturesActive] =
        useState(false)
    const [input, setInput] = useState('')
    const [changeValues, setChangeValue] = useState(false)
    const [showSearchValues, setShowSearchValues] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [isNewOwner, setIsNewOwner] = useState(false)

    const onExpandMoreClickPet = () => {
        setIsMaximizedOpenAddPet(true)
    }

    const onExpandLessClickPet = () => {
        setIsMaximizedOpenAddPet(false)
    }

    const onClearAll = (e) => {
        clearElementInArray(0, 'pet', index)
    }

    const onWindowClose = () => {
        closeAddMainArray(close)
        addNewPetWindowClosed()
    }

    return (
        <>
            {isMaximizedOpenAddPet ? (
                <Modal
                    disableScrollLock
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isMaximizedOpenAddPet}
                    onClose={!isMaximizedOpenAddPet}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        },
                    }}
                >
                    <Fade in={isMaximizedOpenAddPet}>
                        <Box style={style}>
                            <AddPetMax
                                onExpandLess={onExpandLessClickPet}
                                onWindowClose={onWindowClose}
                                formData={element}
                                onClear={onClearAll}
                                index={index}

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
                            />
                        </Box>
                    </Fade>
                </Modal>
            ) : (
                <>
                    <AddPetMin
                        onExpandMore={onExpandMoreClickPet}
                        onWindowClose={onWindowClose}
                        formData={element}
                    />
                </>
            )}
        </>
    )
}

AddPet.propTypes = {
    closeAddMainArray: PropTypes.func.isRequired,
    addNewPetWindowClosed: PropTypes.func.isRequired,
    resetDetailsForEditingPet: PropTypes.func.isRequired,
    clearElementInArray: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    closeAddMainArray,
    addNewPetWindowClosed,
    clearElementInArray,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddPet)
