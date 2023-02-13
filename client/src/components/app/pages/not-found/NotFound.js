import React from 'react'
import { Link } from 'react-router-dom'
import useWindow from 'react-window-size-simple'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const NotFound = (props) => {
    const { width } = useWindow()
    return (
        <>
                <div className="not-found flex_middle">
                    <div style={{ marginRight: '30%', marginBottom: '10%' }} >
                        <div className="app" style={{ width: '100%' }} >
                            <div className="writing">
                                error 4<span className="middle">0</span>4
                            </div>
                            <div className="subwriting">The page you're looking for does not exist</div>
                            <Link to="/">
                                <div className="button flex_evenly">
                                    <div style={{ marginTop: '0.3em' }}>
                                        <ArrowBackIosIcon
                                            style={{ fontSize: 15 }}
                                        />
                                    </div>
                                    <div>Go Back</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default NotFound
