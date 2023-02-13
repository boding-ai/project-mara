import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UseWhatsapp from 'whatsapp-react-component'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LoginIcon from '@mui/icons-material/Login'
import TwitterIcon from '@mui/icons-material/Twitter'

import GetStarted from './Banner';

import orangeImg from '../../../../resources/images/landing/learn/headers/orange.svg'
import greenImg from '../../../../resources/images/landing/learn/headers/green.svg'
import aunshLogo from '../../../../resources/images/logos/nama-network-logos/aunshLogo.png'
import getStartedBackground from '../../../../resources/images/landing/footer/banner/background.jpg'
import tutorialBlueBackground from '../../../../resources/images/landing/footer/background/blue.svg'
import tutorialGreyBackground from '../../../../resources/images/landing/footer/background/grey.svg'


const Footer = ({
    page,
    // Redux States 
    auth: { isAuthenticated }
}) => {

    const [color, setColor] = useState('#787878')
    const [backgroundImage, setBackgroundImage] = useState(orangeImg)

    useEffect(() => {
        switch (true) {
            case page === 'landing':
                setColor('#ff998a')
                break

            case page === 'blog':
                setColor('#ff998a')
                break

            case page === 'register':
                setColor('transparent')
                break

            case page === 'tutorial':
                setBackgroundImage(orangeImg)
                break

            case page === 'tutorial-special':
                setBackgroundImage(orangeImg)
                break

            case page === 'tutorial-blue':
                setBackgroundImage(tutorialBlueBackground)
                break

            case page === 'tutorial-grey':
                setBackgroundImage(tutorialGreyBackground)
                break

            case page === 'attribution':
                setBackgroundImage(greenImg)
                break

            default:
                return null
        }
    }, [page])

  const openWhatsapp = () => {
    UseWhatsapp('+91 7972146825', 'Hi Bo! I have a question!')
  }

  return (
      <div className="">
          <div
              className={
                  page === 'tutorial-special'
                      ? 'footer footer-big-padding'
                      : 'footer'
              }
              style={
                  page === 'tutorial' ||
                  page === 'attribution' ||
                  page === 'tutorial-special' ||
                  page === 'tutorial-blue' ||
                  page === 'tutorial-grey'
                      ? {
                            justifyContent: 'space-between',
                            backgroundColor: `none`,
                            backgroundImage: `url(${backgroundImage})`,
                            position: 'absolute',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 1,
                        }
                      : {
                            justifyContent: 'space-between',
                            backgroundColor: `${color}`,
                        }
              }
          >
              {page === 'tutorial-special' && !isAuthenticated && (
                  <GetStarted
                      imageUrl={getStartedBackground}
                      title={'Business with Bodinga'}
                      description={
                          'The perfect digital business partner for Vets!'
                      }
                      buttonText={"Get Started It's Free!"}
                      link={'/pricing'}
                      bigPadding={true}
                  />
              )}
              {(page === 'landing' || page === 'blog') && !isAuthenticated && (
                  <GetStarted
                      imageUrl={getStartedBackground}
                      title={'Business with Bodinga'}
                      description={
                          'The perfect digital business partner for Vets!'
                      }
                      buttonText={'Get Started for Free!'}
                      link={'/pricing'}
                  />
              )}
              <div className="app">
                  <div className="footer-inner quadruple_grid">
                      <div className="app">
                          <div className="title">Quick Links</div>
                          <div className="element">
                              <Link
                                  to="/"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Platform
                              </Link>
                          </div>
                          <div className="element">
                              <Link
                                  to="/about"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  About
                              </Link>
                          </div>
                          <div className="element">
                              <Link
                                  to="/blog"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Blog
                              </Link>
                          </div>
                          <div className="element">
                              <Link
                                  to="/blog/learn/check-auth"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Learn
                              </Link>
                          </div>
                      </div>
                      <div className="two app">
                          <div className="title">Legal</div>
                          <div className="element">
                              <Link
                                  to="/legal/privacy"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Privacy
                              </Link>
                          </div>
                          <div className="element">
                              <Link
                                  to="/legal/terms"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Terms
                              </Link>
                          </div>
                          <div className="element">
                              <Link
                                  to="/legal/attribution"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  Attribution
                              </Link>
                          </div>
                      </div>
                      <div className="three app">
                          <div className="title">Contact</div>
                          <div className="element" style={{ margin: '-0.8em' }}>
                              <a href="/login" className="flex_middle">
                                  <div
                                      style={{
                                          marginRight: '0.4em',
                                          marginTop: '0.2em',
                                      }}
                                  >
                                      <LoginIcon />
                                  </div>
                                  <div>Login</div>
                              </a>
                          </div>
                          <div className="element" style={{ margin: '-0.5em' }}>
                              <a
                                  href="mailto:info@sbvetservices.com"
                                  className="cursor_pointer flex_middle"
                              >
                                  <div
                                      style={{
                                          marginRight: '0.4em',
                                          marginTop: '0.2em',
                                      }}
                                  >
                                      <EmailIcon />
                                  </div>
                                  <div>Email Us</div>
                              </a>
                          </div>
                          <div className="element" style={{ margin: '-0.5em' }}>
                              <a
                                  href="mailto:info@sbvetservices.com"
                                  className="cursor_pointer flex_middle"
                              >
                                  <div
                                      style={{
                                          marginRight: '0.4em',
                                          marginBottom: '0.1em',
                                      }}
                                  >
                                      <FontAwesomeIcon
                                          icon={faPhone}
                                          style={{ fontSize: 15 }}
                                      />
                                  </div>
                                  <div>Call Us</div>
                              </a>
                          </div>
                      </div>
                      <div className="four app">
                          <div className="title">Socials</div>
                          <div className="cursor_pointer">
                              <a
                                  href="https://www.twitter.com/bodinga_co"
                                  alt="Bodinga Twitter Link"
                                  target={'_blank'}
                                  rel="noreferrer nofollow noopener"
                              >
                                  <TwitterIcon
                                      style={{
                                          fontSize: 23,
                                          margin: '0em 0 0.3em 0',
                                      }}
                                      className="icons"
                                  />
                              </a>
                          </div>
                          <div className="cursor_pointer">
                              <WhatsAppIcon
                                  style={{ fontSize: 23 }}
                                  className="icons-two"
                                  onClick={openWhatsapp}
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex_middle">
                  <div
                      style={{
                          height: '1px',
                          borderTop: '1px solid rgb(220, 220, 220)',
                          margin: '1.5em 2em 1.2em 2em',
                          width: '100%',
                      }}
                  ></div>
              </div>
              <div className="triple_grid">
                  <div className="image flex_left  owner-info">
                      <div style={{marginTop: '0.8em'}} >
                          <a
                              href="https://aunsh.com"
                              rel="noreferrer nofollow noopenner"
                              alt="aunsh.com"
                              target={'_blank'}
                          >
                              <img
                                  src={aunshLogo}
                                  alt="Aunsh Company Logo"
                                  style={{ marginBottom: '0.55em' }}
                              />
                          </a>
                      </div>
                      <span style={{ margin: '0 0.3em' }}>
                          | All rights reserved
                      </span>
                  </div>
                  <div className="copyright flex_middle">
                      <div>
                          <span
                              style={{ marginBottom: '0.5em', fontSize: '1em' }}
                          >
                              {String.fromCodePoint('0X00A9')}
                          </span>{' '}
                          <a
                              href="https://bodinga.com"
                              target={'_blank'}
                              rel="noreferrer nofollow"
                          >
                              Bodinga 2023
                          </a>
                      </div>
                  </div>
                  <div
                      className="flex_right owner-info"
                      style={{ marginRight: '1em' }}
                  >
                      Handcrafted with &#10084; in IN
                  </div>
              </div>
          </div>
      </div>
  )
}

Footer.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
};

export default connect(mapStateToProps, mapStateToActions)(Footer);