import React  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined'

import Card from './tools/Card'

import Alerts from '../../../common/alerts/Alerts'
import MetaTags from '../../../common/helmet/MetaTags'

import logoVets from '../../../../resources/images/logos/bodinga-logos/bodingaLogo.png'
import writtenVets from '../../../../resources/images/logos/bodinga-logos/vetsWritten.png'


const Login = () => {

    return (
        <>
            <MetaTags
                defaultTitle={'Welcome | Bodinga'}
                twitterTitle={'Welcome | Bodinga'}
                twitterImageAlt={'Welcome | Bodinga'}
                ogTitle={'Welcome | Bodinga'}
                title={
                    <title>Welcome &middot; Bodinga</title>
                }
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
            <div className="login_background flex_middle">
                <div className="flex_middle">
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
                </div>
            </div>
            <Link to="/">
                <div className="arrow app">
                    <KeyboardDoubleArrowLeftOutlinedIcon
                        className="cursor_pointer"
                        style={{ fontSize: 50 }}
                    />
                    <div style={{ fontWeight: 'bold' }}>Back</div>
                </div>
            </Link>
            <Alerts />
        </>
    )
}

Login.propTypes = {}

const mapStateToProps = (state) => ({})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(Login)
