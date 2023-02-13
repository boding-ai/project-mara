import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import QuestionMarkTrigger from './QuestionMarkTrigger'

const message = "Change in the percentage of visitation by the client"

const NumberOfVisitsTotal = (props) => {
    const [isTrendingUp, setisTrendingUp] = useState(false)

    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Visits Change</div>
                <QuestionMarkTrigger message={message} />
            </div>
            <div className="center_everything">
                {!isTrendingUp ? (
                    <div className="numberOfVisitsPositive">
                        <div style={{ paddingTop: '0.3em' }}>
                            <TrendingUpIcon style={{ fontSize: 17 }} />
                        </div>
                        <div>18.2%</div>
                    </div>
                ) : (
                    <div className="numberOfVisitsNegative">
                        <div style={{ paddingTop: '0.3em' }}>
                            <TrendingUpIcon style={{ fontSize: 17 }} />
                        </div>
                        <div>18.2%</div>
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

NumberOfVisitsTotal.propTypes = {}

export default NumberOfVisitsTotal
