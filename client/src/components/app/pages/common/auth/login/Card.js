import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Images
const Login = ({
    imageUrl,
    title,
    type,
    description,
    writtenImageUrl,
    comingSoon,
}) => {
    return (
        <>
            <div className="card-login-select flex_middle">
                {comingSoon && (
                    <div class="wrap_around wrap_around-top-right">
                        <span>Coming Soon!</span>
                    </div>
                )}
                <div className="app">
                    <div className="app">
                        <div className="img2">
                            <img
                                src={imageUrl}
                                alt="Bodinga Logo"
                                style={
                                    type === 'vets'
                                        ? {
                                              width: '22%',
                                              objectFit: 'contain',
                                              marginTop: '0.8em',
                                          }
                                        : {
                                              width: '16%',
                                              objectFit: 'contain',
                                              marginTop: '0.8em',
                                          }
                                }
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
                        {type === 'medics' && (
                            <div style={{ marginTop: '0.3em' }}>
                                <img
                                    src={writtenImageUrl}
                                    alt="Bodinga Type of Software"
                                    style={{
                                        objectFit: 'contain',
                                        width: '30%',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <p
                        className="title"
                        style={{
                            fontSize: '0.9em',
                            marginTop: '0.6em',
                            margin: '0.3em 2em',
                        }}
                    >
                        {description}
                    </p>
                    {comingSoon ? (
                        <>
                                <div
                                    className={
                                        `button-not-allowed`
                                    }
                                    style={{
                                        marginTop: '2em',
                                    }}
                                >
                                    Login
                                </div>
                        </>
                    ) : (
                        <Link to={`/${type}/login`}>
                            <div
                                className={`button-${type}`}
                                style={{
                                    marginTop: '2em',
                                }}
                            >
                                Login
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

Login.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Login)
