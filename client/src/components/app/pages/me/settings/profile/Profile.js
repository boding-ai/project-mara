import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import validator from 'email-validator'

import {
    changeNameSettings,
    changeEmailSettings,
    changeCitySettings,
    changeStateSettings,
    changeCountrySettings,
    changePincodeSettings,
    changeMobileNoSettings,
    changeDobSettings,
    changeAddressSettings,
} from '../../../../../../redux/actions/settings/user/user'

import Element from './tools/Element'
import DateSelect from './tools/DateSelect'
import moment from 'moment'

const Profile = ({
    innerRef,
    // Redux Actions
    changeNameSettings,
    changeEmailSettings,
    changeCitySettings,
    changeStateSettings,
    changeCountrySettings,
    changePincodeSettings,
    changeMobileNoSettings,
    changeDobSettings,
    changeAddressSettings,
    // Redux States
    auth: {
        user: {
            email,
            name,
            mobileNo,
            dateOfBirth,
            address,
            city,
            state,
            country,
            pinCode,
        },
    },
}) => {
    const [formData, setFormData] = useState({
        nameNew: name.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        emailNew: email,
        cityNew: city.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        stateNew: state.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        countryNew: country.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        pinCodeNew: pinCode.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        mobileNoNew: mobileNo.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
        addressNew: address.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
    })

    const [dateOfBirthNew, onChangeDate] = useState(
        moment(dateOfBirth, 'DD/MM/YYYY').toDate()
    )

    useEffect(() => {
        changeDobSettings(
            dateOfBirth,
            moment(dateOfBirthNew).format('DD/MM/YYYY')
        )
    }, [dateOfBirthNew])

    const {
        nameNew,
        emailNew,
        cityNew,
        stateNew,
        countryNew,
        pinCodeNew,
        mobileNoNew,
        addressNew,
    } = formData

    const [nameEdit, setNameEdit] = useState(false)
    const [nameError, setNameError] = useState(false)

    const [emailEdit, setEmailEdit] = useState(false)
    const [emailInvalidError, setEmailInvalidError] = useState(false)

    const [cityEdit, setCityEdit] = useState(false)
    const [cityError, setCityError] = useState(false)

    const [stateEdit, setStateEdit] = useState(false)
    const [stateError, setStateError] = useState(false)

    const [countryEdit, setCountryEdit] = useState(false)
    const [countryError, setCountryError] = useState(false)

    const [pinCodeEdit, setPincodeEdit] = useState(false)
    const [pinCodeError, setPincodeError] = useState(false)

    const [mobileNoEdit, setMobileNoEdit] = useState(false)
    const [mobileNoError, setMobileNoError] = useState(false)

    const [addressEdit, setAddressEdit] = useState(false)
    const [addressError, setAddressError] = useState(false)

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const saveMobileNo = () => {
        if (mobileNoNew.length < 1) {
            setMobileNoError(true)
            setTimeout(() => setMobileNoError(false), 3000)
        } else {
            setMobileNoEdit(false)
            changeMobileNoSettings(mobileNo, mobileNoNew)
        }
    }

    const saveName = () => {
        if (nameNew.length < 2) {
            setNameError(true)
            setTimeout(() => setNameError(false), 3000)
        } else {
            setNameEdit(false)
            changeNameSettings(name, nameNew)
        }
    }

    const saveCountry = () => {
        if (countryNew.length < 1) {
            setCountryError(true)
            setTimeout(() => setCountryError(false), 3000)
        } else {
            setCountryEdit(false)
            changeCountrySettings(country, countryNew)
        }
    }

    const savePincode = () => {
        if (pinCodeNew.length < 1) {
            setPincodeError(true)
            setTimeout(() => setPincodeError(false), 3000)
        } else {
            setPincodeEdit(false)
            changePincodeSettings(pinCode, pinCodeNew)
        }
    }

    const saveEmail = () => {
        if (!validator.validate(emailNew)) {
            setEmailInvalidError(true)
            setTimeout(() => setEmailInvalidError(false), 3000)
        } else {
            setEmailEdit(false)
            changeEmailSettings(email, emailNew)
        }
    }

    const saveCity = () => {
        setCityEdit(false)
        changeCitySettings(city, cityNew)
    }

    const saveState = () => {
        setStateEdit(false)
        changeStateSettings(state, stateNew)
    }

    const saveAddress = () => {
        setAddressEdit(false)
        changeAddressSettings(address, addressNew)
    }

    return (
        <div className="section" ref={innerRef}>
            <div className="title flex_middle">Profile</div>
            <div style={{ marginTop: '50px' }}>
                <Element
                    editOn={nameEdit}
                    save={saveName}
                    setElementEdit={setNameEdit}
                    element={name}
                    elementNew={nameNew}
                    onChange={onChange}
                    title={'Name'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'nameNew'}
                    error={nameError}
                    details={
                        'Your name is the personal name one associated with your account.'
                    }
                    first={true}
                    errorMessage={'Length of name should be greater than 2'}
                    allSmall={false}
                    placeholder={'Name'}
                />
            </div>
            <div>
                <Element
                    editOn={emailEdit}
                    save={saveEmail}
                    setElementEdit={setEmailEdit}
                    element={email}
                    elementNew={emailNew}
                    onChange={onChange}
                    title={'Email ID'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'emailNew'}
                    error={emailInvalidError}
                    details={
                        'Your email is the main email ID associated with your account.'
                    }
                    first={false}
                    errorMessage={'Email Id is invalid'}
                    allSmall={true}
                    placeholder={'Email ID'}
                />
            </div>
            <div className="flex_between" style={{ marginTop: '-40px' }}>
                <div style={{ width: '45%' }}>
                    <DateSelect
                        onChange={onChangeDate}
                        value={dateOfBirthNew}
                        title={'Date of Birth'}
                        details={'Your date of birth'}
                    />
                </div>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={mobileNoEdit}
                        save={saveMobileNo}
                        setElementEdit={setMobileNoEdit}
                        element={mobileNo}
                        elementNew={mobileNoNew}
                        onChange={onChange}
                        title={'Mobile Number'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'mobileNoNew'}
                        error={mobileNoError}
                        details={'Your personal mobile number.'}
                        first={false}
                        errorMessage={'Mobile number is required'}
                        allSmall={false}
                        placeholder={'Mobile Number'}
                    />
                </div>
            </div>
            <div style={{ marginTop: '-40px' }}>
                <Element
                    editOn={addressEdit}
                    save={saveAddress}
                    setElementEdit={setAddressEdit}
                    element={address}
                    elementNew={addressNew}
                    onChange={onChange}
                    title={'Address'}
                    setFormData={setFormData}
                    formData={formData}
                    textFieldName={'addressNew'}
                    error={addressError}
                    details={'Your personal address.'}
                    first={false}
                    errorMessage={
                        'Address should be more than 2 characters long.'
                    }
                    allSmall={false}
                    placeholder={'Address'}
                />
            </div>
            <div className="flex_between" style={{ marginTop: '-40px' }}>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={countryEdit}
                        save={saveCountry}
                        setElementEdit={setCountryEdit}
                        element={country}
                        elementNew={countryNew}
                        onChange={onChange}
                        title={'Country'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'countryNew'}
                        error={countryError}
                        details={
                            'Your country is the one you currently reside in.'
                        }
                        first={false}
                        errorMessage={'Country is required'}
                        allSmall={false}
                        placeholder={'Country'}
                    />
                </div>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={pinCodeEdit}
                        save={savePincode}
                        setElementEdit={setPincodeEdit}
                        element={pinCode}
                        elementNew={pinCodeNew}
                        onChange={onChange}
                        title={'Pin Code'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'pinCodeNew'}
                        error={pinCodeError}
                        details={'Pin code of your locality or area.'}
                        first={false}
                        errorMessage={'Pin code is required'}
                        allSmall={false}
                        placeholder={'Pin Code'}
                    />
                </div>
            </div>
            <div className="flex_between">
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={cityEdit}
                        save={saveCity}
                        setElementEdit={setCityEdit}
                        element={city}
                        elementNew={cityNew}
                        onChange={onChange}
                        title={'City'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'cityNew'}
                        error={cityError}
                        details={
                            'Your city is the one you currently reside in.'
                        }
                        first={false}
                        errorMessage={'Length of city should be greater than 2'}
                        allSmall={false}
                        placeholder={'City'}
                    />
                </div>
                <div style={{ width: '45%' }}>
                    <Element
                        editOn={stateEdit}
                        save={saveState}
                        setElementEdit={setStateEdit}
                        element={state}
                        elementNew={stateNew}
                        onChange={onChange}
                        title={'State'}
                        setFormData={setFormData}
                        formData={formData}
                        textFieldName={'stateNew'}
                        error={stateError}
                        details={
                            'The state or territory where your city is situated in.'
                        }
                        first={false}
                        errorMessage={'Length of city should be greater than 2'}
                        allSmall={false}
                        placeholder={'State'}
                    />
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    changeNameSettings: PropTypes.func.isRequired,
    changeEmailSettings: PropTypes.func.isRequired,
    changeCitySettings: PropTypes.func.isRequired,
    changeStateSettings: PropTypes.func.isRequired,
    changeCountrySettings: PropTypes.func.isRequired,
    changePincodeSettings: PropTypes.func.isRequired,
    changeMobileNoSettings: PropTypes.func.isRequired,
    changeDobSettings: PropTypes.func.isRequired,
    changeAddressSettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapStateToActions = {
    changeNameSettings,
    changeEmailSettings,
    changeCitySettings,
    changeStateSettings,
    changeCountrySettings,
    changePincodeSettings,
    changeMobileNoSettings,
    changeDobSettings,
    changeAddressSettings,
}

export default connect(mapStateToProps, mapStateToActions)(Profile)
