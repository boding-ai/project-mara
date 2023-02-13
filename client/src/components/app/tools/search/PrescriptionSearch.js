import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button, InputAdornment, TextField, Modal, Fade, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

import ClearIcon from '@mui/icons-material/Clear'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'

import { searchMedicationForPrescription } from '../../../../redux/actions/products/products'

import { changeValuesOfElementWithArrayInArray } from '../../../../redux/actions/add-array/add'

const addRowIconButtonStyle = makeStyles({
    root: {
        color: 'grey',
        border: '1px solid grey',
        backgroundColor: 'none',
        height: '23px',
        padding: '0.6em 0.7em',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#3b3a39',
            border: '1px solid #3b3a39',
        },
    },
})

const CssSearchField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    '& label.Mui-focused': {
        color: 'none',
        border: 'none',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'none',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            border: 'none',
            fontSize: '0.9em',
        },
        border: 'none',
    },
}))

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

const PrescriptionSearch = ({
    // Data
    index,
    elementIndex,
    element,

    // Redux Actions
    searchMedicationForPrescription,
    changeValuesOfElementWithArrayInArray,

    // Redux States
    products: {
        searchMedicationLoading,
        searchMedication,
        topMedicationByRecentUse,
    },
}) => {

    const { medication } = element

    const [input, setInput] = useState('')

    const [isFocused, setIsFocused] = useState(false)

    const [isNewMedicationOpen, setIsNewMedicationOpen] = useState(false)

    const addRowStyle = addRowIconButtonStyle()

    useEffect(() => {
        setInput('')
    }, [elementIndex])

    const onClearAll = () => {
        setInput('')
        changeValuesOfElementWithArrayInArray(
            index,
            elementIndex,
            'medication',
            '',
            'prescription'
        )
    }

    const handleSearch = async (e) => {
        setInput(e.target.value)
        let searchQuery = e.target.value.toLowerCase()
        searchMedicationForPrescription(searchQuery)
    }

    const selectedValues = (value) => {
        changeValuesOfElementWithArrayInArray(
            index,
            elementIndex,
            'medication',
            value.first.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            ),
            'prescription'
        )
        setInput(
            value.first.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
    }

    const openNewMedication = () => {
        setIsNewMedicationOpen(true)
    }

    const closeNewMedication = () => {
        setIsNewMedicationOpen(false)
    }

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '15px 0',
                    position: 'relative',
                }}
                className="flex_middle"
            >
                <CssSearchField
                    size="small"
                    placeholder="Medication"
                    fullWidth
                    onFocus={() => setIsFocused(true)}
                    onChange={handleSearch}
                    style={{ width: '100%' }}
                    value={input}
                    name="input"
                    variant="standard"
                    InputProps={{
                        endAdornment: (
                            <div className="flex_end_everything">
                                <InputAdornment position="end">
                                    {!elementIndex &&
                                    searchMedicationLoading ? (
                                        <CircularProgress
                                            variant="indeterminate"
                                            disableShrink
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.mode ===
                                                    'light'
                                                        ? '#c0d6eb'
                                                        : '#308fe8',
                                                animationDuration: '600ms',
                                            }}
                                            size={17}
                                            thickness={4}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </InputAdornment>
                                <InputAdornment position="end">
                                    {input.length > 0 ? (
                                        <CloseIcon
                                            style={{
                                                fontSize: 18,
                                                cursor: 'pointer',
                                            }}
                                            onClick={onClearAll}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </InputAdornment>
                            </div>
                        ),
                        disableUnderline: true,
                    }}
                />
                {!medication && isFocused && (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '15px 0',
                            marginTop: '2.3em',
                            position: 'absolute',
                            zIndex: 10,
                        }}
                        onMouseLeave={() => setIsFocused(false)}
                        onClick={() => setIsFocused(false)}
                    >
                        {input.length === 0 ? (
                            <>
                                {topMedicationByRecentUse.length === 0 ? (
                                    ''
                                ) : (
                                    <div
                                        className="search_results_card"
                                        style={{
                                            boxShadow:
                                                'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                        }}
                                    >
                                        <div
                                            className="triple_grid"
                                            style={{
                                                paddingBottom: '1em',
                                                borderBottom:
                                                    '1px solid rgb(232, 238, 239)',
                                            }}
                                        >
                                            <div></div>
                                            <Button
                                                variant="outlined"
                                                endIcon={
                                                    <AddCircleOutlineIcon />
                                                }
                                                size="small"
                                                className={addRowStyle.root}
                                                onClick={openNewMedication}
                                            >
                                                Add Medicine
                                            </Button>
                                            <div className='flex_right' style={{ marginRight: '0.9em' }} >
                                                <ClearIcon
                                                    className="cancel cursor_pointer clear"
                                                    style={{ fontSize: 15 }}
                                                />
                                            </div>
                                        </div>
                                        {topMedicationByRecentUse.length > 0 &&
                                            topMedicationByRecentUse.map(
                                                (value, index) => (
                                                    <div
                                                        key={index}
                                                        value={value}
                                                        onClick={() =>
                                                            selectedValues(
                                                                value
                                                            )
                                                        }
                                                        className="search_results app"
                                                        style={{
                                                            alignItems:
                                                                'flex-start',
                                                        }}
                                                    >
                                                        <div>
                                                            {value.first.replace(
                                                                /(^\w{1})|(\s+\w{1})/g,
                                                                (letter) =>
                                                                    letter.toUpperCase()
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div
                                fullWidth
                                className="search_results_card"
                                style={{
                                    boxShadow:
                                        'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                }}
                            >
                                <>
                                    {searchMedication.length === 0 ? (
                                        <div className="search_no_results">
                                            No Results
                                        </div>
                                    ) : (
                                        <>
                                            {searchMedication
                                                .slice(0, 5)
                                                .map((value, index) => (
                                                    <div
                                                        key={index}
                                                        value={value}
                                                        onClick={() =>
                                                            selectedValues(
                                                                value
                                                            )
                                                        }
                                                        className="search_results app"
                                                        style={{
                                                            alignItems:
                                                                'flex-start',
                                                        }}
                                                    >
                                                        <div>
                                                            {value.first.replace(
                                                                /(^\w{1})|(\s+\w{1})/g,
                                                                (letter) =>
                                                                    letter.toUpperCase()
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                        </>
                                    )}
                                </>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isNewMedicationOpen}
                onClose={!isNewMedicationOpen}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
                disableScrollLock={true}
            >
                <Fade in={isNewMedicationOpen}>
                    <Box style={style}>
                        {/* <AddAppMax
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
                        /> */}
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

PrescriptionSearch.propTypes = {
    products: PropTypes.object.isRequired,
    searchMedicationForPrescription: PropTypes.func.isRequired,
    changeValuesOfElementWithArrayInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    products: state.products,
})

const mapStateToActions = {
    searchMedicationForPrescription,
    changeValuesOfElementWithArrayInArray,
}

export default connect(
    mapStateToProps,
    mapStateToActions
)(PrescriptionSearch)
