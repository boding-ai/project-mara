import React, { useState } from 'react'
import PropTypes from 'prop-types'

import QuestionMarkTrigger from './QuestionMarkTrigger'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const message="Percentage change in income due to client in the given time frame"

const ClientIncomeChange = props => {
    const [isTrendingUp, setisTrendingUp] = useState(true)

    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Income Change</div>
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
                            <TrendingDownIcon style={{ fontSize: 17 }} />
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

ClientIncomeChange.propTypes = {

}

export default ClientIncomeChange
