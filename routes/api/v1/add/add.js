const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// Search all profiles
router.post('/search-profiles-list', isAuth, async (req, res, next) => {
    const { searchQuery } = req.body
    const userID = req.user.user_id

    try {
        let ans = await pool.query(
            `SELECT LOWER(owner_name) AS first, owner_id AS second, profile_type AS third, address AS fourth FROM private.owners 
            WHERE owner_name LIKE '%' || $1 || '%'  OR email_id LIKE '%' || $1 || '%' OR profile_type LIKE '%' || $1 || '%' 
            AND user_id = $2
            UNION
            SELECT LOWER(doctor_name) AS first, doctor_id AS second, profile_type AS third, specialization AS fourth FROM private.doctors 
            WHERE doctor_name LIKE '%' || $1 || '%'  OR profile_type LIKE '%' || $1 || '%' OR specialization LIKE '%' || $1 || '%' 
            AND user_id = $2
            UNION 
            SELECT LOWER(business_name) AS first, business_id AS second, profile_type AS third, business_billing_address AS fourth FROM private.businesses WHERE business_name LIKE '%' || $1 || '%'  OR email_id LIKE '%' || $1 || '%' OR profile_type LIKE '%' || $1 || '%' 
            AND user_id = $2
            UNION 
            SELECT LOWER(representative_name) AS first, representative_id AS second, profile_type AS third, business_name AS fourth FROM private.representatives 
            WHERE representative_name LIKE '%' || $1 || '%'  OR business_name LIKE '%' || $1 || '%' OR profile_type LIKE '%' || $1 || '%' 
            AND user_id = $2
            ORDER BY first ASC
            `,
            [searchQuery, userID]
        )

        return res.status(200).send(ans.rows)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
    }
})
router.post('/get-pets-from-owner', isAuth, async (req, res, next) => {
    const { ownerID } = req.body
    const userID = req.user.user_id
    try {
        let ans = await pool.query(
            `SELECT pet_name from private.pets WHERE owner_id = $1 AND user_id = $2`,[ownerID, userID]
        )
        return res.status(200).send(ans.rows)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'No Pets Found' }] })
    }

})

module.exports = router