import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Type from './Type'
import Domain from './Domain'

const Article = ({
    title,
    imageUrl,
    author,
    createdAt,
    description,
    link,
    type,
    domain,
}) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Link to={link} target={'_blank'} rel="noreferrer nofollow">
            <div
                className="normal-card discover-more-card"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {type !== 'announcement' && <Domain domain={domain} />}
                <div className="title flex_middle">{title}</div>
                <div className="description">
                    {description.length > 200
                        ? description.slice(0, 200) + '...'
                        : description}
                </div>
                <div className="flex_middle">
                    <div className="metadata" style={{ width: '95%' }}>
                        <div className="flex_left">
                            <Type type={type} />
                        </div>
                        <div className="author flex_middle">By {author}</div>
                        <div className="time flex_right">{createdAt}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Article
