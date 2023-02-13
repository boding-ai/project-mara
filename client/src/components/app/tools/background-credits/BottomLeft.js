import React from 'react'

const BottomLeft = ({
    creator,
    fontSize,
    color,
    borderColor,
    zIndex,
    bottom,
    dark
}) => {
    return (
        <div className="background-credits">
            <div className="bottom-left">
                <div
                    style={{
                        position: 'absolute',
                        bottom: `${bottom || '5%'}`,
                        right: '3%',
                        fontSize: `${fontSize || '1em'}`,
                        color: `${color || 'white'}`,
                        padding: '0.2em 0.4em',
                        borderRadius: '10px',
                        border: `1px solid ${borderColor || 'white'}`,
                        zIndex: `${zIndex || 1}`,
                    }}
                    className="app"
                >
                    <div>Background Artwork</div>
                    {dark ? <div className='dark' >{creator}</div> : <div>{creator}</div>}
                </div>
            </div>
        </div>
    )
}

export default BottomLeft