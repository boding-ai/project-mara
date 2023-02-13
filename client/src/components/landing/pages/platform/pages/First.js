import React from 'react'
import { Link } from 'react-router-dom'

import landingBackground from '../../../../../resources/images/landing/platform/pages/first/landingPageImageRectangle.jpg'
import birdsFlying from '../../../../../resources/images/landing/platform/pages/first/birdsFlyingAnimal.png'
import monkeyAnimal from '../../../../../resources/images/landing/platform/pages/first/monkeyAnimal.png'
import tigerAnimal from '../../../../../resources/images/landing/platform/pages/first/tigerAnimal.png'

const First = ({ innerRef }) => {
    return (
        <div className="first-page" ref={innerRef}>
            <div className="animals">
                <img src={birdsFlying} alt="" />
            </div>
            <div className="one flex_middle">
                <div className="app">
                    <div className="title">In us, vets trust!</div>
                    <div className="description" style={{ lineHeight: '1.5em', marginBottom: '2em' }} >
                        Best in-class medical platform for veterinarians and medical professionals.
                    </div>
                    <div className="get">
                        <Link to="/pricing">
                            <div className="button flex_middle">
                                Get Started for Free!
                            </div>
                        </Link>
                        <div className="animals-two">
                            <img src={monkeyAnimal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="two flex_middle">
                <div className="image">
                    <img src={landingBackground} alt="" />
                    <div className="outline"></div>
                    <div className="animals-three">
                        <img src={tigerAnimal} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First