import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tooltip } from '@mui/material'

import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'

import Owner from '../add/profiles/owner/add/AddOwner'
import Pet from '../add/profiles/pet/add/AddPet'
import Store from '../add/stores/add/AddStore'
import Appointment from '../add/appointments/add/AddApp'
import Vaccination from '../add/vaccinations/add/AddVac'

const ArrayMin = ({
    // Redux States
    add: { addArrayMinimizeTabs },
}) => {
    return (
        <div className="clinical_exam_main_in_record_positioning">
            {addArrayMinimizeTabs.map((element, index) => (
                <div key={index}>
                            {element.payloadType === 'addOwner' && (
                                <div key={index} className="flex_middle">
                                    <Owner
                                        close={index}
                                        element={element}
                                        index={index}
                                    />
                                </div>
                            )}
                            {element.payloadType === 'addPet' && (
                                <div key={index} className="flex_middle">
                                    <Pet
                                        close={index}
                                        element={element}
                                        index={index}
                                    />
                                </div>
                            )}
                            {element.payloadType === 'addAppointment' && (
                                <Appointment
                                    close={index}
                                    element={element}
                                    index={index}
                                />
                            )}
                            {element.payloadType === 'addStore' && (
                                <Store
                                    close={index}
                                    element={element}
                                    index={index}
                                />
                            )}
                            {element.payloadType === 'addVaccination' && (
                                <Vaccination
                                    close={index}
                                    element={element}
                                    index={index}
                                />
                            )}
                </div>
            ))}
        </div>
    )
}

ArrayMin.propTypes = {
    add: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    add: state.add,
})

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(ArrayMin)