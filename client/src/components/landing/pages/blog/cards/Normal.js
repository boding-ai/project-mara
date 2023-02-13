import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Type from '../../common-comps/Type'
import Domain from '../../common-comps/Domain'

const Article = ({
    title,
    imageUrl,
    author,
    createdAt,
    description,
    link,
    type,
    domain
}) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Link to={link} target={'_blank'} rel="noreferrer nofollow">
            <div
                className="normal-card"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isHovering && <div className="ribbon">Check it out!</div>}
                {type !== 'announcement' && <Domain domain={domain} />}
                <div className="image">
                    <img src={imageUrl} alt="" />
                </div>
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
