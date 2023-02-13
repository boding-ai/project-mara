import React from 'react'
import PropTypes from 'prop-types'
import Scrollbars from 'react-custom-scrollbars'

import PaneMetricEvents from './types/PaneMetricEvents'

import DistributionOfSourcesOfIncome from './types/DistributionOfSourcesOfIncome'
import ClientIncomeChange from './types/ClientIncomeChange'
import ClientIncome from './types/ClientIncome'
import NumberOfVisitsTotal from './types/NumberOfVisitsTotal'
import NumberOfVisitsCount from './types/NumberOfVisitsCount'
import Test from './types/Test'
import CustomerRank from './types/CustomerRank'
import TimeMostVisited from './types/TimeMostVisited'
import TopSoldProducts from './types/TopSoldProducts'

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
        width: 4,
        padding: 0,
        margin: 0
    }
    return (
        <div
            style={{ ...style, ...thumbStyle}}
            {...props}
        />
    )
}

const CustomScrollbars = (props) => (
    <Scrollbars
        renderThumbVertical={renderThumb}
        renderThumbHorizontal={renderThumb}
        {...props}
    />
)

const MetricsClient = props => {
    return (
        <>
            <div className="father_metrics_client app">
                <div
                    className="metrics_client_title"
                    style={{ margin: '0em 0em 0em 0em' }}
                >
                    <PaneMetricEvents />
                </div>
                <div className="inner">
                    <CustomScrollbars
                        autoHide
                        autoHideTimeout={500}
                        autoHideDuration={200}
                    >
                        <div className="app">
                            <div className="metrics_client_grid_2">
                                <div
                                    className="metrics_client_g2"
                                    style={{ marginRight: '5px' }}
                                >
                                    <ClientIncomeChange />
                                </div>
                                <div className="metrics_client_g2">
                                    <ClientIncome />
                                </div>
                            </div>
                            <div className="metrics_client">
                                <DistributionOfSourcesOfIncome />
                            </div>
                            <div className="metrics_client_grid_2">
                                <div
                                    className="metrics_client_g2"
                                    style={{ marginRight: '5px' }}
                                >
                                    <NumberOfVisitsTotal />
                                </div>
                                <div className="metrics_client_g2">
                                    <NumberOfVisitsCount />
                                </div>
                            </div>
                            <div className="metrics_client_grid_2">
                                <div
                                    className="metrics_client_g2"
                                    style={{ marginRight: '5px' }}
                                >
                                    <CustomerRank />
                                </div>
                                <div className="metrics_client_g2">
                                    <TimeMostVisited />
                                </div>
                            </div>
                            <div className="metrics_client">
                                <div style={{ width: '95%', height: '230px' }}>
                                    <Test />
                                </div>
                            </div>
                            <div
                                className="metrics_client"
                                style={{ marginBottom: '1em' }}
                            >
                                <TopSoldProducts />
                            </div>
                        </div>
                    </CustomScrollbars>
                </div>
            </div>
        </>
    )
}

MetricsClient.propTypes = {

}

export default MetricsClient
