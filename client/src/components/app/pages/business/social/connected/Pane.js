import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InstagramIcon from '@mui/icons-material/Instagram'
import PagesIcon from '@mui/icons-material/Pages'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded'

import { getPostsFromInstagramPartOne } from '../../../../../../redux/actions/business/social'

const Pane = ({
    changePostsViewToGrid,
    changePostsViewToSingle,
    singleView,
    // Redux Actions 
    getPostsFromInstagramPartOne,
    // Redux States
    social: { refreshToken },
}) => {

    return (
        <>
            <div className="pane flex_evenly">
                <div className="flex_evenly" style={{ marginRight: '1.5em' }}>
                    <div
                        className="get-posts flex_middle cursor_pointer"
                        onClick={getPostsFromInstagramPartOne}
                    >
                        <PostAddIcon style={{ fontSize: 20 }} />
                        <div>Get Posts</div>
                    </div>
                </div>
                <div className="flex_evenly">
                    <div className="current-posts flex_middle cursor_pointer">
                        <PagesIcon style={{ fontSize: 20 }} />
                        <div>Current</div>
                    </div>
                </div>
                <div className="flex_middle view">
                    <div style={{ marginRight: '1.5em' }}>
                        <ViewModuleRoundedIcon
                            className="cursor_pointer grid-like"
                            style={
                                singleView
                                    ? { fontSize: 25, color: '#63a7ff' }
                                    : { fontSize: 25 }
                            }
                            onClick={changePostsViewToGrid}
                        />
                    </div>
                    <div>
                        <SquareRoundedIcon
                            className="cursor_pointer single-like"
                            onClick={changePostsViewToSingle}
                            style={singleView ? {} : { color: '#63a7ff' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

Pane.propTypes = {
    social: PropTypes.object.isRequired,
    getPostsFromInstagramPartOne: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    social: state.social,
})

const mapStateToActions = {
    getPostsFromInstagramPartOne,
}

export default connect(mapStateToProps, mapStateToActions)(Pane)