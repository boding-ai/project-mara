import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

import {
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
} from '../../../../../../redux/actions/add-array/add'

import AddAppMax from './AddAppMax'

import Minimized from '../../../min-max/Minimized'

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

const AddApp = ({
    close,
    element,
    index,

    // Redux Actions
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
}) => {

    const { ownerName } = element

    const [showPetDetails, setShowPetDetails] = useState(false)

    const [isEnabled, setIsEnabled] = useState(false)

    const [isOpenFull, setIsOpenFull] = useState(false)

    const onExpandMoreClick = () => {
        setIsOpenFull(true)
    }

    const onExpandLessClick = () => {
        setIsOpenFull(false)
    }

    const onWindowClose = () => {
        closeAddMainArray(close)
    }

    const onChange = (e) => {
        changeValuesOfElementInArray(index, e.target.name, e.target.value)
    }

    const onClearAll = (e) => {
        clearElementInArray(0, 'appointment', index)
        setShowPetDetails(false)
        setIsEnabled(false)
    }

    return (
        <>
            {isOpenFull ? (
                <>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={isOpenFull}
                        onClose={!isOpenFull}
                        closeAfterTransition
                        BackdropProps={{
                            timeout: 500,
                            style: {
                                backgroundColor: 'rgba(0,0,0,0.8)',
                            },
                        }}
                        disableScrollLock={true}
                    >
                        <Fade in={isOpenFull}>
                            <Box style={style}>
                                <AddAppMax
                                    index={index}
                                    onExpandLessClick={onExpandLessClick}
                                    close={onWindowClose}
                                    element={element}
                                    onChange={onChange}
                                    onClearAll={onClearAll}
                                    showPetDetails={showPetDetails}
                                    setShowPetDetails={setShowPetDetails}
                                    setIsEnabled={setIsEnabled}
                                    isEnabled={isEnabled}
                                />
                            </Box>
                        </Fade>
                    </Modal>
                </>
            ) : (
                <div
                    className="card_minimized_ce"
                    style={{ backgroundColor: '#f7bf45', color: '#424242' }}
                >
                    <div
                        className="title flex_middle"
                        onClick={onExpandMoreClick}
                    >
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            style={{
                                color: 'white',
                                fontSize: 16,
                                marginLeft: '-1.5em',
                            }}
                        />
                        <div style={{ marginLeft: '0.5em' }}>
                            {ownerName.length > 0
                                ? ownerName.length > 15
                                    ? ownerName.slice(0, 15) + '...'
                                    : ownerName
                                : 'New Appointment'}
                        </div>
                    </div>
                    <Minimized
                        close={onWindowClose}
                        maximize={onExpandMoreClick}
                        dark={false}
                        maximizeIconSize={19}
                        closeIconSize={15}
                        fullOpenIconSize={12}
                        margin={'0 0.5em 0.5em 0'}
                        maximizeIconMargin={'0.1em 0 0 0'}
                        iconGap={'0.2em'}
                    />
                </div>
            )}
        </>
    )
}

AddApp.propTypes = {
    closeAddMainArray: PropTypes.func.isRequired,
    clearElementInArray: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({})

const mapStateToActions = {
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddApp)
