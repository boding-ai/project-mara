const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth, isAdmin } = require('../../../../../lib/authMiddleware')
const { pool } = require('../../../../../config/db')

// @route    POST api/v1/settings/system-details/change/clients-list-type
// @desc     Change the client list type to be loaded
// @access   Private
router.post(
    '/change/clients-list-type',
    isAuth,
    async (req, res) => {
        const userID = req.user.user_id
        const { listType } = req.body

        try {
            let change = await pool.query(
                `UPDATE private.users SET clients_list_preference = $1 WHERE user_id = $2`,
                [listType, userID]
            )

            return res.status(200).send('Clients list preference changed!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/system-details/change/all-notifications
// @desc     Change all notifications settings
// @access   Private
router.post(
    '/change/all-notifications',
    isAuth,
    async (req, res) => {
        const { allNotifs } = req.body
        const userID = req.user.user_id

        try {
            let changeAllNotifications = await pool.query(
                `UPDATE private.users SET all_notifications = $1 WHERE user_id = $2`,
                [allNotifs, userID]
            )

            return res.status(200).send('All notifications settings updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/system-details/change/platform-notifications
// @desc     Change platform notifications settings
// @access   Private
router.post(
    '/change/platform-notifications',
    isAuth,
    async (req, res) => {
        const { sysNotifs } = req.body
        const userID = req.user.user_id

        try {
            let changeSystemNotifications = await pool.query(
                `UPDATE private.users SET system_notifications = $1 WHERE user_id = $2`,
                [sysNotifs, userID]
            )

            return res
                .status(200)
                .send('System notifications settings updated!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot process request' }] })
        }
    }
)

// @route    POST api/v1/settings/system-details/change/sidebar-lock
// @desc     Change sidebar lock settings
// @access   Private
router.post('/change/sidebar-lock', isAuth, async (req, res) => {
    const { lock } = req.body
    const userID = req.user.user_id

    try {
        let changeSidebarLock = await pool.query(
            `UPDATE private.users SET sidebar_lock = $1 WHERE user_id = $2`,
            [lock, userID]
        )

        return res.status(200).send('Sidebar lock updated!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

module.exports = router
