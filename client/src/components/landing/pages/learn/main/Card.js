import React, { useState } from 'react'
import Tags from './Tags'
import { Link } from 'react-router-dom'

const Card = ({ title, imageUrl, author, createdAt, description, link, tags }) => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <Link to={link}>
            <div
                className="tutorial-card"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {isHovering && <div className="ribbon">Check it out!</div>}
                <div className="image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="title flex_middle">{title}</div>
                <div className="description">{description}</div>
                <div className="flex_middle">
                    <div className="metadata" style={{ width: '95%' }}>
                        <div className="flex_left">
                            {tags.length > 0 &&
                                tags.map((element, index) => (
                                    <Tags tag={element} key={index} />
                                ))}
                        </div>
                        <div className="author flex_left">By {author}</div>
                        <div className="time flex_right">{createdAt}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Card.propTypes = {}

export default Card