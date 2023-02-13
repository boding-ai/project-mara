import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, MenuItem, Select } from '@mui/material'
import { connect } from 'react-redux'

import NoStore from './NoStore'

const Settings = ({
    // Redux States
    store: { storeDetails, storeDetailsLoading },
}) => {
    const [selectedStore, setSelectedStore] = useState(0)

    const onChange = (e) => {
        setSelectedStore(e.target.value)
    }

    return (
        <>
            <div
                className="website_office_details app"
                style={storeDetails.length < 1 ? { height: '210px' } : {}}
            >
                <div className="title flex_middle">Store Details</div>
                {storeDetailsLoading ? (
                    <div className="flex_middle" style={{ margin: '2em' }}>
                        <div className="dot-windmill"></div>
                    </div>
                ) : (
                    <>
                        {storeDetails.length < 1 ? (
                            <div className="flex_middle">
                                <NoStore />
                            </div>
                        ) : (
                            <>
                                <div style={{ marginBottom: '1em' }}>
                                    <FormControl
                                        style={{
                                            width: '220px',
                                        }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={selectedStore}
                                            name="selectedStore"
                                            size="small"
                                            onChange={onChange}
                                            MenuProps={{
                                                disableScrollLock: true,
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                },
                                            }}
                                        >
                                            {storeDetails.length > 0 &&
                                                storeDetails.map(
                                                    (value, index) => (
                                                        <MenuItem
                                                            key={index}
                                                            value={index}
                                                        >
                                                            <div className="app">
                                                                <div
                                                                    style={{
                                                                        fontSize:
                                                                            '0.9em',
                                                                    }}
                                                                >
                                                                    {value.main_location.replace(
                                                                        /(^\w{1})|(\s+\w{1})/g,
                                                                        (
                                                                            letter
                                                                        ) =>
                                                                            letter.toUpperCase()
                                                                    )}
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        fontSize:
                                                                            '0.75em',
                                                                        color: 'grey',
                                                                    }}
                                                                >
                                                                    {value.store_name.replace(
                                                                        /(^\w{1})|(\s+\w{1})/g,
                                                                        (
                                                                            letter
                                                                        ) =>
                                                                            letter.toUpperCase()
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </MenuItem>
                                                    )
                                                )}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="timings">
                                    <div className="title flex_middle">
                                        Store Timings
                                    </div>
                                    <div className="flex_middle">
                                        <div
                                            className="flex_evenly"
                                            style={{
                                                marginBottom: '1em',
                                                borderBottom:
                                                    '1px solid rgb(230, 230, 230)',
                                                paddingBottom: '0.8em',
                                                width: '80%',
                                            }}
                                        >
                                            <div className="start">
                                                {
                                                    storeDetails[selectedStore]
                                                        .store_timings_start
                                                }
                                            </div>
                                            <div style={{ color: 'grey' }}>
                                                to
                                            </div>
                                            <div className="end">
                                                {
                                                    storeDetails[selectedStore]
                                                        .store_timings_end
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex_middle"
                                        style={{ margin: '0.6em 0 0.8em 0' }}
                                    >
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[0]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            M
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[1]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            T
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[2]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            W
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[3]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            T
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[4]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            F
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[5]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            S
                                        </div>
                                        <div
                                            className={
                                                JSON.parse(
                                                    storeDetails[selectedStore]
                                                        .store_operation_days[6]
                                                ).value
                                                    ? 'day flex_middle'
                                                    : 'day-offline flex_middle'
                                            }
                                        >
                                            S
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="timings"
                                    style={{ marginTop: '0.8em' }}
                                >
                                    <div className="title flex_middle">
                                        Appointment Timings
                                    </div>
                                    <div className="flex_middle">
                                        <div
                                            className="flex_evenly"
                                            style={{
                                                marginBottom: '1em',
                                                borderBottom:
                                                    '1px solid rgb(230, 230, 230)',
                                                paddingBottom: '0.8em',
                                                width: '80%',
                                            }}
                                        >
                                            <div className="start">
                                                {
                                                    storeDetails[selectedStore]
                                                        .appointment_timings_start
                                                }
                                            </div>
                                            <div style={{ color: 'grey' }}>
                                                to
                                            </div>
                                            <div className="end">
                                                {
                                                    storeDetails[selectedStore]
                                                        .appointment_timings_end
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className=""
                                        style={{ margin: '0em 0 0.5em 0' }}
                                    >
                                        <div className="title flex_middle ">
                                            Appointment Duration
                                        </div>
                                        <div className="flex_middle">
                                            <div
                                                className="appointment_time"
                                                style={{ marginRight: '1em' }}
                                            >
                                                {
                                                    storeDetails[selectedStore]
                                                        .appointment_time_span
                                                }
                                            </div>
                                            <div className="appointment_duration">
                                                {
                                                    storeDetails[selectedStore]
                                                        .appointment_duration
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

Settings.propTypes = {
    store: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    store: state.store,
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Settings)