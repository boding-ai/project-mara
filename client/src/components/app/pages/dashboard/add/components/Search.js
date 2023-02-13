import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    searchProfiles,
    stopLoadingSearchProfiles,
    getPetsIfOwnerSelected,
} from '../../../../redux/actions/add'

import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { CSSTransition } from 'react-transition-group'


import {
    Button,
    Card,
    FormControl,
    InputAdornment,
    MenuItem,
    TextField,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CircularProgress from '@mui/material/CircularProgress'
import SearchIcon from '@mui/icons-material/Search'

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
    width: '150px',
}


const addOwnerIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#1ed624',
            border: '1px solid #1ed624',
        },
    },
})

const map = new Map()

const Search = ({
    searchProfiles,
    stopLoadingSearchProfiles,
    getPetsIfOwnerSelected,
    add: {
        profilesSearchLoading,
        searchReturnedValueProfiles,
        getPetsLoading,
        getPetsList,
    },
    searchPartyName,
    searchPartyID,
    searchPartyType,
    searchPartyAddress,
    searchOwnerPets,
    petSelected,
    addFormData,
    setAddFormData,
    handleAddFormChange,
}) => {
    const CHARACTER_LIMIT = 100

    const addOwnerStyle = addOwnerIconButtonStyle()

    const [input, setInput] = useState(false)

    const [isSelected, setIsSelected] = useState(false)
    const [showSearchValues, setShowSearchValues] = useState(false)
    const [showPet, setShowPet] = useState(false)

    const changeSelected = (e) => {
        setIsSelected(true)
    }

    const changeDeselected = (e) => {
        setIsSelected(false)
    }

    const handleSearch = async (e) => {
        setShowPet(false)
        if (e.target.value.length === 0) {
            stopLoadingSearchProfiles()
        }
        setInput(e.target.value)
        const searchQuery = {}
        searchQuery.searchQuery = e.target.value.toLowerCase()
        console.log(input)
        searchProfiles(searchQuery)
        setShowSearchValues(false)
    }

    const addName = async (value) => {
        map.set('selected', value)
        if (value.third === 'owner') {
            setAddFormData({
                ...addFormData,
                searchPartyName: map.get('selected').first,
                searchPartyID: map.get('selected').second,
                searchPartyType: map.get('selected').third,
                searchPartyAddress: map.get('selected').fourth,
            })
            let ownerID = map.get('selected').second
            console.log(ownerID)
            getPetsIfOwnerSelected(ownerID)
            setShowPet(true)
        }
        setAddFormData({
            ...addFormData,
            searchPartyName: map.get('selected').first,
            searchPartyID: map.get('selected').second,
            searchPartyType: map.get('selected').third,
            searchPartyAddress: map.get('selected').fourth,
            searchOwnerPets: map.get('selected'.fifth),
        })
        setInput('')
        setShowSearchValues(true)
    }

    return (
        <div className="add_table_search">
            <div className="main_search_func">
                <CssSearchField
                    size="small"
                    placeholder="Search Owner"
                    fullWidth
                    className=""
                    onChange={handleSearch}
                    onMouseEnter={changeSelected}
                    onMouseLeave={changeDeselected}
                    value={input}
                    name="input"
                    InputProps={{
                        endAdornment: (
                            <div className="flex_end_everything">
                                <InputAdornment position="end">
                                    {profilesSearchLoading ? (
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
                <div>
                    {input.length === 0 ? (
                        ''
                    ) : (
                        <Card
                            fullWidth
                            className="search_results_card column_everything"
                        >
                            <>
                                {searchReturnedValueProfiles.length === 0 ? (
                                    <div className="search_no_results">
                                        No Results
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className="center_everything"
                                            style={{ margin: '0.5em' }}
                                        >
                                            <Button
                                                variant="outlined"
                                                endIcon={
                                                    <AddCircleOutlineIcon />
                                                }
                                                size="small"
                                                className={addOwnerStyle.root}
                                                // onClick={openAddNewOwner}
                                            >
                                                Add Profile
                                            </Button>
                                        </div>
                                        {searchReturnedValueProfiles
                                            .slice(0, 5)
                                            .map((value, index) => (
                                                <div
                                                    key={index}
                                                    value={value.first}
                                                    onClick={() =>
                                                        addName(value)
                                                    }
                                                    className="search_results"
                                                    style={{
                                                        marginBottom: '5px',
                                                    }}
                                                >
                                                    {value.first
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        value.first.slice(1)}
                                                </div>
                                            ))}
                                    </>
                                )}
                            </>
                        </Card>
                    )}
                </div>
            </div>
            <CSSTransition
                in={showSearchValues}
                timeout={0}
                classNames="show_search_values"
                unmountOnExit
            >
                <>
                    <div
                        className="show_values_add"
                        style={{ margin: '1em 0em' }}
                    >
                        <div style={{ margin: '0em 1em 0em 0em' }}>
                            <CssTextField
                                label="Name"
                                placeholder="Name"
                                fullWidth
                                size="small"
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                // inputProps={{
                                //     style: textFieldStyle,
                                // }}
                                style={{ marginLeft: '0.5em' }}
                                name="searchPartyName"
                                value={searchPartyName}
                                disabled={true}
                            />
                        </div>
                        <div>
                            <CssTextField
                                label="Type"
                                placeholder="Type"
                                fullWidth
                                size="small"
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                name="searchPartyType"
                                value={searchPartyType}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div
                        className="show_values_add"
                        style={{ margin: '0.5em 0em 0em 0.5em' }}
                    >
                        <div>
                            <CssTextField
                                label="Address"
                                placeholder="Address"
                                multiline
                                maxRows={4}
                                size="medium"
                                fullWidth
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                inputProps={{
                                    style: {
                                       
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
                                error={
                                    searchPartyAddress.length >
                                    CHARACTER_LIMIT - 1
                                }
                                helperText={
                                    !(
                                        searchPartyAddress.length >
                                        CHARACTER_LIMIT - 1
                                    )
                                        ? `${searchPartyAddress.length}/${CHARACTER_LIMIT}`
                                        : 'Max length exceeded'
                                }
                                name="searchPartyAddress"
                                value={searchPartyAddress}
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="center_everything">
                            {showPet && getPetsList.length > 0 && (
                                <FormControl>
                                    <CssTextField
                                        select
                                        fullWidth
                                        placeholder="Pet"
                                        variant="standard"
                                        name="petSelected"
                                        value={petSelected}
                                        onChange={handleAddFormChange}
                                        size="small"
                                        sx={{
                                            padding: '0em 0em 0em 0.2em',
                                        }}
                                        InputProps={{
                                            style: {
                                                border: 'none',
                                                color: 'black',
                                                fontSize: '0.95em',
                                                padding: '0.35em 0em 0em 0em',
                                            },
                                            // disableUnderline: true,
                                        }}
                                        InputLabelProps={{
                                            style: textFieldInputLabelStyle,
                                        }}
                                       
                                    >
                                        {getPetsList.map((element, index) => (
                                            <MenuItem
                                                key={index}
                                                value={element.pet_name}
                                                style={{
                                                    fontSize: '0.9em',
                                                    height: '25px',
                                                }}
                                            >
                                                {element.pet_name}
                                            </MenuItem>
                                        ))}
                                    </CssTextField>
                                </FormControl>
                            )}
                        </div>
                    </div>
                </>
            </CSSTransition>
        </div>
    )
}

Search.propTypes = {
    stopLoadingSearchProfiles: PropTypes.func.isRequired,
    searchProfiles: PropTypes.func.isRequired,
    getPetsIfOwnerSelected: PropTypes.func.isRequired,
    add: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    add: state.add,
})


const mapActionsToProps = {
    stopLoadingSearchProfiles,
    searchProfiles,
    getPetsIfOwnerSelected,
}

export default connect(mapStateToProps, mapActionsToProps)(Search)
