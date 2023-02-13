import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField
} from '@mui/material'

import { styled } from '@mui/material/styles'

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
    width: '180px',
}

const InvoiceNumber = ({ invoiceNumber, handleAddFormChange }) => {
    return (
        <>
            <div>
                <CssTextField
                    label="Invoice Number"
                    placeholder="Invoice Number"
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
                    name="invoiceNumber"
                    value={invoiceNumber}
                    onChange={(e) => handleAddFormChange(e)}
                />
            </div>
        </>
    )
}

InvoiceNumber.propTypes = {

}

export default InvoiceNumber
