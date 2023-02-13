import { Draggable } from 'react-beautiful-dnd'
import React from 'react'
import styled from 'styled-components'

const DragItem = styled.div`
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background: white;
    margin: 0 0 1.2em 0;
    display: grid;
    grid-gap: 20px;
    flex-direction: column;
    
`

const IndividualElement = ({ item: { content, head, id }, index }) => {

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided, snapshot) => {
                return (
                    <DragItem
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div style={{ fontWeight: '500' }} >{head}</div>
                        <span>Content</span>
                        <div style={{ width: '100%' }} className='flex_between' >
                            <span>{content}</span>
                        </div>
                    </DragItem>
                )
            }}
        </Draggable>
    )
}

export default IndividualElement
