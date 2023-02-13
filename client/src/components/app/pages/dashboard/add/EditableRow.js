import React, { useState } from 'react'
import { Popup } from 'semantic-ui-react'
import {
    Button,
    IconButton,
    TextField,
    MenuItem,
    FormControl,
    Select,
    InputBase,
} from '@mui/material'
import { makeStyles, theme } from '@mui/styles'
import { styled } from '@mui/material/styles'

import {
    unitsOptions,
    taxPercentOptions,
    discountOptions,
    typeOptions,
} from '../../records/flow/finances/selectionData'

import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

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
}))

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

const savePrescriptionIconButtonStyle = makeStyles({
    root: {
        backgroundColor: 'none',
        width: '0px',
        height: 0,
        paddingRight: '0.4em',
        '&:hover': {
            backgroundColor: 'transparent',
            width: '0px',
            height: 0,
            color: '#2488f2',
        },
    },
})

const closePrescriptionIconButtonStyle = makeStyles({
    root: {
        backgroundColor: 'none',
        width: '0px',
        height: 0,
        '&:hover': {
            backgroundColor: 'transparent',
            width: '0px',
            height: 0,
            color: '#eb3137',
        },
    },
})

const submitArray = []

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    handleEditFormSubmit,
}) => {
    const [discountLive, setDiscountLive] = useState(0)

    const saveIconStyle = savePrescriptionIconButtonStyle()
    const closeIconStyle = closePrescriptionIconButtonStyle()
    const addUnitStyle = addUnitButtonStyle()

    // const changeDiscountValue = (e) => {
    //     setDiscountLive(
    //         (quantity - freeQuantity) * pricePerUnit -
    //             (quantity - freeQuantity) *
    //                 pricePerUnit *
    //                 (percentDiscount / 100)
    //     )

    //     handleEditFormChange(e)
    // }

    const {
        item,
        itemCode,
        hsnCode,
        type,
        quantity,
        freeQuantity,
        unit,
        pricePerUnit,
        percentDiscount,
        amountDiscount,
        percentTax,
        taxAmount,
        totalAmount,
    } = editFormData

    const handlePercentDiscountChange = async (e) => {
        await handleEditFormChange(e)
    }

    const preSubmit = (e) => {
        let first = (
            (quantity - freeQuantity) *
            pricePerUnit *
            (percentDiscount / 100)
        ).toFixed(2)

        let second = (
            ((quantity - freeQuantity) * pricePerUnit -
                (quantity - freeQuantity) *
                    pricePerUnit *
                    (percentDiscount / 100)) *
            (percentTax / 100)
        ).toFixed(2)

        let third = (
            (quantity - freeQuantity) *
            pricePerUnit *
            (1 - percentDiscount / 100) *
            (1 + percentTax / 100)
        ).toFixed(2)

        submitArray.push(first)
        submitArray.push(second)
        submitArray.push(third)
        handleEditFormSubmit(e, submitArray)
        submitArray.length = 0
        first = 0
        second = 0
        third = 0
    }

    return (
        <tr
            className="addGrid"
            style={{
                // maxWidth: '600px',
                marginTop: '1em',
                marginBottom: '1em',
                borderLeft: 'none',
            }}
        >
            <td
                style={{
                    // width: '35px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                    // borderRight: '1px solid #f5703b',
                    borderLeft: '1px solid #f5703b',
                    borderTopLeftRadius: '3px',
                    borderBottomLeftRadius: '3px',
                }}
            >
                <input
                    type="text"
                    style={{
                        width: '100%',
                    }}
                />
            </td>
            <td
                style={{
                    // width: '328px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="Item"
                    name="item"
                    value={item}
                    onChange={handleEditFormChange}
                    autoFocus
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    // width: '51px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="Item Code"
                    name="itemCode"
                    value={itemCode}
                    onChange={handleEditFormChange}
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    // width: '70px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="HSN Code"
                    name="hsnCode"
                    value={hsnCode}
                    onChange={handleEditFormChange}
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <FormControl>
                    <CssTextField
                        select
                        defaultValue="Services"
                        placeholder="Select"
                        variant="standard"
                        name="type"
                        value={type}
                        onChange={handleEditFormChange}
                        size="small"
                        sx={{
                            width: 70,
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
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <AddCircleOutlineIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            }
                            size="small"
                            className={addUnitStyle.root}
                        >
                            Add Type
                        </Button>
                        {typeOptions.map((element, index) => (
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
            </td>
            <td
                style={{
                    // width: '47px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="QTY"
                    name="quantity"
                    value={quantity}
                    onChange={handleEditFormChange}
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    // width: '51px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="Free QTY"
                    name="freeQuantity"
                    value={freeQuantity}
                    onChange={handleEditFormChange}
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <FormControl>
                    <CssTextField
                        select
                        defaultValue="units"
                        placeholder="Select"
                        variant="standard"
                        name="unit"
                        value={unit}
                        onChange={handleEditFormChange}
                        size="small"
                        sx={{
                            width: 70,
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
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <AddCircleOutlineIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            }
                            size="small"
                            className={addUnitStyle.root}
                        >
                            Add Unit
                        </Button>
                        {unitsOptions.map((element, index) => (
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
            </td>
            <td
                style={{
                    // width: '51px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <input
                    type="text"
                    placeholder="Per/Unit"
                    name="pricePerUnit"
                    value={pricePerUnit}
                    onChange={handleEditFormChange}
                    style={{
                        width: '100%',
                    }}
                ></input>
            </td>
            <td
                style={{
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <FormControl>
                    <CssTextField
                        select
                        defaultValue="0"
                        placeholder="Select"
                        variant="standard"
                        name="percentDiscount"
                        value={percentDiscount}
                        onChange={handlePercentDiscountChange}
                        size="small"
                        sx={{
                            width: 70,
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
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <AddCircleOutlineIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            }
                            size="small"
                            className={addUnitStyle.root}
                        >
                            Add Disc %
                        </Button>
                        {discountOptions.map((element, index) => (
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
            </td>
            <td
                style={{
                    // width: '51px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <div
                    style={{
                        padding: '0.25em 0em 0em 0em',
                    }}
                >
                    {(
                        (quantity - freeQuantity) *
                        pricePerUnit *
                        (percentDiscount / 100)
                    ).toFixed(2)}
                </div>
            </td>
            <td
                style={{
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <FormControl>
                    <CssTextField
                        select
                        defaultValue="18"
                        placeholder="Select"
                        variant="standard"
                        name="percentTax"
                        value={percentTax}
                        onChange={handleEditFormChange}
                        size="small"
                        sx={{
                            width: 80,
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
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <AddCircleOutlineIcon
                                    style={{
                                        fontSize: 15,
                                    }}
                                />
                            }
                            size="small"
                            className={addUnitStyle.root}
                        >
                            Add Tax %
                        </Button>
                        {taxPercentOptions.map((element, index) => (
                            <MenuItem
                                key={index}
                                value={element.value}
                                style={{
                                    fontSize: '0.85em',
                                    height: '25px',
                                }}
                            >
                                {element.title}
                            </MenuItem>
                        ))}
                    </CssTextField>
                </FormControl>
            </td>
            <td
                style={{
                    // width: '51px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                }}
            >
                <div
                    style={{
                        padding: '0.25em 0em 0em 0em',
                    }}
                >
                    <>
                        {(
                            ((quantity - freeQuantity) * pricePerUnit -
                                (quantity - freeQuantity) *
                                    pricePerUnit *
                                    (percentDiscount / 100)) *
                            (percentTax / 100)
                        ).toFixed(2)}
                    </>
                </div>
            </td>
            <td
                style={{
                    // width: '49px',
                    borderTop: '1px solid #f5703b',
                    borderBottom: '1px solid #f5703b',
                    borderRight: '1px solid #f5703b',
                    borderTopRightRadius: '3px',
                    borderBottomRightRadius: '3px',
                }}
            >
                <div
                    style={{
                        padding: '0.22em 0em 0em 0em',
                    }}
                >
                    {(
                        (quantity - freeQuantity) *
                        pricePerUnit *
                        (1 - percentDiscount / 100) *
                        (1 + percentTax / 100)
                    ).toFixed(2)}
                </div>
            </td>

            <td
                style={{
                    // width: '40px',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '0.1em',
                }}
            >
                <Popup
                    trigger={
                        <IconButton
                            variant="outlined"
                            className={saveIconStyle.root}
                            onClick={(e) => preSubmit(e)}
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <SaveIcon
                                style={{
                                    fontSize: 17,
                                }}
                            />
                        </IconButton>
                    }
                    content="Save"
                    position="top center"
                    size="mini"
                    inverted
                />
                <Popup
                    trigger={
                        <IconButton
                            variant="outlined"
                            className={closeIconStyle.root}
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCancelClick(editFormData)}
                        >
                            <CancelIcon
                                type="button"
                                style={{
                                    cursor: 'pointer',
                                    fontSize: 14,
                                }}
                            />
                        </IconButton>
                    }
                    content="Cancel"
                    position="top center"
                    size="mini"
                    inverted
                />
            </td>
        </tr>
    )
}

export default EditableRow
