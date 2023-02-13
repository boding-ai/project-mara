const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth, isAdmin } = require('../../../../../lib/authMiddleware')
const { pool } = require('../../../../../config/db')

// @route    POST api/settings/business-details/change/profile-picture
// @desc     Change business profile picture
// @access   Private
router.post('/change/profile-picture', isAuth, async (req, res) => {
    console.log('HIT')
    const userID = req.user.user_id
    const { imageUrl } = req.body

    try {
         let change = await pool.query(
             `UPDATE private.users SET business_profile_pic = $1 WHERE user_id = $2`,
             [imageUrl, userID]
         )

         console.log(change)

        return res.status(200).send('Profile pic changed!')
    } catch (error) {
            console.log(error)

        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot upload image' }] })
    }
})


// @route    POST api/v1/settings/business-details/change/contact-number'
// @desc     Change business contact number
// @access   Private
router.post(
    '/change/contact-number',
    isAuth,
    async (req, res) => {
        const { businessContactNo } = req.body
        const userID = req.user.user_id

        try {
            let change = await pool.query(
                `UPDATE private.users SET business_contact_number = $1 WHERE user_id = $2`,
                [businessContactNo, userID]
            )

            return res.status(200).send('Business contact number changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/business-details/change/billing-address
// @desc     Change business billing address
// @access   Private
router.post(
    '/change/billing-address',
    isAuth,
    async (req, res) => {
        const { businessBillingAddress } = req.body
        const userID = req.user.user_id

        try {
            let change = await pool.query(
                `UPDATE private.users SET business_billing_address = $1 WHERE user_id = $2`,
                [businessBillingAddress, userID]
            )

            return res.status(200).send('Business billing address changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/business-details/change/shipping-address
// @desc     Change business shipping address
// @access   Private
router.post(
    '/change/shipping-address',
    isAuth,
    async (req, res) => {
        const { businessShippingAddress } = req.body
        const userID = req.user.user_id

        try {
            let change = await pool.query(
                `UPDATE private.users SET business_shipping_address = $1 WHERE user_id = $2`,
                [businessShippingAddress, userID]
            )

            return res.status(200).send('Business shipping address changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/business-details/change/email
// @desc     Change business email ID
// @access   Private
router.post(
    '/change/email',
    isAuth,
    async (req, res) => {
        const { emailId } = req.body
        const userID = req.user.user_id

        try {
            let change = await pool.query(
                `UPDATE private.users SET business_email_id = $1 WHERE user_id = $2`,
                [emailId, userID]
            )

            return res.status(200).send('Business email ID changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/business-details/change/name
// @desc     Change business name
// @access   Private
router.post('/change/name', isAuth, async (req, res) => {
    const { businessName } = req.body
    const userID = req.user.user_id
 
    try {

            let change = await pool.query(
                `UPDATE private.users SET business_name = $1 WHERE user_id = $2`,
                [businessName, userID]
            )

            return res.status(200).send('Business name changed!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})


module.exports = router
