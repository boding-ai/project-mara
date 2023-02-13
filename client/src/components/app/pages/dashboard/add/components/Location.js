import React from 'react'
import PropTypes from 'prop-types'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { TextField, FormControl, Button, MenuItem,InputAdornment } from '@mui/material'

import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

import {
    locationOptions
} from '../../../records/flow/finances/selectionData'

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

const addUnitButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid gray',
        backgroundColor: 'none',
        height: '15px',
        padding: '0.85em 0.5em',
        margin: '0.5em 1em 0.8em 1em',
        fontSize: '0.7em',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#27db33',
            border: '1px solid #27db33',
        },
    },
})

const Location = ({ location, handleAddFormChange }) => {
        const addUnitStyle = addUnitButtonStyle()

    return (
        <>
            <FormControl>
                <CssTextField
                    select
                    placeholder="Select"
                    variant="standard"
                    name="location"
                    value={location}
                    onChange={handleAddFormChange}
                    size="small"
                    sx={{
                        width: 180,
                        padding: '0em 0em 0em 0.2em',
                    }}
                    InputProps={{
                        style: {
                            border: 'none',
                            color: 'black',
                            fontSize: '0.95em',
                            padding: '0.35em 0em 0em 0em',
                        },
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{
                        style: textFieldInputLabelStyle,
                    }}
                    inputProps={{
                        style: textFieldStyle,
                    }}
                >
                    <div className="center_everything">
                        <Button
                            variant="outlined"
                            startIcon={
                                <AddCircleIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            }
                            size="small"
                            className={addUnitStyle.root}
                        >
                            Add Location
                        </Button>
                    </div>
                    {locationOptions.map((element, index) => (
                        <MenuItem
                            key={index}
                            value={element.value}
                            style={{
                                fontSize: '0.9em',
                                height: '25px',
                            }}
                        >
                            {element.title}
                        </MenuItem>
                    ))}
                </CssTextField>
            </FormControl>
        </>
    )
}

Location.propTypes = {

}

export default Location
