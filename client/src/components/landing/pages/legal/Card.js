import React from 'react'

const Card = ({ title, imgSrc, imgAlt, creator }) => {
    return (
        
        <div className="card-attr">
            <div className="title flex_middle">
                {title}
            </div>
            <div className="image flex_middle">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="creator flex_middle">
                {creator}
            </div>
        </div>
    )
}

export default Card
