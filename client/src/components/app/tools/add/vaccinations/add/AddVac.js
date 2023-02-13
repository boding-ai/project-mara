import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { makeStyles } from '@mui/styles'

import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

import { closeAddMainArray } from '../../../../../../redux/actions/add-array/add'

import AddVacMax from './AddVacMax'
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

const AddVac = ({
    close,

    // Redux Actions
    closeAddMainArray,
}) => {
    const [formData, setFormData] = useState({
        ownerName: '',
        ownerMobileNo: '',
        ownerEmailId: '',
        petName: '',
        petSpecies: '',
        petBreed: '',
        problem: '',
    })

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
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onClearAll = (e) => {
        setFormData({
            ownerName: '',
            ownerMobileNo: '',
            ownerEmailId: '',
            petName: '',
            petSpecies: '',
            petBreed: '',
            problem: '',
        })
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
                                <AddVacMax
                                    onExpandLessClick={onExpandLessClick}
                                    close={onWindowClose}
                                    formData={formData}
                                    onChange={onChange}
                                    onClearAll={onClearAll}
                                    setFormData={setFormData}
                                />
                            </Box>
                        </Fade>
                    </Modal>
                </>
            ) : (
                <div
                    className="card_minimized_ce"
                    style={{ backgroundColor: '#5d8ef0', color: '#424242' }}
                >
                    <div
                        className="title flex_middle"
                        onClick={onExpandMoreClick}
                    >
                        <FontAwesomeIcon
                            icon={faSyringe}
                            style={{
                                color: 'white',
                                fontSize: 16,
                                marginLeft: '-1.5em',
                            }}
                        />
                        <div style={{ marginLeft: '0.5em' }}>
                            New Vaccination
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

AddVac.propTypes = {
    closeAddMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
    closeAddMainArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddVac)
