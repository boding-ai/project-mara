const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// @route    POST api/v1/business/store/add-new-store
// @desc     Add new store
// @access   Private
router.post(
    '/add-new-store',
    isAuth,
    check('storeName', 'Store name is required').notEmpty(),
    check('storeContactNumber', 'Store contact number is required').notEmpty(),
    check('mainLocation', 'Main location is required').notEmpty(),
    check('poc', 'Point of Contact is required').notEmpty(),
    check('address', 'Address is required').notEmpty(),
    check('storeType', 'Store Type is required').notEmpty(),
    check('storeTimingStart', 'Store opening time is required.').notEmpty(),
    check('storeTimingEnd', 'Store closing time is required.').notEmpty(),
    check('storeOperationDays', 'Store operating days are required.').notEmpty(),
    async (req, res) => {
        const userID = req.user.user_id

        const {
            storeName,
            storeType,
            storeContactNumber,
            address,
            mainLocation,
            poc,
            storeTimingStart,
            storeTimingEnd,
            storeOperationDays,
            appointmentStartTimings,
            appointmentEndTimings,
            appointmentTimeSpan,
            appointmentTimeDuration,
        } = req.body

        try {
            let result = await pool.query(
                `INSERT INTO private.store (user_id, store_name, poc, main_location, address, store_contact_number, store_type, store_timings_start, store_timings_end, store_operation_days, appointment_timings_start, appointment_timings_end, appointment_time_span, appointment_duration) VALUES ($1, LOWER($2), LOWER($3), LOWER($4), LOWER($5), $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
                [
                    userID,
                    storeName,
                    poc,
                    mainLocation,
                    address,
                    storeContactNumber,
                    storeType,
                    storeTimingStart,
                    storeTimingEnd,
                    storeOperationDays,
                    appointmentStartTimings,
                    appointmentEndTimings,
                    appointmentTimeSpan,
                    appointmentTimeDuration,
                ]
            )

            return res.status(200).send('New store added successfully!')
        } catch (error) {
            console.log(error)
            return res.status(400).send({ errors: [{ msg: 'Server Error' }] })
        }
    }
)

// @route    GET api/v1/business/store/get-store-details
// @desc     Get store details
// @access   Private
router.get('/get-store-details', isAuth, async (req, res) => {
    const userID = req.user.user_id

    console.log(userID)

    try {
        let result = await pool.query(
            `SELECT * FROM private.store WHERE user_id = $1`,
            [userID]
        )

        console.log(result.rows)

        return res.status(200).send(result.rows)
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router
