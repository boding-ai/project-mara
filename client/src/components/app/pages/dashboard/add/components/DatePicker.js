import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'
import DateTimePicker from '@mui/lab/DateTimePicker'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import MobileDatePicker from '@mui/lab/MobileDatePicker'

export default function DatePicker({ date, handleDateChange }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                size="small"
                label="Date"
                name="date"
                value={date}
                views={['year', 'month', 'day']}
                format={'dd/MM/yyyy'}
                onChange={(newValue) => handleDateChange(newValue)}
                renderInput={(params) => <TextField {...params} size="small" />}
            />
        </LocalizationProvider>
    )
}
