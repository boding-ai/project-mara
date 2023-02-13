import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkIcon from '@mui/icons-material/Link'

const BlogShare = ({
    title,
    shareLink,
    horizontal
}) => {

    const [copied, setCopied] = useState(false)

    const copySuccess = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }
    return (
        <div
            className={horizontal ? 'blog-share flex_middle' : 'blog-share app'}
        >
            <Link
                to={{
                    pathname: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        shareLink
                    )}`,
                }}
                target={'_blank'}
                rel="noreferrer nofollow"
            >
                <div
                    className={
                        horizontal
                            ? 'element element-horizontal'
                            : 'element'
                    }
                >
                    <LinkedInIcon style={{ fontSize: 20 }} />
                </div>
            </Link>
            <Link
                to={{
                    pathname: `http://twitter.com/share?text=${encodeURIComponent(
                        title
                    )}&url=${encodeURIComponent(
                        shareLink
                    )}&hashtags=bodinga,blog`,
                }}
                target={'_blank'}
                rel="noreferrer nofollow"
            >
                <div  className={
                        horizontal
                            ? 'element element-horizontal'
                            : 'element'
                    }>
                    <TwitterIcon style={{ fontSize: 20 }} />
                </div>
            </Link>
            <Link
                to={{
                    pathname: `https://api.whatsapp.com/send?text=${encodeURIComponent(
                        shareLink
                    )}`,
                }}
                target={'_blank'}
                rel="noreferrer nofollow"
            >
                <div  className={
                        horizontal
                            ? 'element element-horizontal'
                            : 'element'
                    }>
                    <WhatsAppIcon style={{ fontSize: 20 }} />
                </div>
            </Link>
            <CopyToClipboard text={`${shareLink}`} onCopy={copySuccess}>
                <div
                     className={
                        horizontal
                            ? 'element element-horizontal'
                            : 'element'
                    }
                    style={{ marginBottom: '0', position: 'relative' }}
                >
                    <LinkIcon
                        style={{ fontSize: 21, transform: 'rotate(25deg)' }}
                    />
                    {copied && <div className="copied">Copied!</div>}
                </div>
            </CopyToClipboard>
        </div>
    )
}

export default BlogShare