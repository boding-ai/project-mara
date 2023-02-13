import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { browserName } from 'react-device-detect'

import { Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import Search from './Search'
import Close from '@mui/icons-material/Close'
import { connect } from 'react-redux'

import { sendWhatsappMessage } from '../../../../../redux/actions/communication/communication'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: '#7ed957',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#7ed957',
            fontSize: '0.9em',
        },
        borderRadius: '10px',
    },
}))

const textFieldInputLabelStyle = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const textFieldStyle = {
    width: '230px',
}


const CssTextFieldMessage = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: '#7ed957',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#7ed957',
            fontSize: '0.9em',
        },
    },
}))

const textFieldInputLabelStyleMessage = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const SendWhatsapp = ({
    close,
    // Redux Actions
    sendWhatsappMessage,
}) => {
    const CHARACTER_LIMIT = 100

    const [input, setInput] = useState('')
    const [manualInput, setManualInput] = useState(false)

    const [numberEmptyError, setNumberEmptyError] = useState(false)
    const [messageEmptyError, setMessageEmptyError] = useState(false)

    const [formData, setFormData] = useState({
        mobileNumber: '+91 7972146825',
        message: 'Hello',
    })

    const { mobileNumber, message } = formData

    const onChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (mobileNumber.length < 1) {
            setNumberEmptyError(true)
            setTimeout(() => setNumberEmptyError(false), 3000)
        } else if (message.length < 1) {
            setMessageEmptyError(true)
            setTimeout(() => setMessageEmptyError(false), 3000)
        } else {
            sendWhatsappMessage(browserName, mobileNumber, message)
        }
    }

    return (
        <div className="communication">
            <div className="comm-card app">
                <div className="whatsapp-title triple_grid_comm">
                    <div></div>
                    <div className="flex_middle">
                        <div style={{ marginRight: '0.5em' }}>
                            <WhatsAppIcon />
                        </div>
                        <div>Send Message</div>
                    </div>
                    <div className="flex_right cursor_pointer" onClick={close}>
                        <Close
                            className="cancel"
                            style={{ fontSize: 15, marginRight: '0.5em' }}
                        />
                    </div>
                </div>
                {numberEmptyError && (
                    <div className="errors">Mobile number cannot be empty!</div>
                )}
                {messageEmptyError && (
                    <div className="errors">Message cannot be empty!</div>
                )}
                {manualInput ? (
                    <div style={{ marginTop: '0.56em' }}>
                        <CssTextField
                            error={numberEmptyError}
                            label="Mobile Number"
                            placeholder="Mobile Number"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={onChange}
                            size="small"
                            style={{
                                margin: '1em 0em',
                            }}
                            inputProps={{
                                style: textFieldStyle,
                            }}
                            InputLabelProps={{
                                style: textFieldInputLabelStyle,
                            }}
                            required
                        />
                    </div>
                ) : (
                    <div className="search_contact app">
                        <Search
                            input={input}
                            setInput={setInput}
                            mobileNumber={mobileNumber}
                            message={message}
                            onChange={onChange}
                        />
                    </div>
                )}
                {manualInput ? (
                    <div
                        className="input_suggestion flex_middle"
                        onClick={() => setManualInput(false)}
                    >
                        Search number
                    </div>
                ) : (
                    <div
                        className="input_suggestion flex_middle"
                        onClick={() => setManualInput(true)}
                    >
                        Input manually
                    </div>
                )}
                <div style={{ margin: '2em 0 1em 0' }}>
                    <CssTextFieldMessage
                        multiline
                        maxRows={4}
                        label="Message"
                        placeholder="Hi! Payment reminder...."
                        size="small"
                        InputLabelProps={{
                            style: textFieldInputLabelStyleMessage,
                        }}
                        inputProps={{
                            style: {
                                width: '230px',
                                height: '90px',
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
                        name="message"
                        value={message}
                        onChange={onChange}
                        required
                        error={
                            message.length > CHARACTER_LIMIT - 1 ||
                            messageEmptyError
                        }
                        helperText={
                            !(message.length > CHARACTER_LIMIT - 1)
                                ? `${message.length}/${CHARACTER_LIMIT}`
                                : 'Max length exceeded'
                        }
                    />
                </div>
                <div className="message"></div>
                <Button
                    onClick={onSubmit}
                    variant="outlined"
                    color="success"
                    size="small"
                >
                    Send
                </Button>
            </div>
        </div>
    )
}

SendWhatsapp.propTypes = {
    sendWhatsappMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    
})

const mapStateToActions = {
    sendWhatsappMessage,
}

export default connect(mapStateToProps, mapStateToActions)(SendWhatsapp)