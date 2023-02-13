import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const Maximized = ({
    // Functions
    close,
    minimize,
    fullClose,

    // Style
    dark,

    minimizeIconSize,
    expandMoreMarginTop,

    closeIconSize,
    closeIconMargin,

    fullCloseIconSize,
    iconGap,
    margin,
}) => {
    const defaultMargin = '0.2em 0.5em 0 0'

    return (
        <div
            className="minimize_icons"
            style={{
                margin: `${margin || defaultMargin}`,
            }}
        >
            <div className="flex_middle">
                <Popup
                    trigger={
                        <ExpandMoreIcon
                            style={{
                                fontSize: minimizeIconSize || 20,
                                marginRight: iconGap || '0.3em',
                                marginTop: expandMoreMarginTop || '0em',
                            }}
                            className={dark ? 'icon3' : 'icon1'}
                            onClick={minimize}
                        />
                    }
                    style={{
                        height: '7px',
                        padding: '1px 5px 16px 5px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        marginBottom: '1.2em',
                        background: '#666666',
                    }}
                    basic
                    inverted
                    content="Minimize"
                    position="bottom center"
                    size="mini"
                />
            </div>
            {fullClose && (
                <div className="flex_middle">
                    <Popup
                        trigger={
                            <OpenInFullIcon
                                style={{
                                    fontSize: fullCloseIconSize || 13,
                                    marginRight: iconGap || '0.3em',
                                }}
                                className={dark ? 'icon3' : 'icon1'}
                                onClick={fullClose}
                            />
                        }
                        style={{
                            height: '7px',
                            padding: '1px 5px 16px 5px',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            marginBottom: '1.4em',
                            background: '#666666',
                        }}
                        basic
                        inverted
                        content="Enlarge Window"
                        position="top center"
                        size="mini"
                    />
                </div>
            )}
            <div className="flex_middle">
                <Popup
                    trigger={
                        <ClearIcon
                            style={{
                                fontSize: closeIconSize || 17,
                                margin: `${closeIconMargin || '0.08em 0 0 0'}`,
                            }}
                            className={dark ? 'icon4' : 'icon2'}
                            onClick={close}
                        />
                    }
                    style={{
                        height: '7px',
                        padding: '1px 5px 16px 5px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        marginBottom: '1.2em',
                        background: '#666666',
                    }}
                    basic
                    inverted
                    content="Close"
                    position="bottom center"
                    size="mini"
                />
            </div>
        </div>
    )
}

Maximized.propTypes = {}

export default Maximized
