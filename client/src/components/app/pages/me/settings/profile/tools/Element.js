import React from 'react'

import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
    // input label when focused
    '& label.Mui-focused': {
        color: 'none',
        border: 'none',
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'none',
            fontSize: '0.9em',
        },
    },
    border: 'transparent',
}))

const useStyles = makeStyles(() => ({
    noBorder: {
        border: 'none',
    },
}))


const Element = ({
    editOn,
    save,
    setElementEdit,
    element,
    elementNew,
    onChange,
    setFormData,
    formData,
    title,
    textFieldName,
    error,
    details,
    first,
    errorMessage,
    allSmall,
    placeholder,
}) => {
    const textAttitude = useStyles()

    return (
        <div style={first ? { marginBottom: '80px' } : { margin: '80px 0' }}>
            <div className="name">
                <div
                    className="flex_between"
                    style={{ padding: '0 2em 0 0', marginBottom: '1em' }}
                >
                    <div className="title-type flex_left">{title}</div>
                    {editOn ? (
                        <>
                            <div
                                className="flex_evenly special-buttons"
                                style={{ marginBottom: '5px' }}
                            >
                                <div style={{ marginRight: '1.3em' }}>
                                    <button
                                        className="button-yes flex_middle"
                                        onClick={save}
                                        style={{
                                            padding: '0.3em 0.6em',
                                            borderRadius: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        <div className="flex_middle">
                                            <div>Save</div>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="button-no"
                                        onClick={() => {
                                            setElementEdit(false)
                                            setFormData({
                                                ...formData,
                                                [textFieldName]: element,
                                            })
                                        }}
                                        style={{
                                            padding: '0.3em 0.6em',
                                            borderRadius: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div
                            className="flex_right edit"
                            onClick={() => setElementEdit(true)}
                        >
                            Edit
                        </div>
                    )}
                </div>
                <div className="content">
                    {editOn ? (
                        <CssTextField
                            autoFocus
                            fullWidth
                            placeholder={placeholder}
                            inputProps={{
                                style: {
                                    fontSize: '1em',
                                    height: '20px',
                                    padding: 0,
                                    fontFamily: 'Segoe UI, serif',
                                },
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: textAttitude.noBorder,
                                },
                            }}
                            style={{
                                border: 'none',
                            }}
                            name={textFieldName}
                            value={elementNew}
                            onChange={onChange}
                            error={elementNew.length < 1}
                        />
                    ) : element ? (
                        allSmall ? (
                            element.toLowerCase()
                        ) : (
                            element.replace(/(^\w|\s\w)/g, (m) =>
                                m.toUpperCase()
                            )
                        )
                    ) : (
                        ''
                    )}
                </div>
                {error ? (
                    <div className="details" style={{ color: 'red' }}>
                        {errorMessage}
                    </div>
                ) : (
                    <div className="details">{details}</div>
                )}
            </div>
        </div>
    )
}

export default Element