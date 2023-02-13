import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GoogleIcon from '@mui/icons-material/Google'
import { Link } from 'react-router-dom'

const GoogleIconGradient = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="linearColorsThree" x1={1} y1={0} x2={1} y2={1}>
                <stop offset={0} stopColor="#4285f4" />
                <stop offset={0.3} stopColor="#34a853" />
                <stop offset={0.6} stopColor="#fbbc05" />
                <stop offset={1} stopColor="#ea4335" />
            </linearGradient>
        </svg>
        <GoogleIcon sx={{ fill: 'url(#linearColorsThree)' }} />
    </>
)

// Images
const Login = ({
    imageUrl,
    type,
    description,
    writtenImageUrl,
}) => {
    return (
        <>
            <div className="card-login-select flex_middle">
                <div className="app">
                    <div className="app">
                        <div className="img2">
                            <img
                                src={imageUrl}
                                alt="Bodinga Logo"
                                style={{
                                    width: '22%',
                                    objectFit: 'contain',
                                    marginTop: '0.8em',
                                }}
                            />
                        </div>
                        {type === 'vets' && (
                            <div style={{ marginTop: '0.3em' }}>
                                <img
                                    src={writtenImageUrl}
                                    alt="Bodinga Type of Software"
                                    style={{
                                        objectFit: 'contain',
                                        width: '20%',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div
                        className="title"
                        style={{
                            fontSize: '1em',
                            marginTop: '0.8em',
                            margin: '0.3em 2em',
                        }}
                    >
                        {description}
                    </div>
                    <div
                        className="sign-in-button flex_middle"
                        onClick={() =>
                            window.open(
                                'http://localhost:9000/api/v1/users/google/login',
                                '_self'
                            )
                        }
                    >
                        <div style={{ margin: '0.3em 0.7em 0 0' }}>
                            <GoogleIconGradient />
                        </div>
                        <div>Login</div>
                    </div>
                    <div
                        style={{
                            margin: '1em 1em 1em 1em',
                            borderTop: '1px solid rgb(201, 189, 189)',
                            width: '100%',
                        }}
                    ></div>
                    <div
                        className="sign-in-button flex_middle"
                        onClick={() =>
                            window.open(
                                'http://localhost:9000/api/v1/users/google/login',
                                '_self'
                            )
                        }
                    >
                        <div style={{ margin: '0.35em 0.7em 0 0' }}>
                            <GoogleIconGradient />
                        </div>
                        <div>Register</div>
                    </div>
                    <div className="tandc">
                        By registering, you agree to our{' '}
                        <span>
                            <Link
                                to="/legal/privacy"
                                target={'_blank'}
                                rel="noopenner nofollow noreferrer"
                            >
                                privacy policy
                            </Link>
                        </span>{' '}
                        and{' '}
                        <span>
                            <Link
                                to="/legal/terms"
                                target={'_blank'}
                                rel="noopenner nofollow noreferrer"
                            >
                                terms
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.propTypes = {
}

const mapStateToProps = (state) => ({})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Login)
