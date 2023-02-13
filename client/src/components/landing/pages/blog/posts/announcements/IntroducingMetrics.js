import React, { useCallback, useRef, useState } from 'react'
import Helmet from 'react-helmet'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components Input
import Footer from '../../../footer/Footer'
import Navbar from '../../../navbar/Navbar'
import Declaration from '../tools/Declaration'
import Author from '../../../common-comps/Author'
import DiscoverMore from '../../../common-comps/DiscoverMore'
import BottomStats from '../../../common-comps/BottomStats'
import MetaTags from '../../../../tools/helmet/MetaTags'
import LearnNav from '../../../navbar/LearnNav'

// Images
import pressLogo from '../../../../../resources/images/logos/club-logos/thePressClubLogo.png'
import normalImgOne from '../../../../../resources/images/landing/blog/cards/rmi-indexing-strategies-in-sql/background.svg'
import normalImgTwo from '../../../../../resources/images/landing/blog/cards/improving-mental-health-in-2022/background.svg'

const IntroducingMetrics = ({
    // Redux States
    auth: { isAuthenticated },
}) => {
    let firstPage = useRef()

    const [isActive, setIsActive] = useState(false)

    const refElement = useCallback((node) => {
        if (firstPage.current) {
            firstPage.current.disconnect()
        }
        const options = {
            root: null,
            threshold: 0,
            rootMargin: '-49px',
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

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Bodinga Medics | Blog &middot; Bodinga &middot; Introducing
                    Bodinga Medics along with exciting features!
                </title>
                <link
                    rel="canonical"
                    href="https://bodinga.com/blog/introducing-bodinga-medics"
                />
            </Helmet>
            <MetaTags
                defaultTitle={'Introducing Bodinga Metrics | Bodinga - Blog'}
                twitterTitle={'Introducing Bodinga Metrics | Bodinga - Blog'}
                twitterImageAlt={'Introducing Bodinga Metrics | Bodinga - Blog'}
                ogTitle={'Introducing Bodinga Metrics | Bodinga - Blog'}
                title={
                    <title>
                        Introducing Bodinga Metrics &middot; Bodinga - Blog
                    </title>
                }
                link={'https://bodinga.com/blog/introducing-bodinga-medics'}
                ogUrl={'https://bodinga.com/blog/introducing-bodinga-medics'}
                description={
                    'Introducing Bodinga Medics - A complete digital platform for human doctors, clinics and hospitals.'
                }
                twitterDescription={
                    'Introducing Bodinga Medics - A complete digital platform for human doctors, clinics and hospitals.'
                }
                ogType={'article'}
                ogImageType={'image/jpg'}
                ogImage={
                    'https://i.postimg.cc/fWKT70QW/add-store-tutorial-card.jpg'
                }
                msAppTileImage={
                    'https://i.postimg.cc/fWKT70QW/add-store-tutorial-card.jpg'
                }
                twitterImage={
                    'https://i.postimg.cc/fWKT70QW/add-store-tutorial-card.jpg'
                }
                keywords={
                    'Bodinga, Tutorials, Add, Store, Vets, Platform, Best, Free, Medics, Blog'
                }
            />
            {isAuthenticated ? <LearnNav /> : <Navbar isActive={isActive} />}
            <div ref={refElement}></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="blog app">
                    <div className="main" style={{ marginTop: '7em' }}>
                        <div className="posts">
                            <Declaration
                                title={'Introducing Bodinga Medics'}
                                author={'The Press Club'}
                                date={'May 1, 2022'}
                                type={'announcement'}
                                shareLink={
                                    'https://bodinga.com/blog/introducing-bodinga-medics'
                                }
                            />
                            <div className="flex_middle">
                                <div className="content">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptatibus, inventore!
                                    Obcaecati quos laboriosam quam facilis
                                    dignissimos velit suscipit accusantium
                                    veritatis consequuntur laborum. Vitae, hic
                                    ipsam adipisci corrupti, consectetur
                                    pariatur modi dolorum quod veritatis quasi
                                    itaque accusantium aut repudiandae
                                    voluptate, eum iste doloremque aliquid? Ex
                                    consequatur delectus, dolores mollitia,
                                    quisquam perspiciatis nesciunt praesentium
                                    velit blanditiis fuga, eveniet ducimus
                                    explicabo cupiditate soluta voluptatibus
                                    iste. Assumenda maiores cupiditate dolor quo
                                    expedita minus, eligendi blanditiis nostrum
                                    praesentium officia id neque illum minima
                                    doloremque soluta error sapiente cum totam
                                    commodi voluptatum atque. Perspiciatis
                                    officiis pariatur voluptatibus, placeat
                                    nemo, facere voluptatum commodi quia dolorem
                                    itaque aspernatur. Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit.
                                    Doloremque sint illo, debitis a vitae quo
                                    asperiores? Quidem dolores voluptatibus
                                    animi expedita totam voluptates nobis, iure
                                    repellendus, distinctio voluptate optio,
                                    iusto nam qui inventore quibusdam. In
                                    tenetur, numquam eos optio aut vel
                                    consequatur! Neque cum amet distinctio quis
                                    aperiam? Ut eveniet saepe, eligendi
                                    blanditiis laborum dolores deleniti qui sunt
                                    porro molestiae quam, recusandae repellendus
                                    quaerat nostrum neque illum fugiat cumque,
                                    soluta laboriosam natus labore. Dignissimos
                                    impedit voluptatibus accusamus dolorum
                                    incidunt, nemo tenetur, in sit a facilis
                                    mollitia voluptatum suscipit voluptates
                                    corrupti similique porro. Necessitatibus,
                                    quam illum blanditiis maxime adipisci velit
                                    cum unde vitae fugiat perferendis nobis
                                    labore nihil non illo. Deleniti voluptas
                                    praesentium laborum eum magnam ullam
                                    consequuntur. Error adipisci optio, dolorem,
                                    quisquam distinctio ea illum facere
                                    repudiandae aut blanditiis ipsam
                                    exercitationem dolore, fugiat inventore
                                    nulla dolor fuga temporibus aliquam quo at
                                    laborum qui mollitia commodi! Velit nulla
                                    tenetur ipsam perspiciatis laboriosam, nobis
                                    dolor dolorum quidem id ratione rerum
                                    doloremque inventore expedita quas amet
                                    magni ea aliquam, quis veritatis fugit
                                    similique facere veniam molestias deserunt.
                                    Vitae cum veritatis excepturi sequi
                                    necessitatibus dolorum nesciunt. Quia
                                    distinctio enim veniam maiores corporis
                                    ducimus deserunt, fugit harum ea dolore, id
                                    deleniti sed asperiores beatae quisquam
                                    facere ullam fuga. Error adipisci soluta
                                    maxime. Similique deleniti voluptate quos
                                    quaerat labore, consequuntur, blanditiis
                                    magni inventore sed quae enim commodi aut
                                    facilis nemo quis quasi a totam consectetur,
                                    autem architecto porro? Sint, exercitationem
                                    ipsa commodi illum incidunt ea libero non
                                    accusamus delectus eligendi earum voluptate
                                    quas rem, provident nemo neque deleniti vel
                                    omnis quae, officiis rerum tenetur. Dolore
                                    non fugiat quis mollitia sequi, nemo
                                    suscipit cumque inventore quaerat obcaecati
                                    iusto eum unde esse blanditiis et asperiores
                                    aperiam perspiciatis magnam magni, officiis
                                    tenetur? Facilis assumenda deleniti cumque
                                    distinctio incidunt tempora! Reprehenderit
                                    voluptate repudiandae cum consectetur amet
                                    voluptatem recusandae corporis aut rem
                                    quasi, eaque nisi, quas iste, hic modi?
                                    Ipsum commodi praesentium perferendis facere
                                    dignissimos enim aut consectetur.
                                    Exercitationem soluta fuga dicta nesciunt
                                    sunt corrupti mollitia libero qui delectus
                                    quos illo optio at, ullam nihil quidem saepe
                                    perferendis in error a neque, incidunt
                                    ducimus. Repudiandae ex repellat omnis,
                                    saepe facere laudantium perferendis dolore,
                                    natus porro blanditiis aut voluptas sequi,
                                    sed laborum provident unde esse quaerat ut
                                    accusamus explicabo cupiditate atque
                                    mollitia vel quibusdam? Cum, quas
                                    voluptatem. Vel sapiente pariatur inventore
                                    nam eveniet quam neque, rem corrupti fuga
                                    possimus vitae iure officiis consequatur? Id
                                    a hic molestias dolorem adipisci illum
                                    sapiente iure sunt at, eos, esse facilis
                                    explicabo voluptates fugiat laudantium
                                    ducimus repudiandae! Nulla libero odit natus
                                    inventore, praesentium magni, et assumenda
                                    rem cum aliquid iure. Repellendus inventore
                                    et doloribus tempore explicabo asperiores
                                    quas doloremque ipsa omnis! Natus nesciunt
                                    unde voluptate vel odit dolor ex nisi nam,
                                    exercitationem eligendi quaerat architecto
                                    illum alias tempora quas voluptatum, esse
                                    totam mollitia eos earum ab reprehenderit
                                    amet veniam laborum. Amet vel impedit porro
                                    doloribus quis saepe labore aliquid libero
                                    excepturi neque eveniet molestias eaque
                                    quae, autem quod commodi consequuntur natus
                                    deserunt sequi blanditiis ipsam rerum
                                    voluptatem est? Dolore, nobis doloremque
                                    vero neque beatae explicabo ipsa?
                                    <BottomStats
                                        title={'Introducing Bodinga Medics'}
                                        shareLink={
                                            'https://bodinga.com/blog/introducing-bodinga-medics'
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '2em 2em',
                                    borderTop: '1px solid #d4d4d4',
                                }}
                            >
                                <Author
                                    link={
                                        '/blog/types-of-departments-at-bodinga'
                                    }
                                    author={'The Press Club'}
                                    saying={
                                        ' is the public relations department of Bodinga.'
                                    }
                                    profilePic={pressLogo}
                                />
                            </div>
                            <div className="discover-more">
                                <div className="main-title flex_middle">
                                    Discover More
                                </div>
                                <div className="normal">
                                    <div
                                        data-aos="fade-in"
                                        className="flex_left"
                                    >
                                        <DiscoverMore
                                            title={
                                                'RMI indexing strategies in SQL'
                                            }
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
                                            discoverMore={true}
                                        />
                                    </div>
                                    <div
                                        data-aos="fade-in"
                                        className="flex_right"
                                    >
                                        <DiscoverMore
                                            title={
                                                'Improving Mental Health in 2022'
                                            }
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
                                            discoverMore={true}
                                        />
                                    </div>
                                    <div
                                        data-aos="fade-in"
                                        className="flex_left"
                                    >
                                        <DiscoverMore
                                            title={
                                                'RMI indexing strategies in SQL'
                                            }
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
                                            discoverMore={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}

IntroducingMetrics.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {}

export default connect(mapStateToProps, mapStateToActions)(IntroducingMetrics)