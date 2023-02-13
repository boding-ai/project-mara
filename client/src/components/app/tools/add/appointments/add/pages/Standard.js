import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@mui/styles'
import { MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { connect } from 'react-redux'

import {
  getPetDetails
} from '../../../../../../../redux/actions/clients/clients'

import {
    changeValuesOfElementInArray
} from '../../../../../../../redux/actions/add-array/add'

import NoPets from '../../../../../pages/clients/list_cards/owner/NoPets'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: '#f7bf45',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#f7bf45',
            fontSize: '0.9em',
        },
    },
}))

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

const textFieldInputLabelStyle = {
    fontSize: '0.9em',
    alignSelf: 'center',
    justifySelf: 'center',
}

const textFieldStyle = {
    height: '20px',
    width: '280px',
}

const textFieldStyleSmall = {
    height: '20px',
    width: '180px',
}

const petDetails = new Map()

const Standard = ({
    // Data
    data,
    setIsEnabled,
    showPetDetails,
    setShowPetDetails,
    index,

    // Functions
    onChange,

    // Errors
    ownerNameEmptyError,
    ownerMobileEmptyError,

    // Redux Actions
    getPetDetails,
    changeValuesOfElementInArray,

    // Redux State
    clients: { petDetailsFromOwnerLoading },
}) => {

    const [petData, setPetData] = useState([])

    const {
        ownerName,
        ownerMobileNo,
        ownerEmailId,
        ownerId,
        petId,
        petName,
        petSpecies,
        petBreed,
        petGender,
        problem,
    } = data

    useEffect(() => {
        if (ownerId !== 0) {
            async function fetchData() {
                const res = await getPetDetails(ownerId)

                setPetData(res)
            }
            fetchData()
        }
    }, [ownerId])

    const onChangePetName = (value) => {
        changeValuesOfElementInArray(
            index,
            'petId',
            value.pet_id
        )
        changeValuesOfElementInArray(
            index,
            'petName',
            value.pet_name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        changeValuesOfElementInArray(
            index,
            'petSpecies',
            value.pet_species.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        changeValuesOfElementInArray(
            index,
            'petBreed',
            value.pet_breed.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        changeValuesOfElementInArray(
            index,
            'petGender',
            value.pet_gender.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        petDetails.set(
            'petId',
            value.pet_id
        )
        petDetails.set(
            'petName',
            value.pet_name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        petDetails.set(
            'petSpecies',
            value.pet_species.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        petDetails.set(
            'petBreed',
            value.pet_breed.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        petDetails.set(
            'petGender',
            value.pet_gender.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
            )
        )
        setShowPetDetails(true)
        setIsEnabled(true)
    }

    return (
        <>
            {ownerName && (
                <>
                    <div className="app">
                        <div className="type flex_middle">OWNER INFO</div>
                        <div className="element">
                            <CssTextField
                                error={ownerNameEmptyError}
                                label="Owner Name"
                                placeholder="Owner Name"
                                size="small"
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                inputProps={{
                                    style: textFieldStyle,
                                }}
                                name="ownerName"
                                value={ownerName}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="element">
                            <CssTextField
                                error={ownerMobileEmptyError}
                                label="Owner Mobile No."
                                placeholder="Owner Mobile No."
                                size="small"
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                inputProps={{
                                    style: textFieldStyle,
                                }}
                                name="ownerMobileNo"
                                value={ownerMobileNo}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="element">
                            <CssTextField
                                label="Owner Email Id"
                                placeholder="Owner Email Id"
                                size="small"
                                focusColor="#1686f0"
                                InputLabelProps={{
                                    style: textFieldInputLabelStyle,
                                }}
                                inputProps={{
                                    style: textFieldStyle,
                                }}
                                name="ownerEmailId"
                                value={ownerEmailId}
                                onChange={onChange}
                            />
                        </div>
                        {petDetailsFromOwnerLoading ? (
                            <div style={{ marginTop: '3em' }}>
                                <div className="dot-windmill"></div>
                            </div>
                        ) : (
                            <>
                                {petData.length === 0 ? (
                                    <div style={{ marginTop: '3em' }}>
                                        <NoPets />
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className="type flex_middle"
                                            style={{ marginTop: '1em' }}
                                        >
                                            PET INFO
                                        </div>
                                        <div className="element">
                                            <CssTextField
                                                select
                                                name="petName"
                                                value={petName}
                                                onChange={onChange}
                                                autoWidth
                                                label="Select Pet"
                                                placeholder="Select Pet"
                                                size="small"
                                                focusColor="#1686f0"
                                                inputProps={{
                                                    style: textFieldStyle,
                                                }}
                                                style={{
                                                    width: '200px',
                                                }}
                                                InputLabelProps={{
                                                    style: textFieldInputLabelStyle,
                                                }}
                                                SelectProps={{
                                                    MenuProps: {
                                                        disableScrollLock: true,
                                                    },
                                                }}
                                            >
                                                {petData.length > 0 &&
                                                    petData.map(
                                                        (value, index) => (
                                                            <MenuItem
                                                                value={
                                                                    value.pet_name
                                                                }
                                                                key={index}
                                                                onClick={() =>
                                                                    onChangePetName(
                                                                        value
                                                                    )
                                                                }
                                                            >
                                                                {value.pet_name.replace(
                                                                    /(^\w{1})|(\s+\w{1})/g,
                                                                    (letter) =>
                                                                        letter.toUpperCase()
                                                                )}
                                                            </MenuItem>
                                                        )
                                                    )}
                                            </CssTextField>
                                        </div>
                                        {showPetDetails && (
                                            <>
                                                <div className="element flex_middle">
                                                    <div className="check">
                                                        <CssTextField
                                                            disabled={true}
                                                            label="Name"
                                                            placeholder="Name"
                                                            size="small"
                                                            focusColor="#1686f0"
                                                            InputLabelProps={{
                                                                style: textFieldInputLabelStyle,
                                                            }}
                                                            inputProps={{
                                                                style: textFieldStyleSmall,
                                                            }}
                                                            value={petDetails.get(
                                                                'petName'
                                                            )}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <CssTextField
                                                            disabled={true}
                                                            label="Species"
                                                            placeholder="Species"
                                                            size="small"
                                                            focusColor="#1686f0"
                                                            InputLabelProps={{
                                                                style: textFieldInputLabelStyle,
                                                            }}
                                                            inputProps={{
                                                                style: textFieldStyleSmall,
                                                            }}
                                                            value={petDetails.get(
                                                                'petSpecies'
                                                            )}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="element flex_middle">
                                                    <div className="check">
                                                        <CssTextField
                                                            disabled={true}
                                                            label="Gender"
                                                            placeholder="Gender"
                                                            size="small"
                                                            focusColor="#1686f0"
                                                            InputLabelProps={{
                                                                style: textFieldInputLabelStyle,
                                                            }}
                                                            inputProps={{
                                                                style: textFieldStyleSmall,
                                                            }}
                                                            required
                                                            value={petDetails.get(
                                                                'petGender'
                                                            )}
                                                        />
                                                    </div>
                                                    <div>
                                                        <CssTextField
                                                            label="Breed"
                                                            disabled={true}
                                                            placeholder="Breed"
                                                            size="small"
                                                            focusColor="#1686f0"
                                                            InputLabelProps={{
                                                                style: textFieldInputLabelStyle,
                                                            }}
                                                            inputProps={{
                                                                style: textFieldStyleSmall,
                                                            }}
                                                            required
                                                            
                                                            value={petDetails.get(
                                                                'petBreed'
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    )
}

Standard.propTypes = {
    clients: PropTypes.object.isRequired,
    getPetDetails: PropTypes.func.isRequired,
    changeValuesOfElementInArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  clients: state.clients
}) 

const mapStateToActions = {
    getPetDetails,
    changeValuesOfElementInArray,
}

export default connect(mapStateToProps, mapStateToActions)(Standard)