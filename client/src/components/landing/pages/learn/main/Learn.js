import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'

import Card from './Card'

import Navbar from '../../../layout/navbar/Navbar'
import Footer from '../../../layout/footer/Footer'
import Header from '../../../layout/common-comps/Header'
import LearnNav from '../../../layout/navbar/LearnNav'

import MetaTags from '../../../../common/helmet/MetaTags'

// Images for card
import addStoreImg from '../../../../../resources/images/landing/learn/card/add-store-tutorial-card.jpg'
import addAppointmentImg from '../../../../../resources/images/landing/learn/card/add-appointment-tutorial-card.jpg'
import addUserImg from '../../../../../resources/images/landing/learn/card/add-user-tutorial-card.jpg'
import addPetImg from '../../../../../resources/images/landing/learn/card/add-pet-tutorial-card.jpg'
import changeProfileSettingsImg from '../../../../../resources/images/landing/learn/card/change-profile-settings-tutorial-card.jpg'
import changeWebsiteSettingsImg from '../../../../../resources/images/landing/learn/card/change-website-settings-tutorial-card.jpg'
import changeSystemSettingsImg from '../../../../../resources/images/landing/learn/card/change-system-settings-tutorial-card.jpg'
import changeBusinessSettingsImg from '../../../../../resources/images/landing/learn/card/change-business-settings-tutorial-card.jpg'
import headerImg from '../../../../../resources/images/landing/learn/headers/orange.svg'

const Learn = ({
    // Redux States
    auth: { isAuthenticated }
}) => {

    if(!isAuthenticated){
        return <Redirect to="/" />
    }

    return (
        <>
            <MetaTags
                defaultTitle={
                    'Learn | Bodinga - Unlock the true power of Bodinga by our curated learning content!'
                }
                twitterTitle={
                    'Learn | Bodinga - Unlock the true power of Bodinga by our curated learning content!'
                }
                twitterImageAlt={
                    'Learn | Bodinga - Unlock the true power of Bodinga by our curated learning content!'
                }
                ogTitle={
                    'Learn | Bodinga - Unlock the true power of Bodinga by our curated learning content!'
                }
                title={
                    <title>
                        Learn | Bodinga &middot; Unlock the true power of
                        Bodinga by our curated learning content!
                    </title>
                }
                link={'https://bodinga.com/learn'}
                ogUrl={'https://bodinga.com/learn'}
                description={
                    'Unlock the true power of Bodinga by engaging with our curated learning content!'
                }
                twitterDescription={
                    'Unlock the true power of Bodinga by engaging with our curated learning content!'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/63p31Z3D/Capture.png'}
                msAppTileImage={'https://i.postimg.cc/63p31Z3D/Capture.png'}
                twitterImage={'https://i.postimg.cc/63p31Z3D/Capture.png'}
                keywords={
                    'Bodinga, Learn, Tutorials, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            {isAuthenticated ? <LearnNav /> : <Navbar isActive={true} />}
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
                        <div className="tutorials">
                            <div className="main">
                                <div className="flex_middle" data-aos='fade-in'>
                                    <Card
                                        imageUrl={addStoreImg}
                                        title={'How to add a New Store?'}
                                        author={'Bodinga'}
                                        createdAt={'01 May 22'}
                                        description={
                                            'Adding a store may it be a clinic, hospital, dispensary or something else is an extremely easy and convenient process.'
                                        }
                                        link={
                                            '/learn/tutorial/add/add-new-stores'
                                        }
                                        tags={['store', 'add', 'new']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={addAppointmentImg}
                                        title={'How to add a New Appointment?'}
                                        author={'Bodinga Learn'}
                                        createdAt={'01 May 22'}
                                        description={
                                            'A super easy tutorial on creating an appointment for your client and their pet.'
                                        }
                                        link={
                                            '/learn/tutorial/add/add-new-appointment'
                                        }
                                        tags={['appointment', 'add', 'new']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={addUserImg}
                                        title={'How to add a New Owner?'}
                                        author={'Bodinga'}
                                        createdAt={'29 Apr 22'}
                                        description={
                                            "Here's a quick guide on how to add an owner or as vets call it, a pet parent!"
                                        }
                                        link={
                                            '/learn/tutorial/add/add-new-owner'
                                        }
                                        tags={['owner', 'add', 'clients']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={addPetImg}
                                        title={'How to add a New Pet?'}
                                        author={'Bodinga'}
                                        createdAt={'30 Apr 22'}
                                        description={
                                            'After adding an owner profile, the next step is to add a pet. Check out this article for the same.'
                                        }
                                        link={'/learn/tutorial/add/add-new-pet'}
                                        tags={['pet', 'add', 'clients']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={changeProfileSettingsImg}
                                        title={'Change Profile Settings'}
                                        author={'Bodinga'}
                                        createdAt={'25 Apr 22'}
                                        description={
                                            'Want to change your profile details? Or want to connect a new email ID to your account? Then this is the tutorial you are looking for.'
                                        }
                                        link={
                                            '/learn/tutorial/change/profile-settings'
                                        }
                                        tags={['change', 'profile', 'settings']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={changeWebsiteSettingsImg}
                                        title={'Change Website Settings'}
                                        author={'Bodinga'}
                                        createdAt={'25 Apr 22'}
                                        description={
                                            'Want to change your connected website or want a new API key? Or change the IG login. Then this is the tutorial you are looking for.'
                                        }
                                        link={
                                            '/learn/tutorial/change/website-settings'
                                        }
                                        tags={['change', 'website', 'settings']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={changeSystemSettingsImg}
                                        title={'Change System Settings'}
                                        author={'Bodinga'}
                                        createdAt={'20 Apr 22'}
                                        description={
                                            "Right from changing the hover settings of the sidebar to which notifications you prefer. If you want to customize your Bodinga experience here's a tutorial."
                                        }
                                        link={
                                            '/learn/tutorial/change/system-settings'
                                        }
                                        tags={['change', 'system', 'settings']}
                                    />
                                </div>
                                <div className="flex_middle">
                                    <Card
                                        imageUrl={changeBusinessSettingsImg}
                                        title={'Change Business Settings'}
                                        author={'Bodinga'}
                                        createdAt={'20 Apr 22'}
                                        description={
                                            'Tutorial to change business settings including shipping address, business slogan, profile picture and much more.'
                                        }
                                        link={
                                            '/learn/tutorial/change/business-settings'
                                        }
                                        tags={[
                                            'change',
                                            'business',
                                            'settings',
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div style={{ marginTop: '6em' }}></div>
            <Footer page={'tutorial'} />
        </>
    )
}

Learn.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(Learn)
