const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// -----------EDIT PROFILES ----------------

// Get pet details
router.post('/get-pet-details-from-owner', isAuth, async (req, res, next) => {

    const { ownerID } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT * FROM private.pets WHERE user_id = $1 AND owner_id = $2`,
            [userID, ownerID]
        )

        return res.status(200).send(ans.rows)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Server Error' }] })
    }
})

router.post('/get-owner-name', isAuth, async (req, res, next) => {

    const { ownerID } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT owner_name FROM private.owners WHERE user_id = $1 AND owner_id = $2`,
            [userID, ownerID]
        )
        return res.status(200).send(ans.rows[0])
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Owner name cannot be gotten!' }] })
    }
})

// Pet
router.post('/search-pet-for-editing', isAuth, async (req, res, next) => {
    const { listID } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT * FROM private.pets WHERE pet_id = $1 AND user_id = $2`,
            [listID, userID]
        )
        return res.status(200).send(ans.rows[0])
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})


// Owner
router.post('/search-owner-for-editing', isAuth, async (req, res, next) => {
    const { listID } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT * FROM private.owners WHERE owner_id = $1 AND user_id = $2`,
            [listID, userID]
        )
        return res
            .status(200)
            .send(ans.rows[0])
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

// ----------- CLIENTS LIST --------------

// Delete Owner Profile
router.post('/remove-owner-profile', isAuth, async (req, res, next) => {
    const { listID } = req.body
    const userID = req.user.user_id

    console.log('listID: ', listID, req.body, req.body.listID, 'userID: ', userID)

    try {
        let ans = await pool.query(
            `DELETE FROM private.owners WHERE owner_id = $1 AND user_id = $2`,
            [listID, userID]
        )

        return res.status(200).send(ans.rows)

    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
    }
})

// Delete Pet profile
router.post('/remove-pet-profile', isAuth, async (req, res, next) => {
    const { listID } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `DELETE FROM private.pets WHERE pet_id = $1 AND user_id = $2`,
            [listID, userID]
        )

        return res.status(200).send(ans.rows)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
    }
})

// Search all clients
router.post('/search-clients-list', isAuth, async (req, res, next) => {

    const { searchQuery } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT owner_name AS first, email_id AS second, mobile_no AS third, owner_id AS fourth, profile_type AS fifth FROM private.owners 
            WHERE (owner_name LIKE '%' || $1 || '%'  OR email_id LIKE '%' || $1 || '%' OR profile_type LIKE '%' || $1 || '%') AND user_id = $2
            UNION
            SELECT pet_name AS first, owner_id::varchar AS second, pet_species AS third, pet_id AS fourth, profile_type AS fifth FROM private.pets 
            WHERE (pet_name LIKE '%' || $1 || '%'  OR pet_species LIKE '%' || $1 || '%' OR profile_type LIKE '%' || $1 || '%') AND user_id = $2
            ORDER BY first ASC
            `,
            [searchQuery, userID]
        )

        return res.status(200).send(ans.rows)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Not Found' }] })
    }
})

// Search all clients for records
router.post('/search-clients-list-for-record', isAuth, async (req, res, next) => {

    const { searchQuery } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT owner_name AS first, email_id AS second, mobile_no AS third, owner_id AS fourth, profile_type AS fifth, address AS sixth FROM private.owners 
            WHERE (owner_name LIKE '%' || $1 || '%'  OR email_id LIKE '%' || $1 || '%' OR mobile_no LIKE '%' || $1 || '%') AND user_id = $2
            `,
            [searchQuery, userID]
        )

        return res.status(200).send(ans.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ errors: [{ msg: 'Not Found' }] })
    }
})

// Get Entire CLients list
router.get('/clients-list-all', isAuth, async (req, res, next) => {
    const value = {}

    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT owner_name AS first, email_id AS second, mobile_no AS third, owner_id AS fourth, profile_type AS fifth FROM private.owners WHERE user_id = $1 
            UNION 
            SELECT pet_name AS first, owner_id::varchar AS second, pet_species AS third, pet_id AS fourth, profile_type AS fifth FROM private.pets WHERE user_id = $1
            ORDER BY first`,
            [userID]
        )
        return res.status(200).send(ans.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

// Clients List -> OWNERS ONLY
router.get('/clients-list-owners-only', isAuth, async (req, res, next) => {
    const value = {}

    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT LOWER(owner_name) AS first, email_id AS second, mobile_no AS third, owner_id AS fourth, profile_type AS fifth FROM private.owners WHERE user_id = $1 
            ORDER BY first`,
            [userID]
        )
        return res.status(200).send(ans.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

// Clients List -> OWNERS ONLY
router.get('/clients-list-pets-only', isAuth, async (req, res, next) => {
    const value = {}

    const userID = req.user.user_id

    console.log('HIT')

    try {
        let ans = await pool.query(
            `SELECT pet_name AS first, owner_id::varchar AS second, pet_species AS third, pet_id AS fourth, profile_type AS fifth FROM private.pets WHERE user_id = $1 
            ORDER BY first`,
            [userID]
        )
        return res.status(200).send(ans.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
    }
})


module.exports = router
