import React, { useEffect, useState } from 'react'
import { IKContext, IKUpload } from 'imagekitio-react'

import emptyProfile from '../../../../../../resources/images/default-images/profilePicture.png'

import { ERROR_400, SNACKBAR_RESET } from '../../../../../../redux/actions/types'
import store from '../../../../../../store'

const Element = ({
    editOn,
    save,
    setElementEdit,
    element,
    setFormData,
    formData,
    title,
    textFieldName,
    error,
    details,
    first,
    errorMessage,
}) => {
    const URL_ENDPOINT = 'https://ik.imagekit.io/g34ck260w/business-profile-pic'
    const PUBLIC_KEY = 'public_ZKeQvS5HBPvaZZL4nRDK7VM8LBs='
    const AUTHENTICATION_ENDPOINT =
        'http://localhost:3000/api/settings/upload-imagekit/image/auth'

    const [photo, setPhoto] = useState('')
    const [pictureLoading, setPictureLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setPictureLoading(false)
        save(element, photo)
    }

    const onSuccess = (res) => {
        setPictureLoading(false)
        setPhoto(res.url)
    }

    const onError = (res) => {
        setPictureLoading(false)
        const value ={
            message: 'Oops! Cannot upload image :('
        }
         store.dispatch({
             type: ERROR_400,
             payload: value,
         })

         setTimeout(
             () =>
                 store.dispatch({
                     type: SNACKBAR_RESET,
                 }),
             3000
         )
    }

    const setPicLoad = (val) => {
        setPictureLoading(val)
    }

    return (
        <div style={first ? { marginBottom: '80px' } : { margin: '80px 0' }}>
            <div className="name">
                <div
                    className="flex_between"
                    style={{ padding: '0 2em 0 0', marginBottom: '1em' }}
                >
                    <div className="title-type flex_left">{title}</div>
                    {editOn ? (
                        <>
                            <div
                                className="flex_evenly special-buttons"
                                style={{ marginBottom: '5px' }}
                            >
                                <div style={{ marginRight: '1.3em' }}>
                                    <button
                                        className="button-yes flex_middle"
                                        onClick={handleSubmit}
                                        style={{
                                            padding: '0.3em 0.6em',
                                            borderRadius: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        <div className="flex_middle">
                                            <div>Save</div>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="button-no"
                                        onClick={() => {
                                            setElementEdit(false)
                                            setFormData({
                                                ...formData,
                                                [textFieldName]: element,
                                            })
                                            setPictureLoading(false)
                                        }}
                                        style={{
                                            padding: '0.3em 0.6em',
                                            borderRadius: '10px',
                                            fontSize: '0.9em',
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div
                            className="flex_right edit"
                            onClick={() => setElementEdit(true)}
                        >
                            Edit
                        </div>
                    )}
                </div>
                <div className="photo">
                    {error ? (
                        <div
                            className="content flex_left"
                            style={{ color: 'red' }}
                        >
                            {errorMessage}
                        </div>
                    ) : (
                        <div className="content flex_left">{details}</div>
                    )}
                    <div className="image flex_left">
                        <div className={editOn ? 'edit-on' : ''}>
                            <img
                                src={
                                    editOn
                                        ? (photo
                                            ? photo
                                            : '')
                                        : (element
                                        ? element
                                        : emptyProfile)
                                }
                                alt=""
                            />
                        </div>
                        {editOn && (
                            <div className="upload flex_middle">
                                <div className="flex_middle cursor_pointer">
                                    <IKContext
                                        publicKey={PUBLIC_KEY}
                                        urlEndpoint={URL_ENDPOINT}
                                        authenticationEndpoint={
                                            AUTHENTICATION_ENDPOINT
                                        }
                                    >
                                        <IKUpload
                                            style={{
                                                color: 'transparent',
                                                cursor: 'pointer',
                                            }}
                                            fileName="abc.jpg"
                                            tags={['businessProfilePic']}
                                            useUniqueFileName={true}
                                            isPrivateFile={false}
                                            onSuccess={onSuccess}
                                            onError={onError}
                                            onClick={() => setPicLoad(true)}
                                        />
                                    </IKContext>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Element
