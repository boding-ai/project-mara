import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import ClearIcon from '@mui/icons-material/Clear'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faPaw,
} from '@fortawesome/free-solid-svg-icons'
import Minimized from '../../../../../min-max/Minimized'

const Min = ({ onExpandMore, onWindowClose, formData }) => {

    const { petName } = formData

    return (
        <>
            <div
                className="card_minimized_ce"
                style={{
                    backgroundColor: '#5cbcfa',
                }}
            >
                <div
                    className="title flex_start_everything"
                    onClick={onExpandMore}
                >
                    <div style={{ marginRight: '0.4em' }}>
                        <FontAwesomeIcon icon={faPaw} />
                    </div>
                    <div>
                        {petName.length > 0
                            ? petName.length > 12
                                ? petName.slice(0, 12) + '...'
                                : petName
                            : 'Add Pet'}
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
