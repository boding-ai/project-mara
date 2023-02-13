import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouseMedicalCircleXmark,
    faHouseMedical
} from '@fortawesome/free-solid-svg-icons'

import { addMainArray } from '../../../../redux/actions/add-array/add'

const NoStore = ({
    // Redux Actions
    addMainArray,
}) => {

    const addStore = () => {
        addMainArray('addStore')
    }

    return (
        <>
            <div
                style={{
                    width: '100%',
                    padding: '0em',
                    color: 'grey',
                    marginTop: '1em',
                }}
                className="app"
            >
                <div className="flex_middle">
                    <div style={{ marginRight: '0.5em' }}>
                        <FontAwesomeIcon
                            icon={faHouseMedicalCircleXmark}
                            style={{ fontSize: 22 }}
                        />
                    </div>
                    <div style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                        No Clinics/Stores
                    </div>
                </div>
                <div
                    className="flex_middle"
                    style={{
                        fontSize: '0.9em',
                        marginTop: '1em',
                        padding: '0 0.5em',
                        textAlign: 'center',
                    }}
                >
                    Add some stores or clinics to change details.
                </div>
                <div
                    className="flex_middle cursor_pointer add-store-button"
                    style={{ marginTop: '1em' }}
                    onClick={addStore}
                >
                    <div style={{ marginRight: '0.5em' }}>
                        <FontAwesomeIcon
                            icon={faHouseMedical}
                            style={{ fontSize: 15 }}
                        />
                    </div>
                    <div style={{ fontSize: '0.85em' }}>Add Clinics/Stores</div>
                </div>
            </div>
        </>
    )
}

NoStore.propTypes = {
    addMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapActionsToProps = {
    addMainArray,
}

export default connect(mapStateToProps, mapActionsToProps)(NoStore)