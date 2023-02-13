import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

import AddStoreMax from './AddStoreMax'

import Minimized from '../../../min-max/Minimized'

import {
    resetAddNewStoreSuccess,
} from '../../../../../../redux/actions/business/store'
import {
    closeAddMainArray,
    clearElementInArray,
    changeValuesOfElementInArray,
} from '../../../../../../redux/actions/add-array/add'

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

const AddStore = ({
    close,
    element,
    index,
    // Redux Actions
    closeAddMainArray,
    resetAddNewStoreSuccess,
    clearElementInArray,
    changeValuesOfElementInArray,
}) => {
    const { mainLocation, storeOperationDays } = element

    const [isOpenFull, setIsOpenFull] = useState(false)

    const onExpandMoreClick = () => {
        setIsOpenFull(true)
    }

    const onExpandLessClick = () => {
        setIsOpenFull(false)
    }

    const onWindowClose = () => {
        closeAddMainArray(close)
        resetAddNewStoreSuccess()
    }

    const onClearAll = (e) => {
        clearElementInArray(0, 'store', index)
        resetAddNewStoreSuccess()
    }

    const onChange = (e) => {
        changeValuesOfElementInArray(index, e.target.name, e.target.value)
    }

    const onSelectWorkingDay = (value, day) => {
        storeOperationDays[day].value = value
        changeValuesOfElementInArray(
            index,
            'storeOperationDays',
            storeOperationDays
        )
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
                                <AddStoreMax
                                    onExpandLessClick={onExpandLessClick}
                                    close={onWindowClose}
                                    onChange={onChange}
                                    clearAll={onClearAll}
                                    onSelectWorkingDay={onSelectWorkingDay}
                                    element={element}
                                    index={index}
                                />
                            </Box>
                        </Fade>
                    </Modal>
                </>
            ) : (
                <div
                    className="card_minimized_ce"
                    style={{
                        backgroundColor: 'rgb(72, 72, 72)',
                        color: '#424242',
                    }}
                >
                    <div
                        className="title flex_left"
                        onClick={onExpandMoreClick}
                    >
                        <FontAwesomeIcon
                            icon={faShop}
                            style={{
                                color: 'white',
                                fontSize: 15,
                                marginBottom: '0.15em',
                            }}
                        />
                        <div style={{ marginLeft: '0.5em' }}>
                            {mainLocation.length > 0
                                ? mainLocation.length > 15
                                    ? mainLocation.slice(0, 15) + '...'
                                    : mainLocation
                                : 'New Store'}
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

AddStore.propTypes = {
    closeAddMainArray: PropTypes.func.isRequired,
    resetAddNewStoreSuccess: PropTypes.func.isRequired,
    clearElementInArray: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({})

const mapStateToActions = {
    closeAddMainArray,
    resetAddNewStoreSuccess,
    clearElementInArray,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddStore)
