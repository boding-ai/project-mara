import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import useInterval from 'use-interval'
import { Redirect, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import Header from '../../common-comps/Header'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

import redirectToLogin from '../../../../resources/images/redirect/redirectToLogin.png'
import headerImg from '../../../../resources/images/landing/learn/headers/orange.svg'

const LearnCheckAuth = ({
    // Redux States
    auth: { isAuthenticated },
}) => {
    const history = useHistory()

    const [count, setCount] = useState(1)

    useInterval(() => {
        if(count === 5) {
          history.push('/sign-in')
        } else {
        }
        setCount(count + 1)
    }, 1000)

    if (isAuthenticated) {
        return <Redirect to="/learn" />
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Learn - | Bodinga &middot; Let's learn something
                    new :)
                </title>
                <link
                    rel="canonical"
                    href="https://bodinga.com/blog/tutorials/check-auth"
                />
            </Helmet>
            <Navbar isActive={true} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className={'blog'}>
                    <Header
                        title={'Learn'}
                        imageUrl={headerImg}
                        type={'tutorials'}
                        description={
                            'Learn to wield the true power of Bodinga with our in-depth tutorials! '
                        }
                    />
                    <div className="flex_middle">
                        <div className="tutorials-check-auth flex_middle">
                            <div className="tutorials-check-auth-card flex_middle">
                                    <div className="app">
                                        <div className="title">
                                            You need to be logged-in to access
                                            the learning content.
                                        </div>
                                        <img
                                            src={redirectToLogin}
                                            alt="Redirect To Login"
                                        />
                                        <div className="count">
                                            Auto redirect to the login page in{' '}
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                {6 - count}
                                            </span>{' '}
                                            sec .....
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div style={{ marginTop: '12em' }}></div>
            <Footer page={'tutorial-special'} />
            <div></div>
        </>
    )
}

LearnCheckAuth.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(LearnCheckAuth)