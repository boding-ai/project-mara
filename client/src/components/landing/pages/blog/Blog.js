import React, { useCallback, useRef, useState } from 'react'
import useInterval from 'use-interval'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Navbar from '../navbar/Navbar'
import LearnNav from '../navbar/LearnNav'
import Footer from '../footer/Footer'
import MetaTags from '../../tools/helmet/MetaTags'
import Featured from './cards/Featured'
import Normal from './cards/Normal'

// Images - Featured
import featuredImg from '../../../resources/images/landing/blog/cards/introducing-bodinga-medics/background.svg'

// Images - Normal
import normalImgOne from '../../../resources/images/landing/blog/cards/rmi-indexing-strategies-in-sql/background.svg'
import normalImgTwo from '../../../resources/images/landing/blog/cards/improving-mental-health-in-2022/background.svg'


const Blog = ({
    // Redux States
    auth: { isAuthenticated }
}) => {

    const [showGif, setShoGif] = useState(true)

      useInterval(() => {
          setShoGif(false)
      }, 1500)

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
                console.log('true')
            } else {
                setIsActive(false)
                console.log('false')
            }
        }, options)
        if (node) {
            firstPage.current.observe(node)
        }
    }, [])



    return (
        <>
            <MetaTags
                defaultTitle={'Blog | Bodinga - Knowledge and Opinions!'}
                twitterTitle={'Blog | Bodinga - Knowledge and Opinions!'}
                twitterImageAlt={'Blog | Bodinga - Knowledge and Opinions!'}
                ogTitle={'Blog | Bodinga - Knowledge and Opinions!'}
                title={
                    <title>
                        Blog | Bodinga &middot; Knowledge and Opinions!
                    </title>
                }
                link={'https://bodinga.com/blog'}
                ogUrl={'https://bodinga.com/blog'}
                description={
                    'Sharing knowledge is a noble pursuit and we at Bodinga firmly stand by this. The Bodinga Blog focuses on sharing opinion and information pieces to people who want to know more!'
                }
                twitterDescription={
                    'Sharing knowledge is a noble pursuit and we at Bodinga firmly stand by this. The Bodinga Blog focuses on sharing opinion and information pieces to people who want to know more!'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/wxs68nbW/background-1.png'}
                msAppTileImage={
                    'https://i.postimg.cc/wxs68nbW/background-1.png'
                }
                twitterImage={'https://i.postimg.cc/wxs68nbW/background-1.png'}
                keywords={
                    'Bodinga, Blog, Knowledge, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            {isAuthenticated ? (
                <LearnNav />
            ) : (
                <Navbar isActive={isActive} page="landing" />
            )}
            <div ref={refElement}></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className={showGif ? 'blog flex_middle' : 'blog app'}>
                    {/* {showGif ? (
                        <div className="loading-gif">
                            <img src={blogLoading} alt="" />
                        </div>
                    ) : ( */}
                    <div className="main">
                        <Featured
                            title={'Introducing Bodinga Medics'}
                            description={
                                ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                            }
                            imageUrl={featuredImg}
                            author={'Bodinga Press'}
                            type={'announcement'}
                            createdAt={'01 May 22'}
                            link={'/blog/introducing-bodinga-medics'}
                            domain={'Tech'}
                        />
                        <div
                            style={{
                                borderBottom: '1px solid #dedede',
                                margin: '3em 0',
                            }}
                        ></div>
                        <div className="normal">
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'RMI indexing strategies in SQL'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgOne}
                                    author={'Vaidehi Joshi'}
                                    type={'research'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/rmi-indexing-strategies-in-sql'
                                    }
                                    domain={'Tech'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'Improving Mental Health in 2022'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgTwo}
                                    author={'B-Creatives'}
                                    type={'article'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/improving-mental-health-in-2022'
                                    }
                                    domain={'Health'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'RMI indexing strategies in SQL'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgOne}
                                    author={'Vaidehi Joshi'}
                                    type={'research'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/rmi-indexing-strategies-in-sql'
                                    }
                                    domain={'Medical'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'Improving Mental Health in 2022'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgTwo}
                                    author={'B-Creatives'}
                                    type={'article'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/improving-mental-health-in-2022'
                                    }
                                    domain={'Tech'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'RMI indexing strategies in SQL'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgOne}
                                    author={'Vaidehi Joshi'}
                                    type={'research'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/rmi-indexing-strategies-in-sql'
                                    }
                                    domain={'Medical'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'Improving Mental Health in 2022'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgTwo}
                                    author={'B-Creatives'}
                                    type={'article'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/improving-mental-health-in-2022'
                                    }
                                    domain={'Medical'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'RMI indexing strategies in SQL'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgOne}
                                    author={'Vaidehi Joshi'}
                                    type={'research'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/rmi-indexing-strategies-in-sql'
                                    }
                                    domain={'Tech'}
                                />
                            </div>
                            <div data-aos="fade-in" className="flex_middle">
                                <Normal
                                    title={'Improving Mental Health in 2022'}
                                    description={
                                        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maiores alias dicta repellat, adipisci, provident libero molestiae sapiente incidunt eveniet quas beatae maxime corporis et doloribus animi non earum in.'
                                    }
                                    imageUrl={normalImgTwo}
                                    author={'B-Creatives'}
                                    type={'article'}
                                    createdAt={'01 May 22'}
                                    link={
                                        '/blog/improving-mental-health-in-2022'
                                    }
                                    domain={'Health'}
                                />
                            </div>
                        </div>
                    </div>
                    {/* )} */}
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
            <Footer page={'blog'} />
            <div></div>
        </>
    )
}

Blog.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
}

export default connect(mapStateToProps, mapStateToActions)(Blog)
