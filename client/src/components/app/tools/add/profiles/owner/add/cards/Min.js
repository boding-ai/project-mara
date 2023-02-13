import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import Minimized from '../../../../../min-max/Minimized'

const Min = ({ onExpandMore, onWindowClose, formData }) => {

    const { ownerName } = formData

    return (
        <>
            <div
                className="card_minimized_ce"
                style={{
                    backgroundColor: '#5cbcfa',
                }}
            >
                <div className="title flex_left" onClick={onExpandMore}>
                    <div style={{ marginRight: '0.4em' }}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                        {ownerName.length > 0
                            ? ownerName.length > 12
                                ? ownerName.slice(0, 12) + '...'
                                : ownerName
                            : 'Add Owner'}
                    </div>
                </div>
                <div>
                    <Minimized
                        close={onWindowClose}
                        maximize={onExpandMore}
                        dark={false}
                        maximizeIconSize={19}
                        closeIconSize={15}
                        margin={'0 0.5em 0.5em 0'}
                        maximizeIconMargin={'0.1em 0 0 0'}
                        iconGap={'0.2em'}
                    />
                </div>
            </div>
        </>
    )
}

Min.propTypes = {}

export default Min
