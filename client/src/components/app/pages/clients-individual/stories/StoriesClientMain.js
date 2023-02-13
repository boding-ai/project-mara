import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import PaneClientStories from './PaneClientStories'
import StoriesIndivClient from './StoriesIndivClient'


const StoriesClientMain = () => {
    return (
        <>
            <div className="app">
                <PaneClientStories />
                <StoriesIndivClient />
            </div>
        </>
    )
}

StoriesClientMain.propTypes = {

}

export default StoriesClientMain
