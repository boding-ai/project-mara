import React from 'react'
import Helmet from 'react-helmet'

import Card from './Card'

import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/common-comps/Header'

import getStartedBackground from '../../../../resources/images/landing/footer/banner/background.jpg'
import madeInIndia from '../../../../resources/images/stamps/madeInIndia.png'
import redirectToLogin from '../../../../resources/images/redirect/redirectToLogin.png'
import aboutFirstImage from '../../../../resources/images/landing/about/background.jpg'

import loginBackground from '../../../../resources/images/auth/login/backgrounds/one.jpg'
import loginBackgroundTwo from '../../../../resources/images/auth/login/backgrounds/two.jpg'

import headerImg from '../../../../resources/images/landing/learn/headers/green.svg'

const Attribution = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Attribution - Legal | Bodinga &middot; Digital Veterinary
                    Software
                </title>
                <link
                    rel="canonical"
                    href="http://bodinga.com/legal/attribution"
                />
            </Helmet>
            <Navbar isActive={true} />
            <Header
                title={'Attribution'}
                imageUrl={headerImg}
                type={'tutorials'}
                description={
                    "Here's a cheers to the creators of various image and digital assets obtained under the free license that we use in making the Bodinga experience unique."
                }
                imageSize={'50vh'}
            />
            <div className="app">
                <div className="attribution app">
                    <Card
                        title={'Login Background Image'}
                        imgSrc={loginBackgroundTwo}
                        imgAlt={'Login Background'}
                        creator={
                            <>
                                Photo by{' '}
                                <a href="https://unsplash.com/@danranwanghao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                    hao wang
                                </a>{' '}
                                on{' '}
                                <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                    Unsplash
                                </a>
                            </>
                        }
                    />
                    <Card
                        title={'Login Background Image'}
                        imgSrc={loginBackground}
                        imgAlt={'Login Background'}
                        creator={
                            <a href="https://www.freepik.com/vectors/background">
                                Background vector created by freepik -
                                www.freepik.com
                            </a>
                        }
                    />
                    <Card
                        title={'Landing Page Get Started Image'}
                        imgSrc={getStartedBackground}
                        imgAlt={'Get Started Background'}
                        creator={
                            <a href="https://www.freepik.com/vectors/hand-drawn-background">
                                Hand drawn background vector created by freepik
                                - www.freepik.com
                            </a>
                        }
                    />

                    <Card
                        title={'Made in India Stamp Image'}
                        imgSrc={madeInIndia}
                        imgAlt={'Made In India'}
                        creator={
                            <a href="https://pixlok.com/images/made-in-india-icon-png-image-free-download/">
                                House photo created by Search png -
                                www.pixlok.com
                            </a>
                        }
                    />
                    <Card
                        title={'Redirect To Login Page Image'}
                        imgSrc={redirectToLogin}
                        imgAlt={'Redirect Email Security'}
                        creator={
                            <a href="https://www.freepik.com/vectors/email-security">
                                Email security vector created by macrovector -
                                www.freepik.com
                            </a>
                        }
                    />
                    <Card
                        title={'About Page First Image'}
                        imgSrc={aboutFirstImage}
                        imgAlt={'About page first image'}
                        creator={
                            <>
                                Photo by
                                <a
                                    href="https://unsplash.com/@usgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                    style={{
                                        marginRight: '0.3em',
                                        marginLeft: '0.3em',
                                    }}
                                >
                                    USGS
                                </a>
                                on
                                <a
                                    href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                                    style={{ marginLeft: '0.3em' }}
                                >
                                    Unsplash
                                </a>
                            </>
                        }
                    />
                </div>
            </div>
            <Footer page={'attribution'} />
        </>
    )
}

export default Attribution
