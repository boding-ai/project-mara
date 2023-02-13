import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Type from '../../common-comps/Type'

const Card = ({
    title,
    imageUrl,
    author,
    createdAt,
    description,
    link,
    type,
}) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Link to={link}>
            <div
                className="featured-card"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isHovering && <div className="ribbon">Check it out!</div>}
                <div className="image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="flex_middle" style={{ marginRight: '1em' }}>
                    <div>
                        <div className="flex_middle">
                            <div className="title">{title}</div>
                        </div>
                        <div className="description">
                            {description.length > 230
                                ? description.slice(0, 230) + '...'
                                : description}
                        </div>
                        <div className="flex_middle">
                            <div className="metadata" style={{ width: '95%' }}>
                                <div className="flex_left">
                                    <Type type={type} />
                                </div>
                                <div className="author flex_middle">
                                    By {author}
                                </div>
                                <div className="time flex_right">
                                    {createdAt}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
