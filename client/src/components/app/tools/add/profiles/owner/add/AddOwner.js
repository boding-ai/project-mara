import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addNewOwnerWindowClosed } from '../../../../../../../redux/actions/profiles/profiles'

import {
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
} from '../../../../../../../redux/actions/add-array/add'

import { Modal, Fade, Box } from '@mui/material'

import AddOwnerMax from './cards/Max'
import AddOwnerMin from './cards/Min'

const style = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    p: 4,
}

const AddOwner = ({
    close,
    element,
    index,

    // Redux Actions
    closeAddMainArray,
    addNewOwnerWindowClosed,
    clearElementInArray,
    changeValuesOfElementInArray,
}) => {
    const [isMaximizedOpenAddOwner, setIsMaximizedOpenAddOwner] = useState(false)

    const onExpandMoreClickOwner = () => {
        setIsMaximizedOpenAddOwner(true)
    }

    const onExpandLessClickOwner = () => {
        setIsMaximizedOpenAddOwner(false)
    }

    const onClearAll = (e) => {
        clearElementInArray(0, 'owner', index)
    }

    const onChange = (e) => {
        changeValuesOfElementInArray(index, e.target.name, e.target.value)
    }

    const onWindowClose = () => {
        closeAddMainArray(close)
        addNewOwnerWindowClosed()
    }

    return (
        <>
            {isMaximizedOpenAddOwner ? (
                <Modal
                    disableScrollLock={true}
                    open={isMaximizedOpenAddOwner}
                    onClose={!isMaximizedOpenAddOwner}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        },
                    }}
                >
                    <Fade in={isMaximizedOpenAddOwner}>
                        <Box style={style}>
                            <AddOwnerMax
                                onExpandLess={onExpandLessClickOwner}
                                onWindowClose={onWindowClose}
                                formData={element}
                                onClear={onClearAll}
                                onChange={onChange}
                            />
                        </Box>
                    </Fade>
                </Modal>
            ) : (
                <>
                    <AddOwnerMin
                        onExpandMore={onExpandMoreClickOwner}
                        onWindowClose={onWindowClose}
                        formData={element}
                    />
                </>
            )}
        </>
    )
}

AddOwner.propTypes = {
    closeAddMainArray: PropTypes.func.isRequired,
    addNewOwnerWindowClosed: PropTypes.func.isRequired,
    resetDetailsForEditingOwner: PropTypes.func.isRequired,
    clearElementInArray: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    closeAddMainArray,
    addNewOwnerWindowClosed,
    clearElementInArray,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddOwner)
