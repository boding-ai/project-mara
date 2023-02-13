import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { InputAdornment, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'

import {
    searchClientsForRecord,
} from '../../../../redux/actions/clients/clients'

import {
    changeValuesOfElementInArray
} from '../../../../redux/actions/add-array/add'

const CssSearchField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
        // borderColor: 'none',
        border: '1px solid gray',
        boxShadow: '0px 1px 3px 0px rgba(15, 15, 15, 0.75)',
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

const AddRecordClientPetSearch = ({
    // Data
    isFromAppointment,
    index,

    // Redux Actions
    searchClientsForRecord,
    changeValuesOfElementInArray,

    // Redux States
    clients: { clientsSearchForRecordLoading, clientsSearchForRecordValues },
}) => {
    const [input, setInput] = useState('')

    const [isSelected, setIsSelected] = useState(false)

    const changeSelected = (e) => {
        setIsSelected(true)
    }

    const changeDeselected = (e) => {
        setIsSelected(false)
    }

    const handleSearch = async (e) => {
        setInput(e.target.value)
        let searchQuery = e.target.value.toLowerCase()
        searchClientsForRecord(searchQuery)
    }

    const selectedValues = (value) => {
        if (isFromAppointment) {
            changeValuesOfElementInArray(
                index,
                'ownerName',
                value.first.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                    letter.toUpperCase()
                )
            )
            changeValuesOfElementInArray(
                index,
                'ownerMobileNo',
                value.third
            )
            changeValuesOfElementInArray(index, 'ownerEmailId', value.second)
            changeValuesOfElementInArray(index, 'ownerId', value.fourth)
        }
        setInput('')
    }

    return (
        <div>
            <CssSearchField
                size="small"
                placeholder="Search Owner"
                fullWidth
                className="search_bar"
                onChange={handleSearch}
                onMouseEnter={changeSelected}
                onMouseLeave={changeDeselected}
                value={input}
                name="input"
                InputProps={{
                    endAdornment: (
                        <div className="flex_end_everything">
                            <InputAdornment position="end">
                                {clientsSearchForRecordLoading ? (
                                    <CircularProgress
                                        variant="indeterminate"
                                        disableShrink
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.mode === 'light'
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
                                        onClick={() => setInput('')}
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
                        style={{
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        }}
                    >
                        <>
                            {clientsSearchForRecordValues.length === 0 ? (
                                <div className="search_no_results">
                                    No Results
                                </div>
                            ) : (
                                <>
                                    {clientsSearchForRecordValues
                                        .slice(0, 5)
                                        .map((value, index) => (
                                            <div
                                                key={index}
                                                value={value}
                                                onClick={
                                                    () =>
                                                    selectedValues(value)
                                                }
                                                className="search_results app"
                                                style={{
                                                    alignItems: 'flex-start',
                                                }}
                                            >
                                                <div>
                                                    {value.first.replace(
                                                        /(^\w{1})|(\s+\w{1})/g,
                                                        (letter) =>
                                                            letter.toUpperCase()
                                                    )}
                                                </div>
                                                <div
                                                    style={{
                                                        color: 'gray',
                                                        fontSize: '0.9em',
                                                    }}
                                                >
                                                    {value.third} |{' '}
                                                    {value.second}
                                                </div>
                                            </div>
                                        ))}
                                </>
                            )}
                        </>
                    </div>
                )}
            </div>
        </div>
    )
}

AddRecordClientPetSearch.propTypes = {
    clients: PropTypes.object.isRequired,
    searchClientsForRecord: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients,
})

const mapStateToActions = {
    searchClientsForRecord,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(AddRecordClientPetSearch)
