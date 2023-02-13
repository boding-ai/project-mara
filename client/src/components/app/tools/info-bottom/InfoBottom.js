import React from 'react'
import { Link } from 'react-router-dom'

function InfoBottom() {
    return (
        <>
            <div
                className="clients_sidebar_info"
                style={{ marginTop: '-0.4em' }}
            >
                <div className="sidebar_info_club flex_evenly">
                    <p>
                        <a
                            href="/about"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            About
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p>
                        <a
                            href="/legal/privacy"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Privacy
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p>
                        <a
                            href="/legal/terms"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Terms
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p>
                        <a
                            href="/legal/attribution"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Attribution
                        </a>
                    </p>
                </div>
                <div
                    className="sidebar_info_club flex_evenly"
                    style={{ margin: '0.4em 0' }}
                >
                    <p>
                        <a
                            href="/blog"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Blog
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p>
                        <a
                            href="/learn"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Learn
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p>
                        <a
                            href="/me/help"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Help
                        </a>
                    </p>
                    <div>&middot;</div>
                    <p className="info-bottom">&copy; 2023 Bodinga</p>
                </div>
                <div className="flex_evenly sidebar_info_club">
                    {/* TODO: Change url to https://vets.bodinga.com/docs/release-notes */}
                    <p>
                        <a
                            href={'/docs/release-notes'}
                            target={'_blank'}
                            rel="noreferrer nofollow noopener"
                        >
                            v1.0.1
                        </a>
                    </p>
                    <div>&middot;</div>
                    <div className="info-bottom">
                        Handcrafted with &#10084; in IN
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoBottom
 