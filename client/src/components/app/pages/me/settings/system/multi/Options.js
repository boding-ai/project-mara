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
    height: '30px',
    borderRadius: '5px',
    color: 'black',
}))

const useStyles = makeStyles((theme) => ({
    select: {
        '&.MuiSvgIcon-root': {
            display: 'none',
        },
    },
}))

const Options = ({ value, onChange, options }) => {
    const classes = useStyles()

    return (
        <div>
            <FormControl>
                <CssTextField
                    select
                    disableScrollLock={true}
                    placeholder="Duration"
                    variant="standard"
                    name="value"
                    value={value}
                    onChange={onChange}
                    size="small"
                    inputProps={{
                        classes: {
                            icon: classes.select,
                        },
                    }}
                    sx={{
                        width: 80,
                        textAlign: 'center',
                        padding: '0.3em 0 0 1em',
                    }}
                    InputProps={{
                        style: {
                            border: 'none',
                            fontSize: '0.9em',
                            color: 'grey',
                        },
                        disableUnderline: true,
                    }}
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                >
                    {options.length > 0 &&
                        options.map((element, index) => (
                            <MenuItem
                                style={{
                                    fontSize: '0.9em',
                                    height: '30px',
                                }}
                                key={index}
                                value={element}
                            >
                                {element
                                    .split(' ')
                                    .map(
                                        (word) =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1)
                                    )
                                    .join(' ')}
                            </MenuItem>
                        ))}
                </CssTextField>
            </FormControl>
        </div>
    )
}

Options.propTypes = {}

const mapStateToProps = (state) => ({})

const mapStateToActions = {}

export default connect(
    mapStateToProps,
    mapStateToActions
)(Options)
