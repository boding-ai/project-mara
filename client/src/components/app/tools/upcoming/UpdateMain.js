import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Scrollbars from 'react-custom-scrollbars'

import UpcomingIcon from '@mui/icons-material/Upcoming'

import UpdateClientAppointment from './types/UpdateClientAppointment'
import UpdateClientGetPay from './types/UpdateClientGetPay'
import UpdateClientGivePay from './types/UpdateClientGivePay'
import UpdateClientReport from './types/UpdateClientReport'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        width: 3,
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

const UpdateMain = (props) => {
    const [glow, setGlow] = useState(true)
    return (
        <>
            <div className="upcoming_events">
                    <div className="header flex_middle">
                        <UpcomingIcon
                            style={{ fontSize: 23 }}
                            className={glow ? 'icon_glow' : ''}
                        />
                        <div style={{ margin: '0.1em 0em 0em 0.3em' }}>
                            Upcoming
                        </div>
                    </div>
                    <div className="body">
                        {/* <UpdateClientNoShow /> */}
                        <CustomScrollbars
                            autoHide
                            autoHideTimeout={500}
                            autoHideDuration={200}
                        >
                            <div
                                style={{
                                    padding: '0em 0.3em',
                                }}
                                className='app'
                            >
                                <UpdateClientAppointment />
                                <UpdateClientGetPay />
                                <UpdateClientGivePay />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                                <UpdateClientReport />
                            </div>
                        </CustomScrollbars>
                    </div>
            </div>
        </>
    )
}

UpdateMain.propTypes = {}

export default UpdateMain
