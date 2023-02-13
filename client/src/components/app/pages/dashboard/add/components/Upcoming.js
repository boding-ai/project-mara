import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

import {
    Modal,
    Fade,
    Box,
    Button,
    Card,
    InputAdornment,
    TextField,
    FormControl,
    MenuItem,
} from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { styled } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import CancelIcon from '@mui/icons-material/Cancel'

import {
    reminderOptions
} from '../../../records/flow/finances/selectionData'

const style = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: 24,
    border: 'none',
    p: 4,
    padding: '20px 40px',
    borderRadius: '10px'
}

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


const Upcoming = ({
    durationOfReminder,
    saveForLaterDate,
    saveForLater,
    handleAddFormChange,
    handleReminderDateChange,
}) => {
    const [openModal, setOpenModal] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const saveIconStyle = saveRecordIconButtonStyle()

    const okayClicked = (e) => {
        e.target.name = 'saveForLater'
        e.target.value = true
        setIsDisabled(true)
        setOpenModal(false)
        handleAddFormChange(e)
    }

    const cancelClicked = (e) => {
        e.target.name = 'saveForLater'
        e.target.value = false
        handleAddFormChange(e)
        setIsDisabled(false)
    }

    return (
        <>
            <div className="button">
                {saveForLater ? (
                    <>
                        <div className="center_everything">
                            <div>
                                <Button
                                    variant="outlined"
                                    endIcon={
                                        <CheckIcon style={{ color: 'green' }} />
                                    }
                                    disabled={isDisabled}
                                    size="small"
                                    className={saveIconStyle.root}
                                    onClick={() => setOpenModal(true)}
                                >
                                    Schedule for Later
                                </Button>
                            </div>
                            <div>
                                <CancelIcon
                                    onClick={(e) => cancelClicked(e)}
                                    style={{
                                        cursor: 'pointer',
                                        color: 'gray',
                                        fontSize: 20,
                                        marginLeft: '0.5em ',
                                        paddingTop: '0.2em'
                                    }}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Button
                            variant="outlined"
                            endIcon={<WatchLaterIcon />}
                            size="small"
                            className={saveIconStyle.root}
                            onClick={() => setOpenModal(true)}
                        >
                            Schedule for Later
                        </Button>
                    </>
                )}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={!openModal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box style={style}>
                        <div className="app">
                            <div style={{ marginBottom: '1em' }}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DesktopDatePicker
                                        error={false}
                                        size="small"
                                        label="Date"
                                        name="saveForLaterDate"
                                        value={saveForLaterDate}
                                        views={['year', 'month', 'day']}
                                        format={'dd/MM/yyyy'}
                                        onChange={(newValue) =>
                                            handleReminderDateChange(newValue)
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                size="small"
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                            <div
                                className="center_everything"
                                style={{ marginBottom: '2em' }}
                            >
                                <div>Set Reminder For:</div>
                                <div>
                                    <FormControl>
                                        <CssTextField
                                            select
                                            defaultValue="Services"
                                            placeholder="Select"
                                            variant="standard"
                                            name="durationOfReminder"
                                            value={durationOfReminder}
                                            onChange={handleAddFormChange}
                                            size="small"
                                            sx={{
                                                width: 90,
                                                padding: '0em 0em 0em 0.2em',
                                            }}
                                            InputProps={{
                                                style: {
                                                    border: 'none',
                                                    color: 'black',
                                                    fontSize: '0.95em',
                                                    padding:
                                                        '0.35em 0em 0em 0em',
                                                },
                                                disableUnderline: true,
                                            }}
                                        >
                                            {reminderOptions.map(
                                                (element, index) => (
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
                                                )
                                            )}
                                        </CssTextField>
                                    </FormControl>
                                </div>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={saveIconStyle.root}
                                    onClick={(e) => okayClicked(e)}
                                >
                                    Okay
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

Upcoming.propTypes = {

}

export default Upcoming
