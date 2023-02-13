import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@mui/styles'

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

const AddVacMax = ({
    // Functions
    onExpandLessClick,
    close,
    onChange,
    onClearAll,

    // Data
    setFormData,
    formData,
}) => {
    return <div>AddVacMax</div>
}

AddVacMax.propTypes = {}

export default AddVacMax
