import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'

import FirstPage from './pages/First'
import SecondPage from './pages/Second'

import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'

import MetaTags from '../../../common/helmet/MetaTags'

const Landing = ({ auth: { isAuthenticated } }) => {

    let firstPage = useRef()

    const [isActive, setIsActive] = useState(false)

    const refElement = useCallback((node) => {
        if (firstPage.current) {
            firstPage.current.disconnect()
        }
        const options = {
            root: null,
            threshold: 0,
            rootMargin: '-49px'
        }
        firstPage.current = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        }, options)
        if (node) {
            firstPage.current.observe(node)
        }
    }, [])

    // If authentication is successful then redirect to the dashboard
    if (isAuthenticated) {
        return <Redirect to="/vets/dashboard" />
    }
    
    return (
        <>
            <MetaTags />
            <Navbar id="scrollArea" isActive={isActive} page={'landing'} />
            <div ref={refElement}></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="landing">
                    <FirstPage />
                    <SecondPage />
                </div>
            </motion.div>
            <div style={{ marginBottom: '-100px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ff998a"
                        fillOpacity="1"
                        d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,229.3C672,213,768,139,864,138.7C960,139,1056,213,1152,224C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
            <div style={{ marginTop: '6em' }}></div>
            <Footer page={'landing'} />
        </>
    )
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Landing)
