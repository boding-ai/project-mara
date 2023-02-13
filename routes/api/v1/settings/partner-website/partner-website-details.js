const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth, isAdmin } = require('../../../../../lib/authMiddleware')
const { pool } = require('../../../../../config/db')


// @route    POST api/v1/settings/partner-website-details/change/domain-verification-status
// @desc     Change the status of domain verification
// @access   Private
router.post(
    '/change/domain-verification-status',
    isAuth,
    async (req, res) => {
        const userID = req.user.user_id
        const { domainVerified } = req.body

        try {
            let change = await pool.query(
                `UPDATE private.users SET domain_url_verified = $1 WHERE user_id = $2`,
                [domainVerified, userID]
            )

            return res.status(200).send('Domain verification status changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/partner-website-details/change/domain-url
// @desc     Change the domain url of partner website
// @access   Private
router.post('/change/domain-url', isAuth, async (req, res) => {
    const userID = req.user.user_id
    const { domain } = req.body

    try {
        let change = await pool.query(
            `UPDATE private.users SET domain_url = $1 WHERE user_id = $2`,
            [domain, userID]
        )

         let changeVerificationStatus = await pool.query(
             `UPDATE private.users SET domain_url_verified = $1 WHERE user_id = $2`,
             [false, userID]
         )

        return res.status(200).send('Domain url changed!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})


// @route    POST api/v1/settings/partner-website-details/generate/api-key
// @desc     Generate api key for partner website
// @access   Private
router.post('/generate/api-key', isAuth, async (req, res) => {
    const userID  = req.user.user_id 

    const {value} = req.body
    
    try {

        let saveKey = await pool.query(
            `UPDATE private.users SET api_key = $1 WHERE user_id = $2`, [value, userID]
        )

        return res.status(200).send('API Key generated!')
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Bad request' }] })
    }
})

// @route    POST api/v1/settings/partner-website-details/delete/api-key
// @desc     Delete the api key for partner websites
// @access   Private
router.post('/delete/api-key', isAuth, async (req, res) => {
    const userID  = req.user.user_id 
    
    try {

        let saveKey = await pool.query(
            `UPDATE private.users SET api_key = $1 WHERE user_id = $2`, [null, userID]
        )

        return res.status(200).send('API Key deleted!')
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Bad request' }] })
    }
})



module.exports = router
