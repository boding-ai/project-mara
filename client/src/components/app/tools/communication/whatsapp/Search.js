import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { TextField, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'

import {
    searchClients,
    stopLoadingSearchClients,
    getClientsListAll,
} from '../../../../../redux/actions/clients/clients'

import AddIconMenu from '../../options/clients/OptionsSmall'

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

const Search = ({
    setInput,
    input,
    mobileNumber,
    message,
    onChange,
    // Redux actions
    searchClients,
    getClientsListAll,
    stopLoadingSearchClients,
    clients: { clientsSearchLoading },
}) => {

     const [isSelected, setIsSelected] = useState(false)

     const changeSelected = (e) => {
         setIsSelected(true)
     }

     const changeDeselected = (e) => {
         setIsSelected(false)
     }

     const handleSearch = async (e) => {
         setInput(e.target.value)
         if (e.target.value.length === 0) {
             stopLoadingSearchClients()
             getClientsListAll()
         }
         const searchQuery = {}
         searchQuery.searchQuery = e.target.value.toLowerCase()
         searchClients(searchQuery)
     }
    return (
        <>
            <div className="search_contact_comm">
                <div className="column_everything">
                    <CssSearchField
                        size="small"
                        placeholder="Search Contact"
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
                                        {clientsSearchLoading ? (
                                            <CircularProgress
                                                variant="indeterminate"
                                                disableShrink
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.mode ===
                                                        'light'
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
                </div>
                <div className="add_new_client">
                    <AddIconMenu />
                </div>
            </div>
        </>
    )
}


Search.propTypes = {
    searchClients: PropTypes.func.isRequired,
    stopLoadingSearchClients: PropTypes.func.isRequired,
    getClientsListAll: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients,
})

export default connect(mapStateToProps, {
    searchClients,
    stopLoadingSearchClients,
    getClientsListAll,
})(Search)