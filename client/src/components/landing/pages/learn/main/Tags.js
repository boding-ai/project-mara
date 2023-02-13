import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

const Tags = ({ tag }) => {
    return (
        <div
            className="flex_middle"
            style={{
                padding: '0.1em 0.5em',
                borderRadius: '5px',
                backgroundColor: '#cfcfcf',
                color: 'white',
                margin: '0 0.5em'
            }}
        >
            <FontAwesomeIcon icon={faTags} style={{ fontSize: 11 }} />
            <div style={{ marginLeft: '0.4em', fontSize: '0.9em' }}>{tag}</div>
        </div>
    )
}

export default Tags
