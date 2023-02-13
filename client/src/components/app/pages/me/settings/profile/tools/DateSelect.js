import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'

const DateSelect = ({ onChange, value, title, details, }) => {
    return (
        <>
            <div className="name">
                <div
                    className="title-type flex_left"
                    style={{ marginBottom: '1.2em' }}
                >
                    {title}
                </div>

                <div className="">
                    <DatePicker
                        onChange={onChange}
                        value={value}
                        calendarClassName="react-calendar"
                        className={'react-date-picker'}
                        clearIcon={null}
                        format="dd-MM-y"
                        maxDate={new Date(new Date() - 6570 * 86400000)}
                    />
                </div>
                <div className="details" style={{ marginTop: '1.2em' }}>
                    {details}
                </div>
            </div>
        </>
    )
}

DateSelect.propTypes = {}

export default DateSelect