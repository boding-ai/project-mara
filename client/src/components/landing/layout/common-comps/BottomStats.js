import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons'

import BlogShare from '../../../common/share/BlogShare'
import Clap from '../../../common/medium-clap-button/index'

const BottomStats = ({ shareLink, title }) => {
    const onCountChange = ({ count, countTotal }) => {}

    return (
        <div className="flex_between" style={{ margin: '2em 0 -1em 0' }}>
            <div style={{ marginRight: '1em' }}>
                <Clap
                    count={0}
                    countTotal={0}
                    maxCount={1000000}
                    isClicked={false}
                    onCountChange={onCountChange}
                    iconComponent={(props) => (
                        <FontAwesomeIcon
                            icon={faHandsClapping}
                            {...props}
                            size={20}
                            style={{
                                color: 'grey',
                                fontSize: 20,
                            }}
                        />
                    )}
                />
            </div>
            <BlogShare horizontal={true} shareLink={shareLink} title={title} />
        </div>
    )
}

export default BottomStats