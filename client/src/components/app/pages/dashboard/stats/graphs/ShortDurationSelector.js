import React from 'react'

import { TextField, styled, MenuItem, FormControl } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { connect } from 'react-redux'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'none',
            fontSize: '0.9em',
        },
    },
    border: '1px solid gray',
    height: '18px',
    borderRadius: '10px',
    color: 'black',
}))

const useStyles = makeStyles((theme) => ({
    select: {
        '&.MuiSvgIcon-root': {
            display: 'none',
        },
    },
}))

const ShortDurationSelector = ({
    duration,
    onChangeDuration,
}) => {
    const classes = useStyles()

    return (
        <div>
            <FormControl>
                <CssTextField
                    select
                    placeholder="Duration"
                    variant="standard"
                    name="duration"
                    value={duration}
                    onChange={onChangeDuration}
                    size="small"
                    inputProps={{
                        classes: {
                            icon: classes.select,
                        },
                    }}
                    sx={{
                        width: 80,
                        textAlign: 'right',
                    }}
                    InputProps={{
                        style: {
                            border: 'none',
                            fontSize: '0.7em',
                            padding: '0 0 0em 0',
                            color: 'grey',
                        },
                        disableUnderline: true,
                    }}
                    SelectProps={{
                        MenuProps: { disableScrollLock: true },
                    }}
                >
                    <MenuItem
                        style={{
                            fontSize: '0.9em',
                            height: '20px',
                        }}
                        value={'week'}
                    >
                        7 Days
                    </MenuItem>
                    <MenuItem
                        value={'month'}
                        style={{
                            fontSize: '0.9em',
                            height: '20px',
                        }}
                    >
                        Month
                    </MenuItem>
                    <MenuItem
                        value={'year'}
                        style={{
                            fontSize: '0.9em',
                            height: '20px',
                        }}
                    >
                        Year
                    </MenuItem>
                </CssTextField>
            </FormControl>
        </div>
    )
}

ShortDurationSelector.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {}

export default connect(
    mapStateToProps,
    mapStateToActions
)(ShortDurationSelector)
