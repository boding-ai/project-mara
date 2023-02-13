const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// Set notification state to false
router.post('/set-notifications-to-false', isAuth, async (req, res) => {
    const userID = req.user.user_id

    const { id } = req.body

    try {
        let changeStatus = await pool.query(
            `UPDATE private.notifications SET status = $1 WHERE id = $2 AND user_id = $3`,
            [false, id, userID]
        )

        return res.status(200).send('Status changed!')

    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Get notifications
router.get('/get-notifications', isAuth, async (req, res) => {
    
    const userID  = req.user.user_id

    try {
        let getNotifications = await pool.query(
            `SELECT id, title, type, link, status, description, created_at FROM private.notifications WHERE user_id = $1 ORDER BY created_at DESC`,
            [userID]
        )

        if(getNotifications.rows.length !== 0) {
            let newCount = await pool.query(
                `SELECT status, COUNT(*) FROM private.notifications WHERE user_id = $1 AND status = $2 GROUP BY status`,
                [userID, true]
            )

            if(newCount.rows.length !== 0) {
                return res.status(200).send({
                    count: newCount.rows[0].count,
                    array: getNotifications.rows,
                })
            } else {
                return res.status(200).send({
                    count: 0,
                    array: getNotifications.rows,
                })
            }

        } else {
            return res.status(200).send({
                count: 0,
                array: getNotifications.rows,
            })
        }

    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

module.exports = router
