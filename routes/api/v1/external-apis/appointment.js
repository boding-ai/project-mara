const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// @route    POST api/v1/bodinga/external-apis/appointments/request-appointment
// @desc   Request appointments for partner websites
// @access   Private
router.post(
    '/request-appointment',
    check(
        'apiKey',
        'Action blocked. Contact admin to restart access.'
    ).notEmpty(),
    check('fullName', 'Owner name is required').notEmpty(),
    check('mobileNo', 'Mobile number is required').notEmpty(),
    check('petName', 'Pet name is required').notEmpty(),
    check('petSpecies', 'Pet species is required').notEmpty(),
    check('petName', 'Pet name is required').notEmpty(),
    check('timeSlot', 'Time slot is required').notEmpty(),
    check('date', 'Date is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const client = await pool.connect()

        try {
            await client.query('BEGIN')
            const {
                apiKey,
                fullName,
                mobileNo,
                petName,
                petSpecies,
                problem,
                timeSlot,
                date,
                doctorID,
            } = req.body

            try {
                const checkApiKey = await client.query(
                    `SELECT * FROM private.users WHERE api_key = $1`,
                    [apiKey]
                )

                if (checkApiKey.rows.length < 1) {
                    return res.status(400).send({
                        errors: [
                            {
                                msg: 'Could not save appointment. Pl try again later!',
                            },
                        ],
                    })
                } else {
                    // SAVE APPOINTMENT
                    const saveAppointment = await client.query(
                        `INSERT INTO private.appointments (customer_name, pet_name, mobile_number, pet_species, problem, time_slot, date, doctor_id, user_id) VALUES (LOWER($1), LOWER($2), $3, $4, $5, $6, $7, $8, $9)`,
                        [
                            fullName,
                            petName,
                            mobileNo,
                            petSpecies,
                            problem,
                            timeSlot,
                            date,
                            doctorID,
                            checkApiKey.rows[0].user_id,
                        ]
                    )

                    // SET NOTIFICATION
                    const title = `${fullName} is requesting an appointment for their pet ${petName}, a ${petSpecies}, with you!`

                    const type = 'appointment'

                    const saveNotification = await client.query(
                        `INSERT INTO private.notifications (title, type, user_id) VALUES ($1, $2, $3) RETURNING id, title, type, status, created_at`,
                        [title, type, checkApiKey.rows[0].user_id]
                    )

                    // SAVE EVENT
                    const saveEvent = await client.query(
                        `INSERT INTO private.events (date)`
                    )

                    await client.query('COMMIT')

                    return res.status(200).send({
                        ...saveNotification.rows[0],
                        userID: checkApiKey.rows[0].user_id,
                    })
                }
            } catch (error) {
                await client.query('ROLLBACK')
                return res
                    .status(400)
                    .send({ errors: [{ msg: 'Cannot process request' }] })
            }
        } finally {
            client.release()
        }
    }
)

module.exports = router
