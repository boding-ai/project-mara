import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Scrollbars from 'react-custom-scrollbars'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

import {
    faCalendarCheck,
    faSyringe,
    faPaw,
    faUser,
    faShop,
    faCalendarPlus,
    faXmark,
    faUserDoctor,
    faFire,
    faNotesMedical,
    faFile,
    faMobile,
    faVial,
    faUserCheck
} from '@fortawesome/free-solid-svg-icons'

import { addMainArray } from '../../../../../redux/actions/add-array/add'
import Card from './Card'
import { Link } from 'react-router-dom'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        width: 4,
    }
    return <div style={{ ...style, ...thumbStyle }} {...props} />
}

const CustomScrollbars = (props) => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
)

const Options = ({
    close,

    // Redux Actions
    addMainArray,

    // Redux States
    auth: { user: { id, name } }
}) => {

    const addAppointment = () => {
        addMainArray(0, 'addAppointment', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addVaccination = () => {
        addMainArray(0, 'addVaccination', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addStore = () => {
        addMainArray(0, 'addStore', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addOwner = () => {
        addMainArray(0, 'addOwner', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addPet = () => {
        addMainArray(0, 'addPet', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addDoctor = () => {
        addMainArray(0, 'addDoctor', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    const addEvent = () => {
        addMainArray(0, 'addEvent', moment().format('DD/MM/YY HH:mm'))
                close()
    }

    return (
        <div className="quick-add-card">
            <div className="triple_grid" style={{ width: '100%' }}>
                <div></div>
                <div className="flex_middle title">
                    <FontAwesomeIcon icon={faFire} />
                    <div style={{ marginLeft: '0.5em' }}>Quick Add</div>
                </div>
                <div className="close flex_right">
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ fontSize: 18 }}
                        onClick={close}
                    />
                </div>
            </div>
            <div className="body">
                <CustomScrollbars
                    autoHide
                    autoHideTimeout={500}
                    autoHideDuration={200}
                >
                    <div className="quadruple_grid" style={{ width: '100%' }}>
                        <div onClick={addEvent}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faNotesMedical}
                                        style={{
                                            color: '#f02e7e',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Create Case'}
                            />
                        </div>
                        <Link
                            to={`/report/new/${moment().unix()}/${id}/${uuidv4()}`}
                            target={'_blank'}
                            rel='noreferrer nofollow noopener'
                        >
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faFile}
                                        style={{
                                            color: '#f0752e',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Create Report'}
                            />
                        </Link>
                        <div onClick={addEvent}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faCalendarPlus}
                                        style={{
                                            color: '#9c2121',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Create Event'}
                            />
                        </div>
                        <div onClick={addEvent}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faUserCheck}
                                        style={{
                                            color: '#06bf31',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Check-in'}
                            />
                        </div>
                        {/* <div onClick={addAppointment}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faCalendarCheck}
                                        style={{
                                            color: '#f7bf45',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Add Appointment'}
                            />
                        </div>
                        <div onClick={addVaccination}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faSyringe}
                                        style={{
                                            color: '#5d8ef0',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Add Vaccination'}
                            />
                        </div>
                        <div onClick={addVaccination}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faMobile}
                                        style={{
                                            color: '#5d8ef0',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Add Online Consult'}
                            />
                        </div>
                        <div onClick={addVaccination}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faVial}
                                        style={{
                                            color: '#5d8ef0',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'Add Test'}
                            />
                        </div> */}
                        <div onClick={addOwner}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        style={{
                                            color: 'rgb(50, 190, 250)',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'New Owner'}
                            />
                        </div>
                        <div onClick={addPet}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faPaw}
                                        style={{
                                            color: 'rgb(50, 190, 250)',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'New Pet'}
                            />
                        </div>
                        <div onClick={addDoctor}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faUserDoctor}
                                        style={{
                                            color: 'rgb(50, 190, 250)',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'New Doctor'}
                            />
                        </div>
                        <div onClick={addStore}>
                            <Card
                                icon={
                                    <FontAwesomeIcon
                                        icon={faShop}
                                        style={{
                                            color: '#484848',
                                            fontSize: 20,
                                        }}
                                    />
                                }
                                title={'New Store'}
                            />
                        </div>
                    </div>
                </CustomScrollbars>
            </div>
        </div>
    )
}

Options.propTypes = {
    auth: PropTypes.object.isRequired,
    addMainArray: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapActionsToProps = {
    addMainArray,
}

export default connect(mapStateToProps, mapActionsToProps)(Options)