const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// @route    POST api/settings/upload/auth/image
// @desc     Get api key from partner website and redirect to appointment page 
// @access   Private
router.post('/set-appointment', async (req, res) => {

    const { apiKey, fullName, mobileNo, petName, petSpecies, problem } = req.body

    let ans = []

    try {
        let checkApiKey = await pool.query(
            `SELECT * FROM private.users WHERE api_key = $1`,
            [apiKey]
        )

        if(checkApiKey.rows.length < 1) {

            return res.status(400).send({ errors: [ {  msg: 'Could not save appointment. Pl try again later!' } ] })

        } else {
            // -------------------------- SAVE APPOINTMENT --------------------
            let saveAppointment = await pool.query(
                `INSERT INTO private.appointments (customer_name, pet_name, mobile_number, pet_species, problem, user_id) VALUES ($1, $2, $3, $4, $5, $6)`,
                [fullName, petName, mobileNo, petSpecies, problem, checkApiKey.rows[0].user_id]
            )
            
            // -------------------- SET NOTIFICATION -------------------------
            let title = `${fullName} is requesting an appointment for their pet ${petName}, a ${petSpecies}, with you!`

            let type = 'appointment'

            let saveNotification = await pool.query(
                `INSERT INTO private.notifications (title, type, user_id) VALUES ($1, $2, $3) RETURNING id, title, type, status, created_at`,
                [title, type, checkApiKey.rows[0].user_id]
            )
            
            return res.status(200).send({
                ...saveNotification.rows[0],
                userID: checkApiKey.rows[0].user_id,
            })

        }

    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})


// Set appointment API 
router.post('/set-appointment', async (req, res) => {

    const { apiKey, fullName, mobileNo, petName, petSpecies, problem } = req.body

    let ans = []

    try {
        let checkApiKey = await pool.query(
            `SELECT * FROM private.users WHERE api_key = $1`,
            [apiKey]
        )

        if(checkApiKey.rows.length < 1) {

            return res.status(400).send({ errors: [ {  msg: 'Could not save appointment. Pl try again later!' } ] })

        } else {
            // -------------------------- SAVE APPOINTMENT --------------------
            let saveAppointment = await pool.query(
                `INSERT INTO private.appointments (customer_name, pet_name, mobile_number, pet_species, problem, user_id) VALUES ($1, $2, $3, $4, $5, $6)`,
                [fullName, petName, mobileNo, petSpecies, problem, checkApiKey.rows[0].user_id]
            )
            
            // -------------------- SET NOTIFICATION -------------------------
            let title = `${fullName} is requesting an appointment for their pet ${petName}, a ${petSpecies}, with you!`

            let type = 'appointment'

            let saveNotification = await pool.query(
                `INSERT INTO private.notifications (title, type, user_id) VALUES ($1, $2, $3) RETURNING id, title, type, status, created_at`,
                [title, type, checkApiKey.rows[0].user_id]
            )
            
            return res.status(200).send({
                ...saveNotification.rows[0],
                userID: checkApiKey.rows[0].user_id,
            })

        }

    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Get Insta posts from db
router.get('/fetch-insta-posts-stories', async (req, res) => {

    let ans = []

    try {
        let mainPosts = await pool.query(
            `SELECT * FROM private.instagram_posts WHERE user_id = $1 ORDER BY timestamp DESC`,
            [userID]
        )

        for (let i = 0; i < mainPosts.rows.length; i++) {
            let subPosts = await pool.query(
                `SELECT media_url, media_type, post_id FROM private.instagram_posts_children WHERE post_id = $1`,
                [mainPosts.rows[i].post_id]
            )
            ans.push({
                elements: subPosts.rows,
                caption: mainPosts.rows[i].caption,
                timestamp: mainPosts.rows[i].timestamp,
                post_id: mainPosts.rows[i].post_id,
                show: mainPosts.rows[i].show,
                nsfw_warning: mainPosts.rows[i].nsfw_warning,
            })
        }

        return res.status(200).send(ans)
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

module.exports = router
