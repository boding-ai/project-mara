import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({
    imageUrl,
    title,
    description,
    buttonText,
    blog,
    link,
    bigPadding,
}) => {
    return (
        <div
            className={
                bigPadding
                    ? 'footer-banner footer-banner-big-padding flex_middle'
                    : 'footer-banner flex_middle'
            }
        >
            <div
                className="get-card app"
                style={{
                    background: `url(${imageUrl}) no-repeat center center/cover`,
                }}
            >
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <Link to={`${link}`}>
                    {!blog && <div className="button">{buttonText}</div>}
                    {blog && <div className="blog-button">{buttonText}</div>}
                </Link>
            </div>
        </div>
    )
}

export default Banner