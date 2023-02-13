// Name -> AddPetMax.js 
// Use -> Component to add pet details, connect to owner and then save to dB
// Paired with -> AddPet.js and AddPetMin.js 
// Data is persisted in the redux state profiles

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import {
    addNewOwnerWhenPetAdded,
    addNewPet,
    searchOwner,
    addIdFromSearchOwner,
} from '../../../../../../../../redux/actions/profiles/profiles'

import {
    changeValuesOfElementInArray
} from '../../../../../../../../redux/actions/add-array/add'

import { animals } from '../../../../../data/animals'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider, Popup } from 'semantic-ui-react'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import LoadingButton from '@mui/lab/LoadingButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Scrollbars from 'react-custom-scrollbars'
import Select from '@mui/material/Select'
import { CSSTransition } from 'react-transition-group'

import { faPaw } from '@fortawesome/free-solid-svg-icons'

import {
    Button,
    Card,
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear'
import SaveIcon from '@mui/icons-material/Save'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'
import CancelIcon from '@mui/icons-material/Cancel'
import CloseIcon from '@mui/icons-material/Close'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CircularProgress from '@mui/material/CircularProgress'
import SearchIcon from '@mui/icons-material/Search'

import Maximized from '../../../../../min-max/Maximized'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: p.focusColor,
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: p.focusColor,
            fontSize: '0.9em',
        },
    },
}))

const CssSearchField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
        // borderColor: 'none',
        border: '1px solid gray',
        boxShadow: '0px 1px 3px 0px rgba(15, 15, 15, 0.75)'

    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'none',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            // borderColor: 'none',
            border: '1px solid gray',
            fontSize: '0.9em',
        },
        borderRadius: '20px',
        border: '1px solid none',
    },
}))

const textFieldInputLabelStyle = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const textFieldStyle = {
    height: '20px',
    width: '250px',
}

const saveRecordIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#1686f0',
            border: '1px solid #1686f0',
        },
    },
})

const clearRecordIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#f04343',
            border: '1px solid #f04343',
        },
    },
})

const addOwnerIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#1ed624',
            border: '1px solid #1ed624',
        },
    },
})

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        width: 4,
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const CustomScrollbars = (props) => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
)

const map = new Map()

const Max = ({
    index,
    formData,
    onClear,
    onExpandLess,
    onWindowClose,
    
    // Redux Actions
    addNewOwnerWhenPetAdded,
    addNewPet,
    searchOwner,
    addIdFromSearchOwner,
    changeValuesOfElementInArray,

    // Redux States
    profiles: {
        searchReturnedValue,
        searchOwnerLoading,
        ownerID,
        addPetLoading,
        addPetSuccessful,
        addOwnerLoading,
    },
}) => {
    const CHARACTER_LIMIT = 100

    const saveIconStyle = saveRecordIconButtonStyle()
    const clearIconStyle = clearRecordIconButtonStyle()
    const addOwnerStyle = addOwnerIconButtonStyle()

    const [nameEmptyError, setNameEmptyError] = useState(false)
    const [mobileNoEmptyError, setMobileNoEmptyError] = useState(false)
    const [emailEmptyError, setEmailEmptyError] = useState(false)

    const [petNameEmptyError, setPetNameEmptyError] = useState(false)
    const [petSpeciesEmptyError, setPetSpeciesEmptyError] = useState(false)
    const [petAgeEmptyError, setPetAgeEmptyError] = useState(false)

    const {
        ownerName,
        ownerEmail,
        ownerMobileNo,
        ownerAddress,
        petName,
        petSpecies,
        petBreed,
        petAge,
        petPhysicalFeatures,
        petPhysicalFeaturesInput,
        petStatus,
        petAgeTime,
        petSpeciesDetailsState,
        petSpeciesDetails,
        isNewOwner,
        changeValues,
        showSearchValues,
        showAddNewOwner,
        isPetPhysicalFeaturesActive,
        isSelected,
        speciesOther,
        input,
    } = formData

    const openAddNewOwner = () => {
        changeValuesOfElementInArray(index, 'ownerName', '')
        changeValuesOfElementInArray(index, 'ownerEmail', '')
        changeValuesOfElementInArray(index, 'ownerMobileNo', '')
        changeValuesOfElementInArray(index, 'ownerAddress', '')
        changeValuesOfElementInArray(index, 'changeValues', false)
        changeValuesOfElementInArray(index, 'isNewOwner', true)
        changeValuesOfElementInArray(index, 'showSearchValues', false)
        changeValuesOfElementInArray(index, 'showAddNewOwner', true)
    }

    const changeSelected = (e) => {
                changeValuesOfElementInArray(index, 'isSelected', true)

    }

    const changeDeselected = (e) => {
                        changeValuesOfElementInArray(index, 'isSelected', false)

    }

    const handleSearch = async (e) => {
        changeValuesOfElementInArray(index, 'showAddNewOwner', false)
        changeValuesOfElementInArray(index, 'input', e.target.value)
        let searchQuery = e.target.value.toLowerCase()
        searchOwner(searchQuery)
    }

    const onChange = (e) => {
        if (e.target.name === 'petSpecies' && e.target.value === 'other') {
            changeValuesOfElementInArray(index, 'speciesOther', true)
            changeValuesOfElementInArray(index, 'petSpeciesDetails', '')

            changeValuesOfElementInArray(index, 'petSpecies', e.target.value)

            changeValuesOfElementInArray(index, 'petSpeciesDetailsState', true)

        } else if (
            e.target.name === 'petSpecies' &&
            e.target.value !== 'other'
        ) {
            changeValuesOfElementInArray(index, 'speciesOther', false)

            changeValuesOfElementInArray(index, 'petSpeciesDetailsState', false)

            changeValuesOfElementInArray(index, 'petSpeciesDetails', '')

            changeValuesOfElementInArray(index, 'petSpecies', e.target.value)
        } else {
            changeValuesOfElementInArray(index, e.target.name, e.target.value)
        }
    }

    const onPetPhysicalFeaturesFocus = (e) => {
        onChange(e)
        if (e.target.value !== '') {
                    changeValuesOfElementInArray(index, 'isPetPhysicalFeaturesActive', true)
        } else {
                    changeValuesOfElementInArray(
                        index,
                        'isPetPhysicalFeaturesActive',
                        false
                    )
        }
    }

    const petPhysicalFeaturesDelete = (e, index) => {
        petPhysicalFeatures.splice(index, 1)
        onChange(e)
    }

    const onPetPhysicalFeaturesClick = (e) => {
        petPhysicalFeatures.push(petPhysicalFeaturesInput.toLowerCase())
        onChange(e)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (petName.length < 1) {
            setPetNameEmptyError(true)
            setTimeout(() => setPetNameEmptyError(false), 3000)
        } else if (petSpecies.length < 1) {
            setPetSpeciesEmptyError(true)
            setTimeout(() => setPetSpeciesEmptyError(false), 3000)
        } else if (petAge.length < 1 || petAgeTime.length < 1) {
            setPetAgeEmptyError(true)
            setTimeout(() => setPetAgeEmptyError(false), 3000)
        } else if (ownerName.length < 1) {
            setNameEmptyError(true)
            setTimeout(() => setNameEmptyError(false), 3000)
        } else if (ownerMobileNo.length < 1) {
            setMobileNoEmptyError(true)
            setTimeout(() => setMobileNoEmptyError(false), 3000)
        } else if (ownerEmail.length < 1) {
            setEmailEmptyError(true)
            setTimeout(() => setEmailEmptyError(false), 3000)
        } else {
            if (isNewOwner) {
                const sendOwnerData = {
                    ownerName,
                    ownerMobileNo,
                    ownerAddress,
                    ownerEmail,
                }
                const ownerId = await addNewOwnerWhenPetAdded(sendOwnerData)

                if (ownerId !== undefined) {
                    if (petSpeciesDetailsState) {
                        const sendPetData = {
                            petName,
                            petSpecies: petSpeciesDetails,
                            petBreed,
                            petAge,
                            petAgeTime,
                            petPhysicalFeatures,
                            petStatus,
                            petEstimatedBirthDate: moment()
                                .subtract(petAgeTime, parseInt(petAge))
                                .format('DD/MM/yyyy'),
                            petSpeciesDetailsState,
                        }

                        addNewPet(sendPetData, ownerId)
                    } else {
                        const sendPetData = {
                            petName,
                            petSpecies,
                            petBreed,
                            petAge,
                            petAgeTime,
                            petPhysicalFeatures,
                            petStatus,
                            petEstimatedBirthDate: moment()
                                .subtract(petAgeTime, parseInt(petAge))
                                .format('DD/MM/yyyy'),
                            petSpeciesDetailsState,
                        }

                        console.log('ADD')

                        addNewPet(sendPetData, ownerId)
                    }
                }
            } else {
                if (petSpeciesDetailsState) {
                    const sendPetData = {
                        petName,
                        petSpecies: petSpeciesDetails,
                        petBreed,
                        petAge,
                        petAgeTime,
                        petPhysicalFeatures,
                        petStatus,
                        petEstimatedBirthDate: moment()
                            .subtract(petAgeTime, parseInt(petAge))
                            .format('DD/MM/yyyy'),
                        petSpeciesDetailsState,
                    }
                    console.log('ADD')

                    addNewPet(sendPetData, ownerID)
                } else {
                    const sendPetData = {
                        petName,
                        petSpecies,
                        petBreed,
                        petAge,
                        petAgeTime,
                        petPhysicalFeatures,
                        petStatus,
                        petEstimatedBirthDate: moment()
                            .subtract(petAgeTime, parseInt(petAge))
                            .format('DD/MM/yyyy'),
                        petSpeciesDetailsState,
                    }
                    console.log('ADD')

                    addNewPet(sendPetData, ownerID)
                }
            }
        }
    }

    const addOwnerName = async (value) => {
        changeValuesOfElementInArray(index, 'isNewOwner', false)

        map.set('ownerSelected', value)
        addIdFromSearchOwner(map.get('ownerSelected').owner_id)

        changeValuesOfElementInArray(index, 'ownerName', map
                .get('ownerSelected')
                .owner_name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase()
                ))
        changeValuesOfElementInArray(index, 'ownerAddress',  map
                .get('ownerSelected')
                .address.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase()
                ))
        changeValuesOfElementInArray(
            index,
            'ownerMobileNo',
            map.get('ownerSelected').mobile_no
        )
        changeValuesOfElementInArray(
            index,
            'ownerEmail',
            map.get('ownerSelected').email_id
        )
        changeValuesOfElementInArray(index, 'input', '')
        changeValuesOfElementInArray(index, 'changeValues', true)
        changeValuesOfElementInArray(index, 'showSearchValues', true)
    }

    return (
        <div className="clients_add_profile_max">
            <Card sx={{ width: 700, borderRadius: '10px' }}>
                <div className="title">
                    <div></div>
                    <div className="flex_middle">
                        <FontAwesomeIcon
                            icon={faPaw}
                            style={{ fontSize: 25, marginRight: '10px' }}
                        />
                        <div>Pet Profile</div>
                    </div>
                    <div>
                        <Maximized
                            close={onWindowClose}
                            minimize={onExpandLess}
                            dark={true}
                        />
                    </div>
                </div>
                <div className="add_pet_main_body_client">
                    <CustomScrollbars
                        autoHide
                        autoHideTimeout={500}
                        autoHideDuration={200}
                    >
                        <div>
                            <div className="app">
                                {petNameEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Pet name is required.
                                    </div>
                                )}
                                {petSpeciesEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Pet species is required.
                                    </div>
                                )}
                                {petAgeEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Pet age and time span is required.
                                    </div>
                                )}
                                {nameEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Owner name is required.
                                    </div>
                                )}
                                {mobileNoEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Owner mobile number is required.
                                    </div>
                                )}
                                {emailEmptyError && (
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'white',
                                            width: '50%',
                                            fontSize: '0.85em',
                                            borderRadius: '5px',
                                            textAlign: 'center',
                                            marginTop: '0.5em',
                                        }}
                                    >
                                        Owner email Id is required.
                                    </div>
                                )}
                            </div>
                            <div className="app">
                                <div className="row">
                                    <div
                                        className="app"
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        <CssTextField
                                            error={petNameEmptyError}
                                            label="Pet Name"
                                            placeholder="Pet Name"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            FormHelperTextProps={{
                                                style: {
                                                    margin: 0,
                                                    padding: '0 0 0 5px',
                                                    fontSize: 10,
                                                },
                                            }}
                                            name="petName"
                                            value={petName}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="app">
                                        <FormControl
                                            style={{
                                                width: '280px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={petSpeciesEmptyError}
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Pet Species
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={petSpecies}
                                                name="petSpecies"
                                                label="Pet Species"
                                                placeholder="Pet Species"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                {animals.map(
                                                    (element, index) => (
                                                        <MenuItem
                                                            value={element}
                                                            key={index}
                                                        >
                                                            {element.replace(
                                                                /(^\w{1})|(\s+\w{1})/g,
                                                                (letter) =>
                                                                    letter.toUpperCase()
                                                            )}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        </FormControl>
                                        {speciesOther && (
                                            <div
                                                style={{ margin: '2em 0 0 0' }}
                                            >
                                                <CssTextField
                                                    error={petSpeciesEmptyError}
                                                    label="Pet Species Details"
                                                    placeholder="Pet Species Details"
                                                    size="small"
                                                    focusColor="#1686f0"
                                                    InputLabelProps={{
                                                        style: textFieldInputLabelStyle,
                                                    }}
                                                    inputProps={{
                                                        style: textFieldStyle,
                                                    }}
                                                    FormHelperTextProps={{
                                                        style: {
                                                            margin: 0,
                                                            padding:
                                                                '0 0 0 5px',
                                                            fontSize: 10,
                                                        },
                                                    }}
                                                    name="petSpeciesDetails"
                                                    value={petSpeciesDetails}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="flex_middle">
                                        <CssTextField
                                            label="Breed"
                                            placeholder="Breed"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            FormHelperTextProps={{
                                                style: {
                                                    margin: 0,
                                                    padding: '0 0 0 5px',
                                                    fontSize: 10,
                                                },
                                            }}
                                            name="petBreed"
                                            value={petBreed}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex_evenly">
                                        <div className="flex_left">
                                            <CssTextField
                                                error={petAgeEmptyError}
                                                label="Age"
                                                placeholder="Age"
                                                multiline
                                                maxRows={4}
                                                size="small"
                                                focusColor="#1686f0"
                                                InputLabelProps={{
                                                    style: textFieldInputLabelStyle,
                                                }}
                                                inputProps={{
                                                    style: {
                                                        width: '100px',
                                                    },
                                                    maxLength: CHARACTER_LIMIT,
                                                }}
                                                FormHelperTextProps={{
                                                    style: {
                                                        margin: 0,
                                                        padding: '0 0 0 5px',
                                                        fontSize: 10,
                                                    },
                                                }}
                                                name="petAge"
                                                value={petAge}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="flex_right">
                                            <FormControl
                                                style={{
                                                    width: '130px',
                                                }}
                                            >
                                                <InputLabel
                                                    required
                                                    error={petAgeEmptyError}
                                                    id="demo-simple-select-helper-label"
                                                    sx={{
                                                        fontSize: 13,
                                                    }}
                                                    size="small"
                                                >
                                                    Time
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={petAgeTime}
                                                    name="petAgeTime"
                                                    size="small"
                                                    onChange={onChange}
                                                    label="Time"
                                                    placeholder="Time"
                                                >
                                                    <MenuItem value={'days'}>
                                                        Days
                                                    </MenuItem>
                                                    <MenuItem value={'months'}>
                                                        Months
                                                    </MenuItem>
                                                    <MenuItem value={'years'}>
                                                        Years
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="app">
                                        <CssTextField
                                            label="Physical Features"
                                            placeholder="Physical Features"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: {
                                                    width: '235px',
                                                },
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment
                                                        style={{
                                                            padding: 0,
                                                            margin: '0em 1em 0em 0em',
                                                            width: 0,
                                                        }}
                                                    >
                                                        <IconButton
                                                            style={{
                                                                padding: 0,
                                                                margin: 0,
                                                            }}
                                                        >
                                                            {isPetPhysicalFeaturesActive ? (
                                                                <Popup
                                                                    trigger={
                                                                        <AddIcon
                                                                            style={{
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                color: '#ff5991',
                                                                            }}
                                                                            onClick={
                                                                                onPetPhysicalFeaturesClick
                                                                            }
                                                                        />
                                                                    }
                                                                    content="Add pet's physical features"
                                                                    position="bottom center"
                                                                    size="mini"
                                                                />
                                                            ) : (
                                                                ''
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            name="petPhysicalFeaturesInput"
                                            value={petPhysicalFeaturesInput}
                                            onChange={
                                                onPetPhysicalFeaturesFocus
                                            }
                                        />
                                        {petPhysicalFeatures.length > 0 ? (
                                            <div className="add_pet_show">
                                                {petPhysicalFeatures.map(
                                                    (element, index) => (
                                                        <CSSTransition
                                                            in={true}
                                                            timeout={300}
                                                            classNames="alert_deworming_add_record"
                                                            unmountOnExit
                                                            key={index}
                                                        >
                                                            <div
                                                                className="add_pet_list_showcase"
                                                                style={{
                                                                    width: '280px',
                                                                }}
                                                            >
                                                                <p
                                                                    style={{
                                                                        padding: 0,
                                                                        margin: 0,
                                                                    }}
                                                                >
                                                                    <div className="flex_middle">
                                                                        <div
                                                                            style={{
                                                                                marginRight:
                                                                                    '0.3em',
                                                                            }}
                                                                        >
                                                                            {index +
                                                                                1}
                                                                            .
                                                                        </div>
                                                                        <div>
                                                                            {element.replace(
                                                                                /(^\w{1})|(\s+\w{1})/g,
                                                                                (
                                                                                    letter
                                                                                ) =>
                                                                                    letter.toUpperCase()
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </p>
                                                                <CancelIcon
                                                                    style={{
                                                                        fontSize: 12,
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    className="closing"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        petPhysicalFeaturesDelete(
                                                                            e,
                                                                            index
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </CSSTransition>
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div
                                        className="app"
                                        style={{ justifyContent: 'flex-start' }}
                                    >
                                        <FormControl style={{ width: '280px' }}>
                                            <InputLabel
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Status
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={petStatus}
                                                name="petStatus"
                                                label="Status"
                                                placeholder="Status"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={'withOwner'}>
                                                    With Owner
                                                </MenuItem>
                                                <MenuItem value={'stray'}>
                                                    Stray
                                                </MenuItem>
                                                <MenuItem value={'rescue'}>
                                                    Rescue
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                {petStatus === 'withOwner' ? (
                                    <div style={{ margin: '2em 0em 2em 0em' }}>
                                        <div
                                            style={{
                                                fontSize: '1.5em',
                                                color: '#5cbcfa',
                                            }}
                                            className="flex_middle"
                                        >
                                            Owner Details
                                        </div>
                                        <div
                                            style={{
                                                margin: '1em 7em 1em 7em',
                                            }}
                                        >
                                            <Divider
                                                style={{
                                                    margin: 0,
                                                    padding: 0,
                                                }}
                                            />
                                        </div>
                                        <div className="app">
                                            <div className="search_row">
                                                <div className="">
                                                    <CssSearchField
                                                        size="small"
                                                        placeholder="Search Owner"
                                                        fullWidth
                                                        className="search_bar"
                                                        onChange={handleSearch}
                                                        onMouseEnter={
                                                            changeSelected
                                                        }
                                                        onMouseLeave={
                                                            changeDeselected
                                                        }
                                                        value={input}
                                                        name="input"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <div className="flex_end_everything">
                                                                    <InputAdornment position="end">
                                                                        {searchOwnerLoading ? (
                                                                            <CircularProgress
                                                                                variant="indeterminate"
                                                                                disableShrink
                                                                                sx={{
                                                                                    color: (
                                                                                        theme
                                                                                    ) =>
                                                                                        theme
                                                                                            .palette
                                                                                            .mode ===
                                                                                        'light'
                                                                                            ? '#c0d6eb'
                                                                                            : '#308fe8',
                                                                                    animationDuration:
                                                                                        '600ms',
                                                                                }}
                                                                                size={
                                                                                    17
                                                                                }
                                                                                thickness={
                                                                                    4
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            ''
                                                                        )}
                                                                    </InputAdornment>
                                                                    <InputAdornment position="end">
                                                                        {input.length >
                                                                        0 ? (
                                                                            <CloseIcon
                                                                                style={{
                                                                                    fontSize: 18,
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                                onClick={() =>
                                                                                    changeValuesOfElementInArray(
                                                                                        index,
                                                                                        'input',
                                                                                        ''
                                                                                    )
                                                                                }
                                                                            />
                                                                        ) : (
                                                                            ''
                                                                        )}
                                                                    </InputAdornment>
                                                                </div>
                                                            ),
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    {isSelected ? (
                                                                        <SearchIcon
                                                                            style={{
                                                                                color: 'red',
                                                                            }}
                                                                        />
                                                                    ) : (
                                                                        <SearchIcon />
                                                                    )}
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                    />
                                                    <div>
                                                        {input.length === 0 ? (
                                                            ''
                                                        ) : (
                                                            <div
                                                                fullWidth
                                                                className="search_results_card"
                                                            >
                                                                <>
                                                                    {searchReturnedValue.length ===
                                                                    0 ? (
                                                                        <div className="search_no_results">
                                                                            No
                                                                            Results
                                                                        </div>
                                                                    ) : (
                                                                        <>
                                                                            {searchReturnedValue
                                                                                .slice(
                                                                                    0,
                                                                                    5
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        value,
                                                                                        index
                                                                                    ) => (
                                                                                        <div
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                            value={
                                                                                                value.owner_name
                                                                                            }
                                                                                            onClick={() =>
                                                                                                addOwnerName(
                                                                                                    value
                                                                                                )
                                                                                            }
                                                                                            className="search_results"
                                                                                        >
                                                                                            {value.owner_name.replace(
                                                                                                /(^\w{1})|(\s+\w{1})/g,
                                                                                                (
                                                                                                    letter
                                                                                                ) =>
                                                                                                    letter.toUpperCase()
                                                                                            )}
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                        </>
                                                                    )}
                                                                </>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className="app"
                                                    style={{
                                                        justifyContent:
                                                            'flex-start',
                                                        marginTop: '0.4em',
                                                    }}
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        endIcon={
                                                            <AddCircleOutlineIcon />
                                                        }
                                                        size="small"
                                                        className={
                                                            addOwnerStyle.root
                                                        }
                                                        onClick={
                                                            openAddNewOwner
                                                        }
                                                    >
                                                        Add Owner
                                                    </Button>
                                                </div>
                                            </div>
                                            <CSSTransition
                                                in={showAddNewOwner}
                                                timeout={0}
                                                classNames="show_search_values"
                                                unmountOnExit
                                            >
                                                <>
                                                    <div className="row">
                                                        <div
                                                            style={{
                                                                padding:
                                                                    '0 1em 0 0',
                                                            }}
                                                            className="flex_middle"
                                                        >
                                                            <CssTextField
                                                                label="Owner Name"
                                                                placeholder="Owner Name"
                                                                error={
                                                                    nameEmptyError
                                                                }
                                                                fullWidth
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerName"
                                                                value={
                                                                    ownerName
                                                                }
                                                                onChange={
                                                                    onChange
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                padding:
                                                                    '0 0 0 1em',
                                                            }}
                                                            className="flex_middle"
                                                        >
                                                            <CssTextField
                                                                label="Owner Mobile No"
                                                                placeholder="Owner Mobile No"
                                                                fullWidth
                                                                error={
                                                                    mobileNoEmptyError
                                                                }
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerMobileNo"
                                                                value={
                                                                    ownerMobileNo
                                                                }
                                                                onChange={
                                                                    onChange
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div
                                                            style={{
                                                                padding:
                                                                    '0 1em 0 0',
                                                            }}
                                                            className="flex_middle"
                                                        >
                                                            <CssTextField
                                                                label="Email ID"
                                                                placeholder="Email ID"
                                                                fullWidth
                                                                error={
                                                                    emailEmptyError
                                                                }
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerEmail"
                                                                value={
                                                                    ownerEmail
                                                                }
                                                                onChange={
                                                                    onChange
                                                                }
                                                                helperText=" "
                                                                required
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                padding:
                                                                    '0 0 0 1em',
                                                            }}
                                                            className="flex_middle"
                                                        >
                                                            <CssTextField
                                                                label="Address"
                                                                placeholder="Address"
                                                                multiline
                                                                maxRows={4}
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                inputProps={{
                                                                    style: {
                                                                        width: '220px',
                                                                    },
                                                                    maxLength:
                                                                        CHARACTER_LIMIT,
                                                                }}
                                                                FormHelperTextProps={{
                                                                    style: {
                                                                        margin: 0,
                                                                        padding:
                                                                            '0 0 0 5px',
                                                                        fontSize: 10,
                                                                    },
                                                                }}
                                                                error={
                                                                    ownerAddress.length >
                                                                    CHARACTER_LIMIT -
                                                                        1
                                                                }
                                                                helperText={
                                                                    !(
                                                                        ownerAddress.length >
                                                                        CHARACTER_LIMIT -
                                                                            1
                                                                    )
                                                                        ? `${ownerAddress.length}/${CHARACTER_LIMIT}`
                                                                        : 'Max length exceeded'
                                                                }
                                                                name="ownerAddress"
                                                                value={
                                                                    ownerAddress
                                                                }
                                                                onChange={
                                                                    onChange
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            </CSSTransition>
                                            <CSSTransition
                                                in={showSearchValues}
                                                timeout={0}
                                                classNames="show_search_values"
                                                unmountOnExit
                                            >
                                                <div className="below">
                                                    <div className="search_inner_row">
                                                        <div>
                                                            <CssTextField
                                                                disabled={
                                                                    changeValues
                                                                }
                                                                error={
                                                                    nameEmptyError
                                                                }
                                                                label="Owner Name"
                                                                placeholder="Owner Name"
                                                                fullWidth
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerName"
                                                                value={
                                                                    ownerName
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <CssTextField
                                                                disabled={
                                                                    changeValues
                                                                }
                                                                error={
                                                                    mobileNoEmptyError
                                                                }
                                                                label="Owner Mobile No"
                                                                placeholder="Owner Mobile No"
                                                                fullWidth
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerMobileNo"
                                                                value={
                                                                    ownerMobileNo
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="search_inner_row">
                                                        <div>
                                                            <CssTextField
                                                                disabled={
                                                                    changeValues
                                                                }
                                                                error={
                                                                    emailEmptyError
                                                                }
                                                                label="Email ID"
                                                                placeholder="Email ID"
                                                                fullWidth
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                name="ownerEmail"
                                                                value={
                                                                    ownerEmail
                                                                }
                                                                helperText=" "
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <CssTextField
                                                                disabled={
                                                                    changeValues
                                                                }
                                                                label="Address"
                                                                placeholder="Address"
                                                                multiline
                                                                maxRows={4}
                                                                size="small"
                                                                focusColor="#1686f0"
                                                                InputLabelProps={{
                                                                    style: textFieldInputLabelStyle,
                                                                }}
                                                                inputProps={{
                                                                    style: {
                                                                        width: '283px',
                                                                    },
                                                                    maxLength:
                                                                        CHARACTER_LIMIT,
                                                                }}
                                                                FormHelperTextProps={{
                                                                    style: {
                                                                        margin: 0,
                                                                        padding:
                                                                            '0 0 0 5px',
                                                                        fontSize: 10,
                                                                    },
                                                                }}
                                                                error={
                                                                    ownerAddress.length >
                                                                    CHARACTER_LIMIT -
                                                                        1
                                                                }
                                                                helperText={
                                                                    !(
                                                                        ownerAddress.length >
                                                                        CHARACTER_LIMIT -
                                                                            1
                                                                    )
                                                                        ? `${ownerAddress.length}/${CHARACTER_LIMIT}`
                                                                        : 'Max length exceeded'
                                                                }
                                                                name="ownerAddress"
                                                                value={
                                                                    ownerAddress
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </CSSTransition>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            style={{
                                                margin: '2em 0em 0em 0em',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: '1.5em',
                                                    color: '#5cbcfa',
                                                }}
                                                className="flex_middle"
                                            >
                                                Contact Details
                                            </div>
                                            <div
                                                style={{
                                                    margin: '1em 0em 0em 0em',
                                                }}
                                            >
                                                <Divider
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div
                                                style={{
                                                    padding: '0 2em 0 1em',
                                                }}
                                                className="flex_middle"
                                            >
                                                <CssTextField
                                                    label="Contact Name"
                                                    placeholder="Contact Name"
                                                    error={nameEmptyError}
                                                    fullWidth
                                                    size="small"
                                                    focusColor="#1686f0"
                                                    InputLabelProps={{
                                                        style: textFieldInputLabelStyle,
                                                    }}
                                                    inputProps={{
                                                        style: textFieldStyle,
                                                    }}
                                                    name="ownerName"
                                                    value={ownerName}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    padding: '0 1em 0 2em',
                                                }}
                                                className="flex_middle"
                                            >
                                                <CssTextField
                                                    label="Contact Mobile No"
                                                    placeholder="Contact Mobile No"
                                                    error={mobileNoEmptyError}
                                                    fullWidth
                                                    size="small"
                                                    focusColor="#1686f0"
                                                    InputLabelProps={{
                                                        style: textFieldInputLabelStyle,
                                                    }}
                                                    inputProps={{
                                                        style: textFieldStyle,
                                                    }}
                                                    name="ownerMobileNo"
                                                    value={ownerMobileNo}
                                                    onChange={onChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div
                                                style={{
                                                    padding: '0 2em 0 1em',
                                                }}
                                                className="flex_middle"
                                            >
                                                <CssTextField
                                                    error={emailEmptyError}
                                                    label="Email ID"
                                                    placeholder="Email ID"
                                                    fullWidth
                                                    size="small"
                                                    focusColor="#1686f0"
                                                    InputLabelProps={{
                                                        style: textFieldInputLabelStyle,
                                                    }}
                                                    inputProps={{
                                                        style: textFieldStyle,
                                                    }}
                                                    name="ownerEmail"
                                                    value={ownerEmail}
                                                    onChange={onChange}
                                                    helperText=" "
                                                    required
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    padding: '0 1em 0 2em',
                                                }}
                                                className="flex_middle"
                                            >
                                                <CssTextField
                                                    label="Address"
                                                    placeholder="Address"
                                                    multiline
                                                    maxRows={4}
                                                    size="small"
                                                    focusColor="#1686f0"
                                                    InputLabelProps={{
                                                        style: textFieldInputLabelStyle,
                                                    }}
                                                    inputProps={{
                                                        style: {
                                                            width: '250px',
                                                        },
                                                        maxLength:
                                                            CHARACTER_LIMIT,
                                                    }}
                                                    FormHelperTextProps={{
                                                        style: {
                                                            margin: 0,
                                                            padding:
                                                                '0 0 0 5px',
                                                            fontSize: 10,
                                                        },
                                                    }}
                                                    error={
                                                        ownerAddress.length >
                                                        CHARACTER_LIMIT - 1
                                                    }
                                                    helperText={
                                                        !(
                                                            ownerAddress.length >
                                                            CHARACTER_LIMIT - 1
                                                        )
                                                            ? `${ownerAddress.length}/${CHARACTER_LIMIT}`
                                                            : 'Max length exceeded'
                                                    }
                                                    name="ownerAddress"
                                                    value={ownerAddress}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </CustomScrollbars>
                </div>
                <div style={{ margin: '0em 7em 1em 7em' }}>
                    <Divider style={{ margin: 0, padding: 0 }} />
                </div>
                <div
                    className="flex_middle"
                    style={{ margin: '0em 0em 2em 0em' }}
                >
                    <div className="flex_middle" style={{ marginRight: '2em' }}>
                        <Button
                            variant="outlined"
                            endIcon={<ClearIcon />}
                            size="small"
                            className={clearIconStyle.root}
                            onClick={onClear}
                        >
                            Clear All
                        </Button>
                    </div>
                    <div className="ce_buttons">
                        {addPetSuccessful ? (
                            <LoadingButton
                                disabled={addPetSuccessful}
                                variant="outlined"
                                endIcon={
                                    <CheckIcon style={{ color: '#25d931' }} />
                                }
                                size="small"
                                className={saveIconStyle.root}
                                style={
                                    {
                                        // marginLeft: '1em',
                                    }
                                }
                            >
                                Saved
                            </LoadingButton>
                        ) : (
                            <LoadingButton
                                loading={addPetLoading || addOwnerLoading}
                                variant="outlined"
                                endIcon={<SaveIcon />}
                                size="small"
                                className={saveIconStyle.root}
                                onClick={onSubmit}
                                style={
                                    {
                                        // marginLeft: '1em',
                                    }
                                }
                            >
                                Save
                            </LoadingButton>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}

Max.propTypes = {
    profiles: PropTypes.object.isRequired,
    addNewOwnerWhenPetAdded: PropTypes.func.isRequired,
    searchOwner: PropTypes.func.isRequired,
    addNewPet: PropTypes.func.isRequired,
    addIdFromSearchOwner: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    profiles: state.profiles,
})

const mapStateToActions = {
    addNewOwnerWhenPetAdded,
    searchOwner,
    addNewPet,
    addIdFromSearchOwner,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(Max)
