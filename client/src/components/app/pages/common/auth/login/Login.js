import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined'

import Alerts from '../../../../tools/alerts/Alerts'
import BottomLeft from '../../../../tools/background-credits/BottomLeft'

import Card from './Card'

// Images 
import logoVets from '../../../../../resources/images/logos/bodinga-logos/bodingaLogo.png'
import logoMedics from '../../../../../resources/images/logos/bodinga-medics/bodingaMedicsLogo.png'
import writtenMedics from '../../../../../resources/images/logos/bodinga-medics/medicsWritten.png'
import writtenVets from '../../../../../resources/images/logos/bodinga-logos/vetsWritten.png'

import MetaTags from '../../../../tools/helmet/MetaTags'

const Login = ({
}) => {
    
    return (
        <>
            <MetaTags
                defaultTitle={'Login | Bodinga - Welcome Back!'}
                twitterTitle={'Login | Bodinga - Welcome Back!'}
                twitterImageAlt={'Login | Bodinga - Welcome Back!'}
                ogTitle={'Login | Bodinga - Welcome Back!'}
                title={<title>Login | Bodinga &middot; Welcome Back!</title>}
                link={'https://bodinga.com/login'}
                ogUrl={'https://bodinga.com/login'}
                description={'Login to access your Bodinga Vets account.'}
                twitterDescription={
                    'Login to access your Bodinga Vets account.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/sxPrvQ8T/background-2.png'}
                msAppTileImage={
                    'https://i.postimg.cc/sxPrvQ8T/background-2.png'
                }
                twitterImage={'https://i.postimg.cc/sxPrvQ8T/background-2.png'}
            />
            <div
                className="login_background flex_middle"
                // style={{
                //     background: `url(${backgroundImg}) no-repeat center center/cover`,
                // }}
            >
                <BottomLeft
                    creator={
                        <a
                            href="https://www.freepik.com/vectors/background"
                            style={{
                                marginRight: '0.3em',
                                marginLeft: '0.3em',
                            }}
                        >
                            freepik.com
                        </a>
                    }
                    fontSize={'0.6em'}
                    color={'rgb(200, 200, 200)'}
                    borderColor={'rgb(200, 200, 200)'}
                />
                <Link to="/">
                    <div className="arrow app">
                        <KeyboardDoubleArrowLeftOutlinedIcon
                            className="cursor_pointer"
                            style={{ fontSize: 50 }}
                        />
                        <div style={{ fontWeight: 'bold' }}>Back</div>
                    </div>
                </Link>
                <div className="app">
                    <div
                        className=""
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <div style={{ marginRight: '50px' }} data-aos="fade-up">
                            <Card
                                imageUrl={logoVets}
                                title={'Vets'}
                                type={'vets'}
                                description={
                                    'For veterinary doctors, pet clinics and hospitals.'
                                }
                                writtenImageUrl={writtenVets}
                                comingSoon={false}
                            />
                        </div>
                        <div
                            style={{ marginLeft: '50px' }}
                            data-aos="fade-down"
                        >
                            <Card
                                imageUrl={logoMedics}
                                title={'Medics'}
                                type={'medics'}
                                description={
                                    'For human doctors, clinics and hospitals.'
                                }
                                writtenImageUrl={writtenMedics}
                                comingSoon={true}
                            />
                        </div>
                    </div>
                    <div className="sign-up flex_middle" data-aos="fade-in">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="link cursor_pointer"
                            style={{ fontSize: '1em', marginLeft: '0.5em' }}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Alerts />
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
