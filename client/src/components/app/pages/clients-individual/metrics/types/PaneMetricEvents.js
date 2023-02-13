import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import BarChartIcon from '@mui/icons-material/BarChart'

const PaneMetricEvents = props => {

    return (
        <>
            <div className="metrics_client_main">
                <div className="one">
                    <div>
                        <BarChartIcon style={{ fontSize: 28 }} />
                    </div>
                    <div>Metrics</div>
                </div>
            </div>
        </>
    )
}

PaneMetricEvents.propTypes = {

}

export default PaneMetricEvents
        