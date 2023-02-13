import React, { useCallback, useEffect, useMemo, useState } from 'react'
import moment from 'moment'

import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: 'CHECK THIS',
        allDay: false,
        start: new Date(2022, 3, 14, 10, 30, 0, 0),
        end: new Date(2022, 3, 14, 12, 30, 0, 0),
        id: 1,
        type: 'appointment',
    },
    {
        title: 'All Day Event very long title',
        allDay: true,
        start: moment('2022-04-14T07:48:00.223Z')._d,
        end: moment('2022-04-14T07:48:00.223Z')._d,
        id: 17,
        type: 'appointment',
    },
    {
        title: 'Long Event',
        start: new Date(2022, 3, 7),
        end: new Date(2022, 3, 10),
        id: 2,
        type: 'payment',
    },

    {
        title: 'CHECKKKK',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
        id: 3,
        type: 'vaccination',
    },

    {
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
        id: 4,
        type: 'vaccination',
    },

    {
        title: 'Some Event',
        start: new Date(2022, 3, 9, 0, 0, 0),
        end: new Date(2022, 3, 9, 0, 0, 0),
        id: 5,
        type: 'vaccination',
    },
    {
        title: 'Conference',
        start: new Date(2022, 3, 11),
        end: new Date(2022, 3, 13),
        desc: 'Big conference for important people',
        id: 6,
    },
    {
        title: 'Meeting',
        start: new Date(2022, 3, 12, 10, 30, 0, 0),
        end: new Date(2022, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
        id: 7,
    },
    {
        title: 'Lunch',
        start: new Date(2022, 3, 12, 12, 0, 0, 0),
        end: new Date(2022, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
        id: 8,
    },
    {
        title: 'Meeting',
        start: new Date(2022, 3, 12, 14, 0, 0, 0),
        end: new Date(2022, 3, 12, 15, 0, 0, 0),
        id: 9,
    },
    {
        title: 'Happy Hour',
        start: new Date(2022, 3, 12, 17, 0, 0, 0),
        end: new Date(2022, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
        id: 10,
    },
    {
        title: 'Dinner',
        start: new Date(2022, 3, 12, 20, 0, 0, 0),
        end: new Date(2022, 3, 12, 21, 0, 0, 0),
        id: 11,
    },
    {
        title: 'Birthday Party',
        start: new Date(2022, 3, 13, 11, 0, 0),
        end: new Date(2022, 3, 13, 13, 30, 0),
        id: 12,
    },
    {
        title: 'Birthday Party 2',
        start: new Date(2022, 3, 13, 7, 0, 0),
        end: new Date(2022, 3, 13, 10, 30, 0),
        id: 13,
    },
    {
        title: 'Birthday Party 3',
        start: new Date(2022, 3, 13, 7, 0, 0),
        end: new Date(2022, 3, 13, 10, 30, 0),
        id: 14,
        type: 'vaccination',
    },
    {
        title: 'Late Night Event',
        start: new Date(2022, 3, 17, 19, 30, 0),
        end: new Date(2022, 3, 18, 2, 0, 0),
        id: 15,
    },
    {
        title: 'Let us Check',
        start: new Date(2022, 3, 20, 19, 30, 0),
        end: new Date(2022, 3, 20, 20, 0, 0),
        id: 16,
        type: 'appointment',
    },
]

const DragAndDropCalendar = withDragAndDrop(Calendar)

const BigCalendar = (props) => {
    useEffect(() => {
        console.log(moment('2022-04-12T07:48:00.223Z')._d)
        console.log(moment('2022-04-12T08:48:00.223Z')._d)
        console.log(new Date(2015, 3, 20, 19, 30, 0))
        console.log(moment('2022-04-12T07:48:00.223Z').year())
        // console.log(new Date('2022-04-12T07:48:00.223Z'.fromNow()))
    })

    const [myEvents, setMyEvents] = useState(myEventsList)

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
            const { allDay } = event
            if (!allDay && droppedOnAllDaySlot) {
                event.allDay = true
            }

            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev) => ev.id !== event.id)
                return [...filtered, { ...existing, start, end, allDay }]
            })
        },
        [setMyEvents]
    )

    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev) => ev.id !== event.id)
                return [...filtered, { ...existing, start, end }]
            })
        },
        [setMyEvents]
    )

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event name')
            if (title) {
                setMyEvents((prev) => [...prev, { start, end, title }])
            }
        },
        [setMyEvents]
    )

    const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
        []
    )

    const defaultDate = useMemo(() => new Date(), [])
    return (
        <div style={{ border: '1px solid red' }}>
                <DragAndDropCalendar
                    defaultDate={defaultDate}
                    defaultView={Views.MONTH}
                    events={myEvents}
                    localizer={localizer}
                    onEventDrop={moveEvent}
                    onEventResize={resizeEvent}
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={handleSelectEvent}
                    popup
                    resizable
                    selectable
                    style={{ height: '100vh' }}
                    eventPropGetter={(event, start, end, isSelected) => {
                        let newStyle = {
                            backgroundColor: 'lightgrey',
                            borderRadius: '5px',
                            border: 'none',
                            color: 'white',
                            fontSize: '12px',
                        }

                        if (event.type === 'appointment') {
                            newStyle.backgroundColor = '#e6a800'
                        }
                        if (event.type === 'vaccination') {
                            newStyle.backgroundColor = 'blue'
                        }
                        if (event.type === 'payment') {
                            newStyle.backgroundColor = 'green'
                        }

                        if (
                            event.end < new Date() &&
                            event.type === 'appointment'
                        ) {
                            newStyle.backgroundColor = '#e6d19a'
                            newStyle.color = 'grey'
                        }

                        return {
                            className: '',
                            style: newStyle,
                        }
                    }}
                />
        </div>
    )
}

BigCalendar.propTypes = {}

export default BigCalendar
