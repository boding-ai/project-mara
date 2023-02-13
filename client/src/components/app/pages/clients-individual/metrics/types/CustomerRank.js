import React, { useState } from 'react'
import PropTypes from 'prop-types'

import QuestionMarkTrigger from './QuestionMarkTrigger'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const message = "Ranking of client based on income generated compared to all other clients in the given time frame"

const ClientIncomeChange = (props) => {
    const [isTrendingUp, setisTrendingUp] = useState(false)

    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Client Rank</div>
                <QuestionMarkTrigger message={message} />
            </div>
            <div className="center_everything">
                {!isTrendingUp ? (
                    <div
                        className="numberOfVisitsPositive"
                        style={{ color: 'black' }}
                    >
                        <div style={{ paddingTop: '0.3em' }}>
                            <TrendingUpIcon
                                style={{
                                    fontSize: 17,
                                    color: 'rgb(16, 203, 16)',
                                }}
                            />
                        </div>
                        <div>18</div>
                    </div>
                ) : (
                    <div
                        className="numberOfVisitsNegative"
                        style={{ color: 'black' }}
                    >
                        <div style={{ paddingTop: '0.3em' }}>
                            <TrendingDownIcon
                                style={{
                                    fontSize: 17,
                                    color: 'rgb(251, 0, 0)',
                                }}
                            />
                        </div>
                        <div>18</div>
                    </div>
                )}
                <form action="">
                    <div className="client_individual_chart_selector_income_percentage">
                        <select name="clientIndividualIncomeChange">
                            <option value="perMonth">vs Month</option>
                            <option value="perWeek">vs Week</option>
                            <option value="perYear">vs Year</option>
                            <option value="allTime">vs All Time</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}

ClientIncomeChange.propTypes = {}

export default ClientIncomeChange
