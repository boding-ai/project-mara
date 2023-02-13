import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import validator from 'email-validator'

import {
    changeBusinessNameSettings,
    changeBusinessEmailSettings,
    changeBusinessShippingAddressSettings,
    changeBusinessBillingAddressSettings,
    changeBusinessContactNoSettings,
    changeBusinessProfilePic,
} from '../../../../../../redux/actions/settings/business/business'

import Element from '../profile/tools/Element'
import Photo from '../business/Photo'

const Profile = ({
    innerRef,
    // Redux Actions
    changeBusinessNameSettings,
    changeBusinessEmailSettings,
    changeBusinessShippingAddressSettings,
    changeBusinessBillingAddressSettings,
    changeBusinessContactNoSettings,
    changeBusinessProfilePic,
    // Redux States
    auth: {
        user: {
            businessEmailId,
            businessName,
            businessShippingAddress,
            businessBillingAddress,
            businessContactNo,
            businessProfilePic,
        },
    },
}) => {
    const [formData, setFormData] = useState({
        businessNameNew: businessName.replace(/(^\w|\s\w)/g, (m) =>
            m.toUpperCase()
        ),
        businessBillingAddressNew: businessBillingAddress.replace(
            /(^\w|\s\w)/g,
            (m) => m.toUpperCase()
        ),
        businessShippingAddressNew: businessShippingAddress.replace(
            /(^\w|\s\w)/g,
            (m) => m.toUpperCase()
        ),
        emailIdNew: businessEmailId,
        mobileNoNew: businessContactNo,
        photoNew: businessProfilePic,
    })

    const {
        businessNameNew,
        businessShippingAddressNew,
        businessBillingAddressNew,
        emailIdNew,
        mobileNoNew,
        photoNew,
    } = formData

    const [businessNameEdit, setBusinessNameEdit] = useState(false)
    const [businessNameError, setBusinessNameError] = useState(false)

    const [emailIdEdit, setEmailIdEdit] = useState(false)
    const [emailIdError, setEmailIdError] = useState(false)
    const [emailIdInvalidError, setEmailIdInvalidError] = useState(false)

    const [shippingAddressEdit, setShippingAddressEdit] = useState(false)
    const [shippingAddressError, setShippingAddressError] = useState(false)

    const [billingAddressEdit, setBillingAddressEdit] = useState(false)
    const [billingAddressError, setBillingAddressError] = useState(false)

    const [photoEdit, setPhotoEdit] = useState(false)
    const [photoError, setPhotoError] = useState(false)
    const [photoWrongTypeError, setPhotoWrongTypeError] = useState(false)
    const [photoTooBigError, setPhotoTooBigError] = useState(false)

    const [contactNoEdit, setContactNoEdit] = useState(false)
    const [contactNoError, setContactNoError] = useState(false)

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const saveBusinessName = () => {
        if (businessNameNew.length < 1) {
            setBusinessNameError(true)
            setTimeout(() => setBusinessNameError(false), 3000)
        } else {
            setBusinessNameEdit(false)
            changeBusinessNameSettings(businessName, businessNameNew)
        }
    }

    const saveEmailId = () => {
        if (!validator.validate(emailIdNew)) {
            setEmailIdInvalidError(true)
            setTimeout(() => setEmailIdInvalidError(false), 3000)
        } else if (emailIdNew.length < 1) {
            setEmailIdError(true)
            setTimeout(() => setEmailIdError(false), 3000)
        } else {
            setEmailIdEdit(false)
            changeBusinessEmailSettings(businessEmailId, emailIdNew)
        }
    }

    const saveShippingAddress = () => {
        setShippingAddressEdit(false)
        changeBusinessShippingAddressSettings(
            businessShippingAddress,
            businessShippingAddressNew
        )
    }

    const saveBillingAddress = () => {
        setBillingAddressEdit(false)
        changeBusinessBillingAddressSettings(
            businessBillingAddress,
            businessBillingAddressNew
        )
    }

    const saveContactNo = () => {
        setContactNoEdit(false)
        if (mobileNoNew.length < 1) {
            setContactNoError(true)
            setTimeout(() => setContactNoError(false), 3000)
        } else {
            setBusinessNameEdit(false)
            changeBusinessContactNoSettings(businessContactNo, mobileNoNew)
        }
    }

    const savePhoto = (element, photo) => {
        console.log(element, photo)
        setPhotoEdit(false)
        changeBusinessProfilePic(element, photo)
    }

    return (
        <div className="section" ref={innerRef}>
            <div className="title flex_middle">Business</div>
            <div style={{ marginTop: '50px' }}>
                <Element
                    editOn={businessNameEdit}
                    save={saveBusinessName}
                    setElementEdit={setBusinessNameEdit}
                    element={businessName}
                    elementNew={businessNameNew}
                    onChange={onChange}
                    title={'Business Name'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'businessNameNew'}
                    error={businessNameError}
                    details={'The name of your business.'}
                    first={false}
                    errorMessage={'Business name is required.'}
                    allSmall={false}
                    placeholder={'Business Name'}
                />
            </div>
            <div className="flex_between" style={{ marginTop: '-40px' }}>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={emailIdEdit}
                        save={saveEmailId}
                        setElementEdit={setEmailIdEdit}
                        element={businessEmailId}
                        elementNew={emailIdNew}
                        onChange={onChange}
                        title={'Email ID'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'emailIdNew'}
                        error={emailIdError || emailIdInvalidError}
                        details={'The official business email ID.'}
                        first={false}
                        errorMessage={
                            emailIdError
                                ? 'Email ID is required.'
                                : emailIdInvalidError
                                ? 'Invalid Email ID'
                                : ''
                        }
                        allSmall={true}
                        placeholder={'Email ID'}
                    />
                </div>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={contactNoEdit}
                        save={saveContactNo}
                        setElementEdit={setContactNoEdit}
                        element={businessContactNo}
                        elementNew={mobileNoNew}
                        onChange={onChange}
                        title={'Contact Number'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'mobileNoNew'}
                        error={contactNoError}
                        details={'The contact number of your business.'}
                        first={false}
                        errorMessage={'Contact number is required.'}
                        allSmall={true}
                        placeholder={'Contact Number'}
                    />
                </div>
            </div>
            <div style={{ marginTop: '-40px' }}>
                <Element
                    editOn={shippingAddressEdit}
                    save={saveShippingAddress}
                    setElementEdit={setShippingAddressEdit}
                    element={businessShippingAddress}
                    elementNew={businessShippingAddressNew}
                    onChange={onChange}
                    title={'Shipping Address'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'businessShippingAddressNew'}
                    error={shippingAddressError}
                    details={'Shipping address of your business.'}
                    first={false}
                    errorMessage={
                        'Shipping Address should be longer than 2 characters'
                    }
                    allSmall={false}
                    placeholder={'Shipping Address'}
                />
            </div>
            <div style={{ marginTop: '110px' }}>
                <Element
                    editOn={billingAddressEdit}
                    save={saveBillingAddress}
                    setElementEdit={setBillingAddressEdit}
                    element={businessBillingAddress}
                    elementNew={businessBillingAddressNew}
                    onChange={onChange}
                    title={'Billing Address'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'businessBillingAddressNew'}
                    error={billingAddressError}
                    details={'Billing address of your business.'}
                    first={false}
                    errorMessage={
                        'Billing Address should be longer than 2 characters'
                    }
                    allSmall={false}
                    placeholder={'Billing Address'}
                />
            </div>
            <div>
                <Photo
                    editOn={photoEdit}
                    save={savePhoto}
                    setElementEdit={setPhotoEdit}
                    element={businessProfilePic}
                    elementNew={photoNew}
                    onChange={onChange}
                    title={'Photo'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'photoNew'}
                    error={
                        photoError || photoTooBigError || photoWrongTypeError
                    }
                    details={'Profile photo of your business'}
                    first={false}
                    errorMessage={
                        photoError
                            ? 'Photo is empty'
                            : photoTooBigError
                            ? 'Photo size is too large.'
                            : photoWrongTypeError
                            ? 'Photo type is wrong.'
                            : ''
                    }
                    allSmall={false}
                    placeholder={'Photo'}
                />
            </div>
        </div>
    )
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    changeBusinessNameSettings: PropTypes.func.isRequired,
    changeBusinessEmailSettings: PropTypes.func.isRequired,
    changeBusinessShippingAddressSettings: PropTypes.func.isRequired,
    changeBusinessBillingAddressSettings: PropTypes.func.isRequired,
    changeBusinessContactNoSettings: PropTypes.func.isRequired,
    changeBusinessProfilePic: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
    changeBusinessNameSettings,
    changeBusinessEmailSettings,
    changeBusinessShippingAddressSettings,
    changeBusinessBillingAddressSettings,
    changeBusinessContactNoSettings,
    changeBusinessProfilePic,
}

export default connect(mapStateToProps, mapStateToActions)(Profile)
