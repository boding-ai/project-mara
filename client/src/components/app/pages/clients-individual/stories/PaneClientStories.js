import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'semantic-ui-react'

import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import SearchIcon from '@mui/icons-material/Search'

const PaneClientStories = props => {
    const [isSelected, setIsSelected] = useState(false)

    const changeSelected = (e) => {
        setIsSelected(true)
    }

    const changeDeselected = (e) => {
        setIsSelected(false)
    }

    return (
        <div className='events_client'>
            <div className="client_pane_indiv">
                <div className="one center_everything">
                    <div style={{ marginRight: '0.3em' }}>
                        <AutoStoriesIcon style={{ fontSize: 28 }} />
                    </div>
                    <div>Stories</div>
                </div>
                <div className="feed_search_and_add_records_client">
                    <div
                        className="feed_input_records_client"
                        onMouseUp={changeSelected}
                        onMouseLeave={changeDeselected}
                    >
                        <form>
                            <input type="text" placeholder="Search" />
                            <button type="submit"></button>
                        </form>
                        {isSelected ? (
                            <SearchIcon style={{ color: 'red' }} />
                        ) : (
                            <SearchIcon />
                        )}
                    </div>
                    <div className="feed_filter_records">
                        {/* <FilterRecords /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

PaneClientStories.propTypes = {

}

export default PaneClientStories
