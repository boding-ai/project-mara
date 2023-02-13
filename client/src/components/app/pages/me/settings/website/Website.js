import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isValidDomain from 'is-valid-domain'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import Apikey from './Apikey'
import ConnectWebsite from './ConnectWebsite'

import {
    changeWebsiteDomainSettings,
    changeWebsiteVerificationSettings,
} from '../../../../../../redux/actions/settings/partner-website/partner-wesbite'
import { Button } from '@mui/material'

const Website = ({
    innerRef,
    // Redux Actions
    changeWebsiteDomainSettings,
    changeWebsiteVerificationSettings,
    // Redux States
    auth: {
        user: { domain, domainVerified },
        domainVerificationLoading,
    },
}) => {
    const [isValidated, setIsValidated] = useState(false)

    const [formData, setFormData] = useState({
        domainNew: domain,
    })

    const { domainNew } = formData

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.toLowerCase(),
        })
    }

    const [domainEdit, setDomainEdit] = useState(false)
    const [domainError, setDomainError] = useState(false)

    const saveDomain = () => {
        if (
            !isValidDomain(domainNew, {
                subdomain: true,
                wildcard: true,
                allowUnicode: true,
            })
        ) {
            setDomainError(true)
            setTimeout(() => setDomainError(false), 3000)
        } else {
            setDomainEdit(false)
            changeWebsiteDomainSettings(domain, domainNew)
        }
    }

    const verifyDomain = () => {
        changeWebsiteVerificationSettings(domain, domainVerified)
    }

    return (
        <div className="section" ref={innerRef}>
            <div className="title flex_middle">Website</div>
            {!isValidated && (
                <div className="permission app">
                    <div className="eye">
                        <FontAwesomeIcon icon={faEyeSlash} />
                    </div>
                    <div className="warning">Website details hidden.</div>
                    <div className="enable">
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => setIsValidated(true)}
                        >
                            View
                        </Button>
                    </div>
                </div>
            )}
            <div
                className={!isValidated ? 'hide_div' : ''}
                style={{ marginTop: '50px' }}
            >
                <div>
                    <Apikey
                        title={'Api Key'}
                        details={
                            'Connect your website with Bodinga with this key as the parameter.'
                        }
                        first={true}
                    />
                </div>
                <div>
                    <ConnectWebsite
                        domainVerified={domainVerified}
                        editOn={domainEdit}
                        save={saveDomain}
                        setElementEdit={setDomainEdit}
                        element={domain}
                        elementNew={domainNew}
                        onChange={onChange}
                        title={'Website Domain Name'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'domainNew'}
                        error={domainError}
                        details={'Your business website URL.'}
                        first={false}
                        errorMessage={'Invalid domain.'}
                        allSmall={false}
                        placeholder={'bodinga.com'}
                        verify={verifyDomain}
                        verifyLoading={domainVerificationLoading}
                    />
                </div>
            </div>
        </div>
    )
}

Website.propTypes = {
    auth: PropTypes.object.isRequired,
    changeWebsiteDomainSettings: PropTypes.func.isRequired,
    changeWebsiteVerificationSettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapStateToActions = {
    changeWebsiteDomainSettings,
    changeWebsiteVerificationSettings,
}

export default connect(mapStateToProps, mapStateToActions)(Website)
