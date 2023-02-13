import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Author = ({ link, profilePic, saying, author, profilePicSize }) => {
    useEffect(() => {
        console.log(link.split('/'))
    }, [])

    return (
        <div className="flex_left author">
            <div
                className="image flex_middle"
                style={{
                    border: '1px solid #ebebeb',
                    borderRadius: '50%',
                    marginRight: '2em',
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#ebebeb',
                }}
            >
                <img
                    src={profilePic}
                    alt="Profile of said party"
                    style={{
                        width: `${profilePicSize || '45px'}`,
                        objectFit: 'contain',
                        margin: '0.5em 0 0 0.1em',
                    }}
                />
            </div>
            <div className="saying" style={{ color: 'rgb(90,90,90)' }}>
                <span>
                    {link.split('/')[0] === '' ? (
                        <Link to={link} className="link">
                            {author}
                        </Link>
                    ) : (
                        <Link
                            to={{
                                pathname: link,
                            }}
                            target={'_blank'}
                            rel="noreferrer nofollow"
                            className="link"
                        >
                            {author}
                        </Link>
                    )}
                </span>
                {saying}
            </div>
        </div>
    )
}

export default Author