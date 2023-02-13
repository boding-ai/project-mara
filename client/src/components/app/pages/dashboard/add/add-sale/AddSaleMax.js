import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { makeStyles } from '@mui/styles'
import { Divider, Popup } from 'semantic-ui-react'
import { CSVLink } from 'react-csv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import {
    Button,
    Card,
    CardMedia,
    InputAdornment,
    TextField,
} from '@mui/material'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SaveIcon from '@mui/icons-material/Save'

import ReadOnlyRow from '../ReadOnlyRow'
import EditableRow from '../EditableRow'
import GetDay from '../../../layout/time/GetDay'
import GetDate from '../../../layout/time/GetDate'

import DatePicker from '../components/DatePicker'
import InvoiceNumber from '../components/InvoiceNumber'
import Location from '../components/Location'
import SelectCurrency from '../components/SelectCurrency'
import Upcoming from '../components/Upcoming'
import Search from '../components/Search'


const addRowIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid gray',
        backgroundColor: 'none',
        height: '23px',
        padding: '0.5em',
        margin: '2em 1em 1.5em 1em',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#27db33',
            border: '1px solid #27db33',
        },
    },
})

const saveRecordIconButtonStyle = makeStyles({
    root: {
        color: 'gray',
        border: '1px solid grey',
        backgroundColor: 'none',
        height: '23px',
        padding: '0.5em',
        margin: '2em 1em 1.5em 1em',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#1686f0',
            border: '1px solid #1686f0',
        },
    },
})

const srNoMap = new Map()

const AddSaleMax = ({ onExpandLessClickSale, onWindowClose, id }) => {
    const addRowStyle = addRowIconButtonStyle()
    const saveButtonStyle = saveRecordIconButtonStyle()

    const [idNo, setIdNo] = useState(1)
    const [contacts, setContacts] = useState([])
    const [editContactId, setEditContactId] = useState(null)
    const [softCancel, setSoftCancel] = useState(false)
    const [addFormData, setAddFormData] = useState({
        id: '',
        item: '',
        itemCode: '',
        hsnCode: '',
        type: '',
        quantity: '',
        freeQuantity: '',
        unit: '',
        pricePerUnit: '',
        percentDiscount: '',
        amountDiscount: '',
        percentTax: '',
        taxAmount: '',
        totalAmount: '',
        date: new Date(),
        invoiceNumber: '',
        location: '',
        modeOfPayment: '',
        saveForLater: '',
        saveForLaterDate: '',
        durationOfReminder: 0,
        searchPartyName: '',
        searchPartyID: '',
        searchPartyType: '',
        searchPartyAddress: '',
        petSelected: ''
    })

    const [editFormData, setEditFormData] = useState({
        id: '',
        item: '',
        itemCode: '',
        hsnCode: '',
        type: '',
        quantity: '',
        freeQuantity: '',
        unit: '',
        pricePerUnit: '',
        percentDiscount: '',
        amountDiscount: '',
        percentTax: '',
        taxAmount: '',
        totalAmount: '',
        date: '',
        location: '',
        invoiceNumber: '',
        modeOfPayment: '',
        saveForLater: '',
        saveForLaterDate: '',
        durationOfReminder: 0,
        searchPartyName: '',
        searchPartyID: '',
        searchPartyType: '',
        searchPartyAddress: '',
        petSelected: '',
    })

    const {
        date,
        invoiceNumber,
        location,
        modeOfPayment,
        saveForLater,
        saveForLaterDate,
        durationOfReminder,
        searchPartyName,
        searchPartyID,
        searchPartyType,
        searchPartyAddress,
        petSelected
    } = addFormData

    const handleAddFormChange = (e) => {

        const fieldName = e.target.name
        const fieldValue = e.target.value

        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleDateChange = ( value) => {
        const fieldName = 'date'
        const fieldValue = value

        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleReminderDateChange = (value) => {
        const fieldName = 'saveForLaterDate'
        const fieldValue = value

        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.name
        const fieldValue = event.target.value

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault()

        const newContact = {
            id: nanoid(),
            item: addFormData.item,
            itemCode: addFormData.itemCode,
            hsnCode: addFormData.hsnCode,
            type: addFormData.type,
            quantity: addFormData.quantity,
            freeQuantity: addFormData.freeQuantity,
            unit: addFormData.unit,
            pricePerUnit: addFormData.pricePerUnit,
            percentDiscount: addFormData.percentDiscount,
            amountDiscount: addFormData.amountDiscount,
            percentTax: addFormData.percentTax,
            taxAmount: addFormData.taxAmount,
            totalAmount: addFormData.totalAmount,
            date: addFormData.date,
            invoiceNumber: addFormData.invoiceNumber,
            location: addFormData.location,
            modeOfPayment: addFormData.modeOfPayment,
            saveForLater: addFormData.saveForLater,
            saveForLaterDate: addFormData.saveForLaterDate,
            durationOfReminder: addFormData.durationOfReminder,
            searchPartyName: addFormData.searchPartyName,
            searchPartyID: addFormData.searchPartyID,
            searchPartyType: addFormData.searchPartyType,
            searchPartyAddress: addFormData.searchPartyAddress,
            petSelected: addFormData.petSelected,
        }

        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
        setEditContactId(newContact.id)
        srNoMap.set(newContact.id, idNo)
        setIdNo(idNo + 1)
    }

    const handleEditFormSubmit = (event, submitArray) => {
        event.preventDefault()

        const editedContact = {
            id: editContactId,
            item: editFormData.item,
            itemCode: editFormData.itemCode,
            hsnCode: editFormData.hsnCode,
            type: editFormData.type,
            quantity: editFormData.quantity,
            freeQuantity: editFormData.freeQuantity,
            unit: editFormData.unit,
            pricePerUnit: editFormData.pricePerUnit,
            percentDiscount: editFormData.percentDiscount,
            amountDiscount: submitArray[0],
            percentTax: editFormData.percentTax,
            taxAmount: submitArray[1],
            totalAmount: submitArray[2],
            date: editFormData.date,
            invoiceNumber: editFormData.invoiceNumber,
            location: editFormData.location,
            modeOfPayment: editFormData.modeOfPayment,
            saveForLater: editFormData.saveForLater,
            saveForLaterDate: editFormData.saveForLaterDate,
            durationOfReminder: editFormData.durationOfReminder,
            searchPartyName: editFormData.searchPartyName,
            searchPartyID: editFormData.searchPartyID,
            searchPartyType: editFormData.searchPartyType,
            searchPartyAddress: editFormData.searchPartyAddress,
            petSelected: editFormData.petSelected,
        }

        const newContacts = [...contacts]

        const index = contacts.findIndex(
            (contact) => contact.id === editContactId
        )

        newContacts[index] = editedContact

        setContacts(newContacts)
        console.log(contacts)
        setEditContactId(null)
    }

    const handleEditClick = (event, contact, status) => {
        event.preventDefault()
        setEditContactId(contact.id)
        if (status === 'yes') {
            setSoftCancel(true)
        }
        const formValues = {
            item: contact.item,
            itemCode: contact.itemCode,
            hsnCode: contact.hsnCode,
            type: contact.type,
            quantity: contact.quantity,
            freeQuantity: contact.freeQuantity,
            unit: contact.unit,
            pricePerUnit: contact.pricePerUnit,
            percentDiscount: contact.percentDiscount,
            amountDiscount: contact.amountDiscount,
            percentTax: contact.percentTax,
            taxAmount: contact.taxAmount,
            totalAmount: contact.totalAmount,
            date: contact.date,
            invoiceNumber: contact.invoiceNumber,
            location: contact.location,
            modeOfPayment: contact.modeOfPayment,
            saveForLater: contact.saveForLater,
            saveForLaterDate: contact.saveForLaterDate,
            durationOfReminder: contact.durationOfReminder,
            searchPartyName: contact.searchPartyName,
            searchPartyID: contact.searchPartyID,
            searchPartyType: contact.searchPartyType,
            searchPartyAddress: contact.searchPartyAddress,
            petSelected: contact.petSelected,
        }

        setEditFormData(formValues)
    }

    const handleCancelClick = (contactId) => {
        if (softCancel) {
            setEditContactId(null)
            setSoftCancel(false)
        } else {
            setEditContactId(null)
            const newContacts = [...contacts]

            const index = contacts.findIndex(
                (contact) => contact.id === contactId
            )

            newContacts.splice(index, 1)
            setIdNo(idNo - 1)
            setContacts(newContacts)
        }
    }

    const handleDeleteClick = async (contactId) => {
        const newContacts = [...contacts]
        const index = contacts.findIndex((contact) => contact.id === contactId)

        newContacts.splice(index, 1)
        await handleChangeOfSrNo(contactId)
        srNoMap.delete(contactId)
        setContacts(newContacts)
        console.log(srNoMap)
    }

    const handleChangeOfSrNo = (contactId) => {
        const threshold = srNoMap.get(contactId)
        if (contacts.length === 1) {
            setIdNo(1)
        }
        srNoMap.forEach((value, key, map) => {
            if (value > threshold) {
                if (idNo < 1) {
                    setIdNo(1)
                } else {
                    setIdNo(idNo - 1)
                }
                map.set(key, value - 1)
            }
        })
    }

    const handleCompleteSubmit = (e) => {
        e.preventDefault()
        console.log(contacts)
    }
    const today = new Date()

    const dateTitle = today.toLocaleTimeString('en', {
        year: 'numeric', month: 'numeric', day: 'numeric',
    })
    const timeTitle = today.toLocaleTimeString('en', {
        hour: 'numeric',
        hour24: true
    })

    const title  = dateTitle + '_' + timeTitle

    return (
        <>
            <div className="add_table_info">
                <div className="left">
                    <div>
                        <Search
                            searchPartyName={searchPartyName}
                            searchPartyID={searchPartyID}
                            searchPartyType={searchPartyType}
                            searchPartyAddress={searchPartyAddress}
                            petSelected={petSelected}
                            addFormData={addFormData}
                            setAddFormData={setAddFormData}
                            handleAddFormChange={handleAddFormChange}
                        />
                    </div>
                </div>
                <div className="middle">
                    <div className="type_of_currency">
                        <SelectCurrency
                            modeOfPayment={modeOfPayment}
                            handleAddFormChange={handleAddFormChange}
                        />
                    </div>
                    <div className="location">
                        <Location
                            location={location}
                            handleAddFormChange={handleAddFormChange}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="invoiceNumber">
                        <InvoiceNumber
                            invoiceNumber={invoiceNumber}
                            handleAddFormChange={handleAddFormChange}
                        />
                    </div>
                    <div className="date">
                        <DatePicker
                            date={date}
                            handleDateChange={handleDateChange}
                        />
                    </div>
                    <div className="later">
                        <Upcoming
                            durationOfReminder={durationOfReminder}
                            saveForLaterDate={saveForLaterDate}
                            saveForLater={saveForLater}
                            handleAddFormChange={handleAddFormChange}
                            handleReminderDateChange={handleReminderDateChange}
                        />
                    </div>
                </div>
            </div>
            <div className="add_table_suggestions">
                <div className="case_number_finances">--C/N #{id}</div>
                <div className="date_finances">
                    {' '}
                    <GetDay /> <GetDate />
                </div>
                <div>
                    <CSVLink
                        data={contacts}
                        filename={`${title}`}
                        style={{ color: '#696868' }}
                    >
                        <FontAwesomeIcon
                            icon={faDownload}
                            style={{ marginRight: '0.3em' }}
                        />
                        Export
                    </CSVLink>
                </div>
            </div>
            <div className="add_table_main">
                <form>
                    <table>
                        <thead>
                            <tr className="addGrid">
                                <th>No.</th>
                                <th>Item</th>
                                <th>Item Code</th>
                                <th>HSN Code</th>
                                <th>Type</th>
                                <th>QTY</th>
                                <th>Free QTY</th>
                                <th>Unit</th>
                                <th>Price/Unit</th>
                                <th>% Disc</th>
                                <th>Disc Amt</th>
                                <th>% Tax</th>
                                <th>Tax Amt</th>
                                <th>Amount</th>
                                <th style={{ display: 'none' }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            <div className="">
                                {contacts.map((contact) => (
                                    <>
                                        {editContactId === contact.id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                handleEditFormChange={
                                                    handleEditFormChange
                                                }
                                                handleCancelClick={
                                                    handleCancelClick
                                                }
                                                handleEditFormSubmit={
                                                    handleEditFormSubmit
                                                }
                                            />
                                        ) : (
                                            <ReadOnlyRow
                                                contact={contact}
                                                handleEditClick={
                                                    handleEditClick
                                                }
                                                handleDeleteClick={
                                                    handleDeleteClick
                                                }
                                                srNoMap={srNoMap}
                                            />
                                        )}
                                    </>
                                ))}
                            </div>
                        </tbody>
                    </table>
                </form>
                <div>
                    <form
                        onSubmit={handleAddFormSubmit}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Item"
                            name="item"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Item Code"
                            name="itemCode"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="HSN Code"
                            name="hsnCode"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Type"
                            name="type"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Quantity"
                            name="quantity"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Free Qty"
                            name="freeQuantity"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Unit"
                            name="unit"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Price/Unit"
                            name="pricePerUnit"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="% Discount"
                            name="percentDiscount"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Discount Amount"
                            name="amountDiscount"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="% Tax"
                            name="percentTax"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Tax Amount"
                            name="taxAmount"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            name="totalAmount"
                            onChange={handleAddFormChange}
                            style={{
                                display: 'none',
                            }}
                        />
                        <Button
                            variant="outlined"
                            endIcon={<AddCircleOutlineIcon />}
                            size="small"
                            className={addRowStyle.root}
                            type="submit"
                        >
                            Add Row
                        </Button>
                        <Button
                            variant="outlined"
                            endIcon={<SaveIcon />}
                            size="small"
                            className={saveButtonStyle.root}
                            onClick={handleCompleteSubmit}
                        >
                            Save
                        </Button>
                    </form>
                </div>
            </div>
            {/* </Card> */}
        </>
    )
}

export default AddSaleMax
