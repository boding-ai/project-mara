import React from 'react'
import PropTypes from 'prop-types'

import SoldRectangle from '../../../tools/rectangles/SoldRectangle'
import PurchaseRectangle from '../../../tools/rectangles/PurchaseRectangle'
import AppointmentRectangle from '../../../tools/rectangles/AppointmentRectangle'
import ReportRectangle from '../../../tools/rectangles/ReportRectangle'

const StoriesIndivClient = props => {
    return (
        <>
            <div className="marginB_2 app">
                <AppointmentRectangle />
                <SoldRectangle />
                <ReportRectangle />
                <PurchaseRectangle />
            </div>
        </>
    )
}

StoriesIndivClient.propTypes = {

}

export default StoriesIndivClient
