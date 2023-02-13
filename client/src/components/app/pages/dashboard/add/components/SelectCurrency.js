import React from 'react'
import PropTypes from 'prop-types'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

const SelectCUrrency = ({ modeOfPayment, handleAddFormChange }) => {
    return (
        <>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: 14,
                    color: 'gray'
                }}
            >Mode of Payment</div>
            <RadioGroup
                aria-label="mode of payment"
                name="modeOfPayment"
                value={modeOfPayment}
                onChange={handleAddFormChange}
                row
            >
                <FormControlLabel
                    value="cash"
                    control={<Radio size="small" />}
                    label="Cash"
                />
                <FormControlLabel
                    value="card"
                    control={<Radio size="small" />}
                    label="Card"
                />
                <FormControlLabel
                    value="upi"
                    control={<Radio size="small" />}
                    label="UPI"
                />
                <FormControlLabel
                    value="neft"
                    control={<Radio size="small" />}
                    label="NEFT"
                />
                <FormControlLabel
                    value="other"
                    control={<Radio size="small" />}
                    label="Other"
                />
            </RadioGroup>
        </>
    )
}

SelectCUrrency.propTypes = {

}

export default SelectCUrrency
