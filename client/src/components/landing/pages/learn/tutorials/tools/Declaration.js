import React from 'react'

import BlogShare from '../../../../../common/share/BlogShare'

// Images
import blobOne from '../../../../../../resources/images/landing/blog/waves/blob-individual.png'

const Declaration = ({ title, author, date, shareLink }) => {
    return (
        <div className="declaration">
            <div className="flex_middle">
                <div className="title">{title}</div>
            </div>
            <div className="flex_middle">
                <div className="meta flex_middle">
                    By {author} &middot; {date}
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div
                    style={{ position: 'absolute', top: '-25px', left: '10%' }}
                >
                    <img
                        src={blobOne}
                        alt="Blob Svg"
                        style={{
                            height: '150px',
                            width: '150px',
                            objectFit: 'contain',
                            transform: 'rotate(60deg)',
                            zIndex: '0',
                        }}
                    />
                </div>
                <div
                    className="flex_middle"
                    style={{ position: 'absolute', zIndex: '1' }}
                >
                    <div>
                        <BlogShare shareLink={shareLink} title={title} />
                    </div>
                    <div className="card-declaration">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Laudantium iste dolore autem, iusto maiores aut,
                        culpa eius provident ipsam, sit est consequatur
                        asperiores iure blanditiis enim ducimus tempore esse
                        repellendus!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Declaration