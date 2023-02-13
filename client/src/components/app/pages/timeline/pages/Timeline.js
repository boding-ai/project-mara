import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartArrowDown,
    faCartPlus,
    faCalendarCheck,
    faCircle,
} from '@fortawesome/free-solid-svg-icons'

import AppointmentRectangle from '../../../tools/rectangles/AppointmentRectangle'
import PurchaseRectangle from '../../../tools/rectangles/PurchaseRectangle'
import SoldRectangle from '../../../tools/rectangles/SoldRectangle'


const BigTimeline = (props) => {

    return (
        <>
                <Timeline position="alternate">
                  <TimelineItem>
                      <TimelineOppositeContent
                          sx={{ m: 'auto 0', fontSize: '11px', color: 'gray' }}
                      >
                          {moment('2022-03-20 00:00:00').fromNow()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot
                              variant="outlined"
                              sx={{ borderColor: '#c7c71a' }}
                          >
                              <FontAwesomeIcon
                                  icon={faCalendarCheck}
                                  style={{
                                      fontSize: 17,
                                      width: '20px',
                                      height: '20px',
                                      padding: '2px',
                                      color: 'gray',
                                  }}
                              />
                          </TimelineDot>
                          <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className="flex_middle">
                          <AppointmentRectangle complete={false} />
                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                      <TimelineOppositeContent
                          sx={{ m: 'auto 0', fontSize: '11px', color: 'gray' }}
                      >
                          {moment('2022-03-03 00:00:00').fromNow()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot
                              variant="outlined"
                              sx={{ borderColor: 'rgb(250, 91, 104)' }}
                          >
                              <FontAwesomeIcon
                                  icon={faCartArrowDown}
                                  style={{
                                      fontSize: 17,
                                      width: '20px',
                                      height: '20px',
                                      padding: '2px',
                                      color: 'gray',
                                  }}
                              />
                          </TimelineDot>
                          <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className="flex_middle">
                          <PurchaseRectangle complete={true} />
                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                      <TimelineOppositeContent
                          sx={{ m: 'auto 0', fontSize: '11px', color: 'gray' }}
                      >
                          {moment('2022-02-20 00:00:00').fromNow()}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot
                              variant="outlined"
                              sx={{ borderColor: 'rgb(99, 250, 91)' }}
                          >
                              <FontAwesomeIcon
                                  icon={faCartPlus}
                                  style={{
                                      fontSize: 17,
                                      width: '20px',
                                      height: '20px',
                                      padding: '2px',
                                      color: 'gray',
                                  }}
                              />
                          </TimelineDot>
                          <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent className="flex_middle">
                          <SoldRectangle complete={false} />
                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                      <TimelineSeparator>
                          <TimelineConnector />
                          <TimelineDot
                              variant="outlined"
                              sx={{ borderColor: 'rgb(239, 247, 248)' }}
                          >
                              <FontAwesomeIcon
                                  icon={faCircle}
                                  style={{
                                      width: '8px',
                                      height: '8px',
                                      color: 'gray',
                                  }}
                              />
                          </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent></TimelineContent>
                  </TimelineItem>
              </Timeline>
        </>
    )
}

BigTimeline.propTypes = {}

export default BigTimeline
