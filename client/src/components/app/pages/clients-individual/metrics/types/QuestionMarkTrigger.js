import React from 'react'
import { Popup } from 'semantic-ui-react'

import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'

function QuestionMarkTrigger({ message }) {
    return (
        <>
            <div
                style={{
                    marginTop: '0.2em',
                    paddingLeft: '0.3em',
                    cursor: 'pointer',
                    color: '#d6d4d4',
                }}
            >
                <Popup
                    trigger={
                        <NotListedLocationIcon
                            style={{
                                fontSize: 10,
                            }}
                        />
                    }
                    style={{
                        fontSize: 11,
                    }}
                    content={message}
                    position="right center"
                    inverted
                    basic
                />
            </div>
        </>
    )
}

export default QuestionMarkTrigger
