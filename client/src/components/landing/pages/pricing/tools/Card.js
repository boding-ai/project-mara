import React from 'react'
import PropTypes from 'prop-types'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'

const Card = ({ price, title, currency, duration, features }) => {
    return (
        <>
            <div className="pricing_card">
                <div className="header">
                    {title === 'Pro' && <div className="ribbon">Popular</div>}
                    <div
                        className="title flex_middle"
                        style={
                            title === 'Pro' ? {} : { color: 'rgb(75, 75, 75)' }
                        }
                    >
                        {title}
                    </div>
                    <div className="flex_middle">
                        <div
                            className="currency"
                            style={{ marginRight: '0.6em' }}
                        >
                            {currency}
                        </div>
                        <div className="price">{price}</div>
                        <div className="duration flex_right">{duration}</div>
                    </div>
                </div>
                <div className="body app">
                    {features.length > 0 &&
                        features.map((element, index) => (
                            <div className="feature" key={index}>
                                {element.state === 'mid' && (
                                    <div className="flex_middle">
                                        <div
                                            className="state-mid"
                                            style={{
                                                margin: '0.1em 0.4em 0 0',
                                            }}
                                        >
                                            <RemoveIcon
                                                style={{ color: '#eded0e' }}
                                            />
                                        </div>
                                        <div className="feature-detail">
                                            {element.detail}
                                        </div>
                                    </div>
                                )}
                                {element.state === 'yes' && (
                                    <div className="flex_middle">
                                        <div
                                            className="state-yes"
                                            style={{
                                                margin: '0.1em 0.4em 0 0',
                                            }}
                                        >
                                            <CheckIcon
                                                style={{
                                                    color: '#21c44d',
                                                    fontWeight: '700',
                                                }}
                                            />
                                        </div>
                                        <div className="feature-detail">
                                            {element.detail}
                                        </div>
                                    </div>
                                )}
                                {element.state === 'no' && (
                                    <div className="flex_middle">
                                        <div
                                            className="state-no"
                                            style={{
                                                margin: '0.2em 0.4em 0 0',
                                            }}
                                        >
                                            <CloseIcon
                                                style={{ fontSize: 18 }}
                                            />
                                        </div>
                                        <div className="feature-detail-no">
                                            {element.detail}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
                <div className="footer flex_middle">
                    <div className={`pricing-button-${title} flex_middle`}>
                        <div className="icon">
                            <AddShoppingCartIcon
                                style={{
                                    fontSize: 18,
                                    margin: '0.25em 0.2em 0 0',
                                }}
                            />
                        </div>
                        <div className="text">Join</div>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {}

export default Card