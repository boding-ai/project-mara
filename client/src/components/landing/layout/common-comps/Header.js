import React from 'react'

import {
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bodingaBwLogo from '../../../../resources/images/logos/bodinga-logos/whiteLogo.png'

const Header = ({
    title,
    imageUrl,
    type,
    description,
    imageSize,
    navbar,
    scroll,
    goToRef,
}) => {
    return (
        <div className="header-page-fixed">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    height: `${imageSize || '45vh'}`,
                }}
                data-aos={scroll ? "zoom-in" : ""}
            >
                {scroll && (
                    <div className="flex_middle">
                        <div className="scroll-down">
                            <div
                                class="mouse_scroll cursor_pointer"
                                onClick={goToRef}
                            >
                                <div class="text">SCROLL</div>
                                <div>
                                    <span class="m_scroll_arrows unu"></span>
                                    <span class="m_scroll_arrows doi"></span>
                                    <span class="m_scroll_arrows trei"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {navbar}
            <div className="flex_middle">
                <div className="title app" style={scroll ? { } : { top: '35%' }} >
                    <div className="flex_middle">
                        {type === 'tutorials' && (
                            <FontAwesomeIcon
                                icon={faChalkboardTeacher}
                                style={{ marginTop: '0.2em' }}
                            />
                        )}
                        {type === 'about' && (
                            <img
                                src={bodingaBwLogo}
                                alt="Bodinga B and W Logo"
                            />
                        )}
                        <div style={{ marginLeft: '0.5em' }}>{title}</div>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {}

export default Header