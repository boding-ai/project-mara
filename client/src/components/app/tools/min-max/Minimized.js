import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import ClearIcon from '@mui/icons-material/Clear'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const Minimized = ({
    // Functions
    close,
    maximize,
    fullOpen,

    // Style
    dark,

    maximizeIconMargin,
    maximizeIconSize,

    closeIconSize,
    closeIconMargin,

    fullOpenIconSize,
    iconGap,
    margin,
}) => {
    const defaultMargin = '0em 0.5em 0 0'

    return (
        <div
            className={'minimize_icons'}
            style={{
                margin: `${margin || defaultMargin}`,
            }}
        >
            <div className="flex_middle">
                <Popup
                    trigger={
                        <ExpandLessIcon
                            style={{
                                fontSize: maximizeIconSize || 20,
                                margin: `${
                                    maximizeIconMargin || '0 0 0 0'
                                }`,
                                marginRight: iconGap || '0.3em',
                            }}
                            className={dark ? 'icon3' : 'icon1'}
                            onClick={maximize}
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
                    content="Maximize"
                    position="bottom center"
                    size="mini"
                />
            </div>
            {fullOpen && (
                <div className="flex_middle">
                    <Popup
                        trigger={
                            <OpenInFullIcon
                                style={{
                                    fontSize: fullOpenIconSize || 13,
                                    marginRight: iconGap || '0.3em',
                                }}
                                className={dark ? 'icon3' : 'icon1'}
                                onClick={fullOpen}
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
                        content="Maximize Window"
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

Minimized.propTypes = {}

export default Minimized
