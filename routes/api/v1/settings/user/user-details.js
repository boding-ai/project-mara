const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth, isAdmin } = require('../../../../../lib/authMiddleware')
const { pool } = require('../../../../../config/db')

// @route    POST api/v1/settings/user-details/change/mobile-number
// @desc     Change mobile number
// @access   Private
router.post(
    '/change/mobile-number',
    isAuth,
    check('mobileNo', 'Mobile number is required').notEmpty(),
    check('mobileNo', 'Minimum length should be 7').isLength({ min: 7 }),
    async (req, res) => {
        const { mobileNo } = req.body
        const userID = req.user.user_id

        try {
            let changeMobileNo = await pool.query(
                `UPDATE private.users SET mobile_no = $1 WHERE user_id = $2`,
                [mobileNo, userID]
            )

            return res.status(200).send('Mobile number updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/user-details/change/address
// @desc     Change address
// @access   Private
router.post('/change/address', isAuth, async (req, res) => {
    const { address } = req.body
    const userID = req.user.user_id

    try {
        let changeAddress = await pool.query(
            `UPDATE private.users SET address = LOWER($1) WHERE user_id = $2`,
            [address, userID]
        )

        return res.status(200).send('Address updated!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// @route    POST api/v1/settings/user-details/change/date-of-birth
// @desc     Change date of birth
// @access   Private
router.post(
    '/change/date-of-birth',
    check('dateOfBirth', 'Date of birth is required').notEmpty(),
    isAuth,
    async (req, res) => {
        const { dateOfBirth } = req.body
        const userID = req.user.user_id

        try {
            let changeDateOfBirth = await pool.query(
                `UPDATE private.users SET date_of_birth = $1 WHERE user_id = $2`,
                [dateOfBirth, userID]
            )

            return res.status(200).send('Date of birth updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/user-details/change/state
// @desc     Change state
// @access   Private
router.post('/change/state', isAuth, async (req, res) => {
    const { state } = req.body
    const userID = req.user.user_id

    try {
        let changeState = await pool.query(
            `UPDATE private.users SET state = LOWER($1) WHERE user_id = $2`,
            [state, userID]
        )

        return res.status(200).send('State updated!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// @route    POST api/v1/settings/user-details/change/city
// @desc     Change city
// @access   Private
router.post('/change/city', isAuth, async (req, res) => {
    const { city } = req.body
    const userID = req.user.user_id

    try {
        let changeCity = await pool.query(
            `UPDATE private.users SET city = LOWER($1) WHERE user_id = $2`,
            [city, userID]
        )

        return res.status(200).send('City updated!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// @route    POST api/v1/settings/user-details/change/country
// @desc     Change country
// @access   Private
router.post(
    '/change/country',
    isAuth,
    check('country', 'Country is required').notEmpty(),
    async (req, res) => {
        const { country } = req.body
        const userID = req.user.user_id

        try {
            let changeCountry = await pool.query(
                `UPDATE private.users SET country = LOWER($1) WHERE user_id = $2`,
                [country, userID]
            )

            return res.status(200).send('Country updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/user-details/change/pin-code
// @desc     Change pin code
// @access   Private
router.post(
    '/change/pin-code',
    isAuth,
    check('pinCode', 'Pincode is required').notEmpty(),
    async (req, res) => {
        const { pinCode } = req.body
        const userID = req.user.user_id

        try {
            let changeCountry = await pool.query(
                `UPDATE private.users SET pin_code = $1 WHERE user_id = $2`,
                [pinCode, userID]
            )

            return res.status(200).send('Pincode updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/user-details/change/name
// @desc     Change name
// @access   Private
router.post(
    '/change/name',
    isAuth,
    check('name', 'Name is required').notEmpty(),
    async (req, res) => {
        const { name } = req.body
        const userID = req.user.user_id

        try {
            let changeName = await pool.query(
                `UPDATE private.users SET full_name = LOWER($1) WHERE user_id = $2`,
                [name, userID]
            )

            return res.status(200).send('Name updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/user-details/change/email
// @desc     Change email
// @access   Private
router.post(
    '/change/email',
    isAuth,
    check('email', 'Email is required').notEmpty(),
    async (req, res) => {
        const { email } = req.body

        const userID = req.user.user_id

        try {
            let checkEmailExists = await pool.query(
                `SELECT * FROM private.users WHERE email = $1`,
                [email]
            )

            if (checkEmailExists.rows.length > 0) {
                return res
                    .status(400)
                    .send({ errors: [{ msg: 'Email already exists.' }] })
            } else {
                let changeEmail = await pool.query(
                    `UPDATE private.users SET email = LOWER($1) WHERE user_id = $2`,
                    [email, userID]
                )

                return res.status(200).send('Email updated!')
            }
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

module.exports = router
