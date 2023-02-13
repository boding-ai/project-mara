import React, { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListColumn from './ListColumn'

import { data } from '../data/data'

import {
    changeUpcomingEventPrefix
} from '../../../../../redux/actions/upcoming/upcoming'

const removeFromList = (list, index) => {
    const result = Array.from(list)
    const [removed] = result.splice(index, 1)
    return [removed, result]
}

const addToList = (list, index, element) => {
    const result = Array.from(list)
    result.splice(index, 0, element)
    return result
}

const lists = ['upcoming', 'inProgress', 'done']


const DragList = ({
    // Redux Actions
    changeUpcomingEventPrefix,

    // Redux States
    upcoming: { eventList },
}) => {
    const [elements, setElements] = useState({
        upcoming: eventList.filter((val) => {
            return val.prefix === 'upcoming'
        }),
        inProgress: eventList.filter((val) => {
            return val.prefix === 'inProgress'
        }),
        done: eventList.filter((val) => {
            return val.prefix === 'done'
        }),
    })

    useEffect(() => {
        const val = {}
        val.upcoming = eventList.filter((val) => {
            return val.prefix === 'upcoming'
        })
        val.inProgress = eventList.filter((val) => {
            return val.prefix === 'inProgress'
        })
        val.done = eventList.filter((val) => {
            return val.prefix === 'done'
        })
        setElements(val)
    }, [eventList])

    const onDragEnd = (result) => {
        console.log(
            result.source,
            result.destination,
            parseInt(result.draggableId)
        )

        if (!result.destination) {
            return
        }
        const listCopy = { ...elements }

        const sourceList = listCopy[result.source.droppableId]

        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        )

        listCopy[result.source.droppableId] = newSourceList
        const destinationList = listCopy[result.destination.droppableId]
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        )

        changeUpcomingEventPrefix(
            result.source,
            result.destination,
            parseInt(result.draggableId),
            elements,
            listCopy
        )

        setElements(listCopy)
    }

    return (
        <div style={{ width: '90%' }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="triple_grid" style={{ gridGap: '40px' }}>
                    {lists.map((listKey) => (
                        <ListColumn
                            elements={elements[listKey]}
                            key={listKey}
                            prefix={listKey}
                        />
                    ))}
                </div>
            </DragDropContext>
        </div>
    )
}

DragList.propTypes = {
    upcoming: PropTypes.object.isRequired,
    changeUpcomingEventPrefix: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    upcoming: state.upcoming,
})

const mapActionsToProps = {
    changeUpcomingEventPrefix,
}

export default connect(mapStateToProps, mapActionsToProps)(DragList)
