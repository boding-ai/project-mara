import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import validator from 'email-validator'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from 'semantic-ui-react'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import LoadingButton from '@mui/lab/LoadingButton'

import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Button, Card, TextField } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear'
import SaveIcon from '@mui/icons-material/Save'
import CheckIcon from '@mui/icons-material/Check'

import {
    addNewOwner,
    addNewOwnerWindowClosed,
} from '../../../../../../../../redux/actions/profiles/profiles'

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

const textFieldInputLabelStyle = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const textFieldStyle = {
    height: '20px',
    width: '280px',
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

const Max = ({
    onExpandLess,
    onWindowClose,
    formData,
    onClear,
    onChange,

    // Redux Actions
    addNewOwner,
    
    // Reset State
    profiles: { addOwnerLoading, addOwnerSuccessful },
}) => {
    const CHARACTER_LIMIT = 100

    const saveIconStyle = saveRecordIconButtonStyle()
    const clearIconStyle = clearRecordIconButtonStyle()

    const [nameEmptyError, setNameEmptyError] = useState(false)
    const [mobileNoEmptyError, setMobileNoEmptyError] = useState(false)
    const [emailEmptyError, setEmailEmptyError] = useState(false)
    const [allEmptyError, setAllEmptyError] = useState(false)
    const [emailInvalidError, setEmailInvalidError] = useState(false)

    const { ownerName, ownerMobileNo, ownerAddress, ownerEmail } = formData

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            ownerEmail.length === 0 &&
            ownerMobileNo.length === 0 &&
            ownerName.length === 0
        ) {
            setMobileNoEmptyError(false)
            setNameEmptyError(false)
            setEmailEmptyError(false)
            setEmailInvalidError(false)

            setAllEmptyError(true)
            setTimeout(() => setAllEmptyError(false), 5000)
        } else if (ownerMobileNo.length === 0) {
            setAllEmptyError(false)
            setNameEmptyError(false)
            setEmailEmptyError(false)
            setEmailInvalidError(false)

            setMobileNoEmptyError(true)
            setTimeout(() => setMobileNoEmptyError(false), 5000)
        } else if (ownerEmail.length === 0) {
            setAllEmptyError(false)
            setMobileNoEmptyError(false)
            setNameEmptyError(false)
            setEmailInvalidError(false)

            setEmailEmptyError(true)
            setTimeout(() => setEmailEmptyError(false), 5000)
        } else if (!validator.validate(ownerEmail)) {
            setAllEmptyError(false)
            setMobileNoEmptyError(false)
            setNameEmptyError(false)
            setEmailEmptyError(false)

            setEmailInvalidError(true)
            setTimeout(() => setEmailInvalidError(false), 5000)
        } else if (ownerName.length === 0) {
            setAllEmptyError(false)
            setMobileNoEmptyError(false)
            setEmailEmptyError(false)
            setEmailInvalidError(false)

            setNameEmptyError(true)
            setTimeout(() => setNameEmptyError(false), 5000)
        } else {
            addNewOwner(
                ownerName.toLowerCase(),
                ownerMobileNo.toLowerCase(),
                ownerAddress.toLowerCase(),
                ownerEmail.toLowerCase()
            )
            addNewOwnerWindowClosed()
        }
    }

    return (
        <div className="clients_add_profile_max">
            <Card sx={{ width: 700, borderRadius: '10px' }}>
                <div className="title">
                    <div></div>
                    <div className="flex_middle">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ fontSize: 25, marginRight: '10px' }}
                        />
                        <div>Owner Profile</div>
                    </div>
                    <div>
                        <Maximized
                            close={onWindowClose}
                            minimize={onExpandLess}
                            dark={true}
                        />
                    </div>
                </div>
                <div style={{ margin: '0em 7em 1em 7em' }}>
                    <Divider style={{ margin: 0, padding: 0 }} />
                </div>
                <div className="app">
                    {allEmptyError && (
                        <div
                            style={{
                                backgroundColor: 'red',
                                color: 'white',
                                width: '50%',
                                fontSize: '0.85em',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}
                        >
                            Name, email and mobile fields cannot be empty!
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
                            Name field cannot be empty!
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
                            Mobile number field cannot be empty!
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
                            Email field cannot be empty!
                        </div>
                    )}
                    {emailInvalidError && (
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
                            Invalid Email
                        </div>
                    )}
                </div>
                <div className="app">
                    <div className="row">
                        <div>
                            <CssTextField
                                error={nameEmptyError}
                                label="Name"
                                placeholder="Name"
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
                                name="ownerName"
                                value={ownerName}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div>
                            <CssTextField
                                error={mobileNoEmptyError}
                                label="Mobile Number"
                                placeholder="Mobile Number"
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
                                name="ownerMobileNo"
                                value={ownerMobileNo}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <CssTextField
                                error={emailEmptyError}
                                label="Email"
                                placeholder="Email"
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
                                name="ownerEmail"
                                value={ownerEmail}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div>
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
                                        width: '280px',
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
                                name="ownerAddress"
                                value={ownerAddress}
                                onChange={onChange}
                                required
                                error={
                                    ownerAddress.length > CHARACTER_LIMIT - 1
                                }
                                helperText={
                                    !(ownerAddress.length > CHARACTER_LIMIT - 1)
                                        ? `${ownerAddress.length}/${CHARACTER_LIMIT}`
                                        : 'Max length exceeded'
                                }
                            />
                        </div>
                    </div>
                    <div
                        className="flex_middle"
                        style={{ margin: '0em 0em 2em 0em' }}
                    >
                        <div
                            className="flex_middle"
                            style={{ marginRight: '2em' }}
                        >
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
                            {addOwnerSuccessful ? (
                                <LoadingButton
                                    disabled={addOwnerSuccessful}
                                    variant="outlined"
                                    endIcon={
                                        <CheckIcon
                                            style={{ color: '#25d931' }}
                                        />
                                    }
                                    size="small"
                                    className={saveIconStyle.root}
                                    style={{
                                        marginLeft: '1em',
                                    }}
                                >
                                    Saved
                                </LoadingButton>
                            ) : (
                                <LoadingButton
                                    loading={addOwnerLoading}
                                    variant="outlined"
                                    endIcon={<SaveIcon />}
                                    size="small"
                                    className={saveIconStyle.root}
                                    onClick={onSubmit}
                                    style={{
                                        marginLeft: '1em',
                                    }}
                                >
                                    Save
                                </LoadingButton>
                            )}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Max.propTypes = {
    profiles: PropTypes.object.isRequired,
    addNewOwner: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    profiles: state.profiles,
})

const mapStateToActions = {
    addNewOwner
}

export default connect(mapStateToProps, mapStateToActions)(Max)
