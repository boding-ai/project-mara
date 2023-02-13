const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const ImageKit = require('imagekit')

const { isAuth, isAdmin } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

require('dotenv').config()

// @route    GET api/v1/upload/auth/image
// @desc     Authentication for uploading images to imagekit.io
// @access   Private
router.get('/upload-imagekit/image/auth', isAuth, async (req, res) => {
    const imagekit = new ImageKit({
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT_BUSINESS_PROFILE_PIC,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    })

    try {
        const result = imagekit.getAuthenticationParameters()

        return res.status(200).send(result)
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot upload image' }] })
    }
})

module.exports = router
