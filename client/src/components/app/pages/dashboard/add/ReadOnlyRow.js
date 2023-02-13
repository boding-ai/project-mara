import React, { useState } from 'react'
import { Popup } from 'semantic-ui-react'
import { Button, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const deletePrescriptionIconButtonStyle = makeStyles({
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

const editPrescriptionIconButtonStyle = makeStyles({
    root: {
        backgroundColor: 'none',
        width: '0px',
        height: 0,
        '&:hover': {
            backgroundColor: 'transparent',
            width: '0px',
            height: 0,
            color: '#2222f0',
        },
    },
})

const ReadOnlyRow = ({
    contact,
    handleEditClick,
    handleDeleteClick,
    srNoMap,
}) => {
    const [showIconRead, setShowIconRead] = useState(false)

    const deleteIconButton = deletePrescriptionIconButtonStyle()
    const editIconButton = editPrescriptionIconButtonStyle()

    const showIconsRead = () => {
        setShowIconRead(true)
    }

    const dontShowIconsRead = () => {
        setShowIconRead(false)
    }

    return (
        <>
            <tr
                onMouseEnter={showIconsRead}
                onMouseLeave={dontShowIconsRead}
                className={'addGrid'}
            >
                <td>{srNoMap.get(contact.id)}</td>
                <td>{contact.item}</td>
                <td>{contact.itemCode}</td>
                <td
                    style={{
                        overflow: 'hidden',
                    }}
                >
                    {contact.hsnCode}
                </td>
                <td>{contact.type}</td>
                <td>{contact.quantity}</td>
                <td>{contact.freeQuantity}</td>
                <td>{contact.unit}</td>
                <td>{contact.pricePerUnit}</td>
                <td>{contact.percentDiscount}</td>
                <td>{contact.amountDiscount}</td>
                <td>{contact.percentTax}</td>
                <td>{contact.taxAmount}</td>
                <td>{contact.totalAmount}</td>
                <td
                    style={{
                        border: '1px solid rgb(239, 247, 248)',
                    }}
                >
                    {showIconRead ? (
                        <>
                            <Popup
                                trigger={
                                    <IconButton
                                        variant="outlined"
                                        className={editIconButton.root}
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) =>
                                            handleEditClick(e, contact, 'yes')
                                        }
                                    >
                                        <EditIcon
                                            type="button"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: 16,
                                            }}
                                        />
                                    </IconButton>
                                }
                                content="Edit"
                                position="top center"
                                size="mini"
                                inverted
                            />
                            <Popup
                                trigger={
                                    <IconButton
                                        variant="outlined"
                                        className={deleteIconButton.root}
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) =>
                                            handleDeleteClick(contact.id)
                                        }
                                    >
                                        <DeleteIcon
                                            type="button"
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: 16,
                                            }}
                                        />
                                    </IconButton>
                                }
                                content="Delete"
                                position="top center"
                                size="mini"
                                inverted
                            />
                        </>
                    ) : (
                        ''
                    )}
                </td>
            </tr>
        </>
    )
}

export default ReadOnlyRow
