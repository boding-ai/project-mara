// A chart for average tuu time in minutes and the number of tuus done per time

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../../Spinner'

import DurationSelector from '../DurationSelector'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

const SynopsisHits = ({
    // Redux State
    metrics: {
        totalRevenueBlockLoading,
        totalRevenueBlock,
        totalRevenueBlockToday,
    },
}) => {
    const [duration, setDuration] = useState('today')
    const [currentValue, setCurrentValue] = useState(0)

    // useEffect(() => getTotalHitsToday(), [])

    useEffect(() => {
        if (totalRevenueBlockToday === 0) {
            setCurrentValue((parseInt(totalRevenueBlock) * 100).toFixed(1))
        } else {
            setCurrentValue(
                (
                    ((parseInt(totalRevenueBlock) -
                        parseInt(totalRevenueBlockToday)) /
                        parseInt(totalRevenueBlockToday)) *
                    100
                ).toFixed(1)
            )
        }
    }, [])

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
        if (e.target.value === 'today') {
            // getTotalHitsToday()
        }
        if (e.target.value === 'week') {
            // getTotalHitsWeek()
        }
        if (e.target.value === 'month') {
            // getTotalHitsMonth()
        }
        if (e.target.value === 'year') {
            // getTotalHitsYear()
        }
        if (e.target.value === 'all-time') {
            // getTotalHitsAllTime()
        }
    }
    return (
        <div className="charts flex_middle">
            <div
                className={'app block'}
                style={{ justifyContent: 'space-between' }}
            >
                <div className="title flex_middle">Total Revenue</div>
                {totalRevenueBlockLoading ? (
                    <div className="flex_middle">
                        <Spinner />
                    </div>
                ) : (
                    <div className="triple_grid-block">
                        <div>
                            {currentValue == 0 ? (
                                <div className="value--change">
                                    <div
                                        style={{ color: 'grey' }}
                                        className="flex_middle"
                                    >
                                        <div
                                            style={{
                                                marginRight: '0.3em',
                                                marginTop: '0.3em',
                                            }}
                                        >
                                            <TrendingFlatIcon />
                                        </div>
                                        <div>0%</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="value--change">
                                    {currentValue[0] === '-' ? (
                                        <div
                                            style={{ color: '#ff5252' }}
                                            className="flex_middle"
                                        >
                                            <div
                                                style={{
                                                    marginRight: '0.3em',
                                                    marginTop: '0.3em',
                                                }}
                                            >
                                                <TrendingDownIcon />
                                            </div>
                                            <div>{Math.abs(currentValue)}%</div>
                                        </div>
                                    ) : (
                                        <div
                                            style={{ color: '#7ed957' }}
                                            className="flex_middle"
                                        >
                                            <div
                                                style={{
                                                    marginRight: '0.3em',
                                                    marginTop: '0.3em',
                                                }}
                                            >
                                                <TrendingUpIcon />
                                            </div>
                                            <div>{Math.abs(currentValue)}%</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='value'>
                            {totalRevenueBlockToday}
                        </div>
                        <div></div>
                    </div>
                )}
                <div>
                    <DurationSelector
                        onChangeDuration={onChangeDuration}
                        duration={duration}
                    />
                </div>
            </div>
        </div>
    )
}

SynopsisHits.propTypes = {
    metrics: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    metrics: state.metrics,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(SynopsisHits)
