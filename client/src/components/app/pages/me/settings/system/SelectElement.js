import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { alpha, styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#ff6666',
        '&:hover': {
            backgroundColor: alpha(
                '#ff6666',
                theme.palette.action.hoverOpacity
            ),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#ff6666',
    },
}))

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const SelectElement = ({ title, details, first, checked, onChangeSelect }) => {
    return (
        <div style={first ? { marginBottom: '80px' } : { margin: '80px 0' }}>
            <div className="name">
                <div
                    className="flex_between"
                    style={{ padding: '0 2em 0 0', marginBottom: '1em' }}
                >
                    <div className="title-type flex_left">{title}</div>
                    <GreenSwitch
                        {...label}
                        checked={checked}
                        onChange={onChangeSelect}
                    />
                </div>
                <div className="details">{details}</div>
            </div>
        </div>
    )
}

SelectElement.propTypes = {
    sidebar: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(SelectElement)
