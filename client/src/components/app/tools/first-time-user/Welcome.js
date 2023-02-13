import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import bodingaLogo from '../../../../resources/images/logos/bodinga-logos/bodingaLogo.png'

import {
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ExploreIcon from '@mui/icons-material/Explore'


const Welcome = ({
    // Functions
    close,
    // Values
    name,
}) => {
    return (
        <>
            <div className="tools">
                <div className="welcome app">
                    <div className="triple_grid" style={{ width: '100%' }}>
                        <div></div>
                        <div className="flex_middle title">
                            <img src={bodingaLogo} alt="bodinga logo" />
                            <div style={{ marginLeft: '0.5em' }}>Welcome!</div>
                        </div>
                        <div className="close flex_right">
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{ fontSize: 18 }}
                                onClick={close}
                            />
                        </div>
                    </div>
                    <div className="body">
                        <div className="introduction">
                            <div className="first">
                                Hello, <b>Dr. {name}</b> it's good to have you
                                here!
                            </div>
                            <div>
                                We, at{' '}
                                <span style={{ color: '#ff6666' }}>
                                    Bodinga
                                </span>
                                , hope you have a great time using our
                                <i style={{ margin: '0 0.2em 0 0.2em' }}>
                                    lightweight
                                </i>
                                ,{' '}
                                <i style={{ margin: '0 0.2em 0 0.2em' }}>
                                    feature-rich
                                </i>{' '}
                                and{' '}
                                <i style={{ margin: '0 0.2em 0 0.2em' }}>
                                    free
                                </i>
                                to use platform!
                            </div>
                        </div>
                        <div className="sub-title app">
                            Let's get you started
                        </div>
                        <div className="list">
                            <div className="flex_left item">
                                <div className="icon">
                                    <SettingsIcon />
                                </div>
                                Update your{' '}
                                <span style={{ margin: '0 0.3em 0 0.3em' }}>
                                    <Link to="/me/settings"> Settings </Link>
                                </span>{' '}
                                and add your business details.
                            </div>
                            <div
                                className="flex_left item"
                                style={{ justifyContent: 'flex-start' }}
                            >
                                <div className="icon">
                                    <AddCircleOutline />
                                </div>
                                Click on the Quick Add icon on left bar to
                                quickly add pets, parents and more!
                            </div>
                            <div
                                className="flex_left item"
                                style={{ marginBottom: '1em' }}
                            >
                                <div className="icon">
                                    <PeopleAltIcon />
                                </div>
                                Visit the{' '}
                                <b style={{ margin: '0 0.3em 0 0.3em' }}>
                                    Clients
                                </b>{' '}
                                page to see all your pets and parents!
                            </div>
                            <div className="flex_left item">
                                <div className="icon">
                                    <ExploreIcon />
                                </div>
                                Browse through the website and explore!
                            </div>
                        </div>
                    </div>
                    <div className="close-button flex_middle" onClick={close}>
                        Okay!
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome