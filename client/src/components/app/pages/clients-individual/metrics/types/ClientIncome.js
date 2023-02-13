import React from 'react'
// import PropTypes from 'prop-types'

import QuestionMarkTrigger from './QuestionMarkTrigger'

const message= "Income due to client in the given time frame"

const ClientIncome = (props) => {

    return (
        <>
            <div className="metrics_client_individual_headers">
                <div>Client Income</div>
                <QuestionMarkTrigger message={message} />
            </div>
            <div className="center_everything">
                <div className="center_everything">
                    &#8377;<h5>10</h5>
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

// ClientIncome.propTypes = {}

export default ClientIncome
