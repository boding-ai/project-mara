import React from 'react'

import { Link } from 'react-router-dom'

import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Feature left is when the image is on the left side.

const FeatureLeft = ({
    title,
    description,
    image,
    imageAlt,
    margin,
    backgroundColor,
    backgroundGradient,
    featureTextColor,
}) => {
    return (
        <>
            <div
                className="feature-background "
                style={{
                    margin: `${margin}`,
                    background: `${backgroundColor}`,
                    background: `${backgroundGradient}`,
                }}
            >
                <div className="flex_middle">
                    <div className="second-page-feature-left">
                        <div className="three flex_middle">
                            <div class="computer">
                                <img src={image} alt={imageAlt} />
                            </div>
                        </div>
                        <div className="one flex_middle">
                            <div className="app">
                                <div
                                    className="title"
                                    style={{ color: `${featureTextColor}` }}
                                >
                                    {title}
                                </div>
                                <div
                                    className="description flex_middle"
                                    style={{ color: `${featureTextColor}` }}
                                >
                                    {description}
                                </div>
                                <div>
                                    <Link to="/register">
                                        <div
                                            className="flex_middle go"
                                            style={{
                                                color: `${featureTextColor}`,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: '1em',
                                                    marginRight: '0.6em',
                                                }}
                                            >
                                                Go
                                            </div>
                                            {/* <div>
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    className="arrow"
                                                />
                                            </div> */}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureLeft