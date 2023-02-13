import { Droppable } from 'react-beautiful-dnd'
import React, { useState } from 'react'

import IndividualElement from './IndividualElement'
import NothingToShow from '../../dashboard/stats/NothingToShow'

const ListColumn = ({ prefix, elements }) => {

    const [headerColor, setHeaderColor] = useState('#000')

    useState(() => {
        console.log(elements)
        switch (true) {
            case prefix === 'upcoming':
                setHeaderColor('#eb4034')
                break

            case prefix === 'in-progress':
                setHeaderColor('#ebdb34')
                break

            case prefix === 'done':
                setHeaderColor('#34eb40')
                break

            default:
                return null
        }
    }, [prefix])

    return (
        <div
            className="app"
            style={{
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid grey',
            }}
        >
            <div
                style={{
                    marginBottom: '18px',
                    textTransform: 'uppercase',
                    fontSize: '1.1em',
                    fontFamily: 'Inter, sans-serif',
                    color: `${headerColor}`,
                }}
            >
                {prefix}
            </div>
            <Droppable droppableId={`${prefix}`}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {elements.length > 0 ? (
                            elements.map((item, index) => (
                                <IndividualElement
                                    key={item.id}
                                    item={item}
                                    index={index}
                                />
                            ))
                        ) : (
                            <NothingToShow primaryMessage={'Nothings to Show!'} secondaryMessage={`No new events in ${prefix}`} />
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default ListColumn
