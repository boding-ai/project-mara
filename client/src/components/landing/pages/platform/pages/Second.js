import React from 'react'

import Blob from '../tools/Blob'

import FeatureRight from '../tools/FeatureRight'
import FeatureLeft from '../tools/FeatureLeft'

// Mockups 
import laptop from '../../../../../resources/images/landing/platform/pages/second/pro_one.png'// Mockups 
import blobPic from '../../../../../resources/images/landing/platform/waves/blob.svg'

const Second = () => {
    return (
        <div
            style={{
                margin: '0em 0 5em 0',
                padding: '0 0 5em 0',
            }}
        >
            <div className="flex_middle">
                <Blob
                    svg={blobPic}
                    svgAlt={'Blob Picture'}
                    title={'Features'}
                    textMargin={'-0.35em 0 0 -0.3em'}
                    blobMargin={'2em 0'}
                    dataAosMovement={'fade-left'}
                />
            </div>
            <div className="flex_middle">
                <FeatureRight
                    backgroundColor={'rgb(248,221,130)'}
                    backgroundGradient={
                        'linear-gradient(90deg, rgba(248,221,130,1) 0%, rgba(255,67,54,1) 53%)'
                    }
                    featureTextColor={'rgb(255,255,255)'}
                    description={
                        'Check and create cases on the go. Digital prescriptions, medical examinations, files and finances!'
                    }
                    title={'Digital Cases'}
                    image={laptop}
                    imageAlt={
                        'Computer Mac book with bodinga.com/records page shown as the screen saver.'
                    }
                    margin={'0 0 12em 0'}
                />
            </div>
            <div className="flex_middle">
                <FeatureLeft
                    backgroundColor={'rgb(248,221,130)'}
                    backgroundGradient={
                        'linear-gradient(90deg, rgba(248,221,130,1) 0%, rgba(255,67,54,1) 53%)'
                    }
                    featureTextColor={'rgb(255,255,255)'}
                    description={
                        'All of your clients and their pets in one place.'
                    }
                    title={'Clients Central'}
                    image={laptop}
                    imageAlt={
                        'Computer Mac book with bodinga.com/clients page shown as the screen saver.'
                    }
                    margin={'0 0 12em 0'}
                />
            </div>
            <div className="flex_middle">
                <FeatureRight
                    backgroundColor={'rgb(194,248,130)'}
                    backgroundGradient={
                        'linear-gradient(270deg, rgba(194,248,130,0.9697012594100141) 0%, rgba(54,234,255,0.8436508392419468) 79%)'
                    }
                    featureTextColor={'rgb(72,72,72)'}
                    description={
                        'Check and create cases on the go. Digital prescriptions, medical examinations, files and finances!'
                    }
                    title={'Digital Cases'}
                    image={laptop}
                    imageAlt={
                        'Computer Mac book with bodinga.com/records page shown as the screen saver.'
                    }
                    margin={'0 0 12em 0'}
                />
            </div>
            <div className="flex_middle">
                <FeatureLeft
                    backgroundColor={'rgb(130,156,248)'}
                    backgroundGradient={
                        'linear-gradient(270deg, rgba(130,156,248,0.9697012594100141) 43%, rgba(255,54,142,0.8436508392419468) 75%)'
                    }
                    featureTextColor={'rgb(255,255,255)'}
                    description={
                        'Check and create cases on the go. Digital prescriptions, medical examinations, files and finances!'
                    }
                    title={'Digital Cases'}
                    image={laptop}
                    imageAlt={
                        'Computer Mac book with bodinga.com/records page shown as the screen saver.'
                    }
                    margin={'0 0 12em 0'}
                />
            </div>
        </div>
    )
}

export default Second
