// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useWindow from 'react-window-size-simple'

import {
    Legend,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts'

import { connect } from 'react-redux'

// import {
//     getVisitorsPerCountryToday,
//     getVisitorsPerCountryWeek,
//     getVisitorsPerCountryMonth,
//     getVisitorsPerCountryYear,
//     getVisitorsPerCountryAllTime,
// } from '../../../../redux/actions/metrics'

import NothingToShow from '../../NothingToShow'
import ShortDurationSelector from '../ShortDurationSelector'
import Spinner from '../../Spinner'

const COLORS = [
    '#0088FE',
    '#00C49F',
    '#0FBB28',
    '#FF8042',
    '#FD8042',
    '#AF0042',
    '#HF0042',
    '#FF0032',
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

const TypeOfVisit = ({
    // // Redux Actions
    // getVisitorsPerCountryToday,
    // getVisitorsPerCountryWeek,
    // getVisitorsPerCountryMonth,
    // getVisitorsPerCountryYear,
    // getVisitorsPerCountryAllTime,
    // // Redux State
    metrics: { typeOfVisitChartLoading, typeOfVisitChart },
}) => {
    const { width, height } = useWindow()
    const [duration, setDuration] = useState('week')

    // useEffect(() => getVisitorsPerCountryToday(), [])

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
        if (e.target.value === 'week') {
            // getVisitorsPerCountryWeek()
        }
        if (e.target.value === 'month') {
            // getVisitorsPerCountryMonth()
        }
        if (e.target.value === 'year') {
            // getVisitorsPerCountryYear()
        }
    }

    return (
        <div className="charts flex_middle">
            <div className={'card-metrics'}>
                <div className="triple_grid">
                    <div></div>
                    <div className="title flex_middle">
                        Type Of Visits
                    </div>
                    <div className="flex_middle">
                        <ShortDurationSelector
                            onChangeDuration={onChangeDuration}
                            duration={duration}
                        />
                    </div>
                </div>
                {typeOfVisitChartLoading ? (
                    <div className="flex_middle" style={{ marginTop: '125px' }}>
                        <Spinner />
                    </div>
                ) : (
                    <>
                        {typeOfVisitChart.length > 0 ? (
                            <ResponsiveContainer
                                width="99%"
                                height={width < 768 ? 270 : '99%'}
                            >
                                <PieChart>
                                    <Pie
                                        data={typeOfVisitChart}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {typeOfVisitChart.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            )
                                        )}
                                    </Pie>
                                    <Tooltip />
                                    <Legend
                                        layout="horizontal"
                                        verticalAlign="bottom"
                                        align="center"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div style={{ marginTop: '6em' }}>
                                <NothingToShow
                                    primaryMessage={'Chart is empty'}
                                    secondaryMessage={
                                        "You've no messages hence no chart!"
                                    }
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

TypeOfVisit.propTypes = {
    metrics: PropTypes.object.isRequired,
    // getVisitorsPerCountryToday: PropTypes.func.isRequired,
    // getVisitorsPerCountryWeek: PropTypes.func.isRequired,
    // getVisitorsPerCountryMonth: PropTypes.func.isRequired,
    // getVisitorsPerCountryYear: PropTypes.func.isRequired,
    // getVisitorsPerCountryAllTime: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    metrics: state.metrics,
})

const mapStateToActions = {
    // getVisitorsPerCountryToday,
    // getVisitorsPerCountryWeek,
    // getVisitorsPerCountryMonth,
    // getVisitorsPerCountryYear,
    // getVisitorsPerCountryAllTime,
}

export default connect(mapStateToProps, mapStateToActions)(TypeOfVisit)
