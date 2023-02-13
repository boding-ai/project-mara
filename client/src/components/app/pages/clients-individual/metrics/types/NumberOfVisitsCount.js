import React, { useState } from 'react'
import PropTypes from 'prop-types'

import QuestionMarkTrigger from './QuestionMarkTrigger'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const message = "Visits by the client on the given time frame"

const NumberOfVisitsCount = (props) => {
    const [isTrendingUp, setisTrendingUp] = useState(true)

    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Total Visits</div>
                <QuestionMarkTrigger message={message}/>
            </div>
            <div className="center_everything">
                <div>
                    <h5>10</h5>
                </div>
                <form action="">
                    <div className="client_individual_chart_selector_income_percentage">
                        <select name="clientIndividualIncomeChange">
                            <option value="perMonth">Month</option>
                            <option value="perWeek">Week</option>
                            <option value="perYear">Year</option>
                            <option value="allTime">All Time</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}

NumberOfVisitsCount.propTypes = {}

export default NumberOfVisitsCount
