import React, { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import Why from './pages/Why'

import Header from '../../layout/common-comps/Header'
import Footer from '../../layout/footer/Footer'
import SeamlessNav from '../../layout/navbar/Seamless'

import MetaTags from '../../../common/helmet/MetaTags'
import Alerts from '../../../common/alerts/Alerts'

import headerImg from '../../../../resources/images/landing/about/background.jpg'

const About = () => {

     let firstPage = useRef()
     const nextDivAbout = useRef()

     const [isActive, setIsActive] = useState(false)

     const refElement = useCallback((node) => {
         if (firstPage.current) {
             firstPage.current.disconnect()
         }
         const options = {
             root: null,
             threshold: 0,
             rootMargin: '10px',
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

     const goToNext = () => {
        nextDivAbout.current.scrollIntoView({ behavior: 'smooth' })
     }
  
  return (
      <>
          <MetaTags
              defaultTitle={'About | Bodinga - Who we are and what we do?'}
              twitterTitle={'About | Bodinga - Who we are and what we do?'}
              twitterImageAlt={'About | Bodinga - Who we are and what we do?'}
              title={
                  <title>
                      About | Bodinga &middot; Who we are and what we do?
                  </title>
              }
              link={'https://bodinga.com/about'}
              description={
                  'What we do at Bodinga? Our vision, products, culture and more!'
              }
              twitterDescription={
                  'What we do at Bodinga? Our vision, products, culture and more!'
              }
              ogTitle={'About | Bodinga - Who we are and what we do?'}
              ogUrl={'https://bodinga.com/about'}
              ogType={'website'}
              ogImageType={'image/png'}
              ogImage={'https://i.postimg.cc/gkhdyMJ5/Capture.png'}
              msAppTileImage={'https://i.postimg.cc/gkhdyMJ5/Capture.png'}
              twitterImage={'https://i.postimg.cc/gkhdyMJ5/Capture.png'}
          />
          <div ref={refElement}></div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
          >
              <div className="blog" style={{ marginTop: '0px' }}>
                  <Header
                      navbar={
                          <SeamlessNav id="scrollArea" isActive={isActive} />
                      }
                      imageSize={'105vh'}
                      title={'Our Company'}
                      imageUrl={headerImg}
                      type={'about'}
                      description={'Get to know us, what we do and our vision!'}
                      scroll={true}
                      goToRef={goToNext}
                  />
              </div>
              <div
                  className="about"
                  ref={nextDivAbout}
                  style={{ border: '1px solid red', margin: '6em 0' }}
              >
                  <div className="flex_middle" style={{ margin: '3em 0' }}>
                      <Why />
                  </div>
                  {/* <div className="flex_middle">
                  <Timeline />
              </div> */}
              </div>
          </motion.div>
          <div style={{ marginBottom: '-100px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                      fill="#ff998a"
                      fill-opacity="1"
                      d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,229.3C672,213,768,139,864,138.7C960,139,1056,213,1152,224C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
              </svg>
          </div>
          <div style={{ marginTop: '6em' }}></div>
          <Footer page={'landing'} />
          <div>
              <Alerts />
          </div>
      </>
  )
}

export default About