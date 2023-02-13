import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Pane from './Pane'
import Spinner from './Spinner'
import { connect } from 'react-redux'
import NothingToShow from '../../../dashboard/stats/NothingToShow'
import Card from './post/Card'

import { getInstaPostsFromDb } from '../../../../../../redux/actions/business/social'

const Main = ({
    // Redux Actions 
    getInstaPostsFromDb,
    // Redux States
    social: { getPostsFromInstaOne, getPostsFromInstaTwo, instaPosts},
}) => {

    const [singleView, setSingleView] = useState(false)

    useEffect(() => {
        getInstaPostsFromDb()
    }, [getInstaPostsFromDb])    

    const changePostsViewToGrid = () => {
        setSingleView(true)
    }

    const changePostsViewToSingle = () => {
        setSingleView(false)
    }

    return (
        <div className="">
            <div className="flex_middle">
                <Pane
                    changePostsViewToGrid={changePostsViewToGrid}
                    changePostsViewToSingle={changePostsViewToSingle}
                    singleView={singleView}
                />
            </div>
            <div
                className={
                    singleView
                        ? 'main-posts-grid flex_middle'
                        : 'main-posts flex_middle'
                }
                style={{ alignItems: 'flex-start' }}
            >
                {instaPosts.length > 0 &&
                    instaPosts.map((element, index) => (
                        <div
                            className="flex_middle"
                            key={index}
                            data-aos={singleView ? '' : 'fade-in'}
                            data-aos-delay={index * 100}
                            data-aos-offset={singleView ? 10 : 10}
                        >
                            <Card
                                caption={element.caption}
                                children={element.elements}
                                timestamp={element.timestamp}
                                id={element.post_id}
                                show={element.show}
                                nsfwWarning={element.nsfw_warning}
                                singleView={singleView}
                            />
                        </div>
                    ))}
            </div>
            <div className="main-body flex_middle">
                <div className="app">
                    {(getPostsFromInstaOne || getPostsFromInstaTwo) && (
                        <Spinner />
                    )}
                    <div className="spinner-text">
                        {getPostsFromInstaOne && (
                            <>This may take some time...</>
                        )}
                        {getPostsFromInstaTwo && <>Computing...</>}
                    </div>
                    {instaPosts.length < 1 && !getPostsFromInstaTwo && (
                        <NothingToShow
                            primaryMessage={'No Instagram Posts'}
                            secondaryMessage={
                                'Click on get posts to fetch posts from your IG account'
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

Main.propTypes = {
    social: PropTypes.object.isRequired,
    getInstaPostsFromDb: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    social: state.social,
})

const mapStateToActions = {
    getInstaPostsFromDb,
}

export default connect(mapStateToProps, mapStateToActions)(Main)