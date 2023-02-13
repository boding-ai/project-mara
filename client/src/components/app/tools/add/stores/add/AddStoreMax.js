import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Scrollbars from 'react-custom-scrollbars'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShop,
} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@mui/styles'
import { Divider } from 'semantic-ui-react'
import { Button, TextField, styled, FormControl, InputLabel, Select, MenuItem, Tooltip } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

import SaveIcon from '@mui/icons-material/Save'
import ClearIcon from '@mui/icons-material/Clear'
import CircleIcon from '@mui/icons-material/Circle'

import { timeDurations } from '../../../data/timeDurations'

import InfoTutorial from '../../../info/InfoTutorial'
import Maximized from '../../../min-max/Maximized'

import { addNewStore } from '../../../../../../redux/actions/business/store'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'rgb(72, 72, 72)',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(72, 72, 72)',
            fontSize: '0.9em',
        },
    },
}))

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
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

const saveRecordIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#32a3fa',
            border: '1px solid #32a3fa',
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

const textFieldInputLabelStyle = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const textFieldStyle = {
    height: '20px',
    width: '190px',
}

const AddStoreMax = ({
    // Functions
    close,
    clearAll,
    onChange,
    onSelectWorkingDay,
    onExpandLessClick,

    // Data
    element,

    // Redux Actions
    addNewStore,

    // Redux States
    store: { addNewStoreLoading, addNewStoreSuccess },
}) => {
    const CHARACTER_LIMIT = 100

    const saveIconStyle = saveRecordIconButtonStyle()
    const clearIconStyle = clearRecordIconButtonStyle()

    const {
        storeName,
        storeType,
        storeContactNumber,
        address,
        mainLocation,
        poc,
        storeTimingStart,
        storeTimingEnd,
        storeOperationDays,
        appointmentStartTimings,
        appointmentEndTimings,
        appointmentTimeSpan,
        appointmentTimeDuration,
    } = element

    // Errors
    const [storeNameEmptyError, setStoreNameEmptyError] = useState(false)
    const [storeContactNumberEmptyError, setStoreContactNumberEmptyError] =
        useState(false)
    const [mainLocationEmptyError, setMainLocationEmptyError] = useState(false)
    const [addressEmptyError, setAddressEmptyError] = useState(false)
    const [storeTypeEmptyError, setStoreTypeEmptyError] = useState(false)
    const [pocEmptyError, setPocEmptyError] = useState(false)

    const [storeTimingStartError, setStoreTimingStartError] = useState(false)
    const [storeTimingEndError, setStoreTimingEndError] = useState(false)
    const [appointmentTimingStartError, setAppointmentTimingStartError] =
        useState(false)
    const [appointmentTimingEndError, setAppointmentTimingEndError] =
        useState(false)
    const [appointmentTimeSpanError, setAppointmentTimeSpanError] =
        useState(false)
    const [appointmentTimeDurationError, setAppointmentTimeDurationError] =
        useState(false)

    const onSubmit = () => {
        if (storeName.length < 1) {
            setStoreNameEmptyError(true)
            setTimeout(() => setStoreNameEmptyError(false), 3000)
        } else if (storeContactNumber.length < 1) {
            setStoreContactNumberEmptyError(true)
            setTimeout(() => setStoreContactNumberEmptyError(false), 3000)
        } else if (storeType.length < 1) {
            setStoreTypeEmptyError(true)
            setTimeout(() => setStoreTypeEmptyError(false), 3000)
        } else if (poc.length < 1) {
            setPocEmptyError(true)
            setTimeout(() => setPocEmptyError(false), 3000)
        } else if (address.length < 1) {
            setAddressEmptyError(true)
            setTimeout(() => setAddressEmptyError(false), 3000)
        } else if (mainLocation.length < 1) {
            setMainLocationEmptyError(true)
            setTimeout(() => setMainLocationEmptyError(false), 3000)
        } else if (storeTimingStart.length < 1) {
            setStoreTimingStartError(true)
            setTimeout(() => setStoreTimingStartError(false), 3000)
        } else if (storeTimingEnd.length < 1) {
            setStoreTimingEndError(true)
            setTimeout(() => setStoreTimingEndError(false), 3000)
        } else if (appointmentStartTimings.length < 1) {
            setAppointmentTimingStartError(true)
            setTimeout(() => setAppointmentTimingStartError(false), 3000)
        } else if (appointmentEndTimings.length < 1) {
            setAppointmentTimingEndError(true)
            setTimeout(() => setAppointmentTimingEndError(false), 3000)
        } else if (appointmentTimeSpan.length < 1) {
            setAppointmentTimeSpanError(true)
            setTimeout(() => setAppointmentTimeSpanError(false), 3000)
        } else if (appointmentTimeDuration.length < 1) {
            setAppointmentTimeDurationError(true)
            setTimeout(() => setAppointmentTimeDurationError(false), 3000)
        } else {
            addNewStore(element)
        }
    }

    return (
        <>
            <div className="add-store-card">
                <div className="first" style={{ padding: '0.8em 0.5em' }}>
                    <div className="flex_left" style={{ marginLeft: '0.3em' }}>
                        <div className="flex_middle">
                            <Tooltip title="Clear All" placement="left">
                                <div
                                    onClick={clearAll}
                                    className="clear cursor_pointer"
                                >
                                    <CircleIcon
                                        style={{
                                            fontSize: 16,
                                            marginTop: '0.3em',
                                        }}
                                    />
                                </div>
                            </Tooltip>
                            <div style={{ margin: '0.18em 0 0 0.4em' }}>
                                <InfoTutorial
                                    message={
                                        'Check out tutorial to learn how to add a store and know the meanings of the terms associated with it.'
                                    }
                                    url={'/blog/tutorial/stores/add-stores'}
                                    size={16}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="title flex_middle">
                        <FontAwesomeIcon
                            icon={faShop}
                            style={{ fontSize: 22, marginRight: '0.5em' }}
                        />
                        <div style={{ marginTop: '0.3em' }}>
                            Add Store/Clinic
                        </div>
                    </div>
                    <div
                        className="flex_right"
                        style={{ marginRight: '0.3em' }}
                    >
                        <Maximized
                            close={close}
                            minimize={onExpandLessClick}
                            dark={true}
                        />
                    </div>
                </div>
                <div className="add-store-card-main">
                    <CustomScrollbars
                        autoHide
                        autoHideTimeout={500}
                        autoHideDuration={200}
                    >
                        <div
                            style={{
                                padding: '0em 0.5em',
                            }}
                            className="app"
                        >
                            {storeNameEmptyError && (
                                <div className="error">
                                    Store name is required.
                                </div>
                            )}
                            {storeContactNumberEmptyError && (
                                <div className="error">
                                    Store contact number is required.
                                </div>
                            )}
                            {storeTypeEmptyError && (
                                <div className="error">
                                    Store type is required.
                                </div>
                            )}
                            {mainLocationEmptyError && (
                                <div className="error">
                                    Main location of store is required.
                                </div>
                            )}
                            {addressEmptyError && (
                                <div className="error">
                                    Store address is required.
                                </div>
                            )}
                            {pocEmptyError && (
                                <div className="error">
                                    Point of Contact (POC) is required.
                                </div>
                            )}
                            {storeTimingStartError && (
                                <div className="error">
                                    Starting time of store is required.
                                </div>
                            )}
                            {storeTimingEndError && (
                                <div className="error">
                                    Closing time of store is required.
                                </div>
                            )}
                            {appointmentTimingStartError && (
                                <div className="error">
                                    Start time when appointment acceptance
                                    allowed is required.
                                </div>
                            )}
                            {appointmentTimingEndError && (
                                <div className="error">
                                    End time when appointment acceptance allowed
                                    is required.
                                </div>
                            )}
                            {appointmentTimeSpanError && (
                                <div className="error">
                                    Appointment time span is required.
                                </div>
                            )}
                            {appointmentTimeDurationError && (
                                <div className="error">
                                    Appointment duration is required.
                                </div>
                            )}
                            <div className="type flex_middle">
                                <div>STORE INFO</div>
                            </div>
                            <div className="internal">
                                <div className="flex_evenly element">
                                    <div className="check">
                                        <CssTextField
                                            error={storeNameEmptyError}
                                            label="Store Name"
                                            placeholder="Store Name"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            value={storeName}
                                            name={'storeName'}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <CssTextField
                                            error={storeContactNumberEmptyError}
                                            label="Store Contact Number"
                                            placeholder="Store Contact Number"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            value={storeContactNumber}
                                            name={'storeContactNumber'}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex_evenly element">
                                    <div className="check">
                                        <CssTextField
                                            label="Point of Contact"
                                            placeholder="Point of Contact"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            value={poc}
                                            name={'poc'}
                                            onChange={onChange}
                                            required
                                            error={pocEmptyError}
                                        />
                                    </div>
                                    <div>
                                        <FormControl
                                            style={{
                                                width: '215px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={storeTypeEmptyError}
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Store Type
                                            </InputLabel>
                                            <Select
                                                error={storeTypeEmptyError}
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={storeType}
                                                name="storeType"
                                                label="Store Open Time"
                                                placeholder="Store Open Time"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={'clinic'}>
                                                    Clinic
                                                </MenuItem>
                                                <MenuItem value={'hospital'}>
                                                    Hospital
                                                </MenuItem>
                                                <MenuItem value={'dispensary'}>
                                                    Dispensary
                                                </MenuItem>
                                                <MenuItem value={'store'}>
                                                    Store
                                                </MenuItem>
                                                <MenuItem value={'dukaan'}>
                                                    Dukaan
                                                </MenuItem>
                                                <MenuItem value={'subsidiary'}>
                                                    Subsidiary
                                                </MenuItem>
                                                <MenuItem value={'factory'}>
                                                    Factory
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div
                                    className="flex_middle"
                                    style={{ alignItems: 'flex-start' }}
                                >
                                    <div className="check">
                                        <CssTextField
                                            label="Address"
                                            multiline
                                            maxRows={4}
                                            placeholder="Address"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: {
                                                    width: '190px',
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
                                            value={address}
                                            name={'address'}
                                            onChange={onChange}
                                            required
                                            error={
                                                address.length >
                                                    CHARACTER_LIMIT - 1 ||
                                                addressEmptyError
                                            }
                                            helperText={
                                                !(
                                                    address.length >
                                                    CHARACTER_LIMIT - 1
                                                )
                                                    ? `${address.length}/${CHARACTER_LIMIT}`
                                                    : 'Max length exceeded'
                                            }
                                        />
                                    </div>
                                    <div>
                                        <CssTextField
                                            error={mainLocationEmptyError}
                                            label="Main Location"
                                            placeholder="Main Location"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: textFieldStyle,
                                            }}
                                            value={mainLocation}
                                            name={'mainLocation'}
                                            onChange={onChange}
                                            required
                                            FormHelperTextProps={{
                                                style: {
                                                    margin: 0,
                                                    padding: '0 0 0 5px',
                                                    fontSize: 10,
                                                },
                                            }}
                                            helperText=" "
                                        />
                                    </div>
                                </div>
                                <div
                                    className="app"
                                    style={{ marginTop: '1em' }}
                                >
                                    <div
                                        className="type flex_middle"
                                        style={{
                                            marginBottom: '1.5em',
                                        }}
                                    >
                                        STORE TIMINGS
                                    </div>
                                </div>
                                <div className="flex_evenly element">
                                    <div className="">
                                        <FormControl
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={storeTimingStartError}
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Store Opening Time
                                            </InputLabel>
                                            <Select
                                                error={storeTimingStartError}
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={storeTimingStart}
                                                name="storeTimingStart"
                                                label="Store Opening Time"
                                                placeholder="Store Opening Time"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                {timeDurations.length > 0 &&
                                                    timeDurations.map(
                                                        (element, index) => (
                                                            <MenuItem
                                                                value={element}
                                                                key={index}
                                                            >
                                                                {element}
                                                            </MenuItem>
                                                        )
                                                    )}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div
                                        style={{
                                            margin: '0 1em',
                                            color: 'grey',
                                        }}
                                    >
                                        to
                                    </div>
                                    <div>
                                        <FormControl
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={storeTimingEndError}
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Store Closing Time
                                            </InputLabel>
                                            <Select
                                                error={storeTimingEndError}
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={storeTimingEnd}
                                                name="storeTimingEnd"
                                                label="Store Closing Time"
                                                placeholder="Store Closing Time"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                {timeDurations.length > 0 &&
                                                    timeDurations.map(
                                                        (element, index) => (
                                                            <MenuItem
                                                                value={element}
                                                                key={index}
                                                            >
                                                                {element}
                                                            </MenuItem>
                                                        )
                                                    )}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div
                                    className="app"
                                    style={{ marginTop: '1em' }}
                                >
                                    <div
                                        className="type flex_middle"
                                        style={{
                                            marginBottom: '1.5em',
                                        }}
                                    >
                                        WORKING DAYS
                                    </div>
                                </div>
                                <div className="flex_middle element">
                                    <div
                                        className={
                                            storeOperationDays[0].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[0].value,
                                                storeOperationDays[0].day
                                            )
                                        }
                                    >
                                        M
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[1].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[1].value,
                                                storeOperationDays[1].day
                                            )
                                        }
                                    >
                                        T
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[2].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[2].value,
                                                storeOperationDays[2].day
                                            )
                                        }
                                    >
                                        W
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[3].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[3].value,
                                                storeOperationDays[3].day
                                            )
                                        }
                                    >
                                        T
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[4].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[4].value,
                                                storeOperationDays[4].day
                                            )
                                        }
                                    >
                                        F
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[5].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[5].value,
                                                storeOperationDays[5].day
                                            )
                                        }
                                    >
                                        S
                                    </div>
                                    <div
                                        className={
                                            storeOperationDays[6].value
                                                ? 'day flex_middle'
                                                : 'day-offline flex_middle'
                                        }
                                        onClick={() =>
                                            onSelectWorkingDay(
                                                !storeOperationDays[6].value,
                                                storeOperationDays[6].day
                                            )
                                        }
                                    >
                                        S
                                    </div>
                                </div>
                                <div
                                    className="app"
                                    style={{ marginTop: '1em' }}
                                >
                                    <div
                                        className="type flex_middle"
                                        style={{
                                            marginBottom: '1.5em',
                                        }}
                                    >
                                        APPOINTMENT TIMINGS
                                    </div>
                                </div>
                                <div className="flex_evenly element">
                                    <div className="">
                                        <FormControl
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={
                                                    appointmentTimingStartError
                                                }
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Appointment Start Time
                                            </InputLabel>
                                            <Select
                                                error={
                                                    appointmentTimingStartError
                                                }
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={appointmentStartTimings}
                                                name="appointmentStartTimings"
                                                label="Appointment Start Time"
                                                placeholder="Appointment Start Time"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                {timeDurations.length > 0 &&
                                                    timeDurations.map(
                                                        (element, index) => (
                                                            <MenuItem
                                                                value={element}
                                                                key={index}
                                                            >
                                                                {element}
                                                            </MenuItem>
                                                        )
                                                    )}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div
                                        style={{
                                            margin: '0 1em',
                                            color: 'grey',
                                        }}
                                    >
                                        to
                                    </div>
                                    <div>
                                        <FormControl
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={
                                                    appointmentTimingEndError
                                                }
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Appointment End Time
                                            </InputLabel>
                                            <Select
                                                error={
                                                    appointmentTimingEndError
                                                }
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={appointmentEndTimings}
                                                name="appointmentEndTimings"
                                                label="Store Closing Time"
                                                placeholder="Store Closing Time"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                {timeDurations.length > 0 &&
                                                    timeDurations.map(
                                                        (element, index) => (
                                                            <MenuItem
                                                                value={element}
                                                                key={index}
                                                            >
                                                                {element}
                                                            </MenuItem>
                                                        )
                                                    )}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div
                                    className="app"
                                    style={{ marginTop: '1em' }}
                                >
                                    <div
                                        className="type flex_middle"
                                        style={{
                                            marginBottom: '1.5em',
                                        }}
                                    >
                                        APPOINTMENT TIME SPAN
                                    </div>
                                </div>
                                <div className="flex_evenly element">
                                    <div className="check">
                                        <CssTextField
                                            error={appointmentTimeSpanError}
                                            label="Appointment Time Span"
                                            placeholder="20"
                                            size="small"
                                            focusColor="#1686f0"
                                            InputLabelProps={{
                                                style: textFieldInputLabelStyle,
                                            }}
                                            inputProps={{
                                                style: {
                                                    width: '190px',
                                                    height: '20px',
                                                },
                                            }}
                                            value={appointmentTimeSpan}
                                            name={'appointmentTimeSpan'}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <FormControl
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <InputLabel
                                                required
                                                error={
                                                    appointmentTimeDurationError
                                                }
                                                id="demo-simple-select-helper-label"
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                                size="small"
                                            >
                                                Appointment Duration
                                            </InputLabel>
                                            <Select
                                                error={
                                                    appointmentTimeDurationError
                                                }
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={appointmentTimeDuration}
                                                name="appointmentTimeDuration"
                                                label="Appointment Duration"
                                                placeholder="Minutes"
                                                size="small"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={'seconds'}>
                                                    Seconds
                                                </MenuItem>
                                                <MenuItem value={'minutes'}>
                                                    Minutes
                                                </MenuItem>
                                                <MenuItem value={'hours'}>
                                                    Hours
                                                </MenuItem>
                                                <MenuItem value={'days'}>
                                                    Days
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomScrollbars>
                </div>
                <div className="add_record_divider" style={{ marginTop: '0' }}>
                    <Divider
                        style={{
                            padding: 0,
                            margin: 0,
                        }}
                    />
                </div>
                <div className="flex_evenly" style={{ marginTop: '1em' }}>
                    <div className="ce_buttons">
                        <Button
                            variant="outlined"
                            endIcon={<ClearIcon />}
                            size="small"
                            className={clearIconStyle.root}
                            onClick={clearAll}
                        >
                            Clear All
                        </Button>
                    </div>
                    <div className="ce_buttons">
                        <LoadingButton
                            size="small"
                            loading={addNewStoreLoading}
                            loadingPosition="end"
                            disabled={addNewStoreSuccess}
                            endIcon={
                                addNewStoreSuccess ? (
                                    <CheckOutlinedIcon
                                        style={{
                                            fontSize: 15,
                                            color: '#7ed957',
                                        }}
                                    />
                                ) : (
                                    <SaveIcon
                                        style={{
                                            fontSize: 15,
                                        }}
                                    />
                                )
                            }
                            className={saveIconStyle.root}
                            variant="outlined"
                            onClick={onSubmit}
                        >
                            <div
                                style={{
                                    margin: '0em 0.5em 0em 0em',
                                }}
                            >
                                {addNewStoreSuccess ? 'Saved' : 'Save'}
                            </div>
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </>
    )
}

AddStoreMax.propTypes = {
    store: PropTypes.object.isRequired,
    addNewStore: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    store: state.store,
})

const mapStateToActions = {
    addNewStore,
}

export default connect(mapStateToProps, mapStateToActions)(AddStoreMax)