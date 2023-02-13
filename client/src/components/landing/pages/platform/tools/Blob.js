import React from 'react'

const Blob = ({
    width,
    height,
    svg,
    svgAlt,
    title,
    textMargin,
    blobMargin,
    dataAosMovement,
}) => {
    return (
        <div className="landing-blob-rotate" data-aos={`${dataAosMovement}`}>
            <div
                style={{
                    height: `${height || '200px'}`,
                    width: `${width || '300px'}`,
                    color: 'white',
                    fontSize: '2em',
                    fontWeight: 'bold',
                    background: `url(${svg}) no-repeat center center/cover`,
                    margin: `${blobMargin}`,
                    fontFamily: 'Courgette, cursive',
                }}
            >
                <div
                    className="flex_middle"
                    style={{
                        width: '100%',
                        height: '100%',
                        margin: `${textMargin}`,
                    }}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Blob