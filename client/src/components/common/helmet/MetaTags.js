import React from 'react'
import Helmet from 'react-helmet'

const MetaTags = ({
    defaultTitle,
    title,
    link,
    description,
    themeColor,
    ogTitle,
    ogUrl,
    ogType,
    ogLocale,
    ogImage,
    ogImageType,
    msAppTileImage,
    twitterCard,
    twitterImageAlt,
    twitterTitle,
    twitterDescription,
    twitterImage,
    keywords
}) => {
    return (
        <Helmet
            defaultTitle={defaultTitle || 'Bodinga - Digital Medical Platform'}
        >
            <meta charSet="utf-8" />
            {title ? (
                title
            ) : (
                <title>Bodinga &middot; Digital Medical Platform</title>
            )}
            <link rel="canonical" href={link || 'https://bodinga.com/'} />
            <meta
                name="description"
                content={
                    description ||
                    'Bodinga is a best-in-class digital medical platform for doctors and vets which provides all functionalities from medical records, exams, prescriptions, reports to inventory, billing management and more.'
                }
            />
            <meta name='keywords' content={keywords || 'Bodinga, Medical, Software, Free, Best'} />
            <meta name="theme-color" content={themeColor || '#ff6666'} />
            <meta
                property="og:title"
                content={ogTitle || 'Bodinga - Digital Medical Platform'}
            />
            <meta property="og:url" content={ogUrl || 'https://bodinga.com/'} />
            <meta property="og:type" content={ogType || 'website'} />
            <meta property="og:locale" content={ogLocale || 'en_GB'} />
            <meta
                property="og:image"
                content={ogImage || 'https://i.postimg.cc/W4xJRDvz/slash.png'}
            />
            {/* <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" /> */}
            <meta
                property="og:image:type"
                content={ogImageType || 'image/png'}
            />
            <meta
                name="msapplication-TileImage"
                content={
                    msAppTileImage || 'https://i.postimg.cc/W4xJRDvz/slash.png'
                }
            />
            <meta name="twitter:card" content={twitterCard || 'summary'} />
            <meta
                name="twitter:image:alt"
                content={
                    twitterImageAlt || 'Bodinga - Digital Medical Platform'
                }
            />
            <meta
                name="twitter:title"
                content={twitterTitle || 'Bodinga - Digital Medical Platform'}
            />
            <meta name="twitter:site" content="@bodinga_co" />
            <meta
                name="twitter:description"
                content={
                    twitterDescription ||
                    'Bodinga is a best-in-class digital medical platform for doctors and vets which provides all functionalities from medical records, exams, prescriptions, reports to inventory, billing management and more'
                }
            />
            <meta
                name="twitter:image"
                content={
                    twitterImage || 'https://i.postimg.cc/W4xJRDvz/slash.pngg'
                }
            />
        </Helmet>
    )
}

export default MetaTags